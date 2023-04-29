import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent {

}

//esse componente ou module foi criado para cuidar desses produtos ou dos detalhes da pagina de produtos
//comando ng g component produtos/detalhes-produto --module produtos.module    essa flag --module já cria em produtos.module a declaração DetalhesProdutoModule
