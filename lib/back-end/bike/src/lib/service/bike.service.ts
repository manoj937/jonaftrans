import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BikeDetails } from '../typeorm/BikeDetails';
import { Repository } from 'typeorm';
import { CreateBikeDto } from '../dto/CreateBike.dto';
import { Bike } from '../interface/bike.interface';

@Injectable()
export class BikeService {
  constructor(
    @InjectRepository(BikeDetails)
    private readonly bikesRepository: Repository<BikeDetails>
  ) {}

  async addBike(bikeInfo: Bike) {
    const bikes = await this.getBikes();
    let newbike = false;
    const createBikeDto: CreateBikeDto = bikeInfo;

    for (const bike of bikes) {
      if (bike.bikeNumber === bikeInfo.bikeNumber) {
        return {
          status: 'Error',
          message: 'bike number is already exist',
        };
      } else {
        newbike = true;
      }
    }
    if (newbike || !bikes.length) {
      const addbike = this.bikesRepository.create(createBikeDto);
      return this.bikesRepository.save(addbike);
    } else {
      return 0;
    }
  }

  async updateBike(bikeId: string, status: boolean) {
    return this.bikesRepository.update(bikeId, { status });
  }

  getBikes() {
    return this.bikesRepository
      .find()
      .then((bikes) => bikes.filter((bike) => bike.status));
  }

  async deleteBike(id: string) {
    const result = this.bikesRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the bike.');
    }
  }
}
