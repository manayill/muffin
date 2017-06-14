import { MuffinPage } from './app.po';

describe('muffin App', () => {
  let page: MuffinPage;

  beforeEach(() => {
    page = new MuffinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
