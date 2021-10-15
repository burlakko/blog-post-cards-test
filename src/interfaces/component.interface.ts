export type ComponentCreatorArgs = [HTMLElement, Record<string, any> | void];

export interface Component {
  data: Record<string, any>;
  parent: HTMLElement;
  useTemplate: (data?: Record<string, any>) => string;
  beforeRender?: () => Promise<void> | void;
  afterRender?: () => Promise<void> | void;
  render: () => Promise<void> | void;
  create: (...args: ComponentCreatorArgs) => Promise<Component> | Component;
}
