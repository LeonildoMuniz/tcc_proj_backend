/*
  Warnings:

  - You are about to drop the column `alocacao_id` on the `tb_alo` table. All the data in the column will be lost.
  - Added the required column `estabelecimento_id` to the `tb_alo` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_alo` DROP FOREIGN KEY `tb_alo_alocacao_id_fkey`;

-- AlterTable
ALTER TABLE `tb_alo` DROP COLUMN `alocacao_id`,
    ADD COLUMN `estabelecimento_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tb_alo` ADD CONSTRAINT `tb_alo_estabelecimento_id_fkey` FOREIGN KEY (`estabelecimento_id`) REFERENCES `tb_est`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
