import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Exclude, Expose} from "class-transformer";

@Exclude()
@Entity('covid')
export class Covid {
    @PrimaryGeneratedColumn()
    public id: string;

    @Expose({name: 'Country'})
    @Column()
    public country: string;

    @Expose({name: 'Confirmed'})
    @Column()
    public confirmed: number;

    @Expose({name: 'Active'})
    @Column()
    public active: number;

    @Expose({name: 'Deaths'})
    @Column()
    public deaths: number;

    @Expose({name: 'Date'})
    @Column()
    public date: Date;
}

export default Covid


/*
[
    {
        "ID": "36dad671-c8e6-4d7f-8473-a028c4b510b3",
        "Country": "Belarus",
        "CountryCode": "BY",
        "Province": "",
        "City": "",
        "CityCode": "",
        "Lat": "53.71",
        "Lon": "27.95",
        "Confirmed": 982867,
        "Deaths": 6978,
        "Recovered": 0,
        "Active": 975889,
        "Date": "2022-05-25T00:00:00Z"
    }
]*/
