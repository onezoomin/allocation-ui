/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'regen.divvy.v1';

export interface EventCreateAllocator {
	id: Long;
}

export interface EventCreateStream {
	id: Long;
}

const baseEventCreateAllocator: object = { id: Long.UZERO };

export const EventCreateAllocator = {
	encode(
		message: EventCreateAllocator,
		writer: Writer = Writer.create()
	): Writer {
		if (!message.id.isZero()) {
			writer.uint32(8).uint64(message.id);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCreateAllocator {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCreateAllocator } as EventCreateAllocator;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.id = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCreateAllocator {
		const message = { ...baseEventCreateAllocator } as EventCreateAllocator;
		message.id =
			object.id !== undefined && object.id !== null
				? Long.fromString(object.id)
				: Long.UZERO;
		return message;
	},

	toJSON(message: EventCreateAllocator): unknown {
		const obj: any = {};
		message.id !== undefined &&
			(obj.id = (message.id || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCreateAllocator>, I>>(
		object: I
	): EventCreateAllocator {
		const message = { ...baseEventCreateAllocator } as EventCreateAllocator;
		message.id =
			object.id !== undefined && object.id !== null
				? Long.fromValue(object.id)
				: Long.UZERO;
		return message;
	},
};

const baseEventCreateStream: object = { id: Long.UZERO };

export const EventCreateStream = {
	encode(
		message: EventCreateStream,
		writer: Writer = Writer.create()
	): Writer {
		if (!message.id.isZero()) {
			writer.uint32(8).uint64(message.id);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCreateStream {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCreateStream } as EventCreateStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.id = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCreateStream {
		const message = { ...baseEventCreateStream } as EventCreateStream;
		message.id =
			object.id !== undefined && object.id !== null
				? Long.fromString(object.id)
				: Long.UZERO;
		return message;
	},

	toJSON(message: EventCreateStream): unknown {
		const obj: any = {};
		message.id !== undefined &&
			(obj.id = (message.id || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCreateStream>, I>>(
		object: I
	): EventCreateStream {
		const message = { ...baseEventCreateStream } as EventCreateStream;
		message.id =
			object.id !== undefined && object.id !== null
				? Long.fromValue(object.id)
				: Long.UZERO;
		return message;
	},
};

type Builtin =
	| Date
	| Function
	| Uint8Array
	| string
	| number
	| boolean
	| undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends Long
	? string | number | Long
	: T extends Array<infer U>
	? Array<DeepPartial<U>>
	: T extends ReadonlyArray<infer U>
	? ReadonlyArray<DeepPartial<U>>
	: T extends {}
	? { [K in keyof T]?: DeepPartial<T[K]> }
	: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
	? P
	: P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
				Exclude<keyof I, KeysOfUnion<P>>,
				never
			>;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
