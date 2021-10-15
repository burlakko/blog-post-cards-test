import { Page } from '../interfaces/page.intereface';
import { baseComponent } from '../components/comopnent';

export const basePage: Page = {
  ...baseComponent,
  title: '',
  beforeRender: async function (): Promise<void> {
    document.title = this.title;
  },
  create: async function (
    parent: HTMLElement,
    data: Record<string, any> = {}
  ): Promise<Page> {
    const page = Object.create(this);
    page.parent = parent;
    page.data = data;
    await page
      .beforeRender()
      .then(() => page.render(this.useTemplate(this.data)))
      .then(() => page.afterRender());
    return page;
  },
};
