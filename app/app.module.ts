import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {appRoutes} from './routes'

import {DownsmanAppComponent} from './downsman-app.component'
import {UserService} from './data-services/user.service'
import {EntryService} from './data-services/entry.service'
import {NavBarComponent} from './nav/navbar.component'
import {Error404Component} from './nav/404.component'

import {
    EntryComponent,
    CreateEditEntryComponent
} from './entry/single/index'

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, {useHash: true}),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        DownsmanAppComponent,
        NavBarComponent,
        Error404Component,
        EntryComponent,
        CreateEditEntryComponent
    ],
    providers: [
        UserService,
        EntryService
    ],
    bootstrap: [DownsmanAppComponent]

})


export class AppModule {
}
