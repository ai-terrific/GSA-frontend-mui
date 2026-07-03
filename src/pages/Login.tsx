import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

import { loginUser } from '@/services'
import { dispatch, login } from '@/store'
import { EmailPassword } from '@/types'
import { handleError } from '@/utils'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<EmailPassword>({
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await loginUser(formData)
      if (response.token) dispatch(login(response))
      toast.success(response.message, { hideProgressBar: true })
      navigate('/explore')
    } catch (err) {
      handleError(err)
    }
  }

  return (
    <div className='flex min-h-screen flex-col justify-center lg:px-8 items-center justify-center bg-zinc-100'>
      <div className='relative mx-5 flex flex-col items-center gap-6 rounded-3xl bg-white p-6 min-w-500 sm:w-p-500 md:gap-8 md:p-8'>
        <div className='flex flex-col gap-2 items-center w-4/5 text-center'>
          <h5 className='font-bold'>Welcome to</h5>
          <img src='/logo.svg' alt='logo' />
          <p>Sign in or create an account by entering your email below</p>
        </div>
        <form className='space-y-8 w-full' onSubmit={handleSubmit}>
          <div className='relative'>
            <input
              id='email'
              name='email'
              type='email'
              placeholder='Email'
              onChange={handleChange}
              required
              autoComplete='email'
              className='min-h-16 w-full rounded-lg border border-ash-500 bg-zinc-50 px-4 pt-5 text-sm text-16 placeholder-transparent transition invalid:border-red-500 invalid:pr-14 invalid:text-red-600 invalid:ring-red-500 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 disabled:border-slate-200 disabled:bg-slate-200 group-focus-within/input:border-gray-500 group-focus-within/input:ring-gray-500 dark:border-ash-800 dark:bg-dark-base-1 dark:text-white dark:invalid:text-red-600'
            />
            <label
              htmlFor='email'
              className='peer-disabled:text-gray peer-focus:text-primary-500 pointer-events-none absolute bottom-auto left-4 top-px flex origin-top-left scale-75 items-center whitespace-nowrap py-2.5 pr-4 text-sm text-ash-700 transition duration-75 group-focus-within/input:bottom-auto group-focus-within/input:scale-75 peer-placeholder-shown:bottom-px peer-placeholder-shown:scale-100 peer-invalid:text-red-500 peer-focus:bottom-auto peer-focus:scale-75 peer-invalid:peer-focus:text-red-500'
            >
              Email
            </label>
          </div>

          <button
            type='submit'
            className='submit flex items-center justify-center gap-4 rounded-lg bg-red-500 w-full px-6 py-3 text-white hover:bg-red-600 transition'
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
