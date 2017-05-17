import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EntryService} from "../../data-services/entry.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IEntry} from "../../data-services/entry.model";
import {FormGroup, FormControl, Form, Validators, FormArray} from "@angular/forms";
import {validateConfig} from "@angular/router/src/config";
import {RefDataService} from "../../data-services/refData.service";
@Component({
    templateUrl: '/app/entry/single/createEditEntry.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}    
        .error input {background-color: #E05C65}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `]
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

    validatedString(): string {
        if (this.isValidated())
            return 'Team Is Validated';
        else
            return 'Team NOT Validated';

    }

    isValidated() {
        if (this.entry && this.entry.validated) {
            return true;
        } else {
            return false;
        }
    }

    validateTeam() {
        this.entry.validated = true;
        this.entryService.addEntry(this.entry);
        this.entryForm.disable();

    }

    invalidateTeam() {
        this.entry.validated = false;
        this.entryService.addEntry(this.entry);
        this.entryForm.enable();


    }

    removeScout(i: number) {
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

    buildSupportFormArray(): FormArray {
        var result: FormArray;
        result = new FormArray([]);

        if (this.entry)
            for (let i of this.entry.serviceCrew) {
                result.push(new FormGroup({
                    name: new FormControl(''),
                    mobile: new FormControl(''),
                    from: new FormControl(''),
                    to: new FormControl('')
                }));
            }
        else
            result.push(new FormGroup({
                name: new FormControl(''),
                mobile: new FormControl(''),
                from: new FormControl(''),
                to: new FormControl('')
            }));
        return result;
    }

    removeSupport(i: number) {
        this.serviceForm.removeAt(i);
    }

    addSupport() {

        this.serviceForm.push(new FormGroup({
            name: new FormControl(''),
            mobile: new FormControl(''),
            from: new FormControl(''),
            to: new FormControl('')
        }));
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

        this.serviceForm = this.buildSupportFormArray();

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
            validated: new FormControl(''),
            class: new FormControl(''),
            prefStartTime: new FormControl(''),
            team: this.teamForm,
            serviceCrew: this.serviceForm,
            contactInfo: this.contactForm

        })

        // Setup defaul values if we have specified an entry, this means we are using the form to edit
        if (this.entry)
            this.entryForm.setValue(this.entry,);

        // if team is validated disable editing
        if (this.entry && this.entry.validated == true)
            this.entryForm.disable();
    }

    createParticantFormGroup() {

    }

    save(values: IEntry) {
        console.log(values);
        this.entryService.addEntry(values);
        this.router.navigate(['/entries'])

    }
    delete(){
        if (confirm("Are you sure you want to delete this team?")){
            this.entryService.delete(this.entry.id);
            this.router.navigate(['/entries']);

        }
    }
    cancel() {

        this.router.navigate((['/entries']));

    }

}