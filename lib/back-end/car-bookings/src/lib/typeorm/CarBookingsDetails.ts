import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('car_bookings')
export class CarBookingsDetails {

  @PrimaryColumn({
    name: 'booking_id',
    nullable: false
  })
  bookingId!: string;

  @Column({
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
    name: 'customer_id',
    nullable: false
  })
  customerId!: string;

  @Column({
    nullable: false
  })
  status!: boolean;

  @Column({
    name: 'from_date',
    nullable: false
  })
  fromDate!: string;

  @Column({
    name: 'to_date',
    nullable: false
  })
  toDate!: string;
}
