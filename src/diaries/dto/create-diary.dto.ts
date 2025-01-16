import { ApiProperty } from '@nestjs/swagger';

export class CreateDiaryDto
{
    @ApiProperty({ description: 'Title of the diary' })
    title: string;

    @ApiProperty({ description: 'Description of the diary', required: false })
    description?: string;

    @ApiProperty({ description: 'Content of the diary' })
    content: string;

    @ApiProperty({ description: 'Image URL', required: false })
    imageUrl?: string;

}