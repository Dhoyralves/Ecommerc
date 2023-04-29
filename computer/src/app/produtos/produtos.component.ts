import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos'; //esse produtos funcionava antes de ser acrescentado o serviço
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
 //produtos: IProduto [] = produtos; //isso vem da diretva de lista de produtos, lá do html // eu criei essa propriedade produtos... destrinchando... a minha propriedade produtos vai ser um vetor do tipo IProduto = tendo dentro dela um são produtos que estçao naquele arquivo produtos.ts

 produtos: IProduto [] | undefined;

 constructor (
  private produtosService: ProdutosService
 ) { }

  ngOnInit (): void {
    this.produtos = this.produtosService.getAll();
  }



}
