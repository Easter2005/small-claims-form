import { SmallClaimsFormPage } from './app.po';

describe('small-claims-form App', function() {
  let page: SmallClaimsFormPage;

  beforeEach(() => {
    page = new SmallClaimsFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
