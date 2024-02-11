import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CarBookingsDetails } from '../typeorm/CarBookingsDetails';
import { Repository } from 'typeorm';
import { CarBookings } from '../interface/car-bookings.interface';
import { CreateCarBookingsDto } from '../dto/CreateCarBookings.dto';

@Injectable()
export class CarBookingsService {
  constructor(
    @InjectRepository(CarBookingsDetails)
    private readonly carBookingsRepository: Repository<CarBookingsDetails>
  ) {}

  async addCarBookings(carBookingsInfo: CarBookings) {
    const carBookings = await this.getCarBookings();
    let newcar = false;
    const createCarDto: CreateCarBookingsDto = carBookingsInfo;

    for (const booking of carBookings) {
      if (booking.bookingId === carBookingsInfo.bookingId) {
        return {
          status: 'Error',
          message: 'car booking already exist',
        };
      } else {
        newcar = true;
      }
    }
    if (newcar || !carBookings.length) {
      const addCarBooking = this.carBookingsRepository.create(createCarDto);
      return this.carBookingsRepository.save(addCarBooking);
    } else {
      return 0;
    }
  }

  async updateCarBookings(carId: string, status: boolean) {
    return this.carBookingsRepository.update(carId, { status });
  }

  getCarBookings() {
    return this.carBookingsRepository.find().then((carBookings) => carBookings);
  }

  async deleteCarBookings(id: string) {
    const result = this.carBookingsRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the car booking.');
    }
  }
}
