import { Controller, Get, Param } from '@nestjs/common';
import { CacheKey, CacheTTL } from '@nestjs/cache-manager';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:name')
  @CacheKey('custom_key')
  @CacheTTL(20)
  getHelloName(@Param('name') name: string): string {
    return this.appService.getHelloName(name);
  }
}
