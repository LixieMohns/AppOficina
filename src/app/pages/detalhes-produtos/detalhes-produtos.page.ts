import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosProdutosService } from 'src/app/services/dados-produtos.service';

@Component({
  selector: 'app-detalhes-produtos',
  templateUrl: './detalhes-produtos.page.html',
  styleUrls: ['./detalhes-produtos.page.scss'],
})
export class DetalhesProdutosPage implements OnInit {

  public dadorSelecionado : any

  constructor(
    private objDadoss : DadosProdutosService,
    private router : ActivatedRoute 
    ) { }

  ngOnInit() {
    const id : number = Number(this.router.snapshot.paramMap.get('id'))

    this.dadorSelecionado = this.objDadoss.filtrarrDadosId(id)
  }

}
