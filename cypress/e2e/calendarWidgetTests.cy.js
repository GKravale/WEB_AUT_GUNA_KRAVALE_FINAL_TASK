import { PracticeFormPage } from "./pageObjects/practiceFormPage";

describe("Practice Form Submission", () => {
  it("Fills and submits the form with necessary information", () => {
    PracticeFormPage.open();
    PracticeFormPage.fillForm();
    PracticeFormPage.verifySubmission();
  });
});
