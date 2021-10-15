import { Component } from '../interfaces/component.interface';

export const baseComponent: Component = {
  parent: null,
  data: {},
  useTemplate: (data?: Record<string, any>) => '',
  beforeRender: async function (): Promise<void> {},
  afterRender: async function (): Promise<void> {},
  render: async function (): Promise<void> {
    this.parent.insertAdjacentHTML('beforeend', this.useTemplate(this.data));
  },
  create: async function (
    parent: HTMLElement,
    data: Record<string, any> = {}
  ): Promise<Component> {
    const component = Object.create(this);
    component.parent = parent;
    component.data = data;
    await component
      .beforeRender()
      .then(() => component.render())
      .then(() => component.afterRender());
    return component;
  },
};
