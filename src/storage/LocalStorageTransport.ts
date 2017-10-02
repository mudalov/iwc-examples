
import {Transport} from "../api/Transport";

export class LocalStorageTransport implements Transport {

    private handlers: Map<string, Function>  = new Map<string, Function>();

    constructor(private readonly namespace: string = "com.iwc.storage") {
        window.addEventListener('storage', (e) => {
            if (e.key.startsWith(this.namespace)) {
                const normalizedKey = e.key.substr(this.namespace.length + 1);
                if (this.handlers.has(normalizedKey)) {
                    this.handlers.get(normalizedKey)(e.newValue);
                }
            }      
        });
    }

    publish(key: string, payload: any): void {
        window.localStorage.setItem(this.withNs(key), payload);
    }

    subscribe(key: string, handler: Function): void {
        this.handlers.set(key, handler);
    }

    private withNs(key: string): string {
        return `${this.namespace}/${key}`;
    }

}