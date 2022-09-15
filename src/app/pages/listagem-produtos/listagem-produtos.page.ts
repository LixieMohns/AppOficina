import { Component, OnInit } from '@angular/core';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.page.html',
  styleUrls: ['./listagem-produtos.page.scss'],
})
export class ListagemProdutosPage implements OnInit {

  public dadosProdutos : any

  constructor(private objDadoss: DadosProdutosService) {
    this.dadosProdutos = objDadoss.enviarrDados()
  }


  ngOnInit() {
  }

}
