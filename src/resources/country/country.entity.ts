import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Expose} from "class-transformer";

@Entity('countries')
export class Country {
    @PrimaryGeneratedColumn()
    public id: string;

    @Expose({name: 'Country'})
    @Column()
    public country: string;

    @Expose({name: 'Slug'})
    @Column()
    public slug: string;

    @Expose({name: 'ISO2'})
    @Column()
    public iso2: string;
}

export default Country
