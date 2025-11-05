export class Nota {
   Id: Number | undefined;
  NumeroNota: String;
  Descricao: String | undefined;
  ChaveAcesso: String;

  // ClientePagamentoNota ClientePagamentoNota[]

  constructor(numeroNota: String, descricao: String, chaveAcesso: String){
    this.NumeroNota = numeroNota;
    this.Descricao = descricao;
    this.ChaveAcesso = chaveAcesso;
  }
}