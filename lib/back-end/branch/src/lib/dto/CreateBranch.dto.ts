import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBranchDto {
  @IsNotEmpty()
  @MinLength(3)
  branchId!: string;

  @IsNotEmpty()
  @MinLength(3)
  agencyId!: string;

  @IsNotEmpty()
  @MinLength(3)
  phoneNumber!: string;

  @IsNotEmpty()
  @MinLength(3)
  address!: string;
}
