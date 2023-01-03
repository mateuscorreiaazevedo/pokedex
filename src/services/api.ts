import axios, { AxiosInstance, AxiosResponse } from 'axios'

const BASE_URL = process.env.API || 'https://pokeapi.co/api/v2/pokemon'

type HttpReq = {
  url: string
  method?: 'get' | 'post' | 'put' | 'delete'
  body?: any
  headers?: any
  params?: any
}

type HttpRes<T = any> = {
  statusCode: number
  body: T
}

class ApiService {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL
    })
  }

  async request<T = any>(props: HttpReq): Promise<HttpRes> {
    let axiosResponse: AxiosResponse<T>
    try {
      const response = await this.api.request({
        url: props.url,
        method: props.method || 'get',
        data: props.body || {},
        headers: props.headers || {},
        params: props.params
      })
      axiosResponse = response
    } catch (error) {
      axiosResponse = (error as any).response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}

export const apiService = new ApiService()
