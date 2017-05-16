
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
import {FormGroup, FormControl, Form, Validators} from "@angular/forms";
import {validateConfig} from "@angular/router/src/config";
@Component ({
    templateUrl: '/app/entry/single/createEditEntry.component.html',

})

export class CreateEditEntryComponent {

    private entry: IEntry;

    entryForm: FormGroup;
    id: FormControl;
    hikeClass: FormControl;
    prefStartTime: FormControl;

    teamForm: FormGroup;
    teamName: FormControl;
    teamGroup : FormControl;
    teamDistrict: FormControl;
    teamCounty: FormControl;

    constructor(private entryService:EntryService,
                private route: ActivatedRoute){

    }

    ngOnInit() {
        this.entry = this.entryService.getEntryById(+this.route.snapshot.params['id'])


        console.log(this.entry);
        this.id = new FormControl('',Validators.required);

        this.hikeClass = new FormControl('',Validators.required);
        this.prefStartTime = new FormControl('', Validators.required);

        this.teamName = new FormControl('', Validators.required);
        this.teamGroup = new FormControl('');
        this.teamDistrict = new FormControl('');
        this.teamCounty = new FormControl('');

        this.teamForm = new FormGroup({
            name: this.teamName,
            group: this.teamGroup,
            district: this.teamDistrict,
            county: this.teamCounty
        })

        this.entryForm = new FormGroup({
            id:this.id,
            class: this.hikeClass,
            prefStartTime: this.prefStartTime,
            team: this.teamForm

        })
        // Setup defaul values if we have specified an entry, this means we are using the form to edit
        if (this.entry)
            this.entryForm.patchValue(this.entry,);
    }
    save(values:any){
        console.log(values);
    }

}