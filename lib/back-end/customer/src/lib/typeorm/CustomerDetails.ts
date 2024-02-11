import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('customer')
export class CustomerDetails {

  @PrimaryColumn({
    name: 'customer_id',
    nullable: false
  })
  customerId!: string;

  @Column({
    name: 'customer_name',
    nullable: false
  })
  customerName!: string;

  @Column({
    nullable: false
  })
  email!: string;

  @Column({
    nullable: false
  })
  address!: string;

  @Column({
    name: 'phone_number',
    nullable: false
  })
  phoneNumber!: string;

  @Column({
    nullable: false
  })
  age!: string;

  @Column({
    nullable: false
  })
  gender!: string;

  }
