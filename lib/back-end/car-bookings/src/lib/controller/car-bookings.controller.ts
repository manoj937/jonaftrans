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
import { CarBookingsService } from '../service/car-bookings.service';
import { CarBookings } from '../interface/car-bookings.interface';

@Controller('car-bookings')
export class CarBookingsController {
  constructor(private readonly carBookingsService: CarBookingsService) {}

  /**
   * Business Rules
   * Add a car
   */
  @Post()
  @UsePipes(ValidationPipe)
  createCarBookings(@Body() carBookings: CarBookings) {
    return this.carBookingsService.addCarBookings(carBookings);
  }

  /**
   * Business Rules
   * Update a car
   */
  @Patch(':carId')
  async updateCarBookings(@Param('carId') carId: string) {
    await this.carBookingsService.updateCarBookings(carId, false);
    return {
      carId,
    };
  }

  /**
   * Business Rules
   * Fetch all cars
   */
  @Get()
  async getCarBookingList() {
    const carBookings = await this.carBookingsService.getCarBookings();
    return carBookings;
  }

  /**
   * Business Rules
   * Delete a car using ID
   */
  @Delete('delete/:id')
  async removeCarBooking(@Param('id') carBooking: any) {
    await this.carBookingsService.deleteCarBookings(carBooking);
    return { bookingId: carBooking };
  }
}
