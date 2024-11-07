export class BasePage {
    openUrl(url: string): void {
      cy.visit(url);
    }
  
    getTitle(): Cypress.Chainable<string> {
      return cy.title();
    }
    findElement(locator: string){
        return cy.get(locator);
    }
    clickToElement(locator: string): void{
        this.findElement(locator).first().click();    
    }
  }