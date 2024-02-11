import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bike')
export class BikeDetails {

  @PrimaryColumn({
    name: 'bike_id',
    nullable: false
  })
  bikeId!: string;

  @Column({
    name: 'branch_id',
    nullable: false
  })
  branchId!: string;

  @Column({
    name: 'bike_name',
    nullable: false
  })
  bikeName!: string;

  @Column({
    name: 'bike_number',
    nullable: false
  })
  bikeNumber!: string;

  @Column({
    nullable: false
  })
  model!: string;

  @Column({
    nullable: false
  })
  image!: string;

  @Column({
    nullable: false
  })
  status!: boolean;

  @Column({
    nullable: false
  })
  rent!: string;
}
