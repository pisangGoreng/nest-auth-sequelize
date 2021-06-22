import { Injectable } from '@nestjs/common';

import { IUser } from './interfaces/IUser';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  public async findAll(): Promise<[ IUser[], Error ]> {
    const [result, error] = await this.userRepository.findAll()
    if (error) {
      return [null, error]
    }

    return [result, null]
  }

  public async findOne(options?: any) : Promise<[User, Error]> {
    return await this.userRepository.findOne(options)
  }

  public async findById(id?: number) : Promise<[User, Error]> {
    const [result, error] = await this.userRepository.findById(id)
    if (error) {
      return [null, error]
    }

    return [result, null]
  }

  public async create(user): Promise<[User, Error]> {
    const [result, error] = await this.userRepository.create(user)
    if (error) {
      return [null, error]
    }

    return [result, null]
  }

  public async update(id: number, newValue: IUser): Promise<[User, Error]> {
    const [result, error] = await this.userRepository.update(id, newValue)
    if (error) {
      return [null, error]
    }

    return [result, null]
  }

  public async delete(id: number) {
    const [result, error] = await this.userRepository.delete(id)
    if (error) {
      return [null, error]
    }

    return [result, null]
  }
}