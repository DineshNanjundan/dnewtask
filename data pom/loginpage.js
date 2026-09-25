class LoginPage {

  constructor(page) {
    this.page = page;
    // 1. Define as a Locator in the constructor
    this.username = page.locator('#user-name');
    this.password = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }
  async navigatetoSaucedemologin(){
    await this.page.goto('/')
  }
  async fillingUsername(user) {
    // 2. Use it directly without this.page.locator()
    await this.username.fill(user);
  
  }
  async fillingpassword(pass) {
    await this.password.fill(pass);
  
  }
  async clickLoginButton() {
    await this.loginButton.click();
  
  }
}

export default LoginPage