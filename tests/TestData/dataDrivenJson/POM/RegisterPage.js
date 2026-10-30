class RegisterPage{
    constructor(page){
        this.page=page;
        this.RegisterLink = page.getByRole('link',{name:"Register"})
        this.genderRadioBtn = page.getByText("Female")
        this.firstNameTxt = page.getByLabel("First name:")
        this.lastNameTxt = page.getByLabel("Last name:")
        this.emailTxt = page.getByRole('textbox',{name:"Email:"})
        this.passswordTxt = page.locator("#Password")
    }
}
export default RegisterPage;