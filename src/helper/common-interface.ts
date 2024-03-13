export interface IResponse_object_detail {
    data: object,
    status: {
        action_status: boolean,
        msg: string
    },
    publish: {
        version: string,
        developer: string
    }
}

export interface IStatusBuild {
    status(value2: number): object,
    send(value1: object): object
}

export interface IMethodNotAllowed {
    setHeader(value1: string, value2: string): object,
    send(value3: object): object,
    status(value4: number): object,
}

