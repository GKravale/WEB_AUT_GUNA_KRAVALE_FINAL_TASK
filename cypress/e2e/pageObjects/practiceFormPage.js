import { BasePage } from "./basePage";

export class PracticeFormPage extends BasePage {
  static open() {
    super.visit("https://demoqa.com/automation-practice-form");
  }

  static fillForm() {
    cy.get("#firstName").type("Jane");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type("jane.doe@gmail.com");
    cy.get('label[for="gender-radio-2"]').click();
    cy.get("#userNumber").type("1234567890");

    // 28th of February, 1930.
    cy.get("#dateOfBirthInput").click();
    cy.get(".react-datepicker__month-select").select("February");
    cy.get(".react-datepicker__year-select").select("1930");
    cy.get(
      ".react-datepicker__day--028:not(.react-datepicker__day--outside-month)"
    ).click();

    //subject economics
    cy.get("#subjectsInput").type("Economics{enter}");

    // hobbie music 3
    cy.get('label[for="hobbies-checkbox-3"]').click();

    cy.get('input[type="file"]').selectFile("cypress/files/image.png");

    cy.get("#currentAddress").type("Adress 123");

    // NCR state
    cy.get("#state").click();
    cy.get("#react-select-3-input").type("NCR{enter}");

    // Delhi city
    cy.get("#city").click();
    cy.get("#react-select-4-input").type("Delhi{enter}");

    cy.get("#submit").click();
  }

  static verifySubmission() {
    cy.get(".modal-content").within(() => {
      cy.contains("Jane Doe");
      cy.contains("jane.doe@gmail.com");
      cy.contains("Female");
      cy.contains("1234567890");
      cy.contains("28 February,1930");
      cy.contains("Economics");
      cy.contains("Music");
      cy.contains("image.png");
      cy.contains("Adress 123");
      cy.contains("NCR Delhi");
    });
  }
}
