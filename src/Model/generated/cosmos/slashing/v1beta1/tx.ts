/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.slashing.v1beta1';

/** MsgUnjail defines the Msg/Unjail request type */
export interface MsgUnjail {
	validatorAddr: string;
}

/** MsgUnjailResponse defines the Msg/Unjail response type */
export interface MsgUnjailResponse {}

const baseMsgUnjail: object = { validatorAddr: '' };

export const MsgUnjail = {
	encode(message: MsgUnjail, writer: Writer = Writer.create()): Writer {
		if (message.validatorAddr !== '') {
			writer.uint32(10).string(message.validatorAddr);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUnjail {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgUnjail } as MsgUnjail;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.validatorAddr = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUnjail {
		const message = { ...baseMsgUnjail } as MsgUnjail;
		message.validatorAddr =
			object.validatorAddr !== undefined && object.validatorAddr !== null
				? String(object.validatorAddr)
				: '';
		return message;
	},

	toJSON(message: MsgUnjail): unknown {
		const obj: any = {};
		message.validatorAddr !== undefined &&
			(obj.validatorAddr = message.validatorAddr);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUnjail>, I>>(
		object: I
	): MsgUnjail {
		const message = { ...baseMsgUnjail } as MsgUnjail;
		message.validatorAddr = object.validatorAddr ?? '';
		return message;
	},
};

const baseMsgUnjailResponse: object = {};

export const MsgUnjailResponse = {
	encode(_: MsgUnjailResponse, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgUnjailResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgUnjailResponse } as MsgUnjailResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(_: any): MsgUnjailResponse {
		const message = { ...baseMsgUnjailResponse } as MsgUnjailResponse;
		return message;
	},

	toJSON(_: MsgUnjailResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUnjailResponse>, I>>(
		_: I
	): MsgUnjailResponse {
		const message = { ...baseMsgUnjailResponse } as MsgUnjailResponse;
		return message;
	},
};

/** Msg defines the slashing Msg service. */
export interface Msg {
	/**
	 * Unjail defines a method for unjailing a jailed validator, thus returning
	 * them into the bonded validator set, so they can begin receiving provisions
	 * and rewards again.
	 */
	Unjail(request: MsgUnjail): Promise<MsgUnjailResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.Unjail = this.Unjail.bind(this);
	}
	Unjail(request: MsgUnjail): Promise<MsgUnjailResponse> {
		const data = MsgUnjail.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.slashing.v1beta1.Msg',
			'Unjail',
			data
		);
		return promise.then((data) =>
			MsgUnjailResponse.decode(new Reader(data))
		);
	}
}

interface Rpc {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}

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
