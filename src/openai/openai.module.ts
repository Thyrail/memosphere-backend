import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';
import { OpenAIController } from './openai.controller';
// import { OpenAIProxyController } from './openai-proxy.controller';
// import { OpenAIProxyService } from './openai-proxy.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [
    OpenAIService,
    // OpenAIProxyService
  ],
  controllers: [
    OpenAIController,
    // OpenAIProxyController
  ]
})

export class OpenAIModule { }