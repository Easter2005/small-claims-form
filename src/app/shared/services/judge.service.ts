import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class JudgeService {
  constructor(private http: Http) {}
  getJudges() {
        return this.http.get('https://raw.githubusercontent.com/Easter2005/small-claims-form/master/src/app/shared/data/judges.json')
                    .toPromise()
                    .then(res => <any[]> res.json().data)
                    .then(data => { return data; });
    }
}
