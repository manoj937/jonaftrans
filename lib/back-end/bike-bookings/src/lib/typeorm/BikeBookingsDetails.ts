import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('bike_bookings')
export class BikeBookingsDetails {

  @PrimaryColumn({
    name: 'booking_id',
    nullable: false
  })
  bookingId!: string;

  @Column({
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
