// Importar el núcleo de Angular
import {Component} from 'angular2/core';
//directivas del router
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    templateUrl: "app/view/home.html",
    directives:[ROUTER_DIRECTIVES],//Paso un array con todos loc componentes que deseo utilizar    
})

// Clase del componente donde iran los datos y funcionalidades
export class AppComponent { 
	public titulo:string ="Restaurantes con angular2"
}