import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

@Injectable()
export class AuthorService {
    constructor(
    private http: Http,
    ) {}   
    
  getAll() : Observable<Author[]> {
    return Observable.create((obs: Observer<Author[]>) => {
        let authors:Author[] = [];
        for (let i = 0; i < 125; i++) { 
            authors.push({
                id: i + 1,
                firstName: NAMES[Math.round(Math.random() * (NAMES.length - 1))] ,
                lastName: NAMES[Math.round(Math.random() * (NAMES.length - 1))] 
            });
        }
        obs.next(authors);
        obs.complete();
    });
  }
}
