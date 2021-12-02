/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
	PageRequest,
	PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { ContentHash } from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** QueryByContentHashRequest is the Query/ByContentHash request type. */
export interface QueryByIRIRequest {
	/** hash is the hash-based identifier for the anchored content. */
	iri: string;
}

/** QueryByContentHashResponse is the Query/ByContentHash response type. */
export interface QueryByIRIResponse {
	/** entry is the ContentEntry */
	entry?: ContentEntry;
}

/** QueryBySignerRequest is the Query/BySigner request type. */
export interface QueryBySignerRequest {
	/** signer is the address of the signer to query by. */
	signer: string;
	/** pagination is the PageRequest to use for pagination. */
	pagination?: PageRequest;
}

/** QueryBySignerResponse is the Query/BySigner response type. */
export interface QueryBySignerResponse {
	/** entries is the ContentEntry's signed by the queried signer */
	entries: ContentEntry[];
	/** pagination is the pagination PageResponse. */
	pagination?: PageResponse;
}

/** ContentEntry describes data referenced and possibly stored on chain */
export interface ContentEntry {
	/** hash is the content hash */
	hash?: ContentHash;
	/** iri is the content IRI */
	iri: string;
	/** timestamp is the anchor Timestamp */
	timestamp?: Date;
}

/** QuerySignersRequest is the Query/Signers request type. */
export interface QuerySignersRequest {
	/** iri is the content IRI */
	iri: string;
	/** pagination is the PageRequest to use for pagination. */
	pagination?: PageRequest;
}

/** QuerySignersResponse is the Query/QuerySigners response type. */
export interface QuerySignersResponse {
	/** signers are the addresses of the signers. */
	signers: string[];
	/** pagination is the pagination PageResponse. */
	pagination?: PageResponse;
}

const baseQueryByIRIRequest: object = { iri: '' };

