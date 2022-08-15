/*
  Warnings:

  - Added the required column `nivel` to the `tb_car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_car` ADD COLUMN `nivel` INTEGER NOT NULL,
    MODIFY `gestor` BOOLEAN NOT NULL DEFAULT false;
