/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'regen.data.v1alpha2';

/** EventAnchorData is an event emitted when data is anchored on-chain. */
export interface EventAnchorData {
/** iri is the data IRI */
iri: string,
}

/** EventSignData is an event emitted when data is signed on-chain. */
export interface EventSignData {
/** iri is the data IRI */
iri: string,
/** signers are the addresses of the accounts which have signed the data. */
signers: string[],
}

/** EventStoreRawData is an event emitted when data is stored on-chain. */
export interface EventStoreRawData {
/** iri is the data IRI */
iri: string,
}

const baseEventAnchorData: object = { iri: "" };

export const EventAnchorData = {
            encode(
      message: EventAnchorData,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.iri !== "") {
          writer.uint32(10).string(message.iri);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventAnchorData {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventAnchorData } as EventAnchorData;
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

fromJSON(object: any): EventAnchorData {
      const message = { ...baseEventAnchorData } as EventAnchorData;
message.iri = (object.iri !== undefined && object.iri !== null)
          ? String(object.iri)
          : "";
return message
},

toJSON(message: EventAnchorData): unknown {
      const obj: any = {};
message.iri !== undefined && (obj.iri = message.iri);
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventAnchorData>, I>>(object: I): EventAnchorData {
      const message = { ...baseEventAnchorData } as EventAnchorData;
message.iri = object.iri ?? "";
return message;
}
          };

const baseEventSignData: object = { iri: "",signers: "" };

export const EventSignData = {
            encode(
      message: EventSignData,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.iri !== "") {
          writer.uint32(10).string(message.iri);
        }
for (const v of message.signers) {
            writer.uint32(18).string(v!);
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventSignData {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventSignData } as EventSignData;
message.signers = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.iri = reader.string();
break;
case 2:
message.signers.push(reader.string());
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventSignData {
      const message = { ...baseEventSignData } as EventSignData;
message.iri = (object.iri !== undefined && object.iri !== null)
          ? String(object.iri)
          : "";
message.signers = (object.signers ?? []).map((e: any) => String(e));
return message
},

toJSON(message: EventSignData): unknown {
      const obj: any = {};
message.iri !== undefined && (obj.iri = message.iri);
if (message.signers) {
          obj.signers = message.signers.map(e => e);
        } else {
          obj.signers = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventSignData>, I>>(object: I): EventSignData {
      const message = { ...baseEventSignData } as EventSignData;
message.iri = object.iri ?? "";
message.signers = object.signers?.map((e) => e) || [];
return message;
}
          };

const baseEventStoreRawData: object = { iri: "" };

export const EventStoreRawData = {
            encode(
      message: EventStoreRawData,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.iri !== "") {
          writer.uint32(10).string(message.iri);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventStoreRawData {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventStoreRawData } as EventStoreRawData;
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

fromJSON(object: any): EventStoreRawData {
      const message = { ...baseEventStoreRawData } as EventStoreRawData;
message.iri = (object.iri !== undefined && object.iri !== null)
          ? String(object.iri)
          : "";
return message
},

toJSON(message: EventStoreRawData): unknown {
      const obj: any = {};
message.iri !== undefined && (obj.iri = message.iri);
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventStoreRawData>, I>>(object: I): EventStoreRawData {
      const message = { ...baseEventStoreRawData } as EventStoreRawData;
message.iri = object.iri ?? "";
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

