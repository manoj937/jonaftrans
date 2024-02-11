import { Injectable, NotFoundException } from '@nestjs/common';
import { CarDetails } from '../typeorm/CarDetails';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from '../interface/car.interface';
import { CreateCarDto } from '../dto/CreateCar.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(CarDetails)
    private readonly carsRepository: Repository<CarDetails>
  ) {}

  async addCar(carInfo: Car) {
    const cars = await this.getCars();
    let newcar = false;
    const createCarDto: CreateCarDto = carInfo;

    for (const car of cars) {
      if (car.carNumber === carInfo.carNumber) {
        return {
          status: 'Error',
          message: 'car already exist',
        };
      } else {
        newcar = true;
      }
    }
    if (newcar || !cars.length) {
      const addcar = this.carsRepository.create(createCarDto);
      return this.carsRepository.save(addcar);
    } else {
      return 0;
    }
  }

  async updateCar(carId: string, status: boolean) {
    return this.carsRepository.update(carId, { status });
  }

  getCars() {
    return this.carsRepository.find().then((cars) => cars);
  }

  async deleteCar(id: string) {
    const result = this.carsRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the car.');
    }
  }
}
