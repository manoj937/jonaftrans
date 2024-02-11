import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('car')
export class CarDetails {

  @PrimaryColumn({
    name: 'car_id',
    nullable: false
  })
  carId!: string;

  @Column({
    name: 'branch_id',
    nullable: false
  })
  branchId!: string;

  @Column({
    name: 'car_name',
    nullable: false
  })
  carName!: string;

  @Column({
    name: 'car_number',
    nullable: false
  })
  carNumber!: string;

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
