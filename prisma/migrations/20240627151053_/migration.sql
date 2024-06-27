/*
  Warnings:

  - Added the required column `count` to the `UserBucket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserBucket" ADD COLUMN     "count" TEXT NOT NULL;
