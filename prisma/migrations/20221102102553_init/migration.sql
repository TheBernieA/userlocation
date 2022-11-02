/*
  Warnings:

  - Added the required column `creator` to the `Place` table without a default value. This is not possible if the table is not empty.
  - Added the required column `places` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Place" DROP CONSTRAINT "Place_creatorId_fkey";

-- AlterTable
ALTER TABLE "Place" ADD COLUMN     "creator" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "places" TEXT NOT NULL;
