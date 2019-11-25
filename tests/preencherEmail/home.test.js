
module.exports = {
//'@disabled': true,
    'email inválido': (browser) => {
        let email = browser.page.preencherEmail()

        email.with('abcdefg')
             .alerts('Não localizamos você')
    }
}
    // 'Dado que acesso a página principal': (browser) => {
    //     browser
    //     .resizeWindow(1920, 1080)
    //     .url('https://www.gympass.com/')
       
    // },
    // 'Quando vejo o logo da Gympass': (browser) => {
    //     let logo = '.logo'
    //     browser
    //     .waitForElementVisible(logo, 3000)
    // },
    // 'então consigo clicar no botão entrar': (browser) => {
    //     browser
    //     .click('#header > div.container-fluid > div.navbar-header.pull-right > ul > li:nth-child(3) > a')
    //     .pause(2000)
    //     .end();
