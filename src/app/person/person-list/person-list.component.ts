import { Component, OnInit, OnDestroy, Input } from '@angular/core';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit, OnDestroy {
  @Input() people: any[];
  constructor() {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
