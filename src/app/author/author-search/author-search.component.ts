import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-author-search',
  templateUrl: './author-search.component.html',
  styleUrls: ['./author-search.component.css']
})
export class AuthorSearchComponent implements OnInit, OnDestroy {
  @Output() searchTerm = new EventEmitter<string>();
  searchTerm$ = new Subject<string>();
  
  constructor() {

  }


  ngOnInit() {
    this.searchTerm$.debounceTime(400)
    .distinctUntilChanged()
    .subscribe((data: string) => this.searchTerm.emit(data));
  }

  ngOnDestroy() {
  }

}
