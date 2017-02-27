module.exports = function(app){
    app.get('/', function(req,res){
        var connection = app.infra.connectionFactoy();
        var produtosDAO = new app.infra.produtosDAO(connection);
        produtosDAO.lista(function(erros, resultados){
            res.render('home/index', {livros:resultados})
        });
        connection.end();
    });
}
