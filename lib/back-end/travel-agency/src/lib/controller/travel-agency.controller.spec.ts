import { Test, TestingModule } from '@nestjs/testing';
import { TravelAgencyController } from './travel-agency.controller';

describe('TravelAgencyController', () => {
  let controller: TravelAgencyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelAgencyController],
    }).compile();

    controller = module.get<TravelAgencyController>(TravelAgencyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
