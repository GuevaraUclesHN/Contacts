import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Contact } from 'src/models/contact';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent{
  
  @Output() contactAdded = new EventEmitter<Contact>();

  nuevoContacto: Contact = {
    name: '',
    email: '',
    phone: '',
    title: ''
  };

  saveContact() {
    if (this.nuevoContacto.name && this.nuevoContacto.email && this.nuevoContacto.phone) {
      this.contactAdded.emit(this.nuevoContacto);
      this.nuevoContacto = {
        name: '',
        email: '',
        phone: '',
        title: ''
      };
    }
  }
}


   

