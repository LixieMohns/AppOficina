import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosProdutosService {

  private todosProdutos = [
    {id: 1, nome:"Perfume de Carro", valor: 6.99},
    {id: 2, nome:"Almofada", valor: 25.00},
    {id: 3, nome:"Chaveiro", valor: 7.99},
    {id: 4, nome:"Macaco", valor: 32.99}
  ]

  constructor() { }
  
  enviarrDados(){
    return this.todosProdutos
  }

  filtrarrDadosId(id:number){
    const produtoSelecionado = this.todosProdutos.filter (produto => produto.id === id)
    return produtoSelecionado[0]
  }

}
