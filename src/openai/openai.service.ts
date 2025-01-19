import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OpenAIService
{
    private readonly baseUrl: string;
    private readonly apiKey: string;

    constructor(private readonly httpService: HttpService)
    {
        this.baseUrl = process.env.OPENAI_API_BASE_URL!;
        this.apiKey = process.env.OPENAI_API_KEY!;
    }

    private get headers()
    {
        return {
            Authorization: `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
        };
    }

    async chatCompletions(prompt: string): Promise<string>
    {
        const url = `${this.baseUrl}/chat/completions`;
        const body = {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 200,
        };

        try
        {
            const response = await lastValueFrom(
                this.httpService.post(url, body, { headers: this.headers }),
            );
            return response.data.choices[0]?.message?.content || '';
        } catch (error)
        {
            const err = error as any;
            console.error('Error in chatCompletions:', err.response?.data || err.message);
            throw err;
        }
    }

    async generateImage(prompt: string): Promise<any>
    {
        const url = `${this.baseUrl}/images/generations`;
        const body = {
            prompt,
            n: 1,
            size: '1024x1024',
        };

        try
        {
            const response = await lastValueFrom(
                this.httpService.post(url, body, { headers: this.headers }),
            );
            return response.data;
        } catch (error)
        {
            const err = error as any;
            console.error('Error in generateImage:', err.response?.data || err.message);
            throw error;
        }
    }

    async textToSpeech(text: string): Promise<any>
    {
        console.warn('The official OpenAI API does not yet support text-to-speech.');
        throw new Error('Text-to-Speech is not available via OpenAI API.');
    }

}