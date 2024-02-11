import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('travel_agency')
export class TravelAgencyDetails {

  @PrimaryColumn({
    name: 'agency_id',
    nullable: false
  })
  agencyId!: string;

  @Column({
    name: 'agency_name',
    nullable: false
  })
  agencyName!: string;

  @Column({
    nullable: false
  })
  email!: string;

  @Column({
    name: 'user_name',
    nullable: false
  })
  userName!: string;

  @Column({
    nullable: false
  })
  password!: string;

  @Column({
    name: 'phone_number',
    nullable: false
  })
  phoneNumber!: string;
}
