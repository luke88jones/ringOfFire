import { browser, element, by } from 'protractor';

export class RingOfFirePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rof-root h1')).getText();
  }
}
