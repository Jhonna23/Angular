import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',  
  templateUrl:'./list.component.html' ,
  styleUrl: './list.component.css',
})
export class ListComponent {

@Input()  
public characterList:Character[]=[{
  name: '',
  power: 0
}]

@Output()
public onDeleteId:EventEmitter<number>=new EventEmitter();

onDeleteCharacter(index:number):void {

  this.onDeleteId.emit(index);
 
}



 }
