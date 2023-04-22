import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Role } from '@prisma/client';

export class Signup {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  firstname?: string;

  lastname?: string;

  role: Role;
}
