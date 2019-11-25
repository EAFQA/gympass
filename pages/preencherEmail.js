var emailActions = {
    with: function (email) {
        return this
        .navigate()
        .waitForElementPresent('@logo')
        .click('@btnEntrar')
        .setValue('@inputEmail', email)
        .click('@btnContinuar')
    },
    alerts: function (message) {
        return this
        .waitForElementPresent('@alertMessageEmail')
        .assert.containsText('@alertMessageEmail', message)
    }
}
module.exports = {
    url: 'https://www.gympass.com/',
    commands: [emailActions],
    elements: {
        btnEntrar: '#header > div.container-fluid > div.navbar-header.pull-right > ul > li:nth-child(3) > a',
        inputEmail: '.form-control',
        btnContinuar: '#gps > div.main_container.gym_search_map_hidden > div.container-fluid > div > div > div > section > div > div > section > div.form-content > form > div.button-holder > input',
        logo: '.logo',
        alertMessageEmail:  '#flash > div > div' 
    }
}