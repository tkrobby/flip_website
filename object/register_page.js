var Page = require('../page/page.js')

var ForgetPasswordPage = Object.create(Page, {
    /**
     * define elements
     */
    TitlePage: { get: function () { return $('[class="content__title undefined"]'); } },
    SubTitlePage: { get: function () { return $('[class="content__subtitle"]'); } },
});

module.exports = ForgetPasswordPage;