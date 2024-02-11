/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@nestjs/common';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import { Invoice } from '../interface/invoice.interface';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class InvoiceService {
  constructor(private mailerService: MailerService) {}

  createInvoice(invoice: Invoice, path: string) {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    this.generateHeader(doc);
    this.generateCustomerInformation(doc, invoice);
    this.generateInvoiceTable(doc, invoice);
    this.generateFooter(doc);

    doc.end();
    doc.pipe(fs.createWriteStream(path)); //Needs to upload somewhere else
    this.mailerService.sendMail({
      to: 'manojkeerthi93@gmail.com',
      from: 'manoj.selvamr@gmail.com',
      subject: 'Testing Nest MailerModule ✔',
      text: 'welcome',
      html: `<!DOCTYPE html>
        <title>Text Example</title>
        <style>
        div.container {
        background-color: #ffffff;
        }
        div.container p {
        font-family: Arial;
        font-size: 14px;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        text-transform: none;
        color: #000000;
        background-color: #ffffff;
        }
        </style>
  
        <div class="container">
        <p>Hello,</p>
        <p></p>
        <p>I hope everything is good from your side. As per our session no. <b>${invoice.invoice_nr}</b> , please find below the invoice.</p>
        <p>Details: more Details </p>
        <p>Can you please proceed with the payment ?</p>
        <p>Thanks.</p>
        <p><b>Note -> This is an automatic email.</b>
        <p></p>
        <p>Njiva Olaf Ranaivoson</p>
        <p>Online Coach</p>
        </div>`,
      attachments: [
        {
          filename: `${invoice.invoice_nr}.pdf`,
          path,
        },
      ],
    });

    return {
      message: 'Invoice successfully created',
    };
  }

  generateHeader(doc: PDFKit.PDFDocument): void {
    doc
      .image('apps/api/src/assets/logo.png', 50, 45, { width: 50 })
      .fillColor('#444444')
      .fontSize(20)
      .text('ACME Inc.', 110, 57)
      .fontSize(10)
      .text('ACME Inc.', 200, 50, { align: 'right' })
      .text('123 Main Street', 200, 65, { align: 'right' })
      .text('New York, NY, 10025', 200, 80, { align: 'right' })
      .moveDown();
  }

  generateCustomerInformation(doc: PDFKit.PDFDocument, invoice: Invoice): void {
    doc.fillColor('#444444').fontSize(20).text('Invoice', 50, 160);

    this.generateHr(doc, 185);

    const customerInformationTop = 200;

    doc
      .fontSize(10)
      .text('Invoice Number:', 50, customerInformationTop)
      .font('Helvetica-Bold')
      .text(invoice.invoice_nr, 150, customerInformationTop)
      .font('Helvetica')
      .text('Invoice Date:', 50, customerInformationTop + 15)
      .text(this.formatDate(new Date()), 150, customerInformationTop + 15)
      .text('Balance Due:', 50, customerInformationTop + 30)
      .text(
        this.formatCurrency(invoice.subtotal - invoice.paid),
        150,
        customerInformationTop + 30
      )

      .font('Helvetica-Bold')
      .text(invoice.shipping.name, 300, customerInformationTop)
      .font('Helvetica')
      .text(invoice.shipping.address, 300, customerInformationTop + 15)
      .text(
        invoice.shipping.city +
          ', ' +
          invoice.shipping.state +
          ', ' +
          invoice.shipping.country,
        300,
        customerInformationTop + 30
      )
      .moveDown();

    this.generateHr(doc, 252);
  }

  generateInvoiceTable(doc: PDFKit.PDFDocument, invoice: Invoice): void {
    let i;
    const invoiceTableTop = 330;

    doc.font('Helvetica-Bold');
    this.generateTableRow(
      doc,
      invoiceTableTop,
      'Item',
      'Description',
      'Unit Cost',
      'Quantity',
      'Line Total'
    );
    this.generateHr(doc, invoiceTableTop + 20);
    doc.font('Helvetica');

    for (i = 0; i < invoice.items.length; i++) {
      const item = invoice.items[i];
      const position = invoiceTableTop + (i + 1) * 30;
      this.generateTableRow(
        doc,
        position,
        item.item,
        item.description,
        this.formatCurrency(item.amount / item.quantity),
        item.quantity,
        this.formatCurrency(item.amount)
      );

      this.generateHr(doc, position + 20);
    }

    const subtotalPosition = invoiceTableTop + (i + 1) * 30;
    this.generateTableRow(
      doc,
      subtotalPosition,
      '',
      '',
      'Subtotal',
      '',
      this.formatCurrency(invoice.subtotal)
    );

    const paidToDatePosition = subtotalPosition + 20;
    this.generateTableRow(
      doc,
      paidToDatePosition,
      '',
      '',
      'Paid To Date',
      '',
      this.formatCurrency(invoice.paid)
    );

    const duePosition = paidToDatePosition + 25;
    doc.font('Helvetica-Bold');
    this.generateTableRow(
      doc,
      duePosition,
      '',
      '',
      'Balance Due',
      '',
      this.formatCurrency(invoice.subtotal - invoice.paid)
    );
    doc.font('Helvetica');
  }

  generateFooter(doc: PDFKit.PDFDocument): void {
    doc
      .fontSize(10)
      .text(
        'Payment is due within 15 days. Thank you for your business.',
        50,
        780,
        { align: 'center', width: 500 }
      );
  }

  generateTableRow(
    doc: PDFKit.PDFDocument,
    y: number,
    item: string,
    description: string,
    unitCost: string,
    quantity: string,
    lineTotal: string
  ): void {
    doc
      .fontSize(10)
      .text(item, 50, y)
      .text(description, 150, y)
      .text(unitCost, 280, y, { width: 90, align: 'right' })
      .text(quantity.toString(), 370, y, { width: 90, align: 'right' })
      .text(lineTotal, 0, y, { align: 'right' });
  }

  generateHr(doc: PDFKit.PDFDocument, y: number): void {
    doc
      .strokeColor('#aaaaaa')
      .lineWidth(1)
      .moveTo(50, y)
      .lineTo(550, y)
      .stroke();
  }

  formatCurrency(cents: number): string {
    return '$' + (cents / 100).toFixed(2);
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return year + '/' + month + '/' + day;
  }
}
