// cypress/integration/tests/login.spec.ts
import {PageGeneratorManager} from '../../Action/common/PageGeneratorManager';
import {HomePageObject} from '../../Action/pageObject/HomePageObject';
describe('HomePageObject', () => {
  let  homePageObject:HomePageObject;
  beforeEach(() => {
    cy.visit("https://28tech.com.vn/");
    homePageObject= PageGeneratorManager.getHomePage();
    
  });

  it('should login successfully with valid credentials', () => {
    homePageObject.clickToLink();
  });

});
