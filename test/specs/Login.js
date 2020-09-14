const { assert } = require("chai");

describe("Login not input email and password", function(){
    it("open browser", function(){
        browser.url('')
    });

    it("Login invalid", function(){
        const ButtonLoggin = $('button[type="submit"]');
        ButtonLoggin.click()
        browser.pause(5000)
    }) 

    it("varify alert error", function(){
        const EmailAndPassword = $('[class="m-0"]')
        const AlertError = EmailAndPassword.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })
})

describe("Login invalid email", function(){
    
    it("Input email invalid", function(){
        const FieldEmail = $('input[name="email"]')
        FieldEmail.setValue('wakwaw@gmail.com')
        browser.pause(5000)
    });
    it("Input password", function(){
        const FiledPassword = $('input[name="password"]')
        FiledPassword.setValue('123robby')
    });
    it("click button", function(){
        const ButtonLoggin = $('button[type="submit"]');
        ButtonLoggin.click()
        browser.pause(5000)
    })

    it("varify alert error", function(){
        const EmailAndPassword = $('[class="m-0"]')
        const AlertError = EmailAndPassword.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })
})

describe("Login invalid password", function(){
    
    it("Input email", function(){
        const FieldEmail = $('input[name="email"]')
        FieldEmail.setValue('tkrobby@gmail.com')
        browser.pause(5000)
    });
    it("Input password", function(){
        const FiledPassword = $('input[name="password"]')
        FiledPassword.setValue('password123')
    });
    it("click button", function(){
        const ButtonLoggin = $('button[type="submit"]');
        ButtonLoggin.click()
        browser.pause(5000)
    })
    it("varify alert error", function(){
        const EmailAndPassword = $('[class="m-0"]')
        const AlertError = EmailAndPassword.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })

})

describe("Login valid username and password", function(){
    
    it("Input email", function(){
        const FieldEmail = $('input[name="email"]')
        FieldEmail.setValue('tkrobby@gmail.com')
        browser.pause(5000)
    });
    it("Input password", function(){
        const FiledPassword = $('input[name="password"]')
        FiledPassword.setValue('123robby')
    });
    it("click button", function(){
        const ButtonLoggin = $('button[type="submit"]');
        ButtonLoggin.click()
        browser.pause(5000)
    })

    it("verify homepage", function() {
        const TitlePage = $('[class="fs-medium"]')
        const SendDometic = $('[class="button-send__domestic"]')
        const SendGlobel = $('[class="button-send__globe"]')

        const GetTitlePage = TitlePage.getText()
        assert.equal('Klik tombol kirim uang untuk membuat transaksi pertamamu!', GetTitlePage)
        const KirimUangLocal = SendDometic.getText()
        assert.equal('Kirim Uang', KirimUangLocal)
        const KirimUangInter = SendGlobel.getText()
        assert.equal('Kirim Uang ke Luar Negeri', KirimUangInter)

    })

    it("click account", function(){
        const ButtonAccount = $('[class="mx-3 my-auto d-none d-md-block nav-item"]');
        ButtonAccount.click()
        browser.pause(5000)
    })

    it("click Logout", function(){
        const ButtonLogut = $('[class="fa fa-sign-out-alt"]');
        ButtonLogut.click()
        browser.pause(5000)
    })

})

