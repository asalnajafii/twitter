import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITrend} from '../models/trend.model';



@Injectable({providedIn: 'root'})

export class TrendService {
  constructor(private http: HttpClient) {
  }

  getAllTrend(): Observable<ITrend[]> {
    return this.http.get<ITrend[]>('./assets/trends.json');
}

}
