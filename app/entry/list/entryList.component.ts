import {Component, OnInit} from '@angular/core'
import {EntryService, IEntry} from '../../data-services/index'

@Component({
    template: `
	<div>
		<h1> My Entries </h1>
	 	<hr/>
	 	<div *ngIf="entries" class="row">
	 		<div *ngFor="let entry of entries" class="col-md-5">
	 			<entry-thumbnail #thumbnail [entry]="entry"></entry-thumbnail>
	 		</div>
	 	</div>
	</div>

  `
})

export class EntryListComponent implements OnInit {
    entries: IEntry[]

    constructor(private entryService: EntryService) {
    }

    ngOnInit() {
        this.entries = this.entryService.getEntries();
    }
}
