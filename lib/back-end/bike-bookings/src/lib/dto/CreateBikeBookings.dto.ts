import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBikeBookingsDto {
  @IsNotEmpty()
  @MinLength(3)
  bookingId!: string;

  @IsNotEmpty()
  @MinLength(3)
  bikeId!: string;

  @IsNotEmpty()
  @MinLength(3)
  branchId!: string;

  @IsNotEmpty()
  @MinLength(3)
  customerId!: string;

  @IsNotEmpty()
  @MinLength(3)
  status!: boolean;

  @IsNotEmpty()
  fromDate!: string;

  @IsNotEmpty()
  toDate!: string;

}
