import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';

@ApiTags('OpenAI')
@Controller('openai')
export class OpenAIController
{
    constructor(private readonly openAIService: OpenAIService) { }

    @Post('chat')
    @ApiOperation({ summary: 'Generate chat completions' })
    @ApiBody({ schema: { example: { prompt: 'Hello, how are you?' } } })
    async chatCompletions(@Body('prompt') prompt: string)
    {
        return this.openAIService.chatCompletions(prompt);
    }

    @Post('image')
    @ApiOperation({ summary: 'Generate an image from a prompt' })
    @ApiBody({ schema: { example: { prompt: 'A beautiful landscape.' } } })
    async generateImage(@Body('prompt') prompt: string)
    {
        return this.openAIService.generateImage(prompt);
    }

}