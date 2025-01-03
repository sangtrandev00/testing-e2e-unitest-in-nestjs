import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './interface/User';

@Injectable()
export class UsersService {
    constructor(@Inject('UsersRepository') private readonly usersRepository: UsersRepository) { }


    getUserById(id: number): string {
        return `User with ID ${id}`;
    }

    addUser(name: string): string {
        return this.usersRepository.createUser(name);
    }

}
