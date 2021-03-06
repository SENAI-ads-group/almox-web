import ProdutoModel from 'src/model/produto';
import { ItemMovimento } from './movimento';
export interface HistoricoEstoqueProduto {
    id?: number,
    dataRegistro?: Date,
    estoqueAnterior?: number,
    estoqueFinal?: number,
    itemMovimento?: ItemMovimento,
    produto?: ProdutoModel
}
