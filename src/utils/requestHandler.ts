import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { api } from '@/helpers'

interface ResponseDataProps {
	message: string
	body: any
	options: any
}

export const requestHandler = async <T, R>(
	config: AxiosRequestConfig,
): Promise<{ data?: ResponseDataProps; error?: AxiosError<R> }> => {
	let data: ResponseDataProps | undefined
	let error: AxiosError<R> | undefined
	try {
		const response = await api(config)
		data = response.data as ResponseDataProps
	} catch (errorInfo) {
		error = errorInfo as AxiosError<R>
		if (error?.code === 'ECONNABORTED') error.message = 'Request timeout'
		else if (error?.code === 'ECONNREFUSED')
			error.message = 'Connection refused, please try again later'
		else error.message = 'Something went wrong, please try again later'
	}
	return { data, error }
}
