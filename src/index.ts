import { LocalStorageTransport } from "./storage/LocalStorageTransport";
import { BroadCastChannelTransport } from './broadcast/BroadCastChannelTransport';

window["transport"] = new BroadCastChannelTransport();
window["storageTransport"] = new LocalStorageTransport();
