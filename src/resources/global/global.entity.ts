import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Expose} from "class-transformer";

@Entity('global')
export class Global {
    @PrimaryGeneratedColumn()
    public id: string;

    @Expose({name: 'NewConfirmed'})
    @Column()
    public new_confirmed: number;

    @Expose({name: 'TotalConfirmed'})
    @Column()
    public total_confirmed: number;

    @Expose({name: 'TotalDeaths'})
    @Column()
    public total_deaths: number;

    @Expose({name: 'NewDeaths'})
    @Column()
    public new_deaths: number;

    @Expose({name: 'Date'})
    @Column()
    public date: Date;
}

export default Global
