import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { EntryService } from '../../data-services/entry.service'
import {UserService} from "../../data-services/user.service";

@Injectable()
export class LoggedInActivator implements CanActivate{
    constructor(private userService:UserService,
                private router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {

        const loggedIn = !(this.userService.getCurrentUser() === null);

        if (!loggedIn)
            this.router.navigate(['/user/login']);

        return loggedIn;
    }

}