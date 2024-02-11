import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  @MinLength(3)
  customerId!: string;

  @IsNotEmpty()
  @MinLength(3)
  customerName!: string;

  @IsNotEmpty()
  @MinLength(3)
  email!: string;

  @IsNotEmpty()
  @MinLength(3)
  address!: string;

  @IsNotEmpty()
  @MinLength(3)
  phoneNumber!: string;

  @IsNotEmpty()
  @MinLength(3)
  age!: string;

  @IsNotEmpty()
  @MinLength(3)
  gender!: string;
}
