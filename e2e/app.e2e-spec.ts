import { HomeCashPage } from './app.po';

describe('home-cash App', () => {
  let page: HomeCashPage;

  beforeEach(() => {
    page = new HomeCashPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cash works!');
  });
});
