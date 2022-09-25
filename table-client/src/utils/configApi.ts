import { AxiosRequestConfig } from 'axios'

const { NODE_ENV } = process.env

export const configApi: AxiosRequestConfig = {
  baseURL:
    NODE_ENV === 'development'
      ? 'http://localhost:3005'
      : 'https://table23.herokuapp.com/',
}
