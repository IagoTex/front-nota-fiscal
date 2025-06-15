import {AbstractEntity} from "./base/abstract.entity";
import {Cliente} from "./cliente";
import {Itens} from "./itens";

export class Nota extends AbstractEntity{

  data:Date;

  cliente:Cliente;

  itens: Itens[]

  valorTotal: number;
}
