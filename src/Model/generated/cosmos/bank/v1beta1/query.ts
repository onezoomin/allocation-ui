/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { PageRequest, PageResponse } from '../../../cosmos/base/query/v1beta1/pagination';
import { Params } from '../../../cosmos/bank/v1beta1/bank';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
/** address is the address to query balances for. */
address: string,
/** denom is the coin denom to query balances for. */
denom: string,
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
/** balance is the balance of the coin. */
balance?: Coin,
}

/** QueryBalanceRequest is the request type for the Query/AllBalances RPC method. */
export interface QueryAllBalancesRequest {
/** address is the address to query balances for. */
address: string,
/** pagination defines an optional pagination for the request. */
pagination?: PageRequest,
}

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 */
export interface QueryAllBalancesResponse {
/** balances is the balances of all the coins. */
balances: Coin[],
/** pagination defines the pagination in the response. */
pagination?: PageResponse,
}

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 */
export interface QueryTotalSupplyRequest {
}

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 */
export interface QueryTotalSupplyResponse {
/** supply is the supply of the coins */
supply: Coin[],
}

/** QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfRequest {
/** denom is the coin denom to query balances for. */
denom: string,
}

/** QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method. */
export interface QuerySupplyOfResponse {
/** amount is the supply of the coin. */
amount?: Coin,
}

/** QueryParamsRequest defines the request type for querying x/bank parameters. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse defines the response type for querying x/bank parameters. */
export interface QueryParamsResponse {
params?: Params,
}

const baseQueryBalanceRequest: object = { address: "",denom: "" };

