import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ITweet} from '../../../../core/models/tweet.model';
import {TweetService} from '../../../../core/services/tweet.service';
import {ICard} from '../../../../core/models/card.model';
import {HelperService} from '../../../../core/services/helper.service';
import {ITrend} from '../../../../core/models/trend.model';
import {Observable} from 'rxjs';
import {TrendService} from '../../../../core/services/trend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tweetsList!: ITweet[];
  public cardConfig!: ICard;
  public sideBarCardConfig!: ICard;
  public followList!: Observable<ITrend[]>;
  @ViewChild('tweetTemplate', {static: true}) tweetTemplate!: TemplateRef<any>;
  @ViewChild('trendTemplate', {static: true}) trendTemplate!: TemplateRef<any>;

  constructor(private tweetService: TweetService,
              private helper: HelperService,
              private trendService: TrendService) {
  }

  ngOnInit(): void {
    this.sideBarCardConfig = {
      customClass: 'trendBox',
      HeaderText: 'Trends for you',
      contentCard: {
        customTemplate: this.trendTemplate,
      },
      footerActionCard: {
        footerText: 'Show more',
        footerClick: () => {
          this.callToast('read more');
        }
      }
    };
    this.followList = this.trendService.getAllTrend();

    this.cardConfig = {
      customTemplate: this.tweetTemplate,
      customClass: 'transparent'
    };
    this.tweetService.getAllTweet().subscribe(resp => {
      this.tweetsList = resp;
    });

  }

  callToast(message: string): void {
    this.helper.popToaster(message, 'close');
  }
}
