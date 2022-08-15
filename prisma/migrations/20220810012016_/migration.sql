/*
  Warnings:

  - You are about to drop the column `estabelecimento_id` on the `tb_col` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tb_col` DROP FOREIGN KEY `tb_col_estabelecimento_id_fkey`;

-- AlterTable
ALTER TABLE `tb_col` DROP COLUMN `estabelecimento_id`;
