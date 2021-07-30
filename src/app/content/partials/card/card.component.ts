import {Component, Input} from '@angular/core';

import {ICard} from '../../../core/models/card.model';
import {ITweet} from '../../../core/models/tweet.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() cardConfig!: ICard;
  @Input() cardItem!: any;
}
