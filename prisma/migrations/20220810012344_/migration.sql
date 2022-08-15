/*
  Warnings:

  - You are about to drop the column `empresa_id` on the `tb_col` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_col` DROP FOREIGN KEY `tb_col_empresa_id_fkey`;

-- AlterTable
ALTER TABLE `tb_col` DROP COLUMN `empresa_id`;
