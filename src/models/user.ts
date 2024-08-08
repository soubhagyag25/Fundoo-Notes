/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';
import { Model } from 'sequelize';
import { IUser } from '../interfaces/user.interface';

export default (sequelize, DataTypes) => {
  class User extends Model<IUser> implements IUser {
    public firstName;
    public lastName;
    public email;
    public password;
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password:DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Fundoo Users'
    }
  );
  return User;
};
