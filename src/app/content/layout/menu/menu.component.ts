import {Component, OnInit} from '@angular/core';
import {MenuConfigService} from '../../../core/services/menuConfig.service';
import {IMenuItem} from '../../../core/models/menu.model';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuItems: IMenuItem[] | undefined = [];

  constructor(public menuConfigService: MenuConfigService) {
  }

  ngOnInit(): void {
    this.menuItems = this.menuConfigService.menuItems('header');
  }
}
