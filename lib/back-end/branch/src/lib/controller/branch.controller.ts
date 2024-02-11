/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BranchService } from '../service/branch.service';
import { Branch } from '../interface/branch.interface';

@Controller('branch')
export class BranchController {
  constructor(private readonly branchService: BranchService) {}

  /**
   * Business Rules
   * Add a branch
   */
  @Post()
  @UsePipes(ValidationPipe)
  addBike(@Body() branch: Branch) {
    return this.branchService.addBranch(branch);
  }

  /**
   * Business Rules
   * Fetch all branches
   */
  @Get()
  async getBranchList() {
    const branch = await this.branchService.getBranches();
    return branch;
  }

  /**
   * Business Rules
   * Delete a branch using ID
   */
  @Delete('delete/:id')
  async removeBike(@Param('id') branch: any) {
    await this.branchService.deleteBranch(branch);
    return { branchId: branch };
  }
}
