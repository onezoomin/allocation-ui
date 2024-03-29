/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Any } from '../../../google/protobuf/any';

export const protobufPackage = 'cosmos.crypto.multisig';

/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 */
export interface LegacyAminoPubKey {
	threshold: number;
	publicKeys: Any[];
}

const baseLegacyAminoPubKey: object = { threshold: 0 };

export const LegacyAminoPubKey = {
	encode(
		message: LegacyAminoPubKey,
		writer: Writer = Writer.create()
	): Writer {
		if (message.threshold !== 0) {
			writer.uint32(8).uint32(message.threshold);
		}
		for (const v of message.publicKeys) {
			Any.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): LegacyAminoPubKey {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseLegacyAminoPubKey } as LegacyAminoPubKey;
		message.publicKeys = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.threshold = reader.uint32();
					break;
				case 2:
					message.publicKeys.push(
						Any.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): LegacyAminoPubKey {
		const message = { ...baseLegacyAminoPubKey } as LegacyAminoPubKey;
		message.threshold =
			object.threshold !== undefined && object.threshold !== null
				? Number(object.threshold)
				: 0;
		message.publicKeys = (object.publicKeys ?? []).map((e: any) =>
			Any.fromJSON(e)
		);
		return message;
	},

	toJSON(message: LegacyAminoPubKey): unknown {
		const obj: any = {};
		message.threshold !== undefined && (obj.threshold = message.threshold);
		if (message.publicKeys) {
			obj.publicKeys = message.publicKeys.map((e) =>
				e ? Any.toJSON(e) : undefined
			);
		} else {
			obj.publicKeys = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<LegacyAminoPubKey>, I>>(
		object: I
	): LegacyAminoPubKey {
		const message = { ...baseLegacyAminoPubKey } as LegacyAminoPubKey;
		message.threshold = object.threshold ?? 0;
		message.publicKeys =
			object.publicKeys?.map((e) => Any.fromPartial(e)) || [];
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
