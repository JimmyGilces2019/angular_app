import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'jimmy gilces vargas';

  estado:boolean=true;

  nombres:string[] = ['Andres Galarza',
                      'Andrea Piguave',
                      'Jose Enrique',
                      'Jimmy Gilces',
                      'Eduardo Argudo',
                      'Ricardo Vergara']
}

