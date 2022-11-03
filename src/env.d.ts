type JSONValue = null | boolean | string | number | JSONValue[] | Record<string, JSONValue>

type Mock = (config: AxiosRequestConfig) => [number, any]



