import {Observable} from "rxjs";

export interface EventBus {

    publish(key: string, payload: any): Promise<void>;

    subscribe(key: string): Observable<any>;

}