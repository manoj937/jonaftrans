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
import { CarService } from '../service/car.service';
import { Car } from '../interface/car.interface';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  /**
   * Business Rules
   * Add a car
   */
  @Post()
  @UsePipes(ValidationPipe)
  addCar(@Body() car: Car) {
    return this.carService.addCar(car);
  }

  /**
   * Business Rules
   * Update a car
   */
  @Patch(':carId')
  async updateCar(@Param('carId') carId: string) {
    await this.carService.updateCar(carId, false);
    return {
      carId,
    };
  }

  /**
   * Business Rules
   * Fetch all cars
   */
  @Get()
  async getCarList() {
    const car = await this.carService.getCars();
    return car;
  }

  /**
   * Business Rules
   * Delete a car using ID
   */
  @Delete('delete/:id')
  async removeCar(@Param('id') car: any) {
    await this.carService.deleteCar(car);
    return { carId: car };
  }
}
