-- CreateTable
CREATE TABLE `tb_inf` (
    `id` VARCHAR(191) NOT NULL,
    `titulo` VARCHAR(191) NOT NULL,
    `mensagem` VARCHAR(191) NOT NULL,
    `anexo` VARCHAR(191) NOT NULL,
    `id_colaborador` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_inf` ADD CONSTRAINT `tb_inf_id_colaborador_fkey` FOREIGN KEY (`id_colaborador`) REFERENCES `tb_col`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
