import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Diary } from './schemas/diary.schema';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Injectable()
export class DiariesService
{
    constructor(@InjectModel('Diary') private readonly diaryModel: Model<Diary>) { }

    async create(createDiaryDto: CreateDiaryDto): Promise<Diary>
    {
        const createdDiary = new this.diaryModel(createDiaryDto);
        return createdDiary.save();
    }

    async findAll(): Promise<Diary[]>
    {
        return this.diaryModel.find().exec();
    }

    async findOne(id: string): Promise<Diary>
    {
        return this.diaryModel.findById(id).exec();
    }

    async update(id: string, updateDiaryDto: UpdateDiaryDto): Promise<Diary>
    {
        return this.diaryModel.findByIdAndUpdate(id, updateDiaryDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Diary>
    {
        return this.diaryModel.findByIdAndDelete(id).exec();
    }

}