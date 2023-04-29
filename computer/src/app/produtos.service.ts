import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos; //esse serviço que tem acesso aos atributos 
  //começa com a prorpiedade produtos do tipo vetor de IProdutos = e vai começar com produtos; ele tem acesso direto ao arquivo dos produtos


  constructor() { }

    //dois metodos

  getAll() {
    return this.produtos; //retorna a lista de produtos
  }

  getOne (produtoId: number){ // aqui ele recebe o id do produto
    //console.log("sopa", this.produtos)//isso é test de bug kk
    return this.produtos.find(produto => produto.id = produtoId); // retorna o produto atraves do metodo find() e dentro vai a condição a ser especificada
    // ele vai encontra um produtoonde o produto.id seja igual o produtoId do parametro da função
  }
  //vou utilizar esses dois meotod snas paginas
}
// a logica dos detalhes das paginas dos produtos vão vir em partes desse serviço, eçe é criado aqui para cuidar de todas operações relacionadas com produtos, obtendo atraves do id da route
//ng g service produtos
