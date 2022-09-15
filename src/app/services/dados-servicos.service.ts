import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosServicosService {

  private todosServicos = [
    {id: 1, nome:"Alinhamento", valor: 69.99},
    {id: 2, nome:"Balanceamento", valor: 59.99},
    {id: 3, nome:"Troca de Óleo", valor: 39.99},
    {id: 4, nome:"Troca de Pneu", valor: 99.99}
  ]

  constructor() { }

  enviarDados(){
    return this.todosServicos
  }

  filtrarDadosId(id:number){
    const servicoSelecionado = this.todosServicos.filter (servico => servico.id === id)
    return servicoSelecionado[0]
  }

}
