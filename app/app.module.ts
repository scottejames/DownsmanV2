import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {appRoutes} from './routes'

import {DebugComponent} from './debug/debug.component'
import {DownsmanAppComponent} from './downsman-app.component'
import {UserService} from './data-services/user.service'
import {EntryService} from './data-services/entry.service'
import {NavBarComponent} from './nav/navbar.component'
import {Error404Component} from './nav/404.component'

import {
    EntryThumbnailComponent,
    EntryListComponent
} from './entry/list/index'
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
        CreateEditEntryComponent,
        EntryThumbnailComponent,
        EntryListComponent,
        DebugComponent

    ],
    providers: [
        UserService,
        EntryService
    ],
    bootstrap: [DownsmanAppComponent]

})


export class AppModule {
}
