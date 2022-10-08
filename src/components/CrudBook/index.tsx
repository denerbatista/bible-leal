import { Div } from "./style";

function CrudBook() {
  return (
    <Div id="crud-book">
      <span>texto</span>
      <span>texto</span>
      <span>texto</span>
      <span>texto</span>
      <span>texto</span>
      <span>texto</span>
      <button id="update">Atualizar status</button>
      <button id="history">Histórico</button>
      <button id="edit">Editar</button>
      <button id="delete">Deletar</button>
      <button id="add-genre">Adicionar Gênero</button>
      <button id="edit-genre">Editar Gênero</button>
      <button id="delete-genre">Deletar Gênero</button>
    </Div>
  );
}

export default CrudBook;
