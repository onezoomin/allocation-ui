/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Any } from '../../../google/protobuf/any';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'cosmos.evidence.v1beta1';

/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
/** evidence_hash defines the hash of the requested evidence. */
evidenceHash: Uint8Array,
}

/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
/** evidence returns the requested evidence. */
evidence?: Any,
}

/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
/** pagination defines an optional pagination for the request. */
pagination?: PageRequest,
}

/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
/** evidence returns all evidences. */
evidence: Any[],
/** pagination defines the pagination in the response. */
pagination?: PageResponse,
}

const baseQueryEvidenceRequest: object = {  };

export const QueryEvidenceRequest = {
            encode(
      message: QueryEvidenceRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.evidenceHash.length !== 0) {
          writer.uint32(10).bytes(message.evidenceHash);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryEvidenceRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
message.evidenceHash = new Uint8Array();
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.evidenceHash = reader.bytes();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryEvidenceRequest {
      const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
message.evidenceHash = (object.evidenceHash !== undefined && object.evidenceHash !== null)
          ? bytesFromBase64(object.evidenceHash)
          : new Uint8Array();
return message
},

toJSON(message: QueryEvidenceRequest): unknown {
      const obj: any = {};
message.evidenceHash !== undefined && (obj.evidenceHash = base64FromBytes(message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array()));
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryEvidenceRequest>, I>>(object: I): QueryEvidenceRequest {
      const message = { ...baseQueryEvidenceRequest } as QueryEvidenceRequest;
message.evidenceHash = object.evidenceHash ?? new Uint8Array();
return message;
}
          };

const baseQueryEvidenceResponse: object = {  };

export const QueryEvidenceResponse = {
            encode(
      message: QueryEvidenceResponse,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.evidence !== undefined) {
          Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryEvidenceResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.evidence = Any.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryEvidenceResponse {
      const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
message.evidence = (object.evidence !== undefined && object.evidence !== null)
          ? Any.fromJSON(object.evidence)
          : undefined;
return message
},

toJSON(message: QueryEvidenceResponse): unknown {
      const obj: any = {};
message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryEvidenceResponse>, I>>(object: I): QueryEvidenceResponse {
      const message = { ...baseQueryEvidenceResponse } as QueryEvidenceResponse;
message.evidence = (object.evidence !== undefined && object.evidence !== null)
          ? Any.fromPartial(object.evidence)
          : undefined;
return message;
}
          };

const baseQueryAllEvidenceRequest: object = {  };

export const QueryAllEvidenceRequest = {
            encode(
      message: QueryAllEvidenceRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.pagination !== undefined) {
          PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAllEvidenceRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.pagination = PageRequest.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryAllEvidenceRequest {
      const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageRequest.fromJSON(object.pagination)
          : undefined;
return message
},

toJSON(message: QueryAllEvidenceRequest): unknown {
      const obj: any = {};
message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAllEvidenceRequest>, I>>(object: I): QueryAllEvidenceRequest {
      const message = { ...baseQueryAllEvidenceRequest } as QueryAllEvidenceRequest;
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageRequest.fromPartial(object.pagination)
          : undefined;
return message;
}
          };

const baseQueryAllEvidenceResponse: object = {  };

export const QueryAllEvidenceResponse = {
            encode(
      message: QueryAllEvidenceResponse,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.evidence) {
            Any.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.pagination !== undefined) {
          PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAllEvidenceResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
message.evidence = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.evidence.push(Any.decode(reader, reader.uint32()));
break;
case 2:
message.pagination = PageResponse.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryAllEvidenceResponse {
      const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
message.evidence = (object.evidence ?? []).map((e: any) => Any.fromJSON(e));
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageResponse.fromJSON(object.pagination)
          : undefined;
return message
},

toJSON(message: QueryAllEvidenceResponse): unknown {
      const obj: any = {};
if (message.evidence) {
          obj.evidence = message.evidence.map(e => e ? Any.toJSON(e) : undefined);
        } else {
          obj.evidence = [];
        }
message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAllEvidenceResponse>, I>>(object: I): QueryAllEvidenceResponse {
      const message = { ...baseQueryAllEvidenceResponse } as QueryAllEvidenceResponse;
message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageResponse.fromPartial(object.pagination)
          : undefined;
return message;
}
          };

/** Query defines the gRPC querier service. */
export interface Query {
/** Evidence queries evidence based on evidence hash. */
Evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
/** AllEvidence queries all evidence. */
AllEvidence(request: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}

export class QueryClientImpl implements Query {private readonly rpc: Rpc;constructor(rpc: Rpc) {this.rpc = rpc;this.Evidence = this.Evidence.bind(this);this.AllEvidence = this.AllEvidence.bind(this);}
    Evidence(
      request: QueryEvidenceRequest
    ): Promise<QueryEvidenceResponse> {
      const data = QueryEvidenceRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.evidence.v1beta1.Query",
        "Evidence",
        data
      );
      return promise.then(data => QueryEvidenceResponse.decode(new Reader(data)));
    }
  
    AllEvidence(
      request: QueryAllEvidenceRequest
    ): Promise<QueryAllEvidenceResponse> {
      const data = QueryAllEvidenceRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.evidence.v1beta1.Query",
        "AllEvidence",
        data
      );
      return promise.then(data => QueryAllEvidenceResponse.decode(new Reader(data)));
    }
  }

interface Rpc {
request(
        
        service: string,
        method: string,
        data: Uint8Array
      ): Promise<Uint8Array>;
}

declare var self: any | undefined;
      declare var window: any | undefined;
      declare var global: any | undefined;
      var globalThis: any = (() => {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof global !== "undefined") return global;
        throw "Unable to locate global object";
      })();

const atob: (b64: string) => string = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
      function bytesFromBase64(b64: string): Uint8Array {
        const bin = atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
      }

const btoa : (bin: string) => string = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
      function base64FromBytes(arr: Uint8Array): string {
        const bin: string[] = [];
        for (const byte of arr) {
          bin.push(String.fromCharCode(byte));
        }
        return btoa(bin.join(''));
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

