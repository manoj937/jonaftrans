import { Test, TestingModule } from '@nestjs/testing';
import { TravelAgencyService } from './travel-agency.service';

describe('TravelAgencyService', () => {
  let service: TravelAgencyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelAgencyService],
    }).compile();

    service = module.get<TravelAgencyService>(TravelAgencyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
