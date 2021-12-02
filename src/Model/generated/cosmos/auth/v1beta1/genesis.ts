/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Params } from '../../../cosmos/auth/v1beta1/auth';
import { Any } from '../../../google/protobuf/any';

export const protobufPackage = 'cosmos.auth.v1beta1';

/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
	/** params defines all the paramaters of the module. */
	params?: Params;
	/** accounts are the accounts present at genesis. */
	accounts: Any[];
}

const baseGenesisState: object = {};

export const GenesisState = {
	encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.accounts) {
			Any.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): GenesisState {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseGenesisState } as GenesisState;
		message.accounts = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				case 2:
					message.accounts.push(Any.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): GenesisState {
		const message = { ...baseGenesisState } as GenesisState;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromJSON(object.params)
				: undefined;
		message.accounts = (object.accounts ?? []).map((e: any) =>
			Any.fromJSON(e)
		);
		return message;
	},

	toJSON(message: GenesisState): unknown {
		const obj: any = {};
		message.params !== undefined &&
			(obj.params = message.params
				? Params.toJSON(message.params)
				: undefined);
		if (message.accounts) {
			obj.accounts = message.accounts.map((e) =>
				e ? Any.toJSON(e) : undefined
			);
		} else {
			obj.accounts = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
		object: I
	): GenesisState {
		const message = { ...baseGenesisState } as GenesisState;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined;
		message.accounts =
			object.accounts?.map((e) => Any.fromPartial(e)) || [];
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
