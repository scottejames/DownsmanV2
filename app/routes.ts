import {Routes} from '@angular/router'
import {
    EntryComponent,
    CreateEditEntryComponent
} from './entry/single/index'

export const appRoutes: Routes = [
    {path: 'editEntry/:id',    component: CreateEditEntryComponent},
    {path: 'createEntry',         component: CreateEditEntryComponent},
    {path: 'viewEntry/:id',               component: EntryComponent},

]