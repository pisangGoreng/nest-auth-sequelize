import { Inject, Injectable } from '@nestjs/common';

import { IUser } from './interfaces/IUser';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('UserRepository') private readonly userRepository: typeof User,
    @Inject('SequelizeInstance') private readonly sequelizeInstance,
  ) {}

  public async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>()
  }

  // public async findOne(options?: object) {
  //   return await this.userRepository.findOne<User>(options)
  // }

  public async findById(id?: number): Promise<User | null>  {
    return await this.userRepository.findOne<User>({
      where: { id }
    })
  }

  public async create(user): Promise<User | null> {
    return await this.sequelizeInstance.transaction(
      async (transaction) => {
        return await this.userRepository.create<User>(user, {
          transaction
        })
      }
    )
  }

  public async update(id: number, newValue: IUser) {
    return await this.sequelizeInstance.transaction(
      async transaction => {
        return await this.userRepository.update(newValue, {
          where: { id },
          returning: true,
          transaction})
      }
    )
  }

  public async delete(id: number) {
    return await this.sequelizeInstance.transaction(
      async transaction => {
        return await this.userRepository.destroy({
          where: { id },
          transaction
        })
      }
    )
  }
}