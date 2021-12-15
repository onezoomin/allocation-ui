/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
	PageResponse,
	PageRequest,
} from '../../../cosmos/base/query/v1beta1/pagination';
import { Allocator, SlowReleaseStream } from '../../../regen/divvy/v1/types';

export const protobufPackage = 'regen.divvy.v1';

export interface QueryAllocator {
	address: string;
}

export interface QueryAllocatorsResp {
	allocator: Allocator[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

export interface QueryAllocators {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

export interface QueryAllocatorsByOwner {
	owner: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

export interface QueryStream {
	address: string;
}

export interface QueryStreams {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

export interface QueryStreamsResp {
	streams: SlowReleaseStream[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

const baseQueryAllocator: object = { address: '' };

export const QueryAllocator = {
	encode(
		message: QueryAllocator,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocator {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryAllocator } as QueryAllocator;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryAllocator {
		const message = { ...baseQueryAllocator } as QueryAllocator;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		return message;
	},

	toJSON(message: QueryAllocator): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllocator>, I>>(
		object: I
	): QueryAllocator {
		const message = { ...baseQueryAllocator } as QueryAllocator;
		message.address = object.address ?? '';
		return message;
	},
};

const baseQueryAllocatorsResp: object = {};

export const QueryAllocatorsResp = {
	encode(
		message: QueryAllocatorsResp,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.allocator) {
			Allocator.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryAllocatorsResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryAllocatorsResp } as QueryAllocatorsResp;
		message.allocator = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.allocator.push(
						Allocator.decode(reader, reader.uint32())
					);
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

	fromJSON(object: any): QueryAllocatorsResp {
		const message = { ...baseQueryAllocatorsResp } as QueryAllocatorsResp;
		message.allocator = (object.allocator ?? []).map((e: any) =>
			Allocator.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryAllocatorsResp): unknown {
		const obj: any = {};
		if (message.allocator) {
			obj.allocator = message.allocator.map((e) =>
				e ? Allocator.toJSON(e) : undefined
			);
		} else {
			obj.allocator = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllocatorsResp>, I>>(
		object: I
	): QueryAllocatorsResp {
		const message = { ...baseQueryAllocatorsResp } as QueryAllocatorsResp;
		message.allocator =
			object.allocator?.map((e) => Allocator.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryAllocators: object = {};

export const QueryAllocators = {
	encode(
		message: QueryAllocators,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllocators {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryAllocators } as QueryAllocators;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
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

	fromJSON(object: any): QueryAllocators {
		const message = { ...baseQueryAllocators } as QueryAllocators;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryAllocators): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllocators>, I>>(
		object: I
	): QueryAllocators {
		const message = { ...baseQueryAllocators } as QueryAllocators;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryAllocatorsByOwner: object = { owner: '' };

export const QueryAllocatorsByOwner = {
	encode(
		message: QueryAllocatorsByOwner,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryAllocatorsByOwner {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryAllocatorsByOwner,
		} as QueryAllocatorsByOwner;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
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

	fromJSON(object: any): QueryAllocatorsByOwner {
		const message = {
			...baseQueryAllocatorsByOwner,
		} as QueryAllocatorsByOwner;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryAllocatorsByOwner): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllocatorsByOwner>, I>>(
		object: I
	): QueryAllocatorsByOwner {
		const message = {
			...baseQueryAllocatorsByOwner,
		} as QueryAllocatorsByOwner;
		message.owner = object.owner ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryStream: object = { address: '' };

export const QueryStream = {
	encode(
		message: QueryStream,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QueryStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryStream } as QueryStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryStream {
		const message = { ...baseQueryStream } as QueryStream;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		return message;
	},

	toJSON(message: QueryStream): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryStream>, I>>(
		object: I
	): QueryStream {
		const message = { ...baseQueryStream } as QueryStream;
		message.address = object.address ?? '';
		return message;
	},
};

const baseQueryStreams: object = {};

export const QueryStreams = {
	encode(
		message: QueryStreams,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QueryStreams {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryStreams } as QueryStreams;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
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

	fromJSON(object: any): QueryStreams {
		const message = { ...baseQueryStreams } as QueryStreams;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryStreams): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryStreams>, I>>(
		object: I
	): QueryStreams {
		const message = { ...baseQueryStreams } as QueryStreams;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryStreamsResp: object = {};

export const QueryStreamsResp = {
	encode(
		message: QueryStreamsResp,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.streams) {
			SlowReleaseStream.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QueryStreamsResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryStreamsResp } as QueryStreamsResp;
		message.streams = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.streams.push(
						SlowReleaseStream.decode(reader, reader.uint32())
					);
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

	fromJSON(object: any): QueryStreamsResp {
		const message = { ...baseQueryStreamsResp } as QueryStreamsResp;
		message.streams = (object.streams ?? []).map((e: any) =>
			SlowReleaseStream.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryStreamsResp): unknown {
		const obj: any = {};
		if (message.streams) {
			obj.streams = message.streams.map((e) =>
				e ? SlowReleaseStream.toJSON(e) : undefined
			);
		} else {
			obj.streams = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryStreamsResp>, I>>(
		object: I
	): QueryStreamsResp {
		const message = { ...baseQueryStreamsResp } as QueryStreamsResp;
		message.streams =
			object.streams?.map((e) => SlowReleaseStream.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

/** Msg is the divvy Msg service. */
export interface Query {
	AllocatorByAddress(request: QueryAllocator): Promise<Allocator>;
	Allocators(request: QueryAllocators): Promise<QueryAllocatorsResp>;
	AllocatorsByOwner(
		request: QueryAllocatorsByOwner
	): Promise<QueryAllocatorsResp>;
	StreamByAddress(request: QueryStream): Promise<SlowReleaseStream>;
	Streams(request: QueryStreams): Promise<QueryStreamsResp>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.AllocatorByAddress = this.AllocatorByAddress.bind(this);
		this.Allocators = this.Allocators.bind(this);
		this.AllocatorsByOwner = this.AllocatorsByOwner.bind(this);
		this.StreamByAddress = this.StreamByAddress.bind(this);
		this.Streams = this.Streams.bind(this);
	}
	AllocatorByAddress(request: QueryAllocator): Promise<Allocator> {
		const data = QueryAllocator.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Query',
			'AllocatorByAddress',
			data
		);
		return promise.then((data) => Allocator.decode(new _m0.Reader(data)));
	}

	Allocators(request: QueryAllocators): Promise<QueryAllocatorsResp> {
		const data = QueryAllocators.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Query',
			'Allocators',
			data
		);
		return promise.then((data) =>
			QueryAllocatorsResp.decode(new _m0.Reader(data))
		);
	}

	AllocatorsByOwner(
		request: QueryAllocatorsByOwner
	): Promise<QueryAllocatorsResp> {
		const data = QueryAllocatorsByOwner.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Query',
			'AllocatorsByOwner',
			data
		);
		return promise.then((data) =>
			QueryAllocatorsResp.decode(new _m0.Reader(data))
		);
	}

	StreamByAddress(request: QueryStream): Promise<SlowReleaseStream> {
		const data = QueryStream.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Query',
			'StreamByAddress',
			data
		);
		return promise.then((data) =>
			SlowReleaseStream.decode(new _m0.Reader(data))
		);
	}

	Streams(request: QueryStreams): Promise<QueryStreamsResp> {
		const data = QueryStreams.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Query',
			'Streams',
			data
		);
		return promise.then((data) =>
			QueryStreamsResp.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
	_m0.util.Long = Long as any;
	_m0.configure();
}
