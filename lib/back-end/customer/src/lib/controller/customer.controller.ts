/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  /**
   * Business Rules
   * Add a customer
   */
  @Post()
  @UsePipes(ValidationPipe)
  addBike(@Body() customer: Customer) {
    return this.customerService.addCustomer(customer);
  }

  /**
   * Business Rules
   * Fetch all customeres
   */
  @Get()
  async getCustomerList() {
    const customer = await this.customerService.getCustomeres();
    return customer;
  }

  /**
   * Business Rules
   * Delete a customer using ID
   */
  @Delete('delete/:id')
  async removeBike(@Param('id') customer: any) {
    await this.customerService.deleteCustomer(customer);
    return { customerId: customer };
  }

}
