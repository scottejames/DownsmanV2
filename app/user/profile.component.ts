import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {Router} from '@angular/router'
import {UserService} from "../data-services/user.service";

@Component({
    templateUrl: 'app/user/profile.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}    
        .error input {background-color: #E05C65}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder {color:#999;}
        .error :-moz-placeholder {color:#999;}
        .error :-ms-input-placeholder {color:#999;}
        `]

})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;
    private group: FormControl;


    constructor(private userService: UserService, private router: Router) {

    }

    ngOnInit() {
        this.firstName = new FormControl(this.userService.getCurrentUser().firstName, Validators.required);
        this.lastName = new FormControl(this.userService.getCurrentUser().lastName, Validators.required);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    logout() {
        this.userService.logoutUser();
        this.router.navigate(['user/login']);

    }

    cancel() {
        this.router.navigate(['entries']);
    }

    saveProfile(formValues) {
        this.userService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['entries']);
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }
}