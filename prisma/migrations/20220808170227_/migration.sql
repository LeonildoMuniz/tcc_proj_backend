-- CreateTable
CREATE TABLE `tb_estr` (
    `id` VARCHAR(191) NOT NULL,
    `UnidadeOrg` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_col` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `matricula` VARCHAR(191) NOT NULL,
    `cargo` VARCHAR(191) NOT NULL,
    `admissao` DATETIME(3) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `acesso` BOOLEAN NOT NULL DEFAULT false,
    `status` BOOLEAN NOT NULL DEFAULT true,
    `dt_cad` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `dt_atu` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estrutura_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_col` ADD CONSTRAINT `tb_col_estrutura_id_fkey` FOREIGN KEY (`estrutura_id`) REFERENCES `tb_estr`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
