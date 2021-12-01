/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Duration } from '../../../google/protobuf/duration';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.ecocredit.v1alpha2';

export interface AllocatorEntry {
/** endeavor wallet address */
endeavor: string,
/** allocation share. 100% = 1e6. */
share: number,
}

export interface Allocator {
/**
 * admin is the address of the account that creates the allocator and signs
 * the message
 */
admin: string,
start?: Date,
end?: Date,
/** how often we do a distribution, min = 1s */
interval?: Duration,
/** name of the allocator */
name: string,
/** url with metadata */
url: string,
paused: boolean,
/**
 * Invariant:
 * * sum of shares in entires must equal to 100% (1mln)
 * list of allocation entries
 */
entries: AllocatorEntry[],
}

export interface SlowReleaseStream {
/** signer and creator of the stream */
admin: string,
/** when the stream starts */
start?: Date,
/** how often we do a distribution */
interval?: Duration,
/** Allocator address */
destination: string,
/** name of the allocator */
name: string,
paused: boolean,
/**
 * fixed amount of tokens streamed in each round. If there is a zero balance
 * available then then nothing will be streamed. If only fraction is
 * available then the it will be fully streamed.
 */
fixedAmount: string | undefined,
}

const baseAllocatorEntry: object = { endeavor: "",share: 0 };

export const AllocatorEntry = {
            encode(
      message: AllocatorEntry,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.endeavor !== "") {
          writer.uint32(10).string(message.endeavor);
        }
if (message.share !== 0) {
          writer.uint32(16).uint32(message.share);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): AllocatorEntry {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAllocatorEntry } as AllocatorEntry;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.endeavor = reader.string();
break;
case 2:
message.share = reader.uint32();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): AllocatorEntry {
      const message = { ...baseAllocatorEntry } as AllocatorEntry;
message.endeavor = (object.endeavor !== undefined && object.endeavor !== null)
          ? String(object.endeavor)
          : "";
message.share = (object.share !== undefined && object.share !== null)
          ? Number(object.share)
          : 0;
return message
},

toJSON(message: AllocatorEntry): unknown {
      const obj: any = {};
message.endeavor !== undefined && (obj.endeavor = message.endeavor);
message.share !== undefined && (obj.share = message.share);
return obj;
},

fromPartial<I extends Exact<DeepPartial<AllocatorEntry>, I>>(object: I): AllocatorEntry {
      const message = { ...baseAllocatorEntry } as AllocatorEntry;
message.endeavor = object.endeavor ?? "";
message.share = object.share ?? 0;
return message;
}
          };

const baseAllocator: object = { admin: "",name: "",url: "",paused: false };

export const Allocator = {
            encode(
      message: Allocator,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.admin !== "") {
          writer.uint32(10).string(message.admin);
        }
if (message.start !== undefined) {
          Timestamp.encode(toTimestamp(message.start), writer.uint32(18).fork()).ldelim();
        }
if (message.end !== undefined) {
          Timestamp.encode(toTimestamp(message.end), writer.uint32(26).fork()).ldelim();
        }
if (message.interval !== undefined) {
          Duration.encode(message.interval, writer.uint32(34).fork()).ldelim();
        }
if (message.name !== "") {
          writer.uint32(42).string(message.name);
        }
if (message.url !== "") {
          writer.uint32(50).string(message.url);
        }
if (message.paused === true) {
          writer.uint32(56).bool(message.paused);
        }
for (const v of message.entries) {
            AllocatorEntry.encode(v!, writer.uint32(82).fork()).ldelim();
          }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): Allocator {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseAllocator } as Allocator;
message.entries = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.admin = reader.string();
break;
case 2:
message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
break;
case 3:
message.end = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
break;
case 4:
message.interval = Duration.decode(reader, reader.uint32());
break;
case 5:
message.name = reader.string();
break;
case 6:
message.url = reader.string();
break;
case 7:
message.paused = reader.bool();
break;
case 10:
message.entries.push(AllocatorEntry.decode(reader, reader.uint32()));
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): Allocator {
      const message = { ...baseAllocator } as Allocator;
message.admin = (object.admin !== undefined && object.admin !== null)
          ? String(object.admin)
          : "";
message.start = (object.start !== undefined && object.start !== null)
          ? fromJsonTimestamp(object.start)
          : undefined;
message.end = (object.end !== undefined && object.end !== null)
          ? fromJsonTimestamp(object.end)
          : undefined;
message.interval = (object.interval !== undefined && object.interval !== null)
          ? Duration.fromJSON(object.interval)
          : undefined;
message.name = (object.name !== undefined && object.name !== null)
          ? String(object.name)
          : "";
message.url = (object.url !== undefined && object.url !== null)
          ? String(object.url)
          : "";
message.paused = (object.paused !== undefined && object.paused !== null)
          ? Boolean(object.paused)
          : false;
message.entries = (object.entries ?? []).map((e: any) => AllocatorEntry.fromJSON(e));
return message
},

