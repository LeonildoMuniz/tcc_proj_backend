/*
  Warnings:

  - You are about to drop the column `nivel` on the `tb_car` table. All the data in the column will be lost.
  - Added the required column `nivel_id` to the `tb_car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_car` DROP COLUMN `nivel`,
    ADD COLUMN `nivel_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `tb_niv` (
    `id` VARCHAR(191) NOT NULL,
    `nivel` INTEGER NOT NULL,
    `desc_nivel` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_car` ADD CONSTRAINT `tb_car_nivel_id_fkey` FOREIGN KEY (`nivel_id`) REFERENCES `tb_niv`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
