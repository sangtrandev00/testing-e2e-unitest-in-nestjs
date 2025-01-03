import { Injectable } from '@nestjs/common';
import { UsersRepository } from './interface/User';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
    private users = new Map<number, string>([
        [1, 'John Doe'],
        [2, 'Jane Smith'],
    ]);

    findUserById(id: number): string {
        return this.users.get(id) || 'User not found';
    }

    createUser(name: string): string {
        const newId = this.users.size + 1;
        this.users.set(newId, name);
        console.log("trigger", newId);
        return `User ${name} created with ID ${newId}`;
    }
}
