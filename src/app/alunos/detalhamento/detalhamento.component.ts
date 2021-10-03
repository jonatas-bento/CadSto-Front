import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrls: ['./detalhamento.component.scss']
})
export class DetalhamentoComponent implements OnInit {
  public alunos: Aluno[];

  constructor() { }

  ngOnInit() {
  }


}
