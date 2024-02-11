import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from './service/car.service';
import { CarController } from './controller/car.controller';
import { CarDetails } from './typeorm/CarDetails';

@Module({
  imports: [TypeOrmModule.forFeature([CarDetails])],
  controllers: [CarController],
  providers: [CarService],
  exports: [],
})
export class CarModule {}
