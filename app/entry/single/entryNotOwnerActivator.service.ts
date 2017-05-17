import {Router, ActivatedRouteSnapshot, CanActivate} from "@angular/router"
import {Injectable} from "@angular/core"
import {EntryService} from '../../data-services/entry.service'
import {UserService} from "../../data-services/user.service";
import {userInfo} from "os";

@Injectable()
export class EntryNotOwnerActivator implements CanActivate {
    constructor(private userService: UserService,
                private entryService: EntryService,
                private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const entryOwnerID = this.entryService.getEntryById(+route.params['id']).ownerId;
        const currentUserID = this.userService.getCurrentUser().id;
        console.log('')
        if (entryOwnerID != currentUserID) {
            this.router.navigate(['/entries']);
            return false;
        } else
            return true;
    }

}