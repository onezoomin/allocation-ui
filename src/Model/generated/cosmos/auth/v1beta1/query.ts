/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Any } from '../../../google/protobuf/any';
import { Params } from '../../../cosmos/auth/v1beta1/auth';

export const protobufPackage = 'cosmos.auth.v1beta1';

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
/** address defines the address to query for. */
address: string,
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
/** account defines the account of the corresponding address. */
account?: Any,
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
/** params defines the parameters of the module. */
params?: Params,
}

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
            encode(
      message: QueryAccountRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.address !== "") {
          writer.uint32(10).string(message.address);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAccountRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
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

fromJSON(object: any): QueryAccountRequest {
      const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
message.address = (object.address !== undefined && object.address !== null)
          ? String(object.address)
          : "";
return message
},

toJSON(message: QueryAccountRequest): unknown {
      const obj: any = {};
message.address !== undefined && (obj.address = message.address);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAccountRequest>, I>>(object: I): QueryAccountRequest {
      const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
message.address = object.address ?? "";
return message;
}
          };

const baseQueryAccountResponse: object = {  };

export const QueryAccountResponse = {
            encode(
      message: QueryAccountResponse,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.account !== undefined) {
          Any.encode(message.account, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAccountResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.account = Any.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryAccountResponse {
      const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
message.account = (object.account !== undefined && object.account !== null)
          ? Any.fromJSON(object.account)
          : undefined;
return message
},

toJSON(message: QueryAccountResponse): unknown {
      const obj: any = {};
message.account !== undefined && (obj.account = message.account ? Any.toJSON(message.account) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAccountResponse>, I>>(object: I): QueryAccountResponse {
      const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
message.account = (object.account !== undefined && object.account !== null)
          ? Any.fromPartial(object.account)
          : undefined;
return message;
}
          };

const baseQueryParamsRequest: object = {  };

export const QueryParamsRequest = {
            encode(
      _: QueryParamsRequest,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryParamsRequest {
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
return message
},

toJSON(_: QueryParamsRequest): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
      const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
return message;
}
          };

const baseQueryParamsResponse: object = {  };

export const QueryParamsResponse = {
            encode(
      message: QueryParamsResponse,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.params !== undefined) {
          Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryParamsResponse {
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
message.params = (object.params !== undefined && object.params !== null)
          ? Params.fromJSON(object.params)
          : undefined;
return message
},

toJSON(message: QueryParamsResponse): unknown {
      const obj: any = {};
message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
      const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
message.params = (object.params !== undefined && object.params !== null)
          ? Params.fromPartial(object.params)
          : undefined;
return message;
}
          };

/** Query defines the gRPC querier service. */
export interface Query {
/** Account returns account details based on address. */
Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
/** Params queries all parameters. */
Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {private readonly rpc: Rpc;constructor(rpc: Rpc) {this.rpc = rpc;this.Account = this.Account.bind(this);this.Params = this.Params.bind(this);}
    Account(
      request: QueryAccountRequest
    ): Promise<QueryAccountResponse> {
      const data = QueryAccountRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.auth.v1beta1.Query",
        "Account",
        data
      );
      return promise.then(data => QueryAccountResponse.decode(new Reader(data)));
    }
  
    Params(
      request: QueryParamsRequest
    ): Promise<QueryParamsResponse> {
      const data = QueryParamsRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.auth.v1beta1.Query",
        "Params",
        data
      );
      return promise.then(data => QueryParamsResponse.decode(new Reader(data)));
    }
  }

interface Rpc {
request(
        
        service: string,
        method: string,
        data: Uint8Array
      ): Promise<Uint8Array>;
}







type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> =  T extends Builtin
        ? T
         : T extends Long ? string | number | Long 
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
        : P &
        { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P> >, never>;













// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
    // add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
      if (util.Long !== Long) {
        util.Long = Long as any;
        configure();
      }

