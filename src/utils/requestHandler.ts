import { AxiosError, AxiosRequestConfig } from 'axios'
import { api } from '@/helpers/api.helper'
import type { ResponseDataType } from '@/types/ResponseDataType';

export const requestHandler = async <_, R>(
	config: AxiosRequestConfig,
): Promise<{ data?: ResponseDataType; error?: AxiosError<R> }> => {
	let data: ResponseDataType | undefined
	let error: AxiosError<R> | undefined
	try {
		const response = await api(config)
		data = response.data as ResponseDataType
	} catch (errorInfo) {
		error = errorInfo as AxiosError<R>
		if (error?.code === 'ECONNABORTED') error.message = 'Request timeout'
		else if (error?.code === 'ECONNREFUSED')
			error.message = 'Connection refused, please try again later'
		else error.message = 'Something went wrong, please try again later'
	}
	return { data, error }
}