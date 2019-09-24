import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter} from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  searchWord = '';
  @Output() pushEvent = new EventEmitter<string>();
  searchShow() {
  }
  ngOnInit() {
  }
  pushData() {
    console.log(this.searchWord);
    this.pushEvent.emit(this.searchWord);
  }

}
