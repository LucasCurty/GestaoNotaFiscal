export class Cliente {
  Id: Number | undefined;
  Nome: string;
  Email: string;
  Telefone: string | undefined;

  constructor(nome: string, email: string,telefone: string) {
    this.Nome = nome;
    this.Email = email;
    this.Telefone = telefone;
  }

}