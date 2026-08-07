-- CreateEnum
CREATE TYPE "PaidBy" AS ENUM ('LUANA', 'ANDRESSA', 'ANA_CAROLINA');

-- CreateEnum
CREATE TYPE "CostType" AS ENUM ('CUSTO', 'PROLABORE', 'FUNDO_CAIXA');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDENTE', 'PAGO', 'ATRASADO');

-- CreateEnum
CREATE TYPE "ClientPaymentStatus" AS ENUM ('PENDENTE', 'PAGO', 'PARCELADO_CARTAO', 'PIX');

-- CreateEnum
CREATE TYPE "DocumentKind" AS ENUM ('DOCUMENTO', 'ANAMNESE');

-- CreateTable
CREATE TABLE "CostEntry" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL,
    "paymentStatus" "PaymentStatus" NOT NULL DEFAULT 'PENDENTE',
    "paidBy" "PaidBy" NOT NULL,
    "type" "CostType" NOT NULL DEFAULT 'CUSTO',
    "observation" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CostEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hireDate" TIMESTAMP(3) NOT NULL,
    "service" TEXT NOT NULL,
    "valuesJson" TEXT NOT NULL DEFAULT '[]',
    "totalValue" DOUBLE PRECISION NOT NULL,
    "paymentStatus" "ClientPaymentStatus" NOT NULL DEFAULT 'PENDENTE',
    "observation" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientDocument" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "kind" "DocumentKind" NOT NULL,
    "originalName" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "mimeType" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClientDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClientDocument" ADD CONSTRAINT "ClientDocument_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE CASCADE ON UPDATE CASCADE;
