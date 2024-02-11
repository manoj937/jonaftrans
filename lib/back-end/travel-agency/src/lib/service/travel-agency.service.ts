import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelAgencyDetails } from '../typeorm/TravelAgencyDetails';
import { Repository } from 'typeorm';
import { TravelAgency } from '../interface/travel-agency.interface';
import { CreateTravelAgencyDto } from '../dto/CreateTravelAgency.dto';

@Injectable()
export class travelAgencieservice {
  constructor(
    @InjectRepository(TravelAgencyDetails)
    private readonly travelAgencyRepository: Repository<TravelAgencyDetails>
  ) {}

  async addTravelAgency(travelAgencyInfo: TravelAgency) {
    const travelAgencies = await this.getTravelAgencies();
    let newtravelAgency = false;
    const createtravelAgencyDto: CreateTravelAgencyDto = travelAgencyInfo;

    for (const travelAgency of travelAgencies) {
      if (travelAgency.agencyId === travelAgencyInfo.agencyId) {
        return {
          status: 'Error',
          message: 'travelAgency already exist',
        };
      } else {
        newtravelAgency = true;
      }
    }
    if (newtravelAgency || !travelAgencies.length) {
      const addtravelAgency = this.travelAgencyRepository.create(
        createtravelAgencyDto
      );
      return this.travelAgencyRepository.save(addtravelAgency);
    } else {
      return 0;
    }
  }

  getTravelAgencies() {
    return this.travelAgencyRepository
      .find()
      .then((travelAgencies) => travelAgencies);
  }

  async deleteTravelAgency(id: string) {
    const result = this.travelAgencyRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the travelAgency.');
    }
  }
}
