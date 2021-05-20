let custoProduto = 100.00;
let custoProdutoeimp = (custoProduto * 1.20);
let vendaProduto = -1;
let lucroVenda = vendaProduto - custoProdutoeimp;
let lucroVendaTot = lucroVenda * 1000;

if ((custoProduto < 0) || (vendaProduto <0)){
     console.log("Valores de entrada Incorretos!");
    
}
else{ 
     console.log("Lucro na Venda de 1000 peças foi de R$ "+lucroVendaTot);
}

