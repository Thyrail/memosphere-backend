import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiariesController } from './diaries.controller';
import { DiariesService } from './diaries.service';
import { DiarySchema } from './schemas/diary.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Diary', schema: DiarySchema }])],
    controllers: [DiariesController],
    providers: [DiariesService],
})

export class DiariesModule { }