class NewsController {

    // [get]/news
    index(req, res) {
        res.render('news');
    }

    // [get]/news/:slugs (slugs are params)
    show(req, res) {
        res.send('NodeJS forever');
    }
}
module.exports = new NewsController;