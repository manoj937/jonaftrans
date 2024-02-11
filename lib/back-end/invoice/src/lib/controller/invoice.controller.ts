import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InvoiceService } from '../service/invoice.service';
import { Invoice } from '../interface/invoice.interface';

@Controller('invoice')
export class InvoiceController {
  constructor(public invoiceService: InvoiceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  invoice(@Body() invoice: Invoice) {
    return this.invoiceService.createInvoice(invoice, `apps/api/src/assets/invoices/${invoice.invoice_nr}.pdf`);
  }
}
