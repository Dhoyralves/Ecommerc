import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutosComponent,
    DetalhesProdutoComponent,
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule, 
    FormsModule
  ]
})
export class ProdutosModule { }

//para criar esse template de produtos vamos criar um module
//comando ng g module produtos --route produtos --module app.module   ... estou gerando um modulo para trabalhar com o lazy loadin... tudo relacionado a produtos vai ficar nesse modulo... isso para pagina carregar mais rapido