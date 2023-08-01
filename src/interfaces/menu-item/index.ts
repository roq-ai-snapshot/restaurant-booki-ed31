import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface MenuItemInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  name: string;
  menu_id: string;

  menu?: MenuInterface;
  _count?: {};
}

export interface MenuItemGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  menu_id?: string;
}
