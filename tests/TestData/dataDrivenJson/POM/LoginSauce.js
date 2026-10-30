class HomePage{
    constructor(page){
        this.page = page;
        this.userName = page.locator("#user-name")
        this.password = page.locator("#password")
        this.loginBtn = page.locator("#login-button")
    }
    async LoginApp(){
        await this.userName.fill("standard_user")
        await this.password.fill("secret_sauce")
        await this.loginBtn.click()
    }
}

export default HomePage;