import {NgModule}  from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {DownsmanAppComponent} from './downsman-app.component'

@NgModule({
    imports: [],
    declarations: [
        DownsmanAppComponent
    ],
    providers: [],
    bootstrap: [DownsmanAppComponent]

})


export class AppModule {
}
