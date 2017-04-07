import { RingOfFirePage } from './app.po';

describe('ring-of-fire App', () => {
  let page: RingOfFirePage;

  beforeEach(() => {
    page = new RingOfFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rof works!');
  });
});
