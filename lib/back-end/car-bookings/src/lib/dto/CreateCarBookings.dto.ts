import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCarBookingsDto {

  @IsNotEmpty()
  @MinLength(3)
  bookingId!: string;

  @IsNotEmpty()
  @MinLength(3)
  carId!: string;

  @IsNotEmpty()
  @MinLength(3)
  branchId!: string;

  @IsNotEmpty()
  @MinLength(3)
  customerId!: string;

  @IsNotEmpty()
  status!: boolean;

  @IsNotEmpty()
  fromDate!: string;

  @IsNotEmpty()
  toDate!: string;
}
