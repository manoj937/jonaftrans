import { BikeModule } from '@jonaftrans/lib/back-end//bike';
import { BikeBookingsModule } from '@jonaftrans/lib/back-end//bike-bookings';
import { BranchModule } from '@jonaftrans/lib/back-end//branch';
import { CarModule } from '@jonaftrans/lib/back-end//car';
import { CarBookingsModule } from '@jonaftrans/lib/back-end//car-bookings';
import { CustomerModule } from '@jonaftrans/lib/back-end//customer';
import { TravelAgencyModule } from '@jonaftrans/lib/back-end//travel-agency';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeBookingsDetails } from 'lib/back-end/bike-bookings/src/lib/typeorm/BikeBookingsDetails';
import { BikeDetails } from 'lib/back-end/bike/src/lib/typeorm/BikeDetails';
import { BranchDetails } from 'lib/back-end/branch/src/lib/typeorm/BranchDetails';
import { CarBookingsDetails } from 'lib/back-end/car-bookings/src/lib/typeorm/CarBookingsDetails';
import { CarDetails } from 'lib/back-end/car/src/lib/typeorm/CarDetails';
import { CustomerDetails } from 'lib/back-end/customer/src/lib/typeorm/CustomerDetails';
import { TravelAgencyDetails } from 'lib/back-end/travel-agency/src/lib/typeorm/TravelAgencyDetails';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from '@jonaftrans/lib/back-end/invoice';

const entities = [BikeDetails, BikeBookingsDetails, BranchDetails, CarDetails, CarBookingsDetails, CustomerDetails, TravelAgencyDetails];

@Module({
  imports: [
    BikeModule,
    BikeBookingsModule,
    BranchModule,
    CarModule,
    CarBookingsModule,
    CustomerModule,
    TravelAgencyModule,
    InvoiceModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'manoj',
      database: 'jonaf_trans',
      entities,
      synchronize: true,
      connectTimeout: 60 * 60 * 1000,
      acquireTimeout: 60 * 60 * 1000
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
