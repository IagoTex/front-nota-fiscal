import {Injectable} from "@angular/core";
import {AbstractService} from "./base/abstract.service";
import {Nota} from "../../entitys/nota";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class NotaService extends AbstractService<Nota>{

  constructor(protected override http:HttpClient) {
    super(http, 'nota');
  }



}