toJSON(message: Allocator): unknown {
      const obj: any = {};
message.admin !== undefined && (obj.admin = message.admin);
message.start !== undefined && (obj.start = message.start.toISOString());
message.end !== undefined && (obj.end = message.end.toISOString());
message.interval !== undefined && (obj.interval = message.interval ? Duration.toJSON(message.interval) : undefined);
message.name !== undefined && (obj.name = message.name);
message.url !== undefined && (obj.url = message.url);
message.paused !== undefined && (obj.paused = message.paused);
if (message.entries) {
          obj.entries = message.entries.map(e => e ? AllocatorEntry.toJSON(e) : undefined);
        } else {
          obj.entries = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<Allocator>, I>>(object: I): Allocator {
      const message = { ...baseAllocator } as Allocator;
message.admin = object.admin ?? "";
message.start = object.start ?? undefined;
message.end = object.end ?? undefined;
message.interval = (object.interval !== undefined && object.interval !== null)
          ? Duration.fromPartial(object.interval)
          : undefined;
message.name = object.name ?? "";
message.url = object.url ?? "";
message.paused = object.paused ?? false;
message.entries = object.entries?.map((e) => AllocatorEntry.fromPartial(e)) || [];
return message;
}
          };

const baseSlowReleaseStream: object = { admin: "",destination: "",name: "",paused: false };

export const SlowReleaseStream = {
            encode(
      message: SlowReleaseStream,
      writer: Writer = Writer.create(),
    ): Writer {
if (message.admin !== "") {
          writer.uint32(10).string(message.admin);
        }
if (message.start !== undefined) {
          Timestamp.encode(toTimestamp(message.start), writer.uint32(18).fork()).ldelim();
        }
if (message.interval !== undefined) {
          Duration.encode(message.interval, writer.uint32(26).fork()).ldelim();
        }
if (message.destination !== "") {
          writer.uint32(34).string(message.destination);
        }
if (message.name !== "") {
          writer.uint32(42).string(message.name);
        }
if (message.paused === true) {
          writer.uint32(48).bool(message.paused);
        }
if (message.fixedAmount !== undefined) {
          writer.uint32(82).string(message.fixedAmount);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): SlowReleaseStream {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseSlowReleaseStream } as SlowReleaseStream;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.admin = reader.string();
break;
case 2:
message.start = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
break;
case 3:
message.interval = Duration.decode(reader, reader.uint32());
break;
case 4:
message.destination = reader.string();
break;
case 5:
message.name = reader.string();
break;
case 6:
message.paused = reader.bool();
break;
case 10:
message.fixedAmount = reader.string();
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): SlowReleaseStream {
      const message = { ...baseSlowReleaseStream } as SlowReleaseStream;
message.admin = (object.admin !== undefined && object.admin !== null)
          ? String(object.admin)
          : "";
message.start = (object.start !== undefined && object.start !== null)
          ? fromJsonTimestamp(object.start)
          : undefined;
message.interval = (object.interval !== undefined && object.interval !== null)
          ? Duration.fromJSON(object.interval)
          : undefined;
message.destination = (object.destination !== undefined && object.destination !== null)
          ? String(object.destination)
          : "";
message.name = (object.name !== undefined && object.name !== null)
          ? String(object.name)
          : "";
message.paused = (object.paused !== undefined && object.paused !== null)
          ? Boolean(object.paused)
          : false;
message.fixedAmount = (object.fixedAmount !== undefined && object.fixedAmount !== null)
          ? String(object.fixedAmount)
          : undefined;
return message
},

toJSON(message: SlowReleaseStream): unknown {
      const obj: any = {};
message.admin !== undefined && (obj.admin = message.admin);
message.start !== undefined && (obj.start = message.start.toISOString());
message.interval !== undefined && (obj.interval = message.interval ? Duration.toJSON(message.interval) : undefined);
message.destination !== undefined && (obj.destination = message.destination);
message.name !== undefined && (obj.name = message.name);
message.paused !== undefined && (obj.paused = message.paused);
message.fixedAmount !== undefined && (obj.fixedAmount = message.fixedAmount);
return obj;
},

fromPartial<I extends Exact<DeepPartial<SlowReleaseStream>, I>>(object: I): SlowReleaseStream {
      const message = { ...baseSlowReleaseStream } as SlowReleaseStream;
message.admin = object.admin ?? "";
message.start = object.start ?? undefined;
message.interval = (object.interval !== undefined && object.interval !== null)
          ? Duration.fromPartial(object.interval)
          : undefined;
message.destination = object.destination ?? "";
message.name = object.name ?? "";
message.paused = object.paused ?? false;
message.fixedAmount = object.fixedAmount ?? undefined;
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

