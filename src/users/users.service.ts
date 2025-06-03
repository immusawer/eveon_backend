import { Injectable, NotFoundException } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  private users = [
    { id: 1, email: 'user1@example.com', name: 'User One' },
    { id: 2, email: 'user2@example.com', name: 'User Two' },
  ];

  private nextId = 3;

  async findOne(email: string) {
    return this.users.find(user => user.email === email);
  }

  async create(email: string) {
    const newUser = {
      id: this.nextId++,
      email,
      name: `User ${this.nextId - 1}`,
    };
    this.users.push(newUser);
    return newUser;
  }

  async getProfile(email: string) {
    const user = await this.findOne(email);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { id: user.id, email: user.email, name: user.name };
  }

  async findOneById(userId: number): Promise<User | undefined> {
    return this.users.find(user => user.id === userId);
  }
}
