import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBikeDto {
  @IsNotEmpty()
  @MinLength(3)
  bikeId!: string;

  @IsNotEmpty()
  @MinLength(3)
  branchId!: string;

  @IsNotEmpty()
  @MinLength(3)
  bikeName!: string;

  @IsNotEmpty()
  @MinLength(3)
  bikeNumber!: string;

  @IsNotEmpty()
  model!: string;

  @IsNotEmpty()
  image!: string;

  @IsNotEmpty()
  status!: boolean;

  @IsNotEmpty()
  rent!: string;
}
