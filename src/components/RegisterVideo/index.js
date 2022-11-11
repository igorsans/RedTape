import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

const useForm = (propsDoForm) => {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    clearform(){
        setValues({titulo: "", url: ""})
    }
  };
};

export default function RegisterVideo() {
  const [formVisivel, setFormVisivel] = useState(false);
  const formCadastro = useForm({
    initialValues: { titulo: "teste", url: "https://youtube.." },
  });
  return (
    <StyledRegisterVideo>
      <button onClick={() => setFormVisivel(true)} className="add-video">
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formCadastro.values);
            setFormVisivel(false)
            formCadastro.clearform()
          }}
        >
          <div>
            <button
            type="button"
              onClick={() => setFormVisivel(false)}
              className="close-modal"
            >
              X
            </button>
            <input
              placeholder="Titulo do vídeo"
              name="titulo"
              value={formCadastro.values.titulo}
              onChange={formCadastro.handleChange}
            />
            <input
              placeholder="URL do video"
              name="url"
              value={formCadastro.values.url}
              onChange={formCadastro.handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : null}
    </StyledRegisterVideo>
  );
}
