exports.adminIndex=(req,res,next)=>{
    res.render('admin/admin',{admin:true})
}