import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Produto} from "../../../entitys/produto";
import {ProdutoService} from "../../../shared/services/produto.service";

@Component({
  selector: 'produto-selector',
  templateUrl: './produto.selector.component.html'
})
export class ProdutoSelectorComponent implements OnInit{

  dataSource: Produto[];
  produtoPesquisado: string;
  pesquisando: boolean = false;

  @Input() produtoSelecionado: Produto;
  @Output() valueChange = new EventEmitter<Produto>();

  constructor(private service:ProdutoService) { }

  ngOnInit() {
    this.produtoSelecionado = new Produto();
  }

  onValueChange(event: string){
    this.produtoPesquisado = event;
    if(this.produtoPesquisado.length % 2 == 0){
      this.service.findByDescricao(this.produtoPesquisado).subscribe(produtos => {
        this.dataSource = produtos;
      })
    }
    this.searchValidation();

  }

  searchValidation(){
    if(this.produtoPesquisado.length > 1){
      this.pesquisando = true;
    }
    else{
      this.pesquisando = false;
    }
  }


  nomeVlaueChange(produto: Produto) {
    this.produtoSelecionado = produto;
    this.produtoPesquisado = '';
    this.valueChange.emit(this.produtoSelecionado);

  }
}
