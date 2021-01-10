import axios, { AxiosResponse } from "axios"
import { ApiDataType } from "./type"

const baseUrl: string = "http://localhost:4001"

export const getSearch = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const dataResponse: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/api/items?q=martillo"
    )
    return dataResponse
  } catch (error) {
    throw new Error(error)
  }
}