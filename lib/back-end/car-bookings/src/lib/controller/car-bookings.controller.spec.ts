import { Test, TestingModule } from '@nestjs/testing';
import { CarBookingsController } from './car-bookings.controller';

describe('CarBookingsController', () => {
  let controller: CarBookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarBookingsController],
    }).compile();

    controller = module.get<CarBookingsController>(CarBookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
