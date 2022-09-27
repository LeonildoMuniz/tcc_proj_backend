import {Router} from 'express';
import multer from 'multer';
import {CriarAlocacaoController} from './cotrollers/alocacao/CriarAlocacaoController';
import {CriarCargoController} from './cotrollers/cargo/CriarCargoController';
import {CriarColaboradorController} from './cotrollers/colaborador/CriarColaboradorController';
import {CriarEmpresaController} from './cotrollers/empresa/CriarEmpresaController';
import {CriarEstabelecimentoController} from './cotrollers/estabelecimento/CriarEstabelecimentoController';
import {CriarEstruturaController} from './cotrollers/estrutura/CriarEstruturaController';
import {CriarNivelController} from './cotrollers/nivel/CriarNivelController';
import {AutenticarUserController} from './cotrollers/autenticacao/AutenticarUserController'; 
import {DetalheColaboradorController} from './cotrollers/colaborador/DetalheColaboradorController';
import {estaAutenticado} from './middlewares/estaAutenticado';
import {AutenticarColController} from './cotrollers/autenticacao/AutenticarColController';
import {estaAutenticadoCol} from './middlewares/estaAutenticadoCol';
import {InformacaoController} from './cotrollers/informacao/InformacaoController';
import {estaAutenticadoMens} from './middlewares/estaAutenticadoMens';
import {AutenticarMensController} from './cotrollers/autenticacao/AutenticacaoMensController';
import {ConsultaInfoController} from './cotrollers/informacao/ConsultaInfoController';
import {RemoveInfoController} from './cotrollers/informacao/RemoveInfoController';
import {PrimeiroAcessoController} from './cotrollers/colaborador/PrimeiroAcessoController'
import uploadConfig from './config/multer';
import { ConsultaEmpresaController } from './cotrollers/empresa/ConsultaEmpresaController';
import { ConsultaAlocacaoController } from './cotrollers/alocacao/ConsultaAlocacaoController';
import { ConsultaEstabelecimentoController } from './cotrollers/estabelecimento/ConsultaEstabelecimentoController';
import { ConsultaNivelController } from './cotrollers/nivel/ConsultaNivelController';
import { ConsultaEstruturaService } from './services/estrutura/ConsultaEstruturaService';
import { ConsultaEstruturaController } from './cotrollers/estrutura/ConsultaEstruturaController';
import { ConsultaCargoController } from './cotrollers/cargo/ConsultaCargoContoller';
import {InformacaoController2} from './cotrollers/informacao2/InformacaoController2'
import { ConsultaInfoController2 } from './cotrollers/informacao2/ConsultaInfoController2';
import { RemoveInfoController2 } from './cotrollers/informacao2/RemoveInfoController2';
import { MensagemController } from './cotrollers/mensagem/MensagemController';
import { EditaInfoController } from './cotrollers/informacao/EditaInfoController';
import { Mensagem2Controller } from './cotrollers/mensagem2/Mensagem2Controller';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

//rotas de cadastros
router.post('/cargo', estaAutenticado, new CriarCargoController().handle) //cria cargo
router.post('/empresa',estaAutenticado ,new CriarEmpresaController().handle) // cria empresa
router.post('/estabelecimento', estaAutenticado, new CriarEstabelecimentoController().handle) //cria estabelecimento
router.post('/alocacao',estaAutenticado, new CriarAlocacaoController().handle) // cria alocacao
router.post('/estrutura',estaAutenticado, new CriarEstruturaController().handle) // cria estrutura
router.post('/nivel',estaAutenticado, new CriarNivelController().handle) // cria nivel
router.post('/colaborador',estaAutenticado, upload.single('file'), new CriarColaboradorController().handle) // cria colaborados
router.post('/comunicacao',estaAutenticado , upload.single('file'), new InformacaoController().handle) // cria comunicados para os colaboradores
router.post('/comunicacao2',estaAutenticadoMens , upload.single('file'), new InformacaoController2().handle) // cria comunicados para os colaboradores


//rota de autenticacao login
router.post('/session', new AutenticarUserController().handle) //admin
router.post('/session2', new AutenticarColController().handle) //colaborador mobile
router.post('/session3', new AutenticarMensController().handle) //colaborador web para mensagem


//rotas de consulta
router.get('/userinfo', estaAutenticadoMens, new DetalheColaboradorController().handle) // verifica o colaborador logado
router.get('/userinfo2', estaAutenticado, new DetalheColaboradorController().handle) // verifica o colaborador logado
router.get('/mensagem', estaAutenticado, new MensagemController().handle) //consulta uma mensagem especifica
router.get('/mensagem2', estaAutenticadoMens, new Mensagem2Controller().handle) //consulta mensagem especifica 
router.get('/listamensagem',estaAutenticado, new ConsultaInfoController().handle) //lista todas mensagem sem filtro
router.get('/listamensagem2',estaAutenticadoMens, new ConsultaInfoController2().handle) //lista todas mensagem sem filtro
router.get('/consultaempresa', estaAutenticado, new ConsultaEmpresaController().handle) //lista empresas
router.get('/consultaestabelecimento', estaAutenticado, new ConsultaEstabelecimentoController().handle) // lista estabelecimento
router.get('/consultaalocacao',estaAutenticado, new ConsultaAlocacaoController().handle) //lista centros de custo
router.get('/consultanivel', estaAutenticado, new ConsultaNivelController().handle)
router.get('/consultaestrutura', estaAutenticado, new ConsultaEstruturaController().handle) // lista estrutura
router.get('/consultacargo', estaAutenticado, new ConsultaCargoController().handle) //lista cargos


//rotas de deletar
router.delete('/removeinfo',estaAutenticado	, new RemoveInfoController().handle) //deleta uma mensagem
router.delete('/removeinfo2',estaAutenticadoMens,new RemoveInfoController2().handle) //deleta uma mensagem



//rota de autualização de dados
router.put('/primeiroacesso', new PrimeiroAcessoController().handle) //Atualiza dados para o primeiro acesso de um usuario
router.put('/atualizainfo', estaAutenticado, upload.single('file'), new EditaInfoController().handle) //atualiza mensagem

export {router};