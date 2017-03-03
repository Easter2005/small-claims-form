import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Court} from '../shared';

@Injectable()
export class CourtService {
  courtStore: Court[] = [];
  courtFeed: Observable<Court>;
  private courtObserver: any;
  private dataUrl = '/app/shared/data/courts.json';

  constructor(private http: Http) {
    this.courtFeed = new Observable(observer => {
      this.courtObserver = observer;
    });
    this.fetchCourts();
  }

  private fetchCourts(): void {
    this.http.get(this.dataUrl)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return {
          name: res.name,
          division: res.division
        }
      }))
      .subscribe(
        courts => {
          this.courtStore = courts;
          courts.forEach(court => this.courtObserver.next(court));
        },
        error => console.log(error)
      );
  }
}
