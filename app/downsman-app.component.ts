import {Component} from '@angular/core'

@Component({
    selector: 'downsman-app',
    template: `
        <nav-bar></nav-bar>
        <router-outlet></router-outlet>
    `
})
export class DownsmanAppComponent {

}
