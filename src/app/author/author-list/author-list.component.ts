import { Component, OnInit, OnDestroy, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  @Input() authors: Observable<Author[]>;
  @Output() sortAuthors = new EventEmitter<Sort>();

  dataSource: any;
  displayedColumns: any;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() {
  }
  
  ngOnInit() {
    this.displayedColumns = ['id', 'firstName', 'lastName'];
    this.dataSource = new AuthorDataSource(this.authors, this.sort, this.sortAuthors);
  }

  ngOnDestroy() {
  }
}

export class AuthorDataSource extends DataSource<any> {
  sortSubscription: Subscription;
  constructor(private data: Observable<Author[]>, private sort: MatSort, 
    private sortAuthors: EventEmitter<Sort>) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Author[]> {
    const displayDataChanges = [
      this.data,
      this.sort.sortChange,
    ];

    this.sortSubscription = this.sort.sortChange.subscribe((st) => {
      this.sortAuthors.emit({
        sortBy: st.active,
        isAscending: st.direction === 'asc'
      });
      
    });

    return this.data;

    // return Observable.merge(...displayDataChanges).map((d: Author[] | any) => {
    //   if (d.active) {
    //     console.log('data', this.data)
    //     return this.data;
    //   }
    //   return d;
    // });
  }

  disconnect() {
    this.sortSubscription.unsubscribe();
  }
}
