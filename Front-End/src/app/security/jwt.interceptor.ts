import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { ApiauthService } from "../services/apiauth.service";
import { Observable } from "rxjs/internal/Observable";


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private apiauthService: ApiauthService){
        
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const usuario = this.apiauthService.usuarioData;


        if (usuario){
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${usuario.token}` 
                }
            });
        }
        return next.handle(request);
    }

}