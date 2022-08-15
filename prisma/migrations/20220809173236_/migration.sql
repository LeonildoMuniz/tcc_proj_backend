/*
  Warnings:

  - You are about to drop the column `nivel` on the `tb_niv` table. All the data in the column will be lost.
  - Added the required column `controle` to the `tb_niv` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_niv` DROP COLUMN `nivel`,
    ADD COLUMN `controle` INTEGER NOT NULL;
