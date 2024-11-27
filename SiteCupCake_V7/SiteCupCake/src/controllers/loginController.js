const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('index'); 
    res.render('login');
};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        if(login.errors.length > 0){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('index');
        });
        return;
    }
        req.flash('success', 'Login efetuado com sucesso.');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('index');
        });
    }catch(e){
        console.log(e);
        res.render('404');
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};