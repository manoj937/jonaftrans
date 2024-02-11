import { Test, TestingModule } from '@nestjs/testing';
import { CarBookingsService } from './car-bookings.service';

describe('CarBookingsService', () => {
  let service: CarBookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarBookingsService],
    }).compile();

    service = module.get<CarBookingsService>(CarBookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
