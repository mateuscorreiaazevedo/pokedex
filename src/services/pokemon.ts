import { apiService } from './api'

export namespace PokeService {
  export async function getAll(limit: number = 600) {
    const response = await apiService.request({
      url: `/?offset=0&limit=${limit}`,
      method: 'get'
    })

    switch (response.statusCode) {
      case 200:
        return response.body
      default:
        throw new Error('Erro inesperado no servidor')
    }
  }
  export async function getByName(name: string) {
    const response = await apiService.request({
      url: `/${name}`,
      method: 'get'
    })

    switch (response.statusCode) {
      case 200:
        return response.body
      default:
        throw new Error('Erro inesperado no servidor')
    }
  }
}
