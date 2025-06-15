import {Injectable} from "@angular/core";
import {AbstractService} from "./base/abstract.service";
import {Itens} from "../../entitys/itens";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ItensService extends AbstractService<Itens>{
  constructor(protected override http:HttpClient) {
    super(http, 'itens');
  }

}
