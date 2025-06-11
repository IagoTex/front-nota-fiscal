import {Injectable} from "@angular/core";
import {AbstractService} from "./base/abstract.service";
import {Cliente} from "../../entitys/cliente";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {URL_API} from "../../config/api.url";

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends AbstractService<Cliente>{

  constructor(protected override http:HttpClient) {
    super(http, 'cliente');
  }

  findByNome(nome:string): Observable<Cliente>{
    return this.http.get<Cliente>(`${URL_API}/cliente/nome/${nome}`);
  }
}
