import {AbstractEntity} from "./base/abstract.entity";
import {Produto} from "./produto";
import {Nota} from "./nota";

export class Itens extends AbstractEntity{

  idItem: number;

  produto:Produto;

  quantidade: number;

  ordem:number;

  nota:Nota;

  valorTotal: number;
}
