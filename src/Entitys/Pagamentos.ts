export class Pagamentos {
  Id: Number | undefined;
  Valor: Number;
  DataPagamento: Date;
  
  constructor(valor: Number, dataPagamento: Date){
    this.Valor = valor;
    this.DataPagamento = dataPagamento;
  }
}