// cypress/support/pageObjects/LoginPage.ts
import { BasePage } from '../common/BasePage';
import {LoginPageUI} from '../../interfaces/LoginPageUI';


export class HomePageObject extends BasePage {
  clickToLink(): void {
    
    this.clickToElement(LoginPageUI.KHOAHOC_LINK);
  }

}
