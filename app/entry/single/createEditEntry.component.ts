import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
import {FormGroup, FormControl, Form, Validators, FormArray} from "@angular/forms";
import {validateConfig} from "@angular/router/src/config";
import {RefDataService} from "../../data-services/refData.service";
@Component({
    templateUrl: '/app/entry/single/createEditEntry.component.html',

})

export class CreateEditEntryComponent {

    private entry: IEntry;
    hikeClasses: string[];
    entryForm: FormGroup;

    // HEADING
    id: FormControl;

    // TEAM
    teamForm: FormGroup;
    serviceForm: FormArray;
    contactForm: FormGroup;

    constructor(private entryService: EntryService,
                private activeRoute: ActivatedRoute,
                private router: Router,
                private refData: RefDataService) {
    }
    removeScout(i:number){
        var scoutsControl = <FormArray>this.teamForm.get('participants');
        scoutsControl.removeAt(i);
    }
    addScout() {
        var scoutsControl = <FormArray>this.teamForm.get('participants');
        scoutsControl.push(new FormGroup({
            name: new FormControl(''),
            dob: new FormControl(''),
            gender: new FormControl('')
        }))
    }

    buildParticipantFormArray(): FormArray {
        var result: FormArray;

        result = new FormArray([]);
        if (this.entry)
            for (let i of this.entry.team.participants)
                result.push(new FormGroup({
                    name: new FormControl(''),
                    dob: new FormControl(''),
                    gender: new FormControl('')
                }));
        else
            result.push(new FormGroup({
                name: new FormControl(''),
                dob: new FormControl(''),
                gender: new FormControl('')
            }));
        return result;
    }

    ngOnInit() {
        this.entry = this.entryService.getEntryById(+this.activeRoute.snapshot.params['id'])
        this.hikeClasses = this.refData.getHikeClasses();

        this.teamForm = new FormGroup({
            name: new FormControl(''),
            group: new FormControl(''),
            district: new FormControl(''),
            county: new FormControl(''),
            standardMobile: new FormControl(''),
            emergencyMobile: new FormControl(''),
            participants: this.buildParticipantFormArray()
        })

        this.serviceForm = new FormArray([
            new FormGroup({
                name: new FormControl(''),
                mobile: new FormControl(''),
                from: new FormControl(''),
                to: new FormControl('')
            }),
            new FormGroup({
                name: new FormControl(''),
                mobile: new FormControl(''),
                from: new FormControl(''),
                to: new FormControl('')
            })
        ])

        this.contactForm = new FormGroup({
            adminContact: new FormGroup({
                name: new FormControl(''),
                address: new FormControl(''),
                telephone: new FormControl(''),
                mobile: new FormControl(''),
                email: new FormControl('')
            }),
            emergencyContact: new FormGroup({
                name: new FormControl(''),
                address: new FormControl(''),
                telephone: new FormControl(''),
                mobile: new FormControl(''),

            })

        })
        this.entryForm = new FormGroup({
            id: new FormControl(''),
            class: new FormControl(''),
            prefStartTime: new FormControl(''),
            team: this.teamForm,
            serviceCrew: this.serviceForm,
            contactInfo: this.contactForm

        })
        // Setup defaul values if we have specified an entry, this means we are using the form to edit
        if (this.entry)
            this.entryForm.setValue(this.entry,);
    }

    createParticantFormGroup() {

    }

    save(values: IEntry) {
        console.log(values);
        this.entryService.addEntry(values);
        this.router.navigate(['/entries'])

    }

    cancel() {
        if (this.entry)
            this.router.navigate(['/viewEntry', this.entry.id]);
        else
            this.router.navigate((['/entries']));

    }

}