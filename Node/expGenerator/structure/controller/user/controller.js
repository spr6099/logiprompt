exports.indexpage = (req,res,next)=>{
    res.render('user/home')
}

exports.registerPage=(req,res,next)=>{
    res.render('user/register')
}
exports.Loginpage=(req,res,next)=>{
    res.render('user/login')
}