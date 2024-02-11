import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './service/invoice.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        auth: {
          user: 'manoj.selvamr@gmail.com',
          pass: 'ilgl txnd jeuw imrv',
        }
      }
    }),
  ],
  controllers: [InvoiceController],
  providers: [InvoiceService],
  exports: [InvoiceService],
})
export class InvoiceModule {}

