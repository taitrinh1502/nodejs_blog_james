const newsRouter = require('./news');
const siteRouter = require('./site')

function route(app){
    //match với path là news
    app.use('/news', newsRouter);
    
    //match với các path còn lại
    app.use('/', siteRouter);//bao gồm main page, search, footer

}

module.exports = route;
