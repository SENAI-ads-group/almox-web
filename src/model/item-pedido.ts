import { Auditavel } from "src/model/auditavel";
import { Produto } from "./produto";
export interface ItemPedido extends Auditavel {
    id?: number;
    statusItemRequisicao?: any;
    quantidade?: number;
    produto?: Produto;
}