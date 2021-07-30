import {TemplateRef} from '@angular/core';

export interface ICard {
  customClass?: string;
  customTemplate?: TemplateRef<any>;
  HeaderText?: string;
  contentCard?: {
    customTemplate: TemplateRef<any>;
  };
  footerActionCard?: {
    footerText: string;
    footerClick: (...args: any[]) => any;
  };
}
