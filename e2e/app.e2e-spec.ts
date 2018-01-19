import { AppPage } from './app.po';

describe('ng-cli-demo App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo(); // Open route to http://localhost:4200/#/
    expect(page.getParagraphText()).toEqual('Welcome to Weasley\'s Wizarding Wheezes!');
  });
});
