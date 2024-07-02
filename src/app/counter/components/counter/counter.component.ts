// import { Component } from "@angular/core";




// @Component({
//     selector:'app-counter',
//     template:'<h1>Hola Counter<h1>'
// })
// export class CounterComponent{

// }

import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    <h3>
  Counter: {{counter}}
</h3>

<button (click)="increaseBy(1)"> +1</button>
<button (click)="increaseBy(-1)"> -1</button>
<button (click)="increaseBy(0)"> reset</button>
    `
})

export class CounterComponent implements OnInit {
    constructor() { }

   
 public counter: number =10;

  increaseBy(value:number) :void{
  if (value==1)
  this.counter+=1;
  else if(value==-1){

  this.counter-=1;

  }
  else
  this.counter=10;


 }

    ngOnInit() { }
}