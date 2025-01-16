import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';

@Controller('diaries')
export class DiariesController
{
    constructor(private readonly diariesService: DiariesService) { }

    @Post()
    create(@Body() createDiaryDto: CreateDiaryDto)
    {
        return this.diariesService.create(createDiaryDto);
    }

    @Get()
    findAll()
    {
        return this.diariesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string)
    {
        return this.diariesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateDiaryDto: UpdateDiaryDto)
    {
        return this.diariesService.update(id, updateDiaryDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string)
    {
        return this.diariesService.remove(id);
    }

}