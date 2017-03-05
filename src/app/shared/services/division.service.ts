import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Division} from '../shared';

@Injectable()
export class DivisionService {
  divisionStore: Division[] = [];
  divisionFeed: Observable<Division>;
  private divisionObserver: any;
  private dataUrl = 'https://cdn.rawgit.com/Easter2005/small-claims-form/a0b1476d/src/app/shared/data/courts.json';

  constructor(private http: Http) {
    this.divisionFeed = new Observable(observer => {
      this.divisionObserver = observer;
    });
    this.fetchDivisions();
  }

  private fetchDivisions(): void {
    this.http.get(this.dataUrl)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return {
          name: res.division
        }
      }))
      .subscribe(
        divisions => {
          this.divisionStore = divisions;
          divisions.forEach(division => this.divisionObserver.next(division));
        },
        error => console.log(error)
      );
  }
}
