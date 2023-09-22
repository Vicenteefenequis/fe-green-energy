export type Login = {
    titulo: string;
    descricao: string;
    tipoProjeto: TipoLocal 
  };


  enum TipoLocal {
    Cidade = "Cidade",
    Estado = "Estado",
  }