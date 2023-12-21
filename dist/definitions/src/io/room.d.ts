import { Socket } from "socket.io";
import { Player } from "../class/Player";
declare const _default: {
    create: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, roomForm: RoomForm, playerForm: Player) => Promise<void>;
    join: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>, room_id: string, playerForm: PlayerForm) => Promise<void>;
    list: (socket: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>) => Promise<void>;
};
export default _default;
