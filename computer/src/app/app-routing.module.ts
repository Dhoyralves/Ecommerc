import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNaoEncontradoComponent } from './pagina-nao-encontrado/pagina-nao-encontrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }, //ele adcionou logo essa route devido o comando ng g module --ROUTE
  { path: "", redirectTo: "produtos", pathMatch: "full"}, //sso é para quando eu abrir a raiz do site ir direto para pagina de produtos
  { path: "**", component: PaginaNaoEncontradoComponent } //pagina não encontrada

]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// esse roteamento é a navegação do site, isso pq vamos ter uma pagina pra produtos, para carrinho e etc... essas paginas vão navegar entre o cabeçalho e rodapé

// o comando pra gerar esse module é ng g module nomeDoModule --flat --module app.module       o --flat é pq ele não vai estar numa pasta proria, vai ficar somente o arquivo           o --module é pq eu vou adcionar esse module ao app.module
