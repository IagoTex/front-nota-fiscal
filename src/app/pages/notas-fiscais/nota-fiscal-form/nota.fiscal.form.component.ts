import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Nota} from "../../../entitys/nota";
import {Produto} from "../../../entitys/produto";
import {Itens} from "../../../entitys/itens";
import {NotaService} from "../../../shared/services/nota.service";
import {ProdutoService} from "../../../shared/services/produto.service";
import {DxTreeListComponent} from "devextreme-angular";
@Component({
  selector: 'nota-fiscal-form',
  templateUrl: './nota.fiscal.form.component.html',
  styleUrls: ['./nota.fiscal.component.scss']
})
export class NotaFiscalFormComponent implements OnInit{

  private temIdCounter = -1;

  produtos:Produto[];

  itens:Itens[];

  iten:Itens;

  @Input() nota:Nota;

  @Input() titulo:string;

  @ViewChild('treeList') treeList: DxTreeListComponent;

  constructor(private service:NotaService, private produtoServie:ProdutoService) {
  }

  ngOnInit() {
    this.nota = new Nota();
    this.nota.itens = [];
    this.iten = new Itens();

    this.buscaProdutos();
  }

  buscaProdutos(){
    this.produtoServie.findAll().subscribe(produtos =>{
      this.produtos = produtos;
    })
  }


  onInitNewRow(item: Itens){
    item.idItem = this.temIdCounter--;
    item.quantidade = 1;
    item.produto = null;

  }

  adicionaItens(itemNovo: any){

    itemNovo.data.produto = this.iten.produto;
    itemNovo.data.quantidade = this.iten.quantidade;
    itemNovo.data.idItem = this.iten.idItem;
  }

  preparaItemEdicao(e: any){
    const itemSelecionado = e.data;

    this.iten.idItem = itemSelecionado.idItem;
    this.iten.produto = itemSelecionado.produto;
    this.iten.quantidade = itemSelecionado.quantidade;

  }

  editaItens(e: any){
    const item = this.nota.itens.find(itemOnDt => itemOnDt.idItem === e.key);

    if (item){
      item.produto = this.iten.produto;
      item.quantidade = this.iten.quantidade;
      console.log("Item editado")
    }
    console.log("Não entrou nem no if")

  }

  deletarItens(iten: any){
    if(this.nota.itens.includes(iten)){
      this.nota.itens.splice(this.nota.itens.indexOf(iten), 1);
    }
  }
  mostratDataSource(){
    console.log(this.nota.itens)
    this.treeList.instance.getDataSource().reload()

  }





}
