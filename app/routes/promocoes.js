modeule.exports = function(app){
    app.get('/produtos', function(req,res,next){
      var connection = app.infra.connectionFactory();
      var ProdutosDAO = new app.infra.ProdutosDAO(connection);
      ProdutosDAO.lista(function (erros, resultados){
    });
    connection.end();
  });

    app.post("/promocoes", function(req,res){
      var promocao = req.body;
      io.emit('novaPromocao', promocao);
      res.redirect('promocoes/form');
    });
}
