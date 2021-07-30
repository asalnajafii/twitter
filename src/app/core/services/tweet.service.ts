import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITweet} from '../models/tweet.model';

@Injectable({providedIn: 'root'})

export class TweetService {
  constructor(private http: HttpClient) {
  }

  getAllTweet(): Observable<ITweet[]> {
    return this.http.get<ITweet[]>('./assets/tweets.json');
}

}
