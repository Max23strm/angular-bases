import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onCharacterDelete:EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[]=[

  ]

  emitIndex(id:string):void {
    this.onCharacterDelete.emit(id)
  }
}
