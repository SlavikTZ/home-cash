import { browser, element, by } from 'protractor';

export class HomeCashPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cash-root h1')).getText();
  }
}
