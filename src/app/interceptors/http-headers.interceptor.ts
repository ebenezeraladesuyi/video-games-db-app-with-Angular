import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ) : Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'X-RapidAPI-Key': '94dbcfa91fmsh25f808f05b4aad9p170497jsnaa784278a15f',
                'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams : {
                key : 'e40e743af2c94b0c916a8aa618fb4473'
            }
        });

        return next.handle(req)
    }
}
 