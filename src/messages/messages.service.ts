import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

export interface Message {
  id: number;
  sender: string;
  recipient: string;
  content: string;
  timestamp: Date;
}

@Injectable()
export class MessagesService {
  private messages: Message[] = [];

  constructor(private usersService: UsersService) {}

  async sendMessage(senderEmail: string, createMessageDto: { recipientEmail: string; content: string }): Promise<Message> {
    // Validate recipient exists
    const recipient = await this.usersService.findOne(createMessageDto.recipientEmail);
    if (!recipient) {
      throw new NotFoundException('Recipient not found');
    }

    // Prevent sending message to self
    if (senderEmail === createMessageDto.recipientEmail) {
      throw new BadRequestException('Cannot send message to yourself');
    }

    const message: Message = {
      id: Date.now(),
      sender: senderEmail,
      recipient: createMessageDto.recipientEmail,
      content: createMessageDto.content,
      timestamp: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  getMessages(userEmail: string): Message[] {
    return this.messages.filter(
      message =>
        message.sender === userEmail || message.recipient === userEmail,
    );
  }
}