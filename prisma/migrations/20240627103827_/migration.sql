/*
  Warnings:

  - The values [seller] on the enum `ERoleUser` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `status` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `UserProduct` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `count` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ERoleUser_new" AS ENUM ('admin', 'manager', 'client');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "ERoleUser_new" USING ("role"::text::"ERoleUser_new");
ALTER TYPE "ERoleUser" RENAME TO "ERoleUser_old";
ALTER TYPE "ERoleUser_new" RENAME TO "ERoleUser";
DROP TYPE "ERoleUser_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'client';
COMMIT;

-- DropForeignKey
ALTER TABLE "UserProduct" DROP CONSTRAINT "UserProduct_productId_fkey";

-- DropForeignKey
ALTER TABLE "UserProduct" DROP CONSTRAINT "UserProduct_userId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "status",
ADD COLUMN     "count" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserProduct";

-- DropEnum
DROP TYPE "EProductStatus";

-- CreateTable
CREATE TABLE "Sizes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "deletedAt" TIMESTAMPTZ(3),

    CONSTRAINT "Sizes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductSize" (
    "productId" TEXT NOT NULL,
    "sizeId" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL,

    CONSTRAINT "ProductSize_pkey" PRIMARY KEY ("productId","sizeId")
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "token" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "userId" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expieres_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("token","deviceId")
);

-- CreateTable
CREATE TABLE "UserBucket" (
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "UserBucket_pkey" PRIMARY KEY ("userId","productId")
);

-- AddForeignKey
ALTER TABLE "ProductSize" ADD CONSTRAINT "ProductSize_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSize" ADD CONSTRAINT "ProductSize_sizeId_fkey" FOREIGN KEY ("sizeId") REFERENCES "Sizes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBucket" ADD CONSTRAINT "UserBucket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBucket" ADD CONSTRAINT "UserBucket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
