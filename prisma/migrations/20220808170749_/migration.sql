/*
  Warnings:

  - Added the required column `foto` to the `tb_col` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_col` ADD COLUMN `foto` VARCHAR(191) NOT NULL;
