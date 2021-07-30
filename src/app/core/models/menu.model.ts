export class IMenu {
  [key: string]: {
    items: IMenuItem[]
  };
}

export interface IMenuItem {
  title: string;
  page: string;
  config?: IMenuConfig;
  svgPath?: string;
}

export interface IMenuConfig {
  activeClass?: string[] | string;
  activeOption?: boolean;
}

