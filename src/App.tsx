import React from 'react';
import './App.css';
import usePessoas from './hooks/usePessoas';
import useProdutos from './hooks/useProdutos';


function App() {
  const [register1, errors1, handleSubmit1, onSubmit1  ] = usePessoas()
  const [register2, errors2, handleSubmit2, onSubmit2  ] = useProdutos()

  return (
    <div className="App">
      <header className="App-header">
        Cadastre Clientes e Produtos
      </header>

      <div className="Container">
        <div className="Pessoas">

          <form onSubmit={handleSubmit1(onSubmit1)}>

            <div className="Cadastro-pessoas">

              <label htmlFor='nome'>
                Nome:
              </label> <br/>

              <input {...register1('nome')} />
              <span> {errors1.nome?.message} </span>

              <label htmlFor="telefone" >
                Telefone:
              </label> <br/>

              <input {...register1('telefone')} />
              <span> {errors1.telefone?.message} </span>

              <label htmlFor="email" >
                E-mail:
              </label> <br/>

              <input {...register1('email')} />
              <span> {errors1.email?.message} </span>

              <input type="submit" id='inputSubmit' />
            </div>

          </form>
          
        </div>

        <div className="Produtos">
         <form onSubmit={handleSubmit2(onSubmit2)}>

          <div className="Cadastro-produtos">

            <label htmlFor='nome'>
              Nome:
            </label> <br/>
            <input {...register2('nome2')} />
            <span> {errors2.nome2?.message} </span>

            <label htmlFor='codigo'>
              Código:
            </label> <br/>
            <input {...register2('codigo')} />
            <span> {errors2.codigo?.message} </span>

            <label htmlFor="quantidade" >
              Quantidade:
            </label> <br/>
            <input {...register2('quantidade')} />
            <span> {errors2.quantidade?.message} </span>

            <label htmlFor="preco" >
              Preço:
            </label> <br/>
            <input {...register2('preco')} />
            <span> {errors2.preco?.message} </span>

            <input type="submit" id='inputSubmit' />
          </div>

          </form>
        </div>
      </div>
      
    </div>
  );
}

export default App;
