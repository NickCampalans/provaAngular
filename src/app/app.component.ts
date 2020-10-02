import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //numeros: number[] = [];
  numeros = new Array<number>(1000);
  comptadors = new Array<number>(21);

  a: number;
  
  constructor() {
    this.a = -1;
    console.log("A = " + this.a);

    // Inicialitzem les dades
    this.initData();

    // Calcular histograma
    this.computeHistograms();
  }

  initData() {
    // Inicialitzem els numeros.
    /*for (let index = 0; index < 1000; index++) {
      this.numeros.push(Math.round(Math.random() * 20));
    }*/
    for (let index = 0; index < this.numeros.length; index++) {
      this.numeros[index] = Math.round(Math.random() * 20);
    }

    // Inicialitzem els comptadors
    for (let index = 0; index < this.comptadors.length; index++) {
      this.comptadors[index] =  0;
    }
  }

  computeHistograms() {
    for (let index = 0; index < this.numeros.length; index++) {
      this.comptadors[this.numeros[index]] += 1;
    }
  }

  ngOnInit() {

  }

  incA() {
    this.a += 1;
    console.log("A = " + this.a);
    
  }
}
