import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from "@angular/core";
import {Nota} from "../../../entitys/nota";
import {Produto} from "../../../entitys/produto";
import {Itens} from "../../../entitys/itens";
import {NotaService} from "../../../shared/services/nota.service";
import {ProdutoService} from "../../../shared/services/produto.service";
import {DxFormComponent, DxTreeListComponent} from "devextreme-angular";

type TipoFormulario = 'create' | 'update' | 'delete';

@Component({
  selector: 'nota-fiscal-form',
  templateUrl: './nota.fiscal.form.component.html',
  styleUrls: ['./nota.fiscal.component.scss']
})
export class NotaFiscalFormComponent implements OnInit{

  private temIdCounter = -1;

  iten:Itens;

  produtos:Produto[];

  @Input() nota:Nota;

  @Input() titulo:string;

  @Input() textoBotao;

  @Input() tipoFormulario: TipoFormulario = 'create';

  @ViewChild('treeList') treeList: DxTreeListComponent;

  @ViewChild('form') form: DxFormComponent;

  constructor(private service:NotaService, private produtoServie:ProdutoService) { }

  ngOnInit() {
    this.nota = new Nota();
    this.iten = new Itens();
    this.nota.itens = [];

    this.buscaProdutos();
  }

  buscaProdutos(){
    this.produtoServie.findAll().subscribe(produtos =>{
      this.produtos = produtos;
    });
  }

  onInitNewRow(item: Itens){
    item.idItem = this.temIdCounter--;
    item.quantidade = 1;
    item.produto = null;

  }

  adicionarItens(itemNovo: any){

    itemNovo.data.produto = this.iten.produto;
    itemNovo.data.quantidade = this.iten.quantidade;
    itemNovo.data.idItem = this.iten.idItem;
  }

  prepararItemEdicao(e: any){
    const itemSelecionado = e.data;

    this.iten.idItem = itemSelecionado.idItem;
    this.iten.produto = itemSelecionado.produto;
    this.iten.quantidade = itemSelecionado.quantidade;
  }

  editarItens(e: any){
    const item = this.nota.itens.find(itemOnDt => itemOnDt.idItem === e.key);

    if (item){
      item.produto = this.iten.produto;
      item.quantidade = this.iten.quantidade;
    }
  }

  deletarItens(iten: any){
    if(this.nota.itens.includes(iten)){
      this.nota.itens.splice(this.nota.itens.indexOf(iten), 1);
    }
  }

  onSubmit(){

    switch (this.tipoFormulario){

      case "create":
        this.service.save(this.nota);
        break;

      case "update":
        this.service.save(this.nota);
        break;

      case "delete":
        this.service.delete(this.nota.id);
        break;

    }

  }

  apagaNota(){
    this.nota.id = null;
    this.nota.itens = []
    this.form.instance.resetValues();
    this.form.instance.reset();
  }





}
