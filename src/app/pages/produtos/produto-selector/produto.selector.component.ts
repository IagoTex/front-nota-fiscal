import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Produto} from "../../../entitys/produto";
import {ProdutoService} from "../../../shared/services/produto.service";
import {DxSelectBoxComponent} from "devextreme-angular";

@Component({
  selector: 'produto-selector',
  templateUrl: './produto.selector.component.html'
})
export class ProdutoSelectorComponent implements OnInit{

  dataSource: Produto[];
  produtoPesquisado: string;
  focus: boolean;
  pesquisando: boolean = false;

  @Input() produtoSelecionado: Produto;
  @Output() valueChange = new EventEmitter<Produto>();

  @ViewChild('resultados') resultados: DxSelectBoxComponent;

  constructor(private service:ProdutoService) { }

  ngOnInit() {
    this.produtoSelecionado = new Produto();
  }

  onValueChange(event: string){
    this.produtoPesquisado = event;
    if(this.produtoPesquisado == '' || this.produtoPesquisado == null){
      this.produtoSelecionado = null;
    }
    if(this.produtoPesquisado.length % 2 == 0 && this.produtoPesquisado){
      this.service.findByDescricao(this.produtoPesquisado).subscribe(produtos => {
        this.dataSource = produtos;
        this.pesquisando = true;
        setTimeout(() =>{
          if(this.resultados?.instance){
            this.resultados.instance.open()
          }
        })
      })
    }
    this.searchValidation();
  }

  nomeVlaueChange(produto: Produto) {
    this.produtoSelecionado = produto;
    if(this.produtoSelecionado.id != null){
      this.pesquisando = false;
    }
    this.produtoPesquisado = `[${produto.codProduto}] - ${produto.descricao}`;
    this.valueChange.emit(this.produtoSelecionado);

  }


  searchValidation(){
    if(this.focus == true){
      this.pesquisando = true;
    }
    else{
      this.pesquisando = false;
    }
  }

  formataProduto(produtoFormatado: any){
    return produtoFormatado ? `[${produtoFormatado.codProduto}] - ${produtoFormatado.descricao}` : ''
  }
}
