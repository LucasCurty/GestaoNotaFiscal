export class ClientePagamentoNota {
  Id: Number | undefined;
  ClienteId: Number;
  PagamentoID: Number;
  NotaId: Number;

  constructor(clienteId: Number, pagamentoId: Number, notaId: Number) {
    this.ClienteId = clienteId;
    this.PagamentoID = pagamentoId;
    this.NotaId = notaId;

  }   
}