import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Expose} from "class-transformer";

@Entity('global')
export class Global {
    @PrimaryGeneratedColumn()
    public id: string;

    @Expose({name: 'NewConfirmed'})
    @Column()
    public newConfirmed: number;

    @Expose({name: 'TotalConfirmed'})
    @Column()
    public totalConfirmed: number;

    @Expose({name: 'TotalDeaths'})
    @Column()
    public totalDeaths: number;

    @Expose({name: 'NewDeaths'})
    @Column()
    public newDeaths: number;

    @Expose({name: 'Date'})
    @Column()
    public date: Date;
}

export default Global
