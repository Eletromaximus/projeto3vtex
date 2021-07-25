import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IForm {
  nome: string,
  email: string,
  telefone: number
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const schema = yup.object().shape({
  nome: yup.string().required('Insira um nome porfavor'),
  email: yup.string().required(),
  telefone: yup.string().matches(phoneRegExp, 'Por favor insira um número valido')
})

function App() {
  const { register, handleSubmit, formState: {errors}} = useForm<IForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IForm) => {
    console.log('entrou')
    const infomation = JSON.stringify(data)
    localStorage.setItem('pessoas', infomation)
    console.log(infomation)
  }

  return (
    <div className="App">
      <header className="App-header">
        Cadastre Clientes e Produtos
      </header>

      <div className="Container">
        <div className="Pessoas">

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="Cadastro-pessoas">

              <label htmlFor='nome'>
                Nome:
              </label> <br/>

              <input {...register('nome')} />
              <span> {errors.nome?.message} </span>

              <label htmlFor="telefone" >
                Telefone:
              </label> <br/>
              <input {...register('telefone')} />
              <span> {errors.telefone?.message} </span>

              <label htmlFor="email" >
                E-mail:
              </label> <br/>
              <input {...register('email')} />
              <span> {errors.email?.message} </span>

              <input type="submit" id='inputSubmit' />
            </div>

          </form>
          
        </div>

        <div className="Produtos">
          Olá
        </div>
      </div>
      
    </div>
  );
}

export default App;
