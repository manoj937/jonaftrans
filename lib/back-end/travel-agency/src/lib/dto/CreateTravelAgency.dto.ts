import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTravelAgencyDto {
  @IsNotEmpty()
  @MinLength(3)
  agencyId!: string;

  @IsNotEmpty()
  @MinLength(3)
  agencyName!: string;

  @IsNotEmpty()
  @MinLength(3)
  email!: string;

  @IsNotEmpty()
  @MinLength(3)
  userName!: string;

  @IsNotEmpty()
  @MinLength(3)
  password!: string;

  @IsNotEmpty()
  @MinLength(3)
  phoneNumber!: string;
}
