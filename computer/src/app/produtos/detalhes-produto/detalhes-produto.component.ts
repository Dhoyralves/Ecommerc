import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

  produto: IProduto | undefined;
  quantidade = 1;

  constructor (
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id")); //sempre converta para number, pq ele tá recebendo uma string no getOne(productId)
    this.produto = this.produtosService.getOne(produtoId);
  }
}

//esse componente ou module foi criado para cuidar desses produtos ou dos detalhes da pagina de produtos
//comando ng g component produtos/detalhes-produto --module produtos.module    essa flag --module já cria em produtos.module a declaração DetalhesProdutoModule
