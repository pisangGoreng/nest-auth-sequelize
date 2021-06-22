import { Inject, Injectable } from '@nestjs/common';
import { IUser } from './interfaces/IUser';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    // @Inject('UserRepository') private readonly UserRepository: typeof User,
    // @Inject('SequelizeInstance') private readonly sequelizeInstance,
  ) {}

  public async findAll() {

  }

  public async findOne(options?: object) {
    // return await this.UserRepository.findOne<User>(options)
  }

  public async findById(id?: number) {
    // return await this.UserRepository.findById<User>(id)
  }

  public async create(user: IUser) {
    // make this operation to transaction. Avoid reading data before everything is finished
    // return await this.sequelizeInstance.transaction(
    //   async transaction => {
    //     return await this.UserRepository.create<User>(user, {
    //       returning: true,
    //       transaction
    //     })
    //   }
    // )
  }

  public async update(id: number, newValue: IUser) {
    // return await this.sequelizeInstance.transaction(
    //   async transaction => {
    //     let user = await this.UserRepository.findById<User>(id, { transaction })
    //     if (!user) throw new Error('This user was not found')

    //     user = {...user, ...newValue}
    //     return await user.save({
    //       returning: true,
    //       transaction
    //     })
    //   }
    // )
  }

  public async delete(id: number) {
  //   return await this.sequelizeInstance.transaction(
  //     async transaction => {
  //       return await this.UserRepository.destroy({
  //         where: { id },
  //         transaction
  //       })
  //     }
  //   )
  }
}