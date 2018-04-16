import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { ListComponent } from "./list/list.component";
import { DetailsComponent } from "./list/details.component";
import { EditComponent } from "./edit/edit.component";
import { InputComponent } from "./edit/input.component";
import { EditviewComponent } from "./edit/editview.component";
import { DeleteComponent } from "./delete/delete.component";
import { DeleteviewComponent } from "./delete/deleteview.component";
import { routing } from './app.routing';


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        EditComponent,
        DeleteComponent,
        DetailsComponent,
        EditviewComponent,
        InputComponent,
        DeleteviewComponent
    ],
    imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}