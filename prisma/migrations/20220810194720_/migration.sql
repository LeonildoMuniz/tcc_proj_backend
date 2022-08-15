/*
  Warnings:

  - Added the required column `cpf` to the `tb_col` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_col` ADD COLUMN `admin` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;
