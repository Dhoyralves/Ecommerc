import { Component, OnInit } from '@angular/core';
import { IProduto } from '../produtos'; //esse produtos funcionava antes de ser acrescentado o serviço{IProdutos, produtos} from...
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
 //produtos: IProduto [] = produtos; //isso vem da diretva de lista de produtos, lá do html // eu criei essa propriedade produtos... destrinchando... a minha propriedade produtos vai ser um vetor do tipo IProduto = tendo dentro dela um são produtos que estçao naquele arquivo produtos.ts
 

 //já usando o serviço
 produtos: IProduto [] | undefined; //aqui ele pode ser uma lista de produtos ou pode ser indefinido

 constructor (
  private produtosService: ProdutosService //aqui é a importação do serviço de produtos
 ) { }

  ngOnInit (): void {
    this.produtos = this.produtosService.getAll();
//aqui ele obtem todos produtos
  }
  //apenas com isso a pagina de produtos funcina igual, só que agora pegamos as informações atraves de um serviço... em produção fazemos esss requisições atraves de serviços... quando estamos trablhando com servidores, fazemos as requisições para o backend atraves de um serviço


}
