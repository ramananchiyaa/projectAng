import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';
import { fakeUsers } from './list';
import { fakeDetails } from './mocklist';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getUsers() : Observable<fakeUsers[]>{
    return of (fakeDetails);
  }

  constructor() { }
}
