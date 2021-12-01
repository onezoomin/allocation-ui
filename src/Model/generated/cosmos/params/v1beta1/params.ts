/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'cosmos.params.v1beta1';

/** ParameterChangeProposal defines a proposal to change one or more parameters. */
export interface ParameterChangeProposal {
title: string,
description: string,
changes: ParamChange[],
}

/**
 * ParamChange defines an individual parameter change, for use in
 * ParameterChangeProposal.
 */
export interface ParamChange {
subspace: string,
key: string,
value: string,
}

const baseParameterChangeProposal: object = { title: "",description: "" };

export const ParameterChangeProposal = {
            encode(
      message: ParameterChangeProposal,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.title !== "") {
          writer.uint32(10).string(message.title);
        }
if (message.description !== "") {
          writer.uint32(18).string(message.description);
        }
for (const v of message.changes) {
            ParamChange.encode(v!, writer.uint32(26).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): ParameterChangeProposal {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseParameterChangeProposal } as ParameterChangeProposal;
message.changes = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.title = reader.string();
break;
case 2:
message.description = reader.string();
break;
case 3:
message.changes.push(ParamChange.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): ParameterChangeProposal {
      const message = { ...baseParameterChangeProposal } as ParameterChangeProposal;
message.title = (object.title !== undefined && object.title !== null)
          ? String(object.title)
          : "";
message.description = (object.description !== undefined && object.description !== null)
          ? String(object.description)
          : "";
message.changes = (object.changes ?? []).map((e: any) => ParamChange.fromJSON(e));
return message
},

toJSON(message: ParameterChangeProposal): unknown {
      const obj: any = {};
message.title !== undefined && (obj.title = message.title);
message.description !== undefined && (obj.description = message.description);
if (message.changes) {
          obj.changes = message.changes.map(e => e ? ParamChange.toJSON(e) : undefined);
        } else {
          obj.changes = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<ParameterChangeProposal>, I>>(object: I): ParameterChangeProposal {
      const message = { ...baseParameterChangeProposal } as ParameterChangeProposal;
message.title = object.title ?? "";
message.description = object.description ?? "";
message.changes = object.changes?.map((e) => ParamChange.fromPartial(e)) || [];
return message;
}
          };

const baseParamChange: object = { subspace: "",key: "",value: "" };

export const ParamChange = {
            encode(
      message: ParamChange,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.subspace !== "") {
          writer.uint32(10).string(message.subspace);
        }
if (message.key !== "") {
          writer.uint32(18).string(message.key);
        }
if (message.value !== "") {
          writer.uint32(26).string(message.value);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): ParamChange {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseParamChange } as ParamChange;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.subspace = reader.string();
break;
case 2:
message.key = reader.string();
break;
case 3:
message.value = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): ParamChange {
      const message = { ...baseParamChange } as ParamChange;
message.subspace = (object.subspace !== undefined && object.subspace !== null)
          ? String(object.subspace)
          : "";
message.key = (object.key !== undefined && object.key !== null)
          ? String(object.key)
          : "";
message.value = (object.value !== undefined && object.value !== null)
          ? String(object.value)
          : "";
return message
},

toJSON(message: ParamChange): unknown {
      const obj: any = {};
message.subspace !== undefined && (obj.subspace = message.subspace);
message.key !== undefined && (obj.key = message.key);
message.value !== undefined && (obj.value = message.value);
return obj;
},

fromPartial<I extends Exact<DeepPartial<ParamChange>, I>>(object: I): ParamChange {
      const message = { ...baseParamChange } as ParamChange;
message.subspace = object.subspace ?? "";
message.key = object.key ?? "";
message.value = object.value ?? "";
return message;
}
          };







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

