import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './interfaces/IUser';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('UserRepositorySequelize') private readonly userRepositorySequelize: typeof User,
    @Inject('SequelizeInstance') private readonly sequelizeInstance,
  ) {}

  public async findAll(): Promise<[User[], Error]> {
    try {
      const result = await this.userRepositorySequelize.findAll<User>()
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }

  public async findOne(options): Promise<[User, Error]> {
    try {
      const result = await this.userRepositorySequelize.findOne<User>(options)
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }

  public async findById(id): Promise<[User, Error]> {
    try {
      const result = await this.userRepositorySequelize.findOne<User>({
        where: { id }
      })
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }

  public async create(user: User): Promise<[User, Error]> {
    try {
      const result = await this.sequelizeInstance.transaction(
        async (transaction) => {
          return await this.userRepositorySequelize.create<User>(user, {
            transaction
          })
        }
      )
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }

  public async update(id: number, newValue: IUser): Promise<[User, Error]> {
    try {
      const result = await this.sequelizeInstance.transaction(
        async transaction => {
          return await this.userRepositorySequelize.update(newValue, {
            where: { id },
            returning: true,
            transaction
          })
        }
      )
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }

  public async delete(id: number): Promise<[User, Error]> {
    try {
      const result = await this.sequelizeInstance.transaction(
        async transaction => {
          return await this.userRepositorySequelize.destroy({
            where: { id },
            transaction
          })
        }
      )
      return [result, null]
    } catch (error) {
      return [null, error];
    }
  }
}