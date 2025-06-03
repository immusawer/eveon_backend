import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMessageDto {
  @ApiProperty({
    example: 'Hello, how are you?',
    description: 'The content of the message',
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  content: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email address of the recipient',
  })
  @IsEmail()
  @IsNotEmpty()
  recipientEmail: string;
}