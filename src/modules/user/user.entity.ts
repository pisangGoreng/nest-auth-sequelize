import {
  AutoIncrement,
  BeforeCreate,
  BeforeValidate,
  Column,
  CreatedAt,
  DataType,
  DefaultScope,
  DeletedAt,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript';


// ! entity untuk ke database -> karena ada time_stamp nya
@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  public id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public password: string;

  @Column({ type: DataType.DATEONLY })
  public birthday: Date;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}