/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TravelAgency } from '../interface/travel-agency.interface';
import { travelAgencieservice } from '../service/travel-agency.service';

@Controller('travel-agency')
export class TravelAgencyController {
  constructor(private readonly travelAgencyService: travelAgencieservice) {}

  /**
   * Business Rules
   * Add a travelAgency
   */
  @Post()
  @UsePipes(ValidationPipe)
  addBike(@Body() travelAgency: TravelAgency) {
    return this.travelAgencyService.addTravelAgency(travelAgency);
  }

  /**
   * Business Rules
   * Fetch all travelAgencyes
   */
  @Get()
  async getTravelAgencyList() {
    const travelAgency = await this.travelAgencyService.getTravelAgencies();
    return travelAgency;
  }

  /**
   * Business Rules
   * Delete a travelAgency using ID
   */
  @Delete('delete/:id')
  async removeBike(@Param('id') travelAgency: any) {
    await this.travelAgencyService.deleteTravelAgency(travelAgency);
    return { agencyId: travelAgency };
  }
}
