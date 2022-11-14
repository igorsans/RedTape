import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { supabase } from "../../services/videoService";
import { useRouter } from "next/router";


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
    initialValues: { titulo: "", url: "" },
  });

  const router = useRouter();

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
            supabase.from("video").insert({
                title: formCadastro.values.titulo,
                url: formCadastro.values.url,
                thumb: `https://img.youtube.com/vi/${formCadastro.values.url.split('v=', 2)[1]}/hqdefault.jpg`,
                playlist: "Indicadas"
            })
            .then((data) => {
                console.log(data)
                router.reload()
            }).catch((err) => {
                console.log(err)
            })
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
