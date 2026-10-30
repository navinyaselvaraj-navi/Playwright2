class LoginPage{
    constructor(page){
        this.page=page;
        this.loginlink = page.getByRole('link',{name:"Log in"})
        this.emailTxt = page.getByRole('textbox',{name:"Email:"})
        this.passwordTxt = page.getByRole('textbox',{name:"Password:"})
        this.loginBtn = page.locator(".button-1.login-button")
    }
    // async ClickOnLoginLink(){
    //   await  this.loginlink.click()
    // }

    // async EnterEmail(){
    //     await this.emailTxt.fill("navinyaselvaraj@gmail.com")
    // }

    // async EnterPassword(){
    //     await this.passwordTxt.fill("tuyiij24")
    // }

    // async ClickOnLoginBtn(){
    //     await this.loginBtn.click()
    // }

    async LoginToApp(){
        // await this.ClickOnLoginLink();
        // await this.EnterEmail();
        // await this.EnterPassword();
        // await this.ClickOnLoginBtn();

        await this.loginlink.click();
        await this.emailTxt.fill("navinyaselvaraj@gmail.com")
        await this.passwordTxt.fill("tuyiij24")
        await this.loginBtn.click()
    }
}

export default LoginPage;