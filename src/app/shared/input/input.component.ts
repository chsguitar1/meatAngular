import { Component, OnInit,Input, ContentChild,AfterContentInit } from '@angular/core';
import {NgModel,FormControlName} from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentInit {
  input: any
  @ContentChild(NgModel) model: NgModel
  @ContentChild(FormControlName) control:  FormControlName
  @Input() label: string
  @Input() errorMessage: string
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    this.input  = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usado com uma diretiva ngmodel ou FormControlName')
    }
  }
  hasSucess():boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }
  hasError(): boolean{
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
