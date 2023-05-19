import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/models/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Contacts';
  contacts !: Array<Contact>;
}
