import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FieldError, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { DeepMap } from 'react-hook-form'

  interface IForm {
    nome: string,
    email: string,
    telefone: number
  }
export default function usePessoas(): [
  UseFormRegister<IForm>,
  DeepMap<IForm, FieldError>, 
  UseFormHandleSubmit<IForm>,
  (data: IForm) => void
 ] {
  
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  
  const schema = yup.object().shape({
    nome: yup.string().required('Insira um nome porfavor'),
    email: yup.string().required(),
    telefone: yup.string().matches(phoneRegExp, 'Por favor insira um número valido')
  })

  const { register, handleSubmit, formState: {errors}} = useForm<IForm>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IForm) => {
    const infomation = JSON.stringify(data)
    localStorage.setItem('pessoas', infomation)
  }

  return [register, errors, handleSubmit, onSubmit ]
}