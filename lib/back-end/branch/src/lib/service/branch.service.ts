import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BranchDetails } from '../typeorm/BranchDetails';
import { Branch } from '../interface/branch.interface';
import { CreateBranchDto } from '../dto/CreateBranch.dto';

@Injectable()
export class BranchService {
  constructor(
    @InjectRepository(BranchDetails)
    private readonly branchRepository: Repository<BranchDetails>
  ) {}

  async addBranch(branchInfo: Branch) {
    const branches = await this.getBranches();
    let newbranch = false;
    const createbranchDto: CreateBranchDto = branchInfo;

    for (const branch of branches) {
      if (branch.branchId === branchInfo.branchId) {
        return {
          status: 'Error',
          message: 'branch already exist',
        };
      } else {
        newbranch = true;
      }
    }
    if (newbranch || !branches.length) {
      const addbranch = this.branchRepository.create(createbranchDto);
      return this.branchRepository.save(addbranch);
    } else {
      return 0;
    }
  }

  getBranches() {
    return this.branchRepository.find().then((branches) => branches);
  }

  async deleteBranch(id: string) {
    const result = this.branchRepository.delete(id);
    if (!result) {
      throw new NotFoundException('Could not find the branch.');
    }
  }
}
