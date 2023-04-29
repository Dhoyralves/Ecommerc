import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined; //criação da propriedade produto que vai ser a interface IProduto, inicialmente indefinida
  quantidade = 1; // aqui é do two-way data build do input do html

  constructor (
    private produtosService: ProdutosService, //aqui estou injetando o serviço de produtos,onde o produtosService vai ser o serviço de produtos 
    private route: ActivatedRoute //note que na url que recebemos o id do produto, pra depois disso pegarmos as informa~ções do produto
  ) { }

  ngOnInit(): void { //quando inicializarmos esse componente vamos pegar os parametros da rota
    const routeParams = this.route.snapshot.paramMap; //aqui tras os parametros da rota ou seja da url
    const produtoId = Number(routeParams.get("id")); //sempre converta para number, pq ele tá recebendo uma string no getOne(productId) //  esse get("id") vem do produtos-routing.module com o path: id
    this.produto = this.produtosService.getOne(produtoId); // obtenhaum produto e ele pede o parametro do id que é (produtoId)
    console.log("c", this.produto)
  }
}

//esse componente ou module foi criado para cuidar desses produtos ou dos detalhes da pagina de produtos
//comando ng g component produtos/detalhes-produto --module produtos.module    essa flag --module já cria em produtos.module a declaração DetalhesProdutoModule
