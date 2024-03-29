/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.base.reflection.v1beta1';

/** ListAllInterfacesRequest is the request type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesRequest {}

/** ListAllInterfacesResponse is the response type of the ListAllInterfaces RPC. */
export interface ListAllInterfacesResponse {
	/** interface_names is an array of all the registered interfaces. */
	interfaceNames: string[];
}

/**
 * ListImplementationsRequest is the request type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsRequest {
	/** interface_name defines the interface to query the implementations for. */
	interfaceName: string;
}

/**
 * ListImplementationsResponse is the response type of the ListImplementations
 * RPC.
 */
export interface ListImplementationsResponse {
	implementationMessageNames: string[];
}

const baseListAllInterfacesRequest: object = {};

export const ListAllInterfacesRequest = {
	encode(
		_: ListAllInterfacesRequest,
		writer: Writer = Writer.create()
	): Writer {
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): ListAllInterfacesRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseListAllInterfacesRequest,
		} as ListAllInterfacesRequest;
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

	fromJSON(_: any): ListAllInterfacesRequest {
		const message = {
			...baseListAllInterfacesRequest,
		} as ListAllInterfacesRequest;
		return message;
	},

	toJSON(_: ListAllInterfacesRequest): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ListAllInterfacesRequest>, I>>(
		_: I
	): ListAllInterfacesRequest {
		const message = {
			...baseListAllInterfacesRequest,
		} as ListAllInterfacesRequest;
		return message;
	},
};

const baseListAllInterfacesResponse: object = { interfaceNames: '' };

export const ListAllInterfacesResponse = {
	encode(
		message: ListAllInterfacesResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.interfaceNames) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): ListAllInterfacesResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseListAllInterfacesResponse,
		} as ListAllInterfacesResponse;
		message.interfaceNames = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.interfaceNames.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ListAllInterfacesResponse {
		const message = {
			...baseListAllInterfacesResponse,
		} as ListAllInterfacesResponse;
		message.interfaceNames = (object.interfaceNames ?? []).map((e: any) =>
			String(e)
		);
		return message;
	},

	toJSON(message: ListAllInterfacesResponse): unknown {
		const obj: any = {};
		if (message.interfaceNames) {
			obj.interfaceNames = message.interfaceNames.map((e) => e);
		} else {
			obj.interfaceNames = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ListAllInterfacesResponse>, I>>(
		object: I
	): ListAllInterfacesResponse {
		const message = {
			...baseListAllInterfacesResponse,
		} as ListAllInterfacesResponse;
		message.interfaceNames = object.interfaceNames?.map((e) => e) || [];
		return message;
	},
};

const baseListImplementationsRequest: object = { interfaceName: '' };

export const ListImplementationsRequest = {
	encode(
		message: ListImplementationsRequest,
		writer: Writer = Writer.create()
	): Writer {
		if (message.interfaceName !== '') {
			writer.uint32(10).string(message.interfaceName);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): ListImplementationsRequest {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseListImplementationsRequest,
		} as ListImplementationsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.interfaceName = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ListImplementationsRequest {
		const message = {
			...baseListImplementationsRequest,
		} as ListImplementationsRequest;
		message.interfaceName =
			object.interfaceName !== undefined && object.interfaceName !== null
				? String(object.interfaceName)
				: '';
		return message;
	},

	toJSON(message: ListImplementationsRequest): unknown {
		const obj: any = {};
		message.interfaceName !== undefined &&
			(obj.interfaceName = message.interfaceName);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ListImplementationsRequest>, I>>(
		object: I
	): ListImplementationsRequest {
		const message = {
			...baseListImplementationsRequest,
		} as ListImplementationsRequest;
		message.interfaceName = object.interfaceName ?? '';
		return message;
	},
};

const baseListImplementationsResponse: object = {
	implementationMessageNames: '',
};

export const ListImplementationsResponse = {
	encode(
		message: ListImplementationsResponse,
		writer: Writer = Writer.create()
	): Writer {
		for (const v of message.implementationMessageNames) {
			writer.uint32(10).string(v!);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): ListImplementationsResponse {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseListImplementationsResponse,
		} as ListImplementationsResponse;
		message.implementationMessageNames = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.implementationMessageNames.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ListImplementationsResponse {
		const message = {
			...baseListImplementationsResponse,
		} as ListImplementationsResponse;
		message.implementationMessageNames = (
			object.implementationMessageNames ?? []
		).map((e: any) => String(e));
		return message;
	},

	toJSON(message: ListImplementationsResponse): unknown {
		const obj: any = {};
		if (message.implementationMessageNames) {
			obj.implementationMessageNames =
				message.implementationMessageNames.map((e) => e);
		} else {
			obj.implementationMessageNames = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ListImplementationsResponse>, I>>(
		object: I
	): ListImplementationsResponse {
		const message = {
			...baseListImplementationsResponse,
		} as ListImplementationsResponse;
		message.implementationMessageNames =
			object.implementationMessageNames?.map((e) => e) || [];
		return message;
	},
};

/** ReflectionService defines a service for interface reflection. */
export interface ReflectionService {
	/**
	 * ListAllInterfaces lists all the interfaces registered in the interface
	 * registry.
	 */
	ListAllInterfaces(
		request: ListAllInterfacesRequest
	): Promise<ListAllInterfacesResponse>;
	/**
	 * ListImplementations list all the concrete types that implement a given
	 * interface.
	 */
	ListImplementations(
		request: ListImplementationsRequest
	): Promise<ListImplementationsResponse>;
}

export class ReflectionServiceClientImpl implements ReflectionService {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
		this.ListImplementations = this.ListImplementations.bind(this);
	}
	ListAllInterfaces(
		request: ListAllInterfacesRequest
	): Promise<ListAllInterfacesResponse> {
		const data = ListAllInterfacesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.base.reflection.v1beta1.ReflectionService',
			'ListAllInterfaces',
			data
		);
		return promise.then((data) =>
			ListAllInterfacesResponse.decode(new Reader(data))
		);
	}

	ListImplementations(
		request: ListImplementationsRequest
	): Promise<ListImplementationsResponse> {
		const data = ListImplementationsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'cosmos.base.reflection.v1beta1.ReflectionService',
			'ListImplementations',
			data
		);
		return promise.then((data) =>
			ListImplementationsResponse.decode(new Reader(data))
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
