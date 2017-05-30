import {Component, OnInit} from '@angular/core'
import {EntryService} from "../data-services/entry.service";
import {UserService} from "../data-services/user.service";


@Component({
    template: `
        <div>
            <h1> My Debug </h1>
            <hr/>
            
        </div>

    `
})

export class DebugComponent implements OnInit {

    constructor(private entryService: EntryService, private userService : UserService) {
    }

    ngOnInit() {

    }
}
