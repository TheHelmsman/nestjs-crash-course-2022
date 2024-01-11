import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Anson', email: 'anson@gmail.com' },
    { username: 'Cory', email: 'cory@gmail.com' },
    { username: 'Bond', email: 'bond@gmail.com' },
  ];

  fetchUsers() {
    console.log('fetchUsers', this.fakeUsers);
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    console.log('createUser', this.fakeUsers);
    return this.fakeUsers.length;
  }

  fetchUserById(id: number) {
    return { id: id, username: 'Anson', email: 'anson@gmail.com' };
  }
}
