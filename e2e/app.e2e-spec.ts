import { ExplorerPage } from './app.po';

describe('explorer App', () => {
  let page: ExplorerPage;

  beforeEach(() => {
    page = new ExplorerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
