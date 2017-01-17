module.exports = function(app){
   app.get('/produtos', function(req,res){
        var connection = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(connection);
        ProdutosDAO.lista(function (err, results){
          console.log(err);
            res.format({
                html: function(){
                  res.render('produtos/lista', {lista:results});
                },
                json: function(){
                  res.json(results);
                }
            });
        });
        connection.end();
  });

    app.get('/produtos/form', function(req, res){
        res.render('produtos/form')
    });

    app.post('/produtos', function(req, res){

      var produto = req.body;

      req.assert('titulo', 'Titulo é obrigatório').notEmpty();
      req.assert('preco', 'Preço é obrigatório').isFloat();

      var erros = req.validationErrors();
      if(erros){
        res.render('produtos/form',{errosValidacao:erros, produto:produto});
        return;
      }

      var connection = app.infra.connectionFactory();
      var ProdutosDAO = new app.infra.ProdutosDAO(connection)
      ProdutosDAO.salva(produto,function(err,results){
            res.redirect('/produtos');
      });
    });
}
