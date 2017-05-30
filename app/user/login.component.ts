import {Component} from '@angular/core'
import {Router} from '@angular/router'
import {UserService} from "../data-services/user.service";

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em {float:right; color:#E05C65; padding-left:10px;}           
        `]
})
export class LoginComponent{
    constructor(private userService:UserService,private router:Router){

    }
    login(formValues){
        if (this.userService.isValidUserName(formValues.userName)) {
            this.userService.loginUser(formValues.userName, formValues.password)
            this.router.navigate(['entries'])
        } else {
            alert("User name not valid try again")
        }

    }
}