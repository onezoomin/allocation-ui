/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'cosmos.distribution.v1beta1';

/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
delegatorAddress: string,
withdrawAddress: string,
}

/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}

/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
delegatorAddress: string,
validatorAddress: string,
}

/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
}

/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
validatorAddress: string,
}

/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
}

/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
amount: Coin[],
depositor: string,
}

/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}

const baseMsgSetWithdrawAddress: object = { delegatorAddress: "",withdrawAddress: "" };

export const MsgSetWithdrawAddress = {
            encode(
      message: MsgSetWithdrawAddress,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.delegatorAddress !== "") {
          writer.uint32(10).string(message.delegatorAddress);
        }
if (message.withdrawAddress !== "") {
          writer.uint32(18).string(message.withdrawAddress);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgSetWithdrawAddress {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.delegatorAddress = reader.string();
break;
case 2:
message.withdrawAddress = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgSetWithdrawAddress {
      const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
message.delegatorAddress = (object.delegatorAddress !== undefined && object.delegatorAddress !== null)
          ? String(object.delegatorAddress)
          : "";
message.withdrawAddress = (object.withdrawAddress !== undefined && object.withdrawAddress !== null)
          ? String(object.withdrawAddress)
          : "";
return message
},

toJSON(message: MsgSetWithdrawAddress): unknown {
      const obj: any = {};
message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddress>, I>>(object: I): MsgSetWithdrawAddress {
      const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
message.delegatorAddress = object.delegatorAddress ?? "";
message.withdrawAddress = object.withdrawAddress ?? "";
return message;
}
          };

const baseMsgSetWithdrawAddressResponse: object = {  };

export const MsgSetWithdrawAddressResponse = {
            encode(
      _: MsgSetWithdrawAddressResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgSetWithdrawAddressResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
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

fromJSON(_: any): MsgSetWithdrawAddressResponse {
      const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
return message
},

toJSON(_: MsgSetWithdrawAddressResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgSetWithdrawAddressResponse>, I>>(_: I): MsgSetWithdrawAddressResponse {
      const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
return message;
}
          };

const baseMsgWithdrawDelegatorReward: object = { delegatorAddress: "",validatorAddress: "" };

export const MsgWithdrawDelegatorReward = {
            encode(
      message: MsgWithdrawDelegatorReward,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.delegatorAddress !== "") {
          writer.uint32(10).string(message.delegatorAddress);
        }
if (message.validatorAddress !== "") {
          writer.uint32(18).string(message.validatorAddress);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgWithdrawDelegatorReward {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.delegatorAddress = reader.string();
break;
case 2:
message.validatorAddress = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgWithdrawDelegatorReward {
      const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
message.delegatorAddress = (object.delegatorAddress !== undefined && object.delegatorAddress !== null)
          ? String(object.delegatorAddress)
          : "";
message.validatorAddress = (object.validatorAddress !== undefined && object.validatorAddress !== null)
          ? String(object.validatorAddress)
          : "";
return message
},

toJSON(message: MsgWithdrawDelegatorReward): unknown {
      const obj: any = {};
message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorReward>, I>>(object: I): MsgWithdrawDelegatorReward {
      const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
message.delegatorAddress = object.delegatorAddress ?? "";
message.validatorAddress = object.validatorAddress ?? "";
return message;
}
          };

const baseMsgWithdrawDelegatorRewardResponse: object = {  };

export const MsgWithdrawDelegatorRewardResponse = {
            encode(
      _: MsgWithdrawDelegatorRewardResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgWithdrawDelegatorRewardResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
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

fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
      const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
return message
},

toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgWithdrawDelegatorRewardResponse>, I>>(_: I): MsgWithdrawDelegatorRewardResponse {
      const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
return message;
}
          };

const baseMsgWithdrawValidatorCommission: object = { validatorAddress: "" };

export const MsgWithdrawValidatorCommission = {
            encode(
      message: MsgWithdrawValidatorCommission,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.validatorAddress !== "") {
          writer.uint32(10).string(message.validatorAddress);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgWithdrawValidatorCommission {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.validatorAddress = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgWithdrawValidatorCommission {
      const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
message.validatorAddress = (object.validatorAddress !== undefined && object.validatorAddress !== null)
          ? String(object.validatorAddress)
          : "";
return message
},

toJSON(message: MsgWithdrawValidatorCommission): unknown {
      const obj: any = {};
message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommission>, I>>(object: I): MsgWithdrawValidatorCommission {
      const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
message.validatorAddress = object.validatorAddress ?? "";
return message;
}
          };

const baseMsgWithdrawValidatorCommissionResponse: object = {  };

export const MsgWithdrawValidatorCommissionResponse = {
            encode(
      _: MsgWithdrawValidatorCommissionResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgWithdrawValidatorCommissionResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
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

fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
      const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
return message
},

toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgWithdrawValidatorCommissionResponse>, I>>(_: I): MsgWithdrawValidatorCommissionResponse {
      const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
return message;
}
          };

const baseMsgFundCommunityPool: object = { depositor: "" };

export const MsgFundCommunityPool = {
            encode(
      message: MsgFundCommunityPool,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.amount) {
            Coin.encode(v!, writer.uint32(10).fork()).ldelim();
          }
if (message.depositor !== "") {
          writer.uint32(18).string(message.depositor);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgFundCommunityPool {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
message.amount = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.amount.push(Coin.decode(reader, reader.uint32()));
break;
case 2:
message.depositor = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgFundCommunityPool {
      const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
message.depositor = (object.depositor !== undefined && object.depositor !== null)
          ? String(object.depositor)
          : "";
return message
},

toJSON(message: MsgFundCommunityPool): unknown {
      const obj: any = {};
if (message.amount) {
          obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        } else {
          obj.amount = [];
        }
message.depositor !== undefined && (obj.depositor = message.depositor);
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPool>, I>>(object: I): MsgFundCommunityPool {
      const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
message.depositor = object.depositor ?? "";
return message;
}
          };

const baseMsgFundCommunityPoolResponse: object = {  };

export const MsgFundCommunityPoolResponse = {
            encode(
      _: MsgFundCommunityPoolResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgFundCommunityPoolResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
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

fromJSON(_: any): MsgFundCommunityPoolResponse {
      const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
return message
},

toJSON(_: MsgFundCommunityPoolResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgFundCommunityPoolResponse>, I>>(_: I): MsgFundCommunityPoolResponse {
      const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
return message;
}
          };

/** Msg defines the distribution Msg service. */
export interface Msg {
/**
 * SetWithdrawAddress defines a method to change the withdraw address
 * for a delegator (or validator self-delegation).
 */
SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
/**
 * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
 * from a single validator.
 */
WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
/**
 * WithdrawValidatorCommission defines a method to withdraw the
 * full commission to the validator address.
 */
WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
/**
 * FundCommunityPool defines a method to allow an account to directly
 * fund the community pool.
 */
FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}

export class MsgClientImpl implements Msg {private readonly rpc: Rpc;constructor(rpc: Rpc) {this.rpc = rpc;this.SetWithdrawAddress = this.SetWithdrawAddress.bind(this);this.WithdrawDelegatorReward = this.WithdrawDelegatorReward.bind(this);this.WithdrawValidatorCommission = this.WithdrawValidatorCommission.bind(this);this.FundCommunityPool = this.FundCommunityPool.bind(this);}
    SetWithdrawAddress(
      request: MsgSetWithdrawAddress
    ): Promise<MsgSetWithdrawAddressResponse> {
      const data = MsgSetWithdrawAddress.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.distribution.v1beta1.Msg",
        "SetWithdrawAddress",
        data
      );
      return promise.then(data => MsgSetWithdrawAddressResponse.decode(new Reader(data)));
    }
  
    WithdrawDelegatorReward(
      request: MsgWithdrawDelegatorReward
    ): Promise<MsgWithdrawDelegatorRewardResponse> {
      const data = MsgWithdrawDelegatorReward.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.distribution.v1beta1.Msg",
        "WithdrawDelegatorReward",
        data
      );
      return promise.then(data => MsgWithdrawDelegatorRewardResponse.decode(new Reader(data)));
    }
  
    WithdrawValidatorCommission(
      request: MsgWithdrawValidatorCommission
    ): Promise<MsgWithdrawValidatorCommissionResponse> {
      const data = MsgWithdrawValidatorCommission.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.distribution.v1beta1.Msg",
        "WithdrawValidatorCommission",
        data
      );
      return promise.then(data => MsgWithdrawValidatorCommissionResponse.decode(new Reader(data)));
    }
  
    FundCommunityPool(
      request: MsgFundCommunityPool
    ): Promise<MsgFundCommunityPoolResponse> {
      const data = MsgFundCommunityPool.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.distribution.v1beta1.Msg",
        "FundCommunityPool",
        data
      );
      return promise.then(data => MsgFundCommunityPoolResponse.decode(new Reader(data)));
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

