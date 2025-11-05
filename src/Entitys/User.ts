export class User {
  Id: Number | undefined;
  Email: string;
  Nome: string;


  constructor(email: string, nome: string){
    this.Email = email;
    this.Nome = nome;
  }

}