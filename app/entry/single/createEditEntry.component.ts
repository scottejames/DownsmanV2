
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
import {FormGroup, FormControl, Form, Validators, FormArray} from "@angular/forms";
import {validateConfig} from "@angular/router/src/config";
@Component ({
    templateUrl: '/app/entry/single/createEditEntry.component.html',

})

export class CreateEditEntryComponent {

    private entry: IEntry;

    entryForm: FormGroup;

    // HEADING
    id: FormControl;
    hikeClass: FormControl;
    prefStartTime: FormControl;

    // TEAM
    teamForm: FormGroup;


    constructor(private entryService:EntryService,
                private activeRoute: ActivatedRoute,
                private router: Router){
    }

    ngOnInit() {
        this.entry = this.entryService.getEntryById(+this.activeRoute.snapshot.params['id'])

        var participantsArray =
        this.teamForm = new FormGroup({
            name: new FormControl(''),
            group: new FormControl(''),
            district: new FormControl(''),
            county: new FormControl('' ),
            standardMobile: new FormControl(''),
            emergencyMobile: new FormControl('' ),
            participants: new FormArray([
                new FormGroup({
                    name: new FormControl(''),
                    dob: new FormControl(''),
                    sex: new FormControl('')
                }),new FormGroup({
                    name: new FormControl(''),
                    dob: new FormControl(''),
                    sex: new FormControl('')
                }),new FormGroup({
                    name: new FormControl(''),
                    dob: new FormControl(''),
                    sex: new FormControl('')
                }),new FormGroup({
                    name: new FormControl(''),
                    dob: new FormControl(''),
                    sex: new FormControl('')
                })])
        })

        this.entryForm = new FormGroup({
            id:new FormControl('' ),
            class: new FormControl('' ),
            prefStartTime: new FormControl(''),
            team: this.teamForm

        })
        // MAIN FORM FIN

        // Setup defaul values if we have specified an entry, this means we are using the form to edit
        if (this.entry)
            this.entryForm.patchValue(this.entry,);
    }

    createParticantFormGroup(){

    }
    save(values:IEntry){
        console.log(values);
        this.entryService.addEntry(values);
        this.router.navigate(['/entries'])

    }
    cancel(){
        if (this.entry)
             this.router.navigate(['/viewEntry',this.entry.id]);
        else
            this.router.navigate((['/entries']));

    }

}