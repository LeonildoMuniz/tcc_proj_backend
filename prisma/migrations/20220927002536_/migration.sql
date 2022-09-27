/*
  Warnings:

  - Added the required column `dt_nascimento` to the `tb_col` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_col` ADD COLUMN `dt_nascimento` VARCHAR(191) NOT NULL;
