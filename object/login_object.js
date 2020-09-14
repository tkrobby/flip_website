var Page = require('../page/page.js')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    ButtonLoggin: { get: function () { return $('button[type="submit"]'); } },
    AlertErrorLogin: { get: function () { return $('[class="m-0"]'); } },
    FieldEmail: { get: function () { return $('input[name="email"]'); } },
    FiledPassword: { get: function () { return $('input[name="password"]'); } },
});

module.exports = LoginPage;