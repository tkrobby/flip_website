var Page = require('../page/page.js')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    TitleDesc: { get: function () { return $('[class="fs-medium"]'); } },
    SendDometic: { get: function () { return $('[class="button-send__domestic"]'); } },
    SendGlobel: { get: function () { return $('[class="button-send__globe"]'); } },
    ButtonAccount: { get: function () { return $('[class="mx-3 my-auto d-none d-md-block nav-item"]'); } },
    ButtonLogut: { get: function () { return $('[class="fa fa-sign-out-alt"]'); } },
});

module.exports = HomePage;