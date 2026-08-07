-- AlterTable
ALTER TABLE "CostEntry" ADD COLUMN     "relatedCostId" TEXT;

-- CreateIndex
CREATE INDEX "CostEntry_relatedCostId_idx" ON "CostEntry"("relatedCostId");

-- AddForeignKey
ALTER TABLE "CostEntry" ADD CONSTRAINT "CostEntry_relatedCostId_fkey" FOREIGN KEY ("relatedCostId") REFERENCES "CostEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
