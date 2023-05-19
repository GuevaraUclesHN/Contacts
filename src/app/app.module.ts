import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { FormsModule } from '@angular/forms';
import { FilterContactComponent } from './filter-contact/filter-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactsComponent,
    ListContactsComponent,
    FilterContactComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
