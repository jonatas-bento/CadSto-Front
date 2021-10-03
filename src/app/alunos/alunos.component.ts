import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Aluno } from "./aluno";

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public displayedColumns: string[] = ['id', 'nome', 'periodo', 'av1', 'av2', 'bonus',
   'notaFinal', 'status'];
  public alunos: Aluno[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
  }


  ngOnInit() {
    this.http.get<Aluno[]>(this.baseUrl + 'api/Alunos')
      .subscribe(result => {
        this.alunos = result;
      }, error => console.error(error));

  }

media(a: number, b: number, c?: number) {
  let resultado = a+b+c;
  return resultado > 10 ? resultado = 10 : resultado;
}

status(media){
  let resultado: string = '';
  if(!media)
  return '-';
  if(media >= 6){
    return 'APROVADO';
  } else {
    return 'REPROVADO';
  }
}

StatusColor(status: string){
  if (status === 'reprovado'){
    return "color: 'red' "
  } else{
    return "color: 'blue'"
  }
}

alunosPorPeriodo(periodo: string){
  let result = this.alunos.filter((aluno) =>
    aluno.periodo == periodo);
  return result;
}

somenteAlunosPeriodo(periodo: number){
  debugger;
  switch (periodo){
    case 1:{
      this.alunosPorPeriodo("1º");
      break;
      }
    case 2:{
      this.alunosPorPeriodo("2º");
      break;
    }
    case 3:{
      this.alunosPorPeriodo("3º");
      break;
    }
    case 4:{
      this.alunosPorPeriodo("4º");
      break;
    }
    case 5:{
      this.alunosPorPeriodo("5º");
      break;
    }
    case 6:{
      this.alunosPorPeriodo("6º");
      break;
    }
    case 7:{
      this.alunosPorPeriodo("7º");
      break;
    }
    case 8:{
      this.alunosPorPeriodo("8º");
      break;
    }
    default:{
      console.log("Opção inválida!");
      break;
    }
    }
  }

}
