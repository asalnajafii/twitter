import {Injectable} from '@angular/core';
import {MenuConfig} from '../config/menu';
import {IMenuItem} from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})

export class MenuConfigService {
  public menuConfig: MenuConfig = new MenuConfig();

  public menuItems(key: string): IMenuItem[] | undefined {
    return this.menuConfig.config[key]?.items;
  }
}
