/*
  Warnings:

  - A unique constraint covering the columns `[nationalId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Application_nationalId_key" ON "Application"("nationalId");
