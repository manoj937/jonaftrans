import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TravelAgencyController } from './controller/travel-agency.controller';
import { travelAgencieservice } from './service/travel-agency.service';
import { TravelAgencyDetails } from './typeorm/TravelAgencyDetails';

@Module({
  imports: [TypeOrmModule.forFeature([TravelAgencyDetails])],
  controllers: [TravelAgencyController],
  providers: [travelAgencieservice],
  exports: [],
})
export class TravelAgencyModule {}
