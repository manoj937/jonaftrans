import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsNotEmpty()
  @MinLength(3)
  carId!: string;

  @IsNotEmpty()
  @MinLength(3)
  branchId!: string;

  @IsNotEmpty()
  @MinLength(3)
  carName!: string;

  @IsNotEmpty()
  @MinLength(3)
  carNumber!: string;

  @IsNotEmpty()
  model!: string;

  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  status!: boolean;

  @IsNotEmpty()
  rent!: string;
}
