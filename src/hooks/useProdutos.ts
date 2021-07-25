import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { DeepMap } from 'react-hook-form'

  interface IForm2 {
    nome2: string,
    codigo: string,
    quantidade: number,
    preco: number,
  }
export default function useProdutos(): [
  UseFormRegister<IForm2>,
  DeepMap<IForm2, FieldError>, 
  UseFormHandleSubmit<IForm2>,
  (data: IForm2) => void
 ] {
    
  const schema = yup.object().shape({
    nome2: yup.string().required('Insira um nome porfavor'),
    codigo: yup.string().required('Insira um código valido'),
    quantidade: yup.number().positive().required('Insira uma quantidade valida'),
    preco: yup.number().positive().required('Insira um preço valido')
  })

  const { register, handleSubmit, formState: {errors}} = useForm<IForm2>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IForm2) => {
    const infomation = JSON.stringify(data)
    localStorage.setItem('produtos', infomation)
  }

  return [register, errors, handleSubmit, onSubmit ]
}