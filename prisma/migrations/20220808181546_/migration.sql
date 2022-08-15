/*
  Warnings:

  - You are about to drop the column `cargo` on the `tb_col` table. All the data in the column will be lost.
  - Added the required column `alocacao_id` to the `tb_col` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo_id` to the `tb_col` table without a default value. This is not possible if the table is not empty.
  - Added the required column `empresa_id` to the `tb_col` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estabelecimento_id` to the `tb_col` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_col` DROP COLUMN `cargo`,
    ADD COLUMN `alocacao_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `cargo_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `empresa_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `estabelecimento_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `tb_car` (
    `id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `gestor` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_alo` (
    `id` VARCHAR(191) NOT NULL,
    `c_custo` INTEGER NOT NULL,
    `desc_custo` VARCHAR(191) NOT NULL,
    `alocacao_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_est` (
    `id` VARCHAR(191) NOT NULL,
    `estab` INTEGER NOT NULL,
    `desc_estab` VARCHAR(191) NOT NULL,
    `estabelecimento_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_emp` (
    `id` VARCHAR(191) NOT NULL,
    `empresa` INTEGER NOT NULL,
    `desc_empresa` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_col` ADD CONSTRAINT `tb_col_cargo_id_fkey` FOREIGN KEY (`cargo_id`) REFERENCES `tb_car`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_col` ADD CONSTRAINT `tb_col_alocacao_id_fkey` FOREIGN KEY (`alocacao_id`) REFERENCES `tb_alo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_col` ADD CONSTRAINT `tb_col_empresa_id_fkey` FOREIGN KEY (`empresa_id`) REFERENCES `tb_emp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_col` ADD CONSTRAINT `tb_col_estabelecimento_id_fkey` FOREIGN KEY (`estabelecimento_id`) REFERENCES `tb_est`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_alo` ADD CONSTRAINT `tb_alo_alocacao_id_fkey` FOREIGN KEY (`alocacao_id`) REFERENCES `tb_est`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tb_est` ADD CONSTRAINT `tb_est_estabelecimento_id_fkey` FOREIGN KEY (`estabelecimento_id`) REFERENCES `tb_emp`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