export const QueryBalanceRequest = {
            encode(
      message: QueryBalanceRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.address !== "") {
          writer.uint32(10).string(message.address);
        }
if (message.denom !== "") {
          writer.uint32(18).string(message.denom);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryBalanceRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.address = reader.string();
break;
case 2:
message.denom = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryBalanceRequest {
      const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
message.address = (object.address !== undefined && object.address !== null)
          ? String(object.address)
          : "";
message.denom = (object.denom !== undefined && object.denom !== null)
          ? String(object.denom)
          : "";
return message
},

toJSON(message: QueryBalanceRequest): unknown {
      const obj: any = {};
message.address !== undefined && (obj.address = message.address);
message.denom !== undefined && (obj.denom = message.denom);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(object: I): QueryBalanceRequest {
      const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
message.address = object.address ?? "";
message.denom = object.denom ?? "";
return message;
}
          };

const baseQueryBalanceResponse: object = {  };

export const QueryBalanceResponse = {
            encode(
      message: QueryBalanceResponse,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.balance !== undefined) {
          Coin.encode(message.balance, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryBalanceResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.balance = Coin.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryBalanceResponse {
      const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
message.balance = (object.balance !== undefined && object.balance !== null)
          ? Coin.fromJSON(object.balance)
          : undefined;
return message
},

toJSON(message: QueryBalanceResponse): unknown {
      const obj: any = {};
message.balance !== undefined && (obj.balance = message.balance ? Coin.toJSON(message.balance) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(object: I): QueryBalanceResponse {
      const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
message.balance = (object.balance !== undefined && object.balance !== null)
          ? Coin.fromPartial(object.balance)
          : undefined;
return message;
}
          };

const baseQueryAllBalancesRequest: object = { address: "" };

export const QueryAllBalancesRequest = {
            encode(
      message: QueryAllBalancesRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.address !== "") {
          writer.uint32(10).string(message.address);
        }
if (message.pagination !== undefined) {
          PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAllBalancesRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.address = reader.string();
break;
case 2:
message.pagination = PageRequest.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryAllBalancesRequest {
      const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
message.address = (object.address !== undefined && object.address !== null)
          ? String(object.address)
          : "";
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageRequest.fromJSON(object.pagination)
          : undefined;
return message
},

toJSON(message: QueryAllBalancesRequest): unknown {
      const obj: any = {};
message.address !== undefined && (obj.address = message.address);
message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAllBalancesRequest>, I>>(object: I): QueryAllBalancesRequest {
      const message = { ...baseQueryAllBalancesRequest } as QueryAllBalancesRequest;
message.address = object.address ?? "";
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageRequest.fromPartial(object.pagination)
          : undefined;
return message;
}
          };

const baseQueryAllBalancesResponse: object = {  };

export const QueryAllBalancesResponse = {
            encode(
      message: QueryAllBalancesResponse,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.balances) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.pagination !== undefined) {
          PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryAllBalancesResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
message.balances = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.balances.push(Coin.decode(reader, reader.uint32()));
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

fromJSON(object: any): QueryAllBalancesResponse {
      const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
message.balances = (object.balances ?? []).map((e: any) => Coin.fromJSON(e));
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageResponse.fromJSON(object.pagination)
          : undefined;
return message
},

toJSON(message: QueryAllBalancesResponse): unknown {
      const obj: any = {};
if (message.balances) {
          obj.balances = message.balances.map(e => e ? Coin.toJSON(e) : undefined);
        } else {
          obj.balances = [];
        }
message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryAllBalancesResponse>, I>>(object: I): QueryAllBalancesResponse {
      const message = { ...baseQueryAllBalancesResponse } as QueryAllBalancesResponse;
message.balances = object.balances?.map((e) => Coin.fromPartial(e)) || [];
message.pagination = (object.pagination !== undefined && object.pagination !== null)
          ? PageResponse.fromPartial(object.pagination)
          : undefined;
return message;
}
          };

const baseQueryTotalSupplyRequest: object = {  };

export const QueryTotalSupplyRequest = {
            encode(
      _: QueryTotalSupplyRequest,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryTotalSupplyRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
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

fromJSON(_: any): QueryTotalSupplyRequest {
      const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
return message
},

toJSON(_: QueryTotalSupplyRequest): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyRequest>, I>>(_: I): QueryTotalSupplyRequest {
      const message = { ...baseQueryTotalSupplyRequest } as QueryTotalSupplyRequest;
return message;
}
          };

const baseQueryTotalSupplyResponse: object = {  };

export const QueryTotalSupplyResponse = {
            encode(
      message: QueryTotalSupplyResponse,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.supply) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QueryTotalSupplyResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
message.supply = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.supply.push(Coin.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QueryTotalSupplyResponse {
      const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
message.supply = (object.supply ?? []).map((e: any) => Coin.fromJSON(e));
return message
},

toJSON(message: QueryTotalSupplyResponse): unknown {
      const obj: any = {};
if (message.supply) {
          obj.supply = message.supply.map(e => e ? Coin.toJSON(e) : undefined);
        } else {
          obj.supply = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<QueryTotalSupplyResponse>, I>>(object: I): QueryTotalSupplyResponse {
      const message = { ...baseQueryTotalSupplyResponse } as QueryTotalSupplyResponse;
message.supply = object.supply?.map((e) => Coin.fromPartial(e)) || [];
return message;
}
          };

const baseQuerySupplyOfRequest: object = { denom: "" };

export const QuerySupplyOfRequest = {
            encode(
      message: QuerySupplyOfRequest,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.denom !== "") {
          writer.uint32(10).string(message.denom);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QuerySupplyOfRequest {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.denom = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QuerySupplyOfRequest {
      const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
message.denom = (object.denom !== undefined && object.denom !== null)
          ? String(object.denom)
          : "";
return message
},

toJSON(message: QuerySupplyOfRequest): unknown {
      const obj: any = {};
message.denom !== undefined && (obj.denom = message.denom);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QuerySupplyOfRequest>, I>>(object: I): QuerySupplyOfRequest {
      const message = { ...baseQuerySupplyOfRequest } as QuerySupplyOfRequest;
message.denom = object.denom ?? "";
return message;
}
          };

const baseQuerySupplyOfResponse: object = {  };

export const QuerySupplyOfResponse = {
            encode(
      message: QuerySupplyOfResponse,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.amount !== undefined) {
          Coin.encode(message.amount, writer.uint32(10).fork()).ldelim();
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): QuerySupplyOfResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.amount = Coin.decode(reader, reader.uint32());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): QuerySupplyOfResponse {
      const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
message.amount = (object.amount !== undefined && object.amount !== null)
          ? Coin.fromJSON(object.amount)
          : undefined;
return message
},

toJSON(message: QuerySupplyOfResponse): unknown {
      const obj: any = {};
message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
return obj;
},

fromPartial<I extends Exact<DeepPartial<QuerySupplyOfResponse>, I>>(object: I): QuerySupplyOfResponse {
      const message = { ...baseQuerySupplyOfResponse } as QuerySupplyOfResponse;
message.amount = (object.amount !== undefined && object.amount !== null)
          ? Coin.fromPartial(object.amount)
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
/** Balance queries the balance of a single coin for a single account. */
Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
/** AllBalances queries the balance of all coins for a single account. */
AllBalances(request: QueryAllBalancesRequest): Promise<QueryAllBalancesResponse>;
/** TotalSupply queries the total supply of all coins. */
TotalSupply(request: QueryTotalSupplyRequest): Promise<QueryTotalSupplyResponse>;
/** SupplyOf queries the supply of a single coin. */
SupplyOf(request: QuerySupplyOfRequest): Promise<QuerySupplyOfResponse>;
/** Params queries the parameters of x/bank module. */
Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {private readonly rpc: Rpc;constructor(rpc: Rpc) {this.rpc = rpc;this.Balance = this.Balance.bind(this);this.AllBalances = this.AllBalances.bind(this);this.TotalSupply = this.TotalSupply.bind(this);this.SupplyOf = this.SupplyOf.bind(this);this.Params = this.Params.bind(this);}
    Balance(
      request: QueryBalanceRequest
    ): Promise<QueryBalanceResponse> {
      const data = QueryBalanceRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Query",
        "Balance",
        data
      );
      return promise.then(data => QueryBalanceResponse.decode(new Reader(data)));
    }
  
    AllBalances(
      request: QueryAllBalancesRequest
    ): Promise<QueryAllBalancesResponse> {
      const data = QueryAllBalancesRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Query",
        "AllBalances",
        data
      );
      return promise.then(data => QueryAllBalancesResponse.decode(new Reader(data)));
    }
  
    TotalSupply(
      request: QueryTotalSupplyRequest
    ): Promise<QueryTotalSupplyResponse> {
      const data = QueryTotalSupplyRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Query",
        "TotalSupply",
        data
      );
      return promise.then(data => QueryTotalSupplyResponse.decode(new Reader(data)));
    }
  
    SupplyOf(
      request: QuerySupplyOfRequest
    ): Promise<QuerySupplyOfResponse> {
      const data = QuerySupplyOfRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Query",
        "SupplyOf",
        data
      );
      return promise.then(data => QuerySupplyOfResponse.decode(new Reader(data)));
    }
  
    Params(
      request: QueryParamsRequest
    ): Promise<QueryParamsResponse> {
      const data = QueryParamsRequest.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Query",
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