export const QueryByIRIRequest = {
	encode(
		message: QueryByIRIRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.iri !== '') {
			writer.uint32(10).string(message.iri);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryByIRIRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryByIRIRequest } as QueryByIRIRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.iri = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryByIRIRequest {
		const message = { ...baseQueryByIRIRequest } as QueryByIRIRequest;
		message.iri =
			object.iri !== undefined && object.iri !== null
				? String(object.iri)
				: '';
		return message;
	},

	toJSON(message: QueryByIRIRequest): unknown {
		const obj: any = {};
		message.iri !== undefined && (obj.iri = message.iri);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryByIRIRequest>, I>>(
		object: I
	): QueryByIRIRequest {
		const message = { ...baseQueryByIRIRequest } as QueryByIRIRequest;
		message.iri = object.iri ?? '';
		return message;
	},
};

const baseQueryByIRIResponse: object = {};

export const QueryByIRIResponse = {
	encode(
		message: QueryByIRIResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.entry !== undefined) {
			ContentEntry.encode(
				message.entry,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryByIRIResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryByIRIResponse } as QueryByIRIResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.entry = ContentEntry.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryByIRIResponse {
		const message = { ...baseQueryByIRIResponse } as QueryByIRIResponse;
		message.entry =
			object.entry !== undefined && object.entry !== null
				? ContentEntry.fromJSON(object.entry)
				: undefined;
		return message;
	},

	toJSON(message: QueryByIRIResponse): unknown {
		const obj: any = {};
		message.entry !== undefined &&
			(obj.entry = message.entry
				? ContentEntry.toJSON(message.entry)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryByIRIResponse>, I>>(
		object: I
	): QueryByIRIResponse {
		const message = { ...baseQueryByIRIResponse } as QueryByIRIResponse;
		message.entry =
			object.entry !== undefined && object.entry !== null
				? ContentEntry.fromPartial(object.entry)
				: undefined;
		return message;
	},
};

const baseQueryBySignerRequest: object = { signer: '' };

export const QueryBySignerRequest = {
	encode(
		message: QueryBySignerRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.signer !== '') {
			writer.uint32(10).string(message.signer);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryBySignerRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBySignerRequest } as QueryBySignerRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.signer = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBySignerRequest {
		const message = { ...baseQueryBySignerRequest } as QueryBySignerRequest;
		message.signer =
			object.signer !== undefined && object.signer !== null
				? String(object.signer)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBySignerRequest): unknown {
		const obj: any = {};
		message.signer !== undefined && (obj.signer = message.signer);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBySignerRequest>, I>>(
		object: I
	): QueryBySignerRequest {
		const message = { ...baseQueryBySignerRequest } as QueryBySignerRequest;
		message.signer = object.signer ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBySignerResponse: object = {};

export const QueryBySignerResponse = {
	encode(
		message: QueryBySignerResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.entries) {
			ContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(26).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryBySignerResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBySignerResponse,
		} as QueryBySignerResponse;
		message.entries = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.entries.push(
						ContentEntry.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.pagination = PageResponse.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBySignerResponse {
		const message = {
			...baseQueryBySignerResponse,
		} as QueryBySignerResponse;
		message.entries = (object.entries ?? []).map((e: any) =>
			ContentEntry.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBySignerResponse): unknown {
		const obj: any = {};
		if (message.entries) {
			obj.entries = message.entries.map((e) =>
				e ? ContentEntry.toJSON(e) : undefined
			);
		} else {
			obj.entries = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBySignerResponse>, I>>(
		object: I
	): QueryBySignerResponse {
		const message = {
			...baseQueryBySignerResponse,
		} as QueryBySignerResponse;
		message.entries =
			object.entries?.map((e) => ContentEntry.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseContentEntry: object = { iri: '' };

export const ContentEntry = {
	encode(message: ContentEntry, writer: Writer = Writer.create()): Writer {
		if (message.hash !== undefined) {
			ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
		}
		if (message.iri !== '') {
			writer.uint32(18).string(message.iri);
		}
		if (message.timestamp !== undefined) {
			Timestamp.encode(
				toTimestamp(message.timestamp),
				writer.uint32(26).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): ContentEntry {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseContentEntry } as ContentEntry;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.hash = ContentHash.decode(reader, reader.uint32());
					break;
				case 2:
					message.iri = reader.string();
					break;
				case 3:
					message.timestamp = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ContentEntry {
		const message = { ...baseContentEntry } as ContentEntry;
		message.hash =
			object.hash !== undefined && object.hash !== null
				? ContentHash.fromJSON(object.hash)
				: undefined;
		message.iri =
			object.iri !== undefined && object.iri !== null
				? String(object.iri)
				: '';
		message.timestamp =
			object.timestamp !== undefined && object.timestamp !== null
				? fromJsonTimestamp(object.timestamp)
				: undefined;
		return message;
	},

	toJSON(message: ContentEntry): unknown {
		const obj: any = {};
		message.hash !== undefined &&
			(obj.hash = message.hash
				? ContentHash.toJSON(message.hash)
				: undefined);
		message.iri !== undefined && (obj.iri = message.iri);
		message.timestamp !== undefined &&
			(obj.timestamp = message.timestamp.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ContentEntry>, I>>(
		object: I
	): ContentEntry {
		const message = { ...baseContentEntry } as ContentEntry;
		message.hash =
			object.hash !== undefined && object.hash !== null
				? ContentHash.fromPartial(object.hash)
				: undefined;
		message.iri = object.iri ?? '';
		message.timestamp = object.timestamp ?? undefined;
		return message;
	},
};

const baseQuerySignersRequest: object = { iri: '' };

export const QuerySignersRequest = {
	encode(
		message: QuerySignersRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.iri !== '') {
			writer.uint32(10).string(message.iri);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QuerySignersRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQuerySignersRequest } as QuerySignersRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.iri = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QuerySignersRequest {
		const message = { ...baseQuerySignersRequest } as QuerySignersRequest;
		message.iri =
			object.iri !== undefined && object.iri !== null
				? String(object.iri)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySignersRequest): unknown {
		const obj: any = {};
		message.iri !== undefined && (obj.iri = message.iri);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySignersRequest>, I>>(
		object: I
	): QuerySignersRequest {
		const message = { ...baseQuerySignersRequest } as QuerySignersRequest;
		message.iri = object.iri ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySignersResponse: object = { signers: '' };

export const QuerySignersResponse = {
	encode(
		message: QuerySignersResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.signers) {
			writer.uint32(10).string(v!);
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QuerySignersResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQuerySignersResponse } as QuerySignersResponse;
		message.signers = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.signers.push(reader.string());
					break;
				case 2:
					message.pagination = PageResponse.decode(
						reader,
						reader.uint32()
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QuerySignersResponse {
		const message = { ...baseQuerySignersResponse } as QuerySignersResponse;
		message.signers = (object.signers ?? []).map((e: any) => String(e));
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySignersResponse): unknown {
		const obj: any = {};
		if (message.signers) {
			obj.signers = message.signers.map((e) => e);
		} else {
			obj.signers = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySignersResponse>, I>>(
		object: I
	): QuerySignersResponse {
		const message = { ...baseQuerySignersResponse } as QuerySignersResponse;
		message.signers = object.signers?.map((e) => e) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

/** Query is the regen.data.v1alpha2 Query service */
export interface Query {
	/** ByHash queries data based on its ContentHash. */
	ByIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse>;
	/** BySigner queries data based on signers. */
	BySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse>;
	/** Signers queries signers based on IRI. */
	Signers(request: QuerySignersRequest): Promise<QuerySignersResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.ByIRI = this.ByIRI.bind(this);
		this.BySigner = this.BySigner.bind(this);
		this.Signers = this.Signers.bind(this);
	}
	ByIRI(request: QueryByIRIRequest): Promise<QueryByIRIResponse> {
		const data = QueryByIRIRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.data.v1alpha2.Query',
			'ByIRI',
			data
		);
		return promise.then((data) =>
			QueryByIRIResponse.decode(new Reader(data))
		);
	}

	BySigner(request: QueryBySignerRequest): Promise<QueryBySignerResponse> {
		const data = QueryBySignerRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.data.v1alpha2.Query',
			'BySigner',
			data
		);
		return promise.then((data) =>
			QueryBySignerResponse.decode(new Reader(data))
		);
	}

	Signers(request: QuerySignersRequest): Promise<QuerySignersResponse> {
		const data = QuerySignersRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.data.v1alpha2.Query',
			'Signers',
			data
		);
		return promise.then((data) =>
			QuerySignersResponse.decode(new Reader(data))
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

function toTimestamp(date: Date): Timestamp {
	const seconds = numberToLong(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = t.seconds.toNumber() * 1_000;
	millis += t.nanos / 1_000_000;
	return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof Date) {
		return o;
	} else if (typeof o === 'string') {
		return new Date(o);
	} else {
		return fromTimestamp(Timestamp.fromJSON(o));
	}
}

function numberToLong(number: number) {
	return Long.fromNumber(number);
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
