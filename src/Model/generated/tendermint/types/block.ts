/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Header, Data, Commit } from '../../tendermint/types/types';
import { EvidenceList } from '../../tendermint/types/evidence';

export const protobufPackage = 'tendermint.types';

export interface Block {
	header?: Header;
	data?: Data;
	evidence?: EvidenceList;
	lastCommit?: Commit;
}

const baseBlock: object = {};

export const Block = {
	encode(message: Block, writer: Writer = Writer.create()): Writer {
		if (message.header !== undefined) {
			Header.encode(message.header, writer.uint32(10).fork()).ldelim();
		}
		if (message.data !== undefined) {
			Data.encode(message.data, writer.uint32(18).fork()).ldelim();
		}
		if (message.evidence !== undefined) {
			EvidenceList.encode(
				message.evidence,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.lastCommit !== undefined) {
			Commit.encode(
				message.lastCommit,
				writer.uint32(34).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Block {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBlock } as Block;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.header = Header.decode(reader, reader.uint32());
					break;
				case 2:
					message.data = Data.decode(reader, reader.uint32());
					break;
				case 3:
					message.evidence = EvidenceList.decode(
						reader,
						reader.uint32()
					);
					break;
				case 4:
					message.lastCommit = Commit.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Block {
		const message = { ...baseBlock } as Block;
		message.header =
			object.header !== undefined && object.header !== null
				? Header.fromJSON(object.header)
				: undefined;
		message.data =
			object.data !== undefined && object.data !== null
				? Data.fromJSON(object.data)
				: undefined;
		message.evidence =
			object.evidence !== undefined && object.evidence !== null
				? EvidenceList.fromJSON(object.evidence)
				: undefined;
		message.lastCommit =
			object.lastCommit !== undefined && object.lastCommit !== null
				? Commit.fromJSON(object.lastCommit)
				: undefined;
		return message;
	},

	toJSON(message: Block): unknown {
		const obj: any = {};
		message.header !== undefined &&
			(obj.header = message.header
				? Header.toJSON(message.header)
				: undefined);
		message.data !== undefined &&
			(obj.data = message.data ? Data.toJSON(message.data) : undefined);
		message.evidence !== undefined &&
			(obj.evidence = message.evidence
				? EvidenceList.toJSON(message.evidence)
				: undefined);
		message.lastCommit !== undefined &&
			(obj.lastCommit = message.lastCommit
				? Commit.toJSON(message.lastCommit)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Block>, I>>(object: I): Block {
		const message = { ...baseBlock } as Block;
		message.header =
			object.header !== undefined && object.header !== null
				? Header.fromPartial(object.header)
				: undefined;
		message.data =
			object.data !== undefined && object.data !== null
				? Data.fromPartial(object.data)
				: undefined;
		message.evidence =
			object.evidence !== undefined && object.evidence !== null
				? EvidenceList.fromPartial(object.evidence)
				: undefined;
		message.lastCommit =
			object.lastCommit !== undefined && object.lastCommit !== null
				? Commit.fromPartial(object.lastCommit)
				: undefined;
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
