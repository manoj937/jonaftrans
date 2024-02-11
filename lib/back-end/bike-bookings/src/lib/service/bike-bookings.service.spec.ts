import { Test, TestingModule } from '@nestjs/testing';
import { BikeBookingsService } from './bike-bookings.service';

describe('BikeBookingsService', () => {
  let service: BikeBookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeBookingsService],
    }).compile();

    service = module.get<BikeBookingsService>(BikeBookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
