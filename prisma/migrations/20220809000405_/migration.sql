/*
  Warnings:

  - You are about to drop the column `estabelecimento_id` on the `tb_est` table. All the data in the column will be lost.
  - Added the required column `empresa_id` to the `tb_est` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tb_est` DROP FOREIGN KEY `tb_est_estabelecimento_id_fkey`;

-- AlterTable
ALTER TABLE `tb_est` DROP COLUMN `estabelecimento_id`,
    ADD COLUMN `empresa_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `tb_est` ADD CONSTRAINT `tb_est_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `tb_emp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
