import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
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
  constructor() {

  }

  searchTerm$ = new Subject<string>();

  ngOnInit() {
    this.searchTerm$.debounceTime(400)
    .distinctUntilChanged()
    .subscribe((data) => console.log('key', data));
  }

  ngOnDestroy() {
  }

}
