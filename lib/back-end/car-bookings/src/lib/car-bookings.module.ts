import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBookingsController } from './controller/car-bookings.controller';
import { CarBookingsService } from './service/car-bookings.service';
import { CarBookingsDetails } from './typeorm/CarBookingsDetails';

@Module({
  imports: [TypeOrmModule.forFeature([CarBookingsDetails])],
  controllers: [CarBookingsController],
  providers: [CarBookingsService],
  exports: [],
})
export class CarBookingsModule {}
