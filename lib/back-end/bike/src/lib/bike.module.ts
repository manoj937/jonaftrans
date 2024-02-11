import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeController } from './controller/bike.controller';
import { BikeService } from './service/bike.service';
import { BikeDetails } from './typeorm/BikeDetails';

@Module({
  imports: [TypeOrmModule.forFeature([BikeDetails])],
  controllers: [BikeController],
  providers: [BikeService],
  exports: [],
})
export class BikeModule {}
