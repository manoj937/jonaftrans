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
import { BikeBookingsService } from '../service/bike-bookings.service';
import { BikeBookings } from '../interface/bike-bookings.interface';

@Controller('bike-bookings')
export class BikeBookingsController {
  constructor(private readonly bikeBookingsService: BikeBookingsService) {}

  /**
   * Business Rules
   * Add a bike
   */
  @Post()
  @UsePipes(ValidationPipe)
  createBikeBookings(@Body() bikeBookings: BikeBookings) {
    return this.bikeBookingsService.addBikeBookings(bikeBookings);
  }

  /**
   * Business Rules
   * Update a bike
   */
  @Patch(':bikeId')
  async updateBikeBookings(@Param('bikeId') bikeId: string) {
    await this.bikeBookingsService.updateBikeBookings(bikeId, false);
    return {
      bikeId,
    };
  }

  /**
   * Business Rules
   * Fetch all bikes
   */
  @Get()
  async getBikeBookingList() {
    const bikeBookings = await this.bikeBookingsService.getBikeBookings();
    return bikeBookings;
  }

  /**
   * Business Rules
   * Delete a bike using ID
   */
  @Delete('delete/:id')
  async removeBikeBooking(@Param('id') bikeBooking: any) {
    await this.bikeBookingsService.deleteBikeBookings(bikeBooking);
    return { bookingId: bikeBooking };
  }
}
