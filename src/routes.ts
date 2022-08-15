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

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

//rotas de cadastros
router.post('/cargo', estaAutenticado, new CriarCargoController().handle) //cria cargo
router.post('/empresa', estaAutenticado, new CriarEmpresaController().handle) // cria empresa
router.post('/estabelecimento', estaAutenticado, new CriarEstabelecimentoController().handle) //cria estabelecimento
router.post('/alocacao',estaAutenticado, new CriarAlocacaoController().handle) // cria alocacao
router.post('/estrutura',estaAutenticado, new CriarEstruturaController().handle) // cria estrutura
router.post('/nivel',estaAutenticado, new CriarNivelController().handle) // cria nivel
router.post('/colaborador',estaAutenticado, upload.single('file'), new CriarColaboradorController().handle) // cria colaborados
router.post('/comunicacao',estaAutenticadoMens, new InformacaoController().handle) // cria comunicados para os colaboradores

//rota de autenticacao login
router.post('/session', new AutenticarUserController().handle) //admin
router.post('/session2', new AutenticarColController().handle) //colaborador mobile
router.post('/session3', new AutenticarMensController().handle) //colaborador web para mensagem


//rotas de consulta
router.get('/userinfo', estaAutenticadoCol, new DetalheColaboradorController().handle) // verifica o colaborador logado
router.get('/listamensagem',estaAutenticadoMens, new ConsultaInfoController().handle) //lista todas mensagem sem filtro

//rotas de deletar
router.delete('/removeinfo',estaAutenticadoMens, new RemoveInfoController().handle) //deleta uma mensagem

//rota de autualização de dados
router.post('/primeiroacesso', new PrimeiroAcessoController().handle) //Atualiza dados para o primeiro acesso de um usuario

export {router};