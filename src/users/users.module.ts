import { Module, } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersRepositoryImpl } from './users.repository';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'UsersRepository',
      useClass: UsersRepositoryImpl
    },
  ],
  exports: [UsersService]
})
export class UsersModule { }
