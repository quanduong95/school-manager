

class HomeController{
    
    //GET /
    index(req, res) {
        res.render('home/home');
    }
}

module.exports = new HomeController();