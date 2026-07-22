/*
  Warnings:

  - Added the required column `content` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `readingTime` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "readingTime" INTEGER NOT NULL;
