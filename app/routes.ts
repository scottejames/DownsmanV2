import {Routes} from '@angular/router'
import {Error404Component} from "./nav/404.component";

import {
    EntryComponent,
    CreateEditEntryComponent
} from './entry/single/index'

import {
    EntryListComponent
} from './entry/list/index'

export const appRoutes: Routes = [
    {path: '404',               component: Error404Component},
    {path: 'entries',           component: EntryListComponent},
    {path: 'editEntry/:id',     component: CreateEditEntryComponent},
    {path: 'createEntry',       component: CreateEditEntryComponent},
    {path: 'viewEntry/:id',     component: EntryComponent},


    {path: '', redirectTo: '/entries', pathMatch: 'full'}

]