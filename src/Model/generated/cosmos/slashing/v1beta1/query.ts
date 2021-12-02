/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import {
	Params,
	ValidatorSigningInfo,
} from '../../../cosmos/slashing/v1beta1/slashing';
import {
	PageRequest,
	PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.slashing.v1beta1';

/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
	params?: Params;
}

/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
	/** cons_address is the address to query signing info of */
	consAddress: string;
}

/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
	/** val_signing_info is the signing info of requested val cons address */
	valSigningInfo?: ValidatorSigningInfo;
}

/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
	pagination?: PageRequest;
}

/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
	/** info is the signing info of all validators */
	info: ValidatorSigningInfo[];
	pagination?: PageResponse;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
	encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

	fromJSON(_: any): QueryParamsRequest {
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
		return message;
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
		_: I
	): QueryParamsRequest {
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
		return message;
	},
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
	encode(
		message: QueryParamsResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromJSON(object.params)
				: undefined;
		return message;
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		message.params !== undefined &&
			(obj.params = message.params
				? Params.toJSON(message.params)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
		object: I
	): QueryParamsResponse {
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined;
		return message;
	},
};

const baseQuerySigningInfoRequest: object = { consAddress: '' };

export const QuerySigningInfoRequest = {
	encode(
		message: QuerySigningInfoRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.consAddress !== '') {
			writer.uint32(10).string(message.consAddress);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QuerySigningInfoRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySigningInfoRequest,
		} as QuerySigningInfoRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.consAddress = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QuerySigningInfoRequest {
		const message = {
			...baseQuerySigningInfoRequest,
		} as QuerySigningInfoRequest;
		message.consAddress =
			object.consAddress !== undefined && object.consAddress !== null
				? String(object.consAddress)
				: '';
		return message;
	},

	toJSON(message: QuerySigningInfoRequest): unknown {
		const obj: any = {};
		message.consAddress !== undefined &&
			(obj.consAddress = message.consAddress);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySigningInfoRequest>, I>>(
		object: I
	): QuerySigningInfoRequest {
		const message = {
			...baseQuerySigningInfoRequest,
		} as QuerySigningInfoRequest;
		message.consAddress = object.consAddress ?? '';
		return message;
	},
};

const baseQuerySigningInfoResponse: object = {};

export const QuerySigningInfoResponse = {
	encode(
		message: QuerySigningInfoResponse,
		writer: Writer = Writer.create()
	): Writer {
		if (message.valSigningInfo !== undefined) {
			ValidatorSigningInfo.encode(
				message.valSigningInfo,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QuerySigningInfoResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySigningInfoResponse,
		} as QuerySigningInfoResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.valSigningInfo = ValidatorSigningInfo.decode(
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

	fromJSON(object: any): QuerySigningInfoResponse {
		const message = {
			...baseQuerySigningInfoResponse,
		} as QuerySigningInfoResponse;
		message.valSigningInfo =
			object.valSigningInfo !== undefined &&
			object.valSigningInfo !== null
				? ValidatorSigningInfo.fromJSON(object.valSigningInfo)
				: undefined;
		return message;
	},

	toJSON(message: QuerySigningInfoResponse): unknown {
		const obj: any = {};
		message.valSigningInfo !== undefined &&
			(obj.valSigningInfo = message.valSigningInfo
				? ValidatorSigningInfo.toJSON(message.valSigningInfo)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySigningInfoResponse>, I>>(
		object: I
	): QuerySigningInfoResponse {
		const message = {
			...baseQuerySigningInfoResponse,
		} as QuerySigningInfoResponse;
		message.valSigningInfo =
			object.valSigningInfo !== undefined &&
			object.valSigningInfo !== null
				? ValidatorSigningInfo.fromPartial(object.valSigningInfo)
				: undefined;
		return message;
	},
};

const baseQuerySigningInfosRequest: object = {};

export const QuerySigningInfosRequest = {
	encode(
		message: QuerySigningInfosRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): QuerySigningInfosRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySigningInfosRequest,
		} as QuerySigningInfosRequest;
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

	fromJSON(object: any): QuerySigningInfosRequest {
		const message = {
			...baseQuerySigningInfosRequest,
		} as QuerySigningInfosRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySigningInfosRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySigningInfosRequest>, I>>(
		object: I
	): QuerySigningInfosRequest {
		const message = {
			...baseQuerySigningInfosRequest,
		} as QuerySigningInfosRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySigningInfosResponse: object = {};

export const QuerySigningInfosResponse = {
	encode(
		message: QuerySigningInfosResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.info) {
			ValidatorSigningInfo.encode(v!, writer.uint32(10).fork()).ldelim();
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
		input: Reader | Uint8Array,
		length?: number
	): QuerySigningInfosResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySigningInfosResponse,
		} as QuerySigningInfosResponse;
		message.info = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.info.push(
						ValidatorSigningInfo.decode(reader, reader.uint32())
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

	fromJSON(object: any): QuerySigningInfosResponse {
		const message = {
			...baseQuerySigningInfosResponse,
		} as QuerySigningInfosResponse;
		message.info = (object.info ?? []).map((e: any) =>
			ValidatorSigningInfo.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySigningInfosResponse): unknown {
		const obj: any = {};
		if (message.info) {
			obj.info = message.info.map((e) =>
				e ? ValidatorSigningInfo.toJSON(e) : undefined
			);
		} else {
			obj.info = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySigningInfosResponse>, I>>(
		object: I
	): QuerySigningInfosResponse {
		const message = {
			...baseQuerySigningInfosResponse,
		} as QuerySigningInfosResponse;
		message.info =
			object.info?.map((e) => ValidatorSigningInfo.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

/** Query provides defines the gRPC querier service */
export interface Query {
	/** Params queries the parameters of slashing module */
	Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
	/** SigningInfo queries the signing info of given cons address */
	SigningInfo(
		request: QuerySigningInfoRequest
	): Promise<QuerySigningInfoResponse>;
	/** SigningInfos queries signing info of all validators */
	SigningInfos(
		request: QuerySigningInfosRequest
	): Promise<QuerySigningInfosResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.Params = this.Params.bind(this);
		this.SigningInfo = this.SigningInfo.bind(this);
		this.SigningInfos = this.SigningInfos.bind(this);
	}
	Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.slashing.v1beta1.Query',
			'Params',
			data
		);
		return promise.then((data) =>
			QueryParamsResponse.decode(new Reader(data))
		);
	}

	SigningInfo(
		request: QuerySigningInfoRequest
	): Promise<QuerySigningInfoResponse> {
		const data = QuerySigningInfoRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.slashing.v1beta1.Query',
			'SigningInfo',
			data
		);
		return promise.then((data) =>
			QuerySigningInfoResponse.decode(new Reader(data))
		);
	}

	SigningInfos(
		request: QuerySigningInfosRequest
	): Promise<QuerySigningInfosResponse> {
		const data = QuerySigningInfosRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.slashing.v1beta1.Query',
			'SigningInfos',
			data
		);
		return promise.then((data) =>
			QuerySigningInfosResponse.decode(new Reader(data))
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