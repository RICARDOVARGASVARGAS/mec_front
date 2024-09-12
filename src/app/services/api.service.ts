import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Observable, of } from 'rxjs';
import { API_URL } from '../config/Link';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = API_URL;
  apiStorage = this.apiUrl + 'api/storage/';

  // Información del usuario
  user: any = null;
  token: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private message: NzMessageService
  ) {
    this.loadLocalStorage();
  }

  // Cargar Información del Usuario
  loadLocalStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token') ?? '';
      this.user = JSON.parse(localStorage.getItem('user') ?? '');
    } else {
      this.token = '';
      this.user = null;
    }
  }

  // Verificar Sesión
  isAuthenticated() {
    if (this.token && this.user) {
      // Verificar que el token este vigente
      let token = this.token;
      let expire = JSON.parse(atob(token.split('.')[1])).exp;
      if (Math.floor(new Date().getTime() / 1000) >= expire) {
        this.logout();
        this.toast('warning', 'Tiempo de Sesión Expirado');
        return false;
      }
      return true;
    }
    return false;
  }

  // Iniciar Sesión
  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/auth/login`, {
      email: email,
      password: password,
    });
  }

  // Guardar en Local Storage
  saveLocalStorage(resp: any) {
    if (resp.token && resp.user) {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', JSON.stringify(resp.user));
      this.token = resp.token;
      this.user = resp.user;
      return true;
    }
    return false;
  }

  // Cerrar Sesión
  logout() {
    localStorage.clear();
    this.token = '';
    this.user = null;
    this.router.navigate(['auth/login']);
    this.toast('success', 'Sesión Finalizada');
  }

  // Mensajes
  toast(type = 'success', text: string, duration = 3) {
    this.message.create(type, text, {
      nzDuration: duration * 1000,
    });
  }

  goPage(url: string) {
    this.router.navigate([url]);
  }

  api(url: string, type?: string, body?: any): Observable<any> {
    switch (type) {
      case 'get':
        return this.http.get(`${this.apiUrl}/${url}`);
      case 'post':
        return this.http.post(`${this.apiUrl}/${url}`, body);
      case 'put':
        return this.http.put(`${this.apiUrl}/${url}`, body);
      case 'delete':
        return this.http.delete(`${this.apiUrl}/${url}`);
      default:
        return this.http.get(`${this.apiUrl}/${url}`);
    }
  }

  getDataPeople(document: string = ''): Observable<any> {
    if (document.length !== 8) {
      this.toast('warning', 'El documento debe ser de 8 digitos');
      return of('null');
    } else {
      return this.http.get(
        `https://data-people.codepro-peru.com/api/getPerson/${document}`
      );
    }
  }
}
