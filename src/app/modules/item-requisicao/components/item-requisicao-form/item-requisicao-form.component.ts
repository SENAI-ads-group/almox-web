import { ItemRequisicaoDialogComponent } from "./../item-requisicao-dialog/item-requisicao-dialog.component";
import { ConfiguracaoEstoque } from "./../../../../model/configuracao-estoque";
import { StatusItemRequisicao } from "./../../../../model/enums/status-item-requisicao";
import { HandleErrorService } from "./../../../shared/services/handle-error.service";
import { ItemRequisicao } from "./../../../../model/item-requisicao";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "src/app/modules/shared/services/common.service";
import { Produto } from "src/app/model/produto";
import { NgForm } from "@angular/forms";
import { DialogService, DynamicDialogRef } from "primeng/dynamicdialog";
import { ProdutoModalListaComponent } from "src/app/modules/produto/components/produto-modal-lista/produto-modal-lista.component";
import { MessageService } from "primeng/api";

@Component({
    selector: "item-requisicao-form",
    templateUrl: "./item-requisicao-form.component.html",
})
export class ItemRequisicaoFormComponent implements OnInit {
    itemRequisicao: ItemRequisicao = {};
    produto: Produto = { configuracaoEstoque: {} };
    editandoRegistroExistente: boolean;
    modoVisualizacao: boolean;
    @ViewChild("formulario") formulario: NgForm;
    produtoSelecionado: Produto;
    produtosSelecionados: Produto[];
    StatusItemRequisicao: any[];

    constructor(
        private commonService: CommonService,
        private HandleErrorService: HandleErrorService,
        private dialogService: DialogService,
        private messageService: MessageService
    ) {}

    dialogItemRequisicao: DynamicDialogRef;

    show() {
        this.dialogItemRequisicao = this.dialogService.open(
            ProdutoModalListaComponent,
            {
                header: "Choose a Product",
                width: "70%",
                contentStyle: { "max-height": "500px", overflow: "auto" },
                baseZIndex: 10000,
            }
        );

        this.dialogItemRequisicao.onClose.subscribe((produto: Produto) => {
            if (produto) {
                this.messageService.add({
                    severity: "info",
                    summary: "Product Selected",
                    detail: produto.descricao,
                });
                this.produtoSelecionado = produto;
            }
        });
    }

    ngOnInit(): void {


/*         this.commonService.buscarEnumeradores().subscribe(
            enumeradores =>
                (this.StatusItemRequisicao = enumeradores.StatusItemRequisicao),
            error => this.HandleErrorService.handleError(error)
        ); */
    }

    onSubmit(formulario: NgForm): void {}

    limpar(): void {}
}