/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Equation" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "equation" TEXT NOT NULL,
    "result" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Equation_pkey" PRIMARY KEY ("id")
);
