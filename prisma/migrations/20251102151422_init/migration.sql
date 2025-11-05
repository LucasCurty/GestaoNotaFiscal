-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nota" (
    "id" SERIAL NOT NULL,
    "numeroNota" TEXT NOT NULL,
    "descricao" TEXT,
    "chaveAcesso" TEXT NOT NULL,

    CONSTRAINT "Nota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientePagamentoNota" (
    "id" SERIAL NOT NULL,
    "clienteId" INTEGER NOT NULL,
    "pagamentoId" INTEGER NOT NULL,
    "notaId" INTEGER NOT NULL,

    CONSTRAINT "ClientePagamentoNota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamentos" (
    "id" SERIAL NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "dataPagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Nota_chaveAcesso_key" ON "Nota"("chaveAcesso");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- AddForeignKey
ALTER TABLE "ClientePagamentoNota" ADD CONSTRAINT "ClientePagamentoNota_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientePagamentoNota" ADD CONSTRAINT "ClientePagamentoNota_pagamentoId_fkey" FOREIGN KEY ("pagamentoId") REFERENCES "Pagamentos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientePagamentoNota" ADD CONSTRAINT "ClientePagamentoNota_notaId_fkey" FOREIGN KEY ("notaId") REFERENCES "Nota"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
