import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { EntryService } from '../../data-services/entry.service'

@Injectable()
export class TeamRouteActivator implements CanActivate{

    constructor(private entryService:EntryService,private router: Router){

    }
    canActivate(route: ActivatedRouteSnapshot) {
        const entryExist = !!this.entryService.getEntryById(+route.params['id'])

        if (!entryExist)
            this.router.navigate(['/404']);

        return entryExist;
    }

}