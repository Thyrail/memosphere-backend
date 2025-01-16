import { Controller, Post, Body } from '@nestjs/common';
import { OpenAIProxyService } from './openai-proxy.service';
import { ApiTags, ApiBody, ApiOperation } from '@nestjs/swagger';

@ApiTags('OpenAI Proxy')
@Controller('openai-proxy')
export class OpenAIProxyController
{
    constructor(private readonly openAIProxyService: OpenAIProxyService) { }

    @Post('chat')
    @ApiOperation({ summary: 'Generate chat completions' })
    @ApiBody({ schema: { example: { input: 'Hello, how are you?' } } })
    async chatCompletions(@Body('input') input: string)
    {
        return this.openAIProxyService.chatCompletions(input);
    }

    @Post('speech')
    @ApiOperation({ summary: 'Convert text to speech' })
    @ApiBody({ schema: { example: { text: 'Hello, this is a test.' } } })
    async textToSpeech(@Body('text') text: string)
    {
        return this.openAIProxyService.textToSpeech(text);
    }

    @Post('image')
    @ApiOperation({ summary: 'Generate an image from a prompt' })
    @ApiBody({ schema: { example: { prompt: 'A beautiful landscape with mountains and a sunset.' } } })
    async generateImage(@Body('prompt') prompt: string)
    {
        return this.openAIProxyService.generateImage(prompt);
    }

}