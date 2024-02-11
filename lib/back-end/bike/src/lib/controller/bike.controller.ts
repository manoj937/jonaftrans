/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BikeService } from '../service/bike.service';
import { Bike } from '../interface/bike.interface';

@Controller('bike')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  /**
   * Business Rules
   * Add a bike
   */
  @Post()
  @UsePipes(ValidationPipe)
  addBike(@Body() bike: Bike) {
    return this.bikeService.addBike(bike);
  }

  /**
   * Business Rules
   * Update a bike
   */
  @Patch(':bikeId')
  async updateBike(@Param('bikeId') bikeId: string) {
    await this.bikeService.updateBike(bikeId, false);
    return {
      bikeId,
    };
  }

  /**
   * Business Rules
   * Fetch all bikes
   */
  @Get()
  async getBikeList() {
    const bike = await this.bikeService.getBikes();
    return bike;
  }

  /**
   * Business Rules
   * Delete a bike using ID
   */
  @Delete('delete/:id')
  async removeBike(@Param('id') bike: any) {
    await this.bikeService.deleteBike(bike);
    return { bikeId: bike };
  }
}
