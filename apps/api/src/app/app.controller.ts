/* eslint-disable @typescript-eslint/no-explicit-any */
import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/sendOtp')
  async sendOtp(@Body() data: { phone: string }): Promise<{ message: string }> {
    const prefix = '+91';
    const phone = prefix.concat(data.phone);
    return await this.appService.sendOtp(phone);
  }

  @Post('/verifyOtp')
  async verifyOtp(
    @Body() data: { phone: string; otp: string },
  ): Promise<{ message: string }> {
    const prefix = '+91';
    const phone = prefix.concat(data.phone);
    return await this.appService.verifyOtp(phone, data.otp);
  }

}
