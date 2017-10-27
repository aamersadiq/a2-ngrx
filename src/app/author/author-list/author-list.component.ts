import { Component, OnInit, OnDestroy, Input } from '@angular/core';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  @Input() people: any[];
  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
