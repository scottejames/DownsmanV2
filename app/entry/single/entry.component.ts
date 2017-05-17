
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
@Component ({
    templateUrl: '/app/entry/single/entry.component.html',

})

export class EntryComponent {

    entry: IEntry;
    mode: string;
    constructor(private entryService:EntryService,
                private avtiveRoute: ActivatedRoute,
                private router: Router,){
    }

    ngOnInit() {
        this.entry = this.entryService.getEntryById(+this.avtiveRoute.snapshot.params['id'])

    }

    edit(){
        console.log('edit')
        this.router.navigate(['/editEntry',this.entry.id]);
    }
}
