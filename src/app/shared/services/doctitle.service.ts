import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Doctitle} from '../shared';

@Injectable()
export class DoctitleService {
  doctitleStore: Doctitle[] = [];
  doctitleFeed: Observable<Doctitle>;
  private doctitleObserver: any;
  private dataUrl = 'https://cdn.rawgit.com/Easter2005/small-claims-form/a0b1476d/src/app/shared/data/titles.json';

  constructor(private http: Http) {
    this.doctitleFeed = new Observable(observer => {
      this.doctitleObserver = observer;
    });
    this.fetchTitles();
  }

  private fetchTitles(): void {
    this.http.get(this.dataUrl)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return {
          name: res.name
        }
      }))
      .subscribe(
        titles => {
          this.doctitleStore = titles;
          titles.forEach(title => this.doctitleObserver.next(title));
        },
        error => console.log(error)
      );
  }

}
