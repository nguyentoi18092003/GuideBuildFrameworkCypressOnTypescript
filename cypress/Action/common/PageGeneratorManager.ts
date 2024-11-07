import {HomePageObject} from  '../pageObject/HomePageObject';
export class PageGeneratorManager {
    // Phương thức static để lấy AddEmployeePageObject
    public static getHomePage(): HomePageObject {
        return new HomePageObject();
    }
};