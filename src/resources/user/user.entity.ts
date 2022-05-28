import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {Expose} from "class-transformer";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    public id: string;

    @Expose({name: 'name'})
    @Column()
    public name: string;

    @Expose({name: 'email'})
    @Column()
    public email: string;

    @Expose({name: 'password'})
    @Column()
    public password: string;
}

export default User
