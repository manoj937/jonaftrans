import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BranchController } from './controller/branch.controller';
import { BranchService } from './service/branch.service';
import { BranchDetails } from './typeorm/BranchDetails';

@Module({
  imports: [TypeOrmModule.forFeature([BranchDetails])],
  controllers: [BranchController],
  providers: [BranchService],
  exports: [],
})
export class BranchModule {}
