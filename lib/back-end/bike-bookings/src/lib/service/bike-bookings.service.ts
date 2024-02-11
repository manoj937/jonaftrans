import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BikeBookingsDetails } from '../typeorm/BikeBookingsDetails';
import { BikeBookings } from '../interface/bike-bookings.interface';
import { CreateBikeBookingsDto } from '../dto/CreateBikeBookings.dto';

@Injectable()
export class BikeBookingsService {
  constructor(
    @InjectRepository(BikeBookingsDetails)
    private readonly bikeBookingsRepository: Repository<BikeBookingsDetails>
  ) {}

  async addBikeBookings(bikeBookingsInfo: BikeBookings) {
    const bikeBookings = await this.getBikeBookings();
    let newbike = false;
    const createBikeDto: CreateBikeBookingsDto = bikeBookingsInfo;

    for (const booking of bikeBookings) {
      if (booking.bookingId === bikeBookingsInfo.bookingId) {
        return {
          status: 'Error',
          message: 'bike booking already exist',
        };
      } else {
        newbike = true;
      }
    }
    if (newbike || !bikeBookings.length) {
      const addBikeBooking = this.bikeBookingsRepository.create(createBikeDto);
      return this.bikeBookingsRepository.save(addBikeBooking);
    } else {
      return 0;
    }
  }

  async updateBikeBookings(bikeId: string, status: boolean) {
    return this.bikeBookingsRepository.update(bikeId, { status });
  }

  getBikeBookings() {
    return this.bikeBookingsRepository
      .find()
      .then((bikeBookings) => bikeBookings);
  }

  async deleteBikeBookings(id: string) {
    const result = this.bikeBookingsRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the bike booking.');
    }
  }
}
