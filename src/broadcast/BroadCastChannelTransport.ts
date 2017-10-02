import { Transport } from '../api/Transport';

declare var BroadcastChannel;

export class BroadCastChannelTransport implements Transport {

    private channels: Map<string, any>  = new Map<string, any>();
    
    public subscribe(key: string, handler: (data: any) => {}): void {
        this.lookupChannel(key).onmessage = (event) => handler(event.data);
    }

    public publish(key: string, payload: any): void {
        this.lookupChannel(key).postMessage(payload);
    }

    private lookupChannel(name: string): any {
        let channel = this.channels.get(name);
        if (!channel) {
            channel = new BroadcastChannel(name);
            this.channels.set(name, channel);
        }
        return channel;
    }
}