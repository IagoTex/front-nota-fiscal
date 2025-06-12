import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {tap} from "rxjs/operators";
import {URL_API} from "../../../config/api.url";
import {AuthRequest} from "../../../entitys/security/authRequest";
import {AuthResponse} from "../../../entitys/security/authResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  private baseUrl = URL_API+"/api/auth";
  private tokenKey = 'jwtToken';

  private isAuthenticadedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient, private router: Router) { }

  private hasToken(): boolean{
    return !!localStorage.getItem(this.tokenKey)
  }

  isAuthenticated(): Observable<boolean>{
    return this.isAuthenticadedSubject.asObservable();
  }

  login(authRequest: AuthRequest): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, authRequest)
      .pipe(
        tap(response => {
          this.saveToken(response.jwt);
          this.isAuthenticadedSubject.next(true);
        })
      );
  }

  register(authRequest: AuthRequest): Observable<AuthRequest>{
    return this.http.post<AuthRequest>(`${this.baseUrl}/register`, authRequest);
  }

  logout(): void{
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticadedSubject.next(false);
    this.router.navigate(['/login']);
  }

  saveToken(token:string): void{
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
