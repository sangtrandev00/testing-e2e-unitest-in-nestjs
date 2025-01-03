export interface UsersRepository {
    findUserById(id: number): string;
    createUser(name: string): string;
}

export const USERS_REPOSITORY_TOKEN = Symbol('UsersRepository');
