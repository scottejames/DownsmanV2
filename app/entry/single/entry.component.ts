
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
@Component ({
    templateUrl: '/app/entry/single/entry.component.html',

})

export class EntryComponent {

    entry: IEntry;
    mode: string;
    constructor(private entryService:EntryService,
                private route: ActivatedRoute){
    }

    ngOnInit() {
        this.entry = this.entryService.getEntryById(+this.route.snapshot.params['id'])

    }
}
