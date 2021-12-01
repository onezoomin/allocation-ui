/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { ContentHash, SignerEntry } from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** GenesisState is the genesis state */
export interface GenesisState {
/** entries are the content entries */
entries: GenesisContentEntry[],
}

/** GenesisContentEntry is a genesis content entry */
export interface GenesisContentEntry {
/** hash is the ContentHash */
hash?: ContentHash,
/** timestamp is the anchor Timestamp */
timestamp?: Date,
/** signers are the signers, if any */
signers: SignerEntry[],
}

const baseGenesisState: object = {  };

export const GenesisState = {
            encode(
      message: GenesisState,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.entries) {
            GenesisContentEntry.encode(v!, writer.uint32(10).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): GenesisState {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseGenesisState } as GenesisState;
message.entries = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.entries.push(GenesisContentEntry.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): GenesisState {
      const message = { ...baseGenesisState } as GenesisState;
message.entries = (object.entries ?? []).map((e: any) => GenesisContentEntry.fromJSON(e));
return message
},

toJSON(message: GenesisState): unknown {
      const obj: any = {};
if (message.entries) {
          obj.entries = message.entries.map(e => e ? GenesisContentEntry.toJSON(e) : undefined);
        } else {
          obj.entries = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
      const message = { ...baseGenesisState } as GenesisState;
message.entries = object.entries?.map((e) => GenesisContentEntry.fromPartial(e)) || [];
return message;
}
          };

const baseGenesisContentEntry: object = {  };

export const GenesisContentEntry = {
            encode(
      message: GenesisContentEntry,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.hash !== undefined) {
          ContentHash.encode(message.hash, writer.uint32(10).fork()).ldelim();
        }
if (message.timestamp !== undefined) {
          Timestamp.encode(toTimestamp(message.timestamp), writer.uint32(18).fork()).ldelim();
        }
for (const v of message.signers) {
            SignerEntry.encode(v!, writer.uint32(26).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): GenesisContentEntry {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseGenesisContentEntry } as GenesisContentEntry;
message.signers = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.hash = ContentHash.decode(reader, reader.uint32());
break;
case 2:
message.timestamp = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
break;
case 3:
message.signers.push(SignerEntry.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): GenesisContentEntry {
      const message = { ...baseGenesisContentEntry } as GenesisContentEntry;
message.hash = (object.hash !== undefined && object.hash !== null)
          ? ContentHash.fromJSON(object.hash)
          : undefined;
message.timestamp = (object.timestamp !== undefined && object.timestamp !== null)
          ? fromJsonTimestamp(object.timestamp)
          : undefined;
message.signers = (object.signers ?? []).map((e: any) => SignerEntry.fromJSON(e));
return message
},

toJSON(message: GenesisContentEntry): unknown {
      const obj: any = {};
message.hash !== undefined && (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
message.timestamp !== undefined && (obj.timestamp = message.timestamp.toISOString());
if (message.signers) {
          obj.signers = message.signers.map(e => e ? SignerEntry.toJSON(e) : undefined);
        } else {
          obj.signers = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<GenesisContentEntry>, I>>(object: I): GenesisContentEntry {
      const message = { ...baseGenesisContentEntry } as GenesisContentEntry;
message.hash = (object.hash !== undefined && object.hash !== null)
          ? ContentHash.fromPartial(object.hash)
          : undefined;
message.timestamp = object.timestamp ?? undefined;
message.signers = object.signers?.map((e) => SignerEntry.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
            const seconds = numberToLong(date.getTime() / 1_000);
            const nanos = (date.getTime() % 1_000) * 1_000_000;
            return {  seconds, nanos };
          }

function fromTimestamp(t: Timestamp): Date {
            let millis = t.seconds.toNumber() * 1_000;
            millis += t.nanos / 1_000_000;
            return new Date(millis);
          }

function fromJsonTimestamp(o: any): Date {
          if (o instanceof Date) {
            return o;
          } else if (typeof o === "string") {
            return new Date(o);
          } else {
            return fromTimestamp(Timestamp.fromJSON(o));
          }
        }

function numberToLong(number: number) {
        return Long.fromNumber(number);
      }





// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
    // add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
      if (util.Long !== Long) {
        util.Long = Long as any;
        configure();
      }

