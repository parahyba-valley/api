import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity('companies')
class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ array: true })
  categories: string;

  @Index({ unique: true })
  @Column()
  slug: string;

  @Column()
  website: string;

  @Column()
  started_date: Date;

  @Column({ nullable: true })
  closed_date: Date;

  @Column('timestamp with time zone', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column('timestamp with time zone', { nullable: false, default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

export default Company;
