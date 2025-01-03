import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './interface/User';

describe('UsersService', () => {
  let service: UsersService;
  let mockRepository: Partial<UsersRepository>;


  beforeEach(async () => {

    mockRepository = {
      findUserById: jest.fn((id) => `Mocked User with ID ${id}`),
      createUser: jest.fn((name) => `Mocked creation of user ${name}`),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: 'UsersRepository', useValue: mockRepository }
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return user by ID', () => {
    const userId = 1;
    const result = service.getUserById(userId);
    expect(result).toBe('User with ID 1');
  });

  it('should create a new mocked user', () => {
    const userName = 'Alice';
    expect(service.addUser(userName)).toBe('Mocked creation of user Alice');
  });
});
