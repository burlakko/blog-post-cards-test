import { Component, ComponentCreatorArgs } from './component.interface';

export type PageCreatorArgs = ComponentCreatorArgs;

export interface Page extends Component {
  title: string;
  create: (...args: PageCreatorArgs) => Promise<Page> | Page;
}
