import {Routes} from '@angular/router'
import {Error404Component} from "./nav/404.component";
import {TeamRouteActivator} from './entry/single/entryActivator.service'

import {
    EntryComponent,
    CreateEditEntryComponent
} from './entry/single/index'

import {
    EntryListComponent
} from './entry/list/index'
import {DebugComponent} from "./debug/debug.component";
import {LoginComponent} from "./user/login.component";
import {ProfileComponent} from "./user/profile.component";
import {LoggedInActivator} from "./entry/single/loggedInActivtor.service";
import {EntryNotOwnerActivator} from "./entry/single/entryNotOwnerActivator.service";

export const appRoutes: Routes = [
    {path: '404',               component: Error404Component},
    {path: 'entries',           component: EntryListComponent,canActivate: [LoggedInActivator]},
    {path: 'editEntry/:id',     component: CreateEditEntryComponent,canActivate: [EntryNotOwnerActivator,LoggedInActivator,TeamRouteActivator]},
    {path: 'viewEntry/:id',     component: CreateEditEntryComponent,canActivate: [EntryNotOwnerActivator,LoggedInActivator,TeamRouteActivator]},
    {path: 'createEntry',       component: CreateEditEntryComponent,canActivate: [LoggedInActivator]},
    {path: 'debug',             component: DebugComponent},

    {path: 'user/login',        component: LoginComponent},
    {path: 'user/profile',      component: ProfileComponent,canActivate: [LoggedInActivator]},

    {path: '', redirectTo: '/entries', pathMatch: 'full'}

]