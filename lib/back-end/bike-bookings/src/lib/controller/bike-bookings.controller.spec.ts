import { Test, TestingModule } from '@nestjs/testing';
import { BikeBookingsController } from './bike-bookings.controller';

describe('BikeBookingsController', () => {
  let controller: BikeBookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikeBookingsController],
    }).compile();

    controller = module.get<BikeBookingsController>(BikeBookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
