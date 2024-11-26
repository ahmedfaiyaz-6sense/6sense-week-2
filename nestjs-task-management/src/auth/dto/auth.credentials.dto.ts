import {
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from 'class-validator';
export class AuthCredentialsDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  username: string;

  //@IsStrongPassword()
  @MinLength(8)
  @IsStrongPassword()
  password: string;
}
