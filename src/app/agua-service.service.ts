import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AguaClass } from './agua-class';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


@Injectable()
export class AguaServiceService {
 
 
  
  constructor(private http: Http){}

  //si devuelves Observable<any> cojes siin tipo
public getAll() : Observable<Agua[]>
{
  // let result =
  // [
  //   { "id": 1, "recurso": "100g de ternera", "consumoEnLitros": "900", tipo: "comida" },
  //   { "id": 2, "recurso": "100g de pollo", "consumoEnLitros": "700", tipo: "comida" },
  //   { "id": 3, "recurso": "100g de setas", "consumoEnLitros": "25", tipo: "comida" },
  //   { "id": 4, "recurso": "100g de calabacines", "consumoEnLitros": "35", tipo: "comida" },
  //   { "id": 5, "recurso": "100g de arroz", "consumoEnLitros": "100", tipo: "comida" },
  //   { "id": 6, "recurso": "1l de gasolina", "consumoEnLitros": "500", tipo: "combustible" },
  //   { "id": 7, "recurso": "1l de biodiésel", "consumoEnLitros": "1200", tipo: "combustible" }
  // ]";


    let result = this.http.get('htp://localhost:3000/agua');
    return result;
};

}


}
