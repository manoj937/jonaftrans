/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerDetails } from '../typeorm/CustomerDetails';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from '../interface/customer.interface';
import { CreateCustomerDto } from '../dto/CreateCustomer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerDetails)
    private readonly customerRepository: Repository<CustomerDetails>
  ) {}

  async addCustomer(customerInfo: Customer) {
    const customers = await this.getCustomeres();
    let newcustomer = false;
    const createcustomerDto: CreateCustomerDto = customerInfo;

    for (const customer of customers) {
      if (customer.customerId === customerInfo.customerId) {
        return {
          status: 'Error',
          message: 'customer already exist',
        };
      } else {
        newcustomer = true;
      }
    }
    if (newcustomer || !customers.length) {
      const addcustomer = this.customerRepository.create(createcustomerDto);
      return this.customerRepository.save(addcustomer);
    } else {
      return 0;
    }
  }

  getCustomeres() {
    return this.customerRepository.find().then((customers) => customers);
  }

  async deleteCustomer(id: string) {
    const result = this.customerRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the customer.');
    }
  }

}
