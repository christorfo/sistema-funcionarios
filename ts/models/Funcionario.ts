import { IPessoa } from "../interfaces/IPessoa";

export abstract class Funcionario implements IPessoa {
  constructor(
    public nome: string,
    public idade: number,
    protected _salario: number
  ) {}

  abstract calcularSalario(): number;

  exibirDados(): string {
    return `${this.nome}, ${this.idade} anos, salário: R$ ${this.calcularSalario().toFixed(2)}`;
  }

  get salario(): number {
    return this._salario;
  }

  set salario(valor: number) {
    if (valor > 0) this._salario = valor;
  }
}

export class Desenvolvedor extends Funcionario {
  constructor(nome: string, idade: number, private nivel: string) {
    super(nome, idade, 0);
  }

  calcularSalario(): number {
    switch (this.nivel) {
      case "junior": return 3000;
      case "pleno": return 5000;
      case "senior": return 8000;
      default: return 0;
    }
  }
}

export class Designer extends Funcionario {
  constructor(nome: string, idade: number, private experiencia: number) {
    super(nome, idade, 0);
  }

  calcularSalario(): number {
    return 2500 + (this.experiencia * 200);
  }
}
