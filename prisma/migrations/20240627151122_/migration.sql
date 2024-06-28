/*
  Warnings:

  - Changed the type of `count` on the `UserBucket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "UserBucket" DROP COLUMN "count",
ADD COLUMN     "count" INTEGER NOT NULL;
