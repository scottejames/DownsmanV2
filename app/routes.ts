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

export const appRoutes: Routes = [
    {path: '404',               component: Error404Component},
    {path: 'entries',           component: EntryListComponent},
    {path: 'editEntry/:id',     component: CreateEditEntryComponent,canActivate: [TeamRouteActivator]},
    {path: 'createEntry',       component: CreateEditEntryComponent},
    {path: 'viewEntry/:id',     component: EntryComponent,canActivate: [TeamRouteActivator]},
    {path: 'debug',             component: DebugComponent},


    {path: '', redirectTo: '/entries', pathMatch: 'full'}

]