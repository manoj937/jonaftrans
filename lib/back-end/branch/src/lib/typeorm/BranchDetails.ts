import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('branch')
export class BranchDetails {

  @PrimaryColumn({
    name: 'branch_id',
    nullable: false
  })
  branchId!: string;

  @Column({
    name: 'agency_id',
    nullable: false
  })
  agencyId!: string;

  @Column({
    name: 'phone_number',
    nullable: false
  })
  phoneNumber!: string;

  @Column({
    nullable: false
  })
  address!: string;
}
