import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-contact',
  templateUrl: './filter-contact.component.html',
  styleUrls: ['./filter-contact.component.css']
})
export class FilterContactComponent {

  @Output() filterChanged = new EventEmitter<string>();


  onChange(target : any){
    this.filterChanged.emit(target.value);
  }
  }
    


