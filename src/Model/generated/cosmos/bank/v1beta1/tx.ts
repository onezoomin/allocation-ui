/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Input, Output } from '../../../cosmos/bank/v1beta1/bank';

export const protobufPackage = 'cosmos.bank.v1beta1';

/** MsgSend represents a message to send coins from one account to another. */
export interface MsgSend {
fromAddress: string,
toAddress: string,
amount: Coin[],
}

/** MsgSendResponse defines the Msg/Send response type. */
export interface MsgSendResponse {
}

/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export interface MsgMultiSend {
inputs: Input[],
outputs: Output[],
}

/** MsgMultiSendResponse defines the Msg/MultiSend response type. */
export interface MsgMultiSendResponse {
}

const baseMsgSend: object = { fromAddress: "",toAddress: "" };

export const MsgSend = {
            encode(
      message: MsgSend,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.fromAddress !== "") {
          writer.uint32(10).string(message.fromAddress);
        }
if (message.toAddress !== "") {
          writer.uint32(18).string(message.toAddress);
        }
for (const v of message.amount) {
            Coin.encode(v!, writer.uint32(26).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgSend {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgSend } as MsgSend;
message.amount = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.fromAddress = reader.string();
break;
case 2:
message.toAddress = reader.string();
break;
case 3:
message.amount.push(Coin.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgSend {
      const message = { ...baseMsgSend } as MsgSend;
message.fromAddress = (object.fromAddress !== undefined && object.fromAddress !== null)
          ? String(object.fromAddress)
          : "";
message.toAddress = (object.toAddress !== undefined && object.toAddress !== null)
          ? String(object.toAddress)
          : "";
message.amount = (object.amount ?? []).map((e: any) => Coin.fromJSON(e));
return message
},

toJSON(message: MsgSend): unknown {
      const obj: any = {};
message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
message.toAddress !== undefined && (obj.toAddress = message.toAddress);
if (message.amount) {
          obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
        } else {
          obj.amount = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
      const message = { ...baseMsgSend } as MsgSend;
message.fromAddress = object.fromAddress ?? "";
message.toAddress = object.toAddress ?? "";
message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
return message;
}
          };

const baseMsgSendResponse: object = {  };

export const MsgSendResponse = {
            encode(
      _: MsgSendResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgSendResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgSendResponse } as MsgSendResponse;
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

fromJSON(_: any): MsgSendResponse {
      const message = { ...baseMsgSendResponse } as MsgSendResponse;
return message
},

toJSON(_: MsgSendResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(_: I): MsgSendResponse {
      const message = { ...baseMsgSendResponse } as MsgSendResponse;
return message;
}
          };

const baseMsgMultiSend: object = {  };

export const MsgMultiSend = {
            encode(
      message: MsgMultiSend,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.inputs) {
            Input.encode(v!, writer.uint32(10).fork()).ldelim();
          }
for (const v of message.outputs) {
            Output.encode(v!, writer.uint32(18).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgMultiSend {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgMultiSend } as MsgMultiSend;
message.inputs = [];
message.outputs = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.inputs.push(Input.decode(reader, reader.uint32()));
break;
case 2:
message.outputs.push(Output.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): MsgMultiSend {
      const message = { ...baseMsgMultiSend } as MsgMultiSend;
message.inputs = (object.inputs ?? []).map((e: any) => Input.fromJSON(e));
message.outputs = (object.outputs ?? []).map((e: any) => Output.fromJSON(e));
return message
},

toJSON(message: MsgMultiSend): unknown {
      const obj: any = {};
if (message.inputs) {
          obj.inputs = message.inputs.map(e => e ? Input.toJSON(e) : undefined);
        } else {
          obj.inputs = [];
        }
if (message.outputs) {
          obj.outputs = message.outputs.map(e => e ? Output.toJSON(e) : undefined);
        } else {
          obj.outputs = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgMultiSend>, I>>(object: I): MsgMultiSend {
      const message = { ...baseMsgMultiSend } as MsgMultiSend;
message.inputs = object.inputs?.map((e) => Input.fromPartial(e)) || [];
message.outputs = object.outputs?.map((e) => Output.fromPartial(e)) || [];
return message;
}
          };

const baseMsgMultiSendResponse: object = {  };

export const MsgMultiSendResponse = {
            encode(
      _: MsgMultiSendResponse,
      writer: Writer = Writer.create(),
    ): Writer {
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): MsgMultiSendResponse {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
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

fromJSON(_: any): MsgMultiSendResponse {
      const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
return message
},

toJSON(_: MsgMultiSendResponse): unknown {
      const obj: any = {};
return obj;
},

fromPartial<I extends Exact<DeepPartial<MsgMultiSendResponse>, I>>(_: I): MsgMultiSendResponse {
      const message = { ...baseMsgMultiSendResponse } as MsgMultiSendResponse;
return message;
}
          };

/** Msg defines the bank Msg service. */
export interface Msg {
/** Send defines a method for sending coins from one account to another account. */
Send(request: MsgSend): Promise<MsgSendResponse>;
/** MultiSend defines a method for sending coins from some accounts to other accounts. */
MultiSend(request: MsgMultiSend): Promise<MsgMultiSendResponse>;
}

export class MsgClientImpl implements Msg {private readonly rpc: Rpc;constructor(rpc: Rpc) {this.rpc = rpc;this.Send = this.Send.bind(this);this.MultiSend = this.MultiSend.bind(this);}
    Send(
      request: MsgSend
    ): Promise<MsgSendResponse> {
      const data = MsgSend.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Msg",
        "Send",
        data
      );
      return promise.then(data => MsgSendResponse.decode(new Reader(data)));
    }
  
    MultiSend(
      request: MsgMultiSend
    ): Promise<MsgMultiSendResponse> {
      const data = MsgMultiSend.encode(request).finish();
      const promise = this.rpc.request(
        
        "cosmos.bank.v1beta1.Msg",
        "MultiSend",
        data
      );
      return promise.then(data => MsgMultiSendResponse.decode(new Reader(data)));
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

