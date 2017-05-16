import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class UserService {
    currentUser: IUser;

    // Hack to save having to login every time I test
    constructor(){
        // hack to save having to login every time.
        this.currentUser = this.getUserById(1);
    }

    getUserById(id: number): IUser {
        var user:any =  USERS.find(t => t.id === id);
        return user;
    }

    getUserByUserName(userName: string) {
        var user :any;
        user = USERS.find(user => user.userName === userName);
        return user;
    }



    loginUser(userName: string, password: string) {
        // Check password later.
        this.currentUser = this.getUserByUserName(userName);
    }
    logoutUser(){
        this.currentUser = null;
    }

    isAuthenticated(){
        return !!this.currentUser
    }


}

const USERS :IUser[]= [
    {
        id: 1,
        userName: 'scottejames',
        firstName: 'Scott',
        lastName: 'James'
    }, {
        id: 2,
        userName: 'bethmjames',
        firstName: 'Bethany',
        lastName: 'James'
    }, {
        id: 3,
        userName: 'chrissearle',
        firstName: 'Chris',
        lastName: 'Searle'
    }


]