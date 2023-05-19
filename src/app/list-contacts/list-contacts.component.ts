import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})


export class ListContactsComponent implements OnInit  {
  
  @Input() contacts: Contact[] = [];
  filteredContacts: Contact[] = [];
  selectedContact!: Contact;
  showContactDetails: boolean = false;
  mostrarComponenteAgregar: boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  onClick(contact: Contact) {
    this.selectedContact = contact;
    this.showContactDetails = true;
    this.mostrarComponenteAgregar = false;
  }
 
  ngOnInit(): void {
    this.contacts = [ { name: 'Angel Guevara', email: 'guevaraucles@unitec.edu', phone: '12345', title: 'Sr.' },
  ]
    this.filteredContacts = this.contacts
    this.changeDetectorRef.detectChanges();
  }

  deleteContact() {
    const index = this.contacts.indexOf(this.selectedContact);
    this.contacts.splice(index, 1);
    this.filteredContacts.splice(index, 1);
    this.showContactDetails = false;
    this.mostrarComponenteAgregar = false;
  }

  addContact() {
    this.mostrarComponenteAgregar = true;
    this.showContactDetails = false
  }

  saveContact(contact: Contact) {
    this.contacts.push(contact); 
    this.mostrarComponenteAgregar = false;
    this.aplicarFiltro('');
  }
  
  aplicarFiltro(valor: string) {
    this.clean()
    this.filteredContacts = this.contacts.filter(contact =>
      contact.name.includes(valor) ||
      contact.phone.includes(valor) ||
      contact.email.includes(valor)
    );
}
  clean(){
    this.mostrarComponenteAgregar = false;
    this.showContactDetails = false
  }
}
