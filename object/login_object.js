var Page = require('../page/page.js')

var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    ButtonLoggin: { get: function () { return $('button[type="submit"]'); } },
    AlertErrorLogin: { get: function () { return $('[class="m-0"]'); } },
    FieldEmail: { get: function () { return $('input[name="email"]'); } },
    FiledPassword: { get: function () { return $('input[name="password"]'); } },
    ButtonDaftar: { get: function () { return $('[class="button button--white button--nav "]'); } },
    ForgetPassword: { get: function () { return $('[href="/lupa-password"]'); } },
    LinkDaftar: { get: function () { return $('[href="/signup"]'); } },
});

module.exports = LoginPage;