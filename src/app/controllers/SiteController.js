class SiteController {

    // [get]/
    index(req, res) {
        res.render('home');
    }

    // [get]/Search
    search(req, res) {
        res.render('search');
    }
}
module.exports = new SiteController;