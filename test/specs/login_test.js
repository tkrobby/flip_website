const { assert } = require("chai");
const LoginPage = require('../../object/login_object.js')
const HomePage = require('../../object/homepage_object.js')

describe("Login not input email and password", function(){
    it("open browser", function(){
        browser.url('')
    });

    it("Login invalid", function(){
        LoginPage.ButtonLoggin.click()
        browser.pause(5000)
    }) 

    it("varify alert error", function(){
        const AlertError = LoginPage.AlertErrorLogin.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })
})

describe("Login invalid email", function(){
    
    it("Input email invalid", function(){
        LoginPage.FieldEmail.setValue('wakwaw@gmail.com')
        browser.pause(5000)
    });
    it("Input password", function(){
        LoginPage.FiledPassword.setValue('123robby')
    });
    it("click button", function(){
        LoginPage.ButtonLoggin.click()
        browser.pause(5000)
    })

    it("varify alert error", function(){
        const AlertError = LoginPage.AlertErrorLogin.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })
})

describe("Login invalid password", function(){
    
    it("Input email", function(){
        LoginPage.FieldEmail.setValue('tkrobby@gmail.com')
        browser.pause(5000)
    });
    it("Input invalid password", function(){
        LoginPage.FiledPassword.setValue('Password123')
    });
    it("click button", function(){
        LoginPage.ButtonLoggin.click()
        browser.pause(5000)
    })
    it("varify alert error", function(){
        const AlertError = LoginPage.AlertErrorLogin.getText()
        assert.equal('Email atau Password salah.',AlertError)
    })

})

describe("Login valid username and password", function(){
    
    it("Input email", function(){
        LoginPage.FieldEmail.setValue('tkrobby@gmail.com')
        browser.pause(5000)
    });
    it("Input password", function(){
        LoginPage.FiledPassword.setValue('123robby')
    });
    it("click button", function(){
        LoginPage.ButtonLoggin.click()
        browser.pause(5000)
    })

    it("verify homepage", function() {
        const GetTitlePage = HomePage.TitleDesc.getText()
        assert.equal('Klik tombol kirim uang untuk membuat transaksi pertamamu!', GetTitlePage)
        const KirimUangLocal = HomePage.SendDometic.getText()
        assert.equal('Kirim Uang', KirimUangLocal)
        const KirimUangInter = HomePage.SendGlobel.getText()
        assert.equal('Kirim Uang ke Luar Negeri', KirimUangInter)

    })

    it("click account", function(){
        HomePage.ButtonAccount.click()
        browser.pause(5000)
    })

    it("click Logout", function(){
        HomePage.ButtonLogut.click()
        browser.pause(5000)
    })

})

