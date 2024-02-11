import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeBookingsService } from './service/bike-bookings.service';
import { BikeBookingsController } from './controller/bike-bookings.controller';
import { BikeBookingsDetails } from './typeorm/BikeBookingsDetails';

@Module({
  imports: [TypeOrmModule.forFeature([BikeBookingsDetails])],
  controllers: [BikeBookingsController],
  providers: [BikeBookingsService],
  exports: [],
})
export class BikeBookingsModule {}
