// import { Injectable } from '@nestjs/common';
// import { HttpService } from '@nestjs/axios';
// import { lastValueFrom } from 'rxjs';

// @Injectable()
// export class OpenAIProxyService
// {
//     private readonly baseUrl: string;
//     private readonly apiKey: string;

//     constructor(private readonly httpService: HttpService)
//     {
//         this.baseUrl = process.env.OPENAI_PROXY_BASE_URL!;
//         this.apiKey = process.env.OPENAI_PROXY_API_KEY!;
//     }

//     private get headers()
//     {
//         return {
//             Authorization: `Bearer ${this.apiKey}`,
//             'Content-Type': 'application/json',
//         };
//     }

    // async chatCompletions(input: string)
    // {
    //     const url = `${this.baseUrl}/chat/completions`;
    //     const body = {
    //         prompt: input,
    //         mode: 'development',
    //     };
    //     const response = await lastValueFrom(
    //         this.httpService.post(url, body, { headers: this.headers }),
    //     );
    //     return response.data;
    // }

    // async chatCompletions(input: string)
    // {
    //     const url = `${this.baseUrl}/chat/completions`;
    //     const body = {
    //         model: 'gpt-4',
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: input,
    //             },
    //         ],
    //         max_tokens: 150,
    //         mode: 'development',
    //     };
    //     const response = await lastValueFrom(
    //         this.httpService.post(url, body, { headers: this.headers }),
    //     );
    //     return response.data;
    // }

    // async chatCompletions(input: string)
    // {
    //     const url = `${this.baseUrl}/chat/completions`;
    //     const body = {
    //         model: 'gpt-4',
    //         messages: [
    //             {
    //                 role: 'user',
    //                 content: input,
    //             },
    //         ],
    //         max_tokens: 200,
    //     };

    //     const headers = {
    //         ...this.headers,
    //         mode: 'development', // production || 'development'
    //         provider: 'openai',
    //     };

    //     try
    //     {
    //         const response = await lastValueFrom(
    //             this.httpService.post(url, body, { headers }),
    //         );
    //         return response.data;
    //     } catch (error)
    //     {
    //         const err = error as any;
    //         console.error('Error in chatCompletions:', err.response?.data || err.message);
    //         throw err;
    //     }
    // }


    // async textToSpeech(text: string)
    // {
    //     const url = `${this.baseUrl}/audio/speech`;
    //     const body = { text };
    //     const response = await lastValueFrom(
    //         this.httpService.post(url, body, { headers: this.headers }),
    //     );
    //     return response.data;
    // }

//     async textToSpeech(text: string)
//     {
//         const url = `${this.baseUrl}/audio/speech`;
//         const body = {
//             text,
//             voice: 'en_US-JennyNeural',
//             language: 'en-US'
//         };
//         const response = await lastValueFrom(
//             this.httpService.post(url, body, { headers: this.headers }),
//         );
//         return response.data;
//     }

//     async generateImage(prompt: string)
//     {
//         const url = `${this.baseUrl}/images/generations`;
//         const body = {
//             prompt,
//             n: 1,
//             size: '1024x1024'
//         };
//         const response = await lastValueFrom(
//             this.httpService.post(url, body, { headers: this.headers }),
//         );
//         return response.data;
//     }

// }