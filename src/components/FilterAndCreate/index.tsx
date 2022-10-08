import { Create, Div, InputFilter } from "./style";

interface Props {
  setFilterTitles: (e:any) => void;
}
function FilterAndCreate(props: Props) {
  return (
    <>
      <Div>
        <div>
          <img src="https://cdn.discordapp.com/attachments/985645895779508254/1026667502354321418/Rectangle_23.png" />
          <InputFilter type="text" placeholder="    Pesquisar livro" onChange={(e)=>props.setFilterTitles(e.target.value)} />
        </div>
        <Create src="https://cdn.discordapp.com/attachments/985645895779508254/1026659970403549234/Rectangle_8.png" />
      </Div>
    </>
  );
}

export default FilterAndCreate;
