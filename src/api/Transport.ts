
export interface Transport {
    publish(key: string, payload: any): void;
    subscribe(key: string, handler: Function): void;
}