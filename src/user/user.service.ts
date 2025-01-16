import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService
{
    constructor(@InjectModel(User.name) private readonly userModel: Model<User>) { }

    async findByUsername(username: string): Promise<User | null>
    {
        return this.userModel.findOne({ username }).exec();
    }

    async create(user: Partial<User>): Promise<User>
    {
        const newUser = new this.userModel(user);
        return newUser.save();
    }

    async updatePassword(username: string, hashedPassword: string): Promise<User | null>
    {
        return this.userModel.findOneAndUpdate(
            { username },
            { $set: { password: hashedPassword } },
            { new: true } //* Return the updated user
        ).exec();
    }

}