/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';

export const protobufPackage = 'regen.group.v1alpha1';

/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
/** group_id is the unique ID of the group. */
groupId: Long,
}

/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
/** group_id is the unique ID of the group. */
groupId: Long,
}

/** EventCreateGroupAccount is an event emitted when a group account is created. */
export interface EventCreateGroupAccount {
/** address is the address of the group account. */
address: string,
}

/** EventUpdateGroupAccount is an event emitted when a group account is updated. */
export interface EventUpdateGroupAccount {
/** address is the address of the group account. */
address: string,
}

/** EventCreateProposal is an event emitted when a proposal is created. */
export interface EventCreateProposal {
/** proposal_id is the unique ID of the proposal. */
proposalId: Long,
}

/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
/** proposal_id is the unique ID of the proposal. */
proposalId: Long,
}

/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
/** proposal_id is the unique ID of the proposal. */
proposalId: Long,
}

const baseEventCreateGroup: object = { groupId: Long.UZERO };

export const EventCreateGroup = {
            encode(
      message: EventCreateGroup,
      writer: Writer = Writer.create(),
    ): Writer {
if (!message.groupId.isZero()) {
          writer.uint32(8).uint64(message.groupId);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventCreateGroup {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventCreateGroup } as EventCreateGroup;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.groupId = reader.uint64() as Long;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventCreateGroup {
      const message = { ...baseEventCreateGroup } as EventCreateGroup;
message.groupId = (object.groupId !== undefined && object.groupId !== null)
          ? Long.fromString(object.groupId)
          : Long.UZERO;
return message
},

toJSON(message: EventCreateGroup): unknown {
      const obj: any = {};
message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventCreateGroup>, I>>(object: I): EventCreateGroup {
      const message = { ...baseEventCreateGroup } as EventCreateGroup;
message.groupId = (object.groupId !== undefined && object.groupId !== null)
          ? Long.fromValue(object.groupId)
          : Long.UZERO;
return message;
}
          };

const baseEventUpdateGroup: object = { groupId: Long.UZERO };

export const EventUpdateGroup = {
            encode(
      message: EventUpdateGroup,
      writer: Writer = Writer.create(),
    ): Writer {
if (!message.groupId.isZero()) {
          writer.uint32(8).uint64(message.groupId);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventUpdateGroup {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.groupId = reader.uint64() as Long;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventUpdateGroup {
      const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
message.groupId = (object.groupId !== undefined && object.groupId !== null)
          ? Long.fromString(object.groupId)
          : Long.UZERO;
return message
},

toJSON(message: EventUpdateGroup): unknown {
      const obj: any = {};
message.groupId !== undefined && (obj.groupId = (message.groupId || Long.UZERO).toString());
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventUpdateGroup>, I>>(object: I): EventUpdateGroup {
      const message = { ...baseEventUpdateGroup } as EventUpdateGroup;
message.groupId = (object.groupId !== undefined && object.groupId !== null)
          ? Long.fromValue(object.groupId)
          : Long.UZERO;
return message;
}
          };

const baseEventCreateGroupAccount: object = { address: "" };

export const EventCreateGroupAccount = {
            encode(
      message: EventCreateGroupAccount,
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
    ): EventCreateGroupAccount {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventCreateGroupAccount } as EventCreateGroupAccount;
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

fromJSON(object: any): EventCreateGroupAccount {
      const message = { ...baseEventCreateGroupAccount } as EventCreateGroupAccount;
message.address = (object.address !== undefined && object.address !== null)
          ? String(object.address)
          : "";
return message
},

toJSON(message: EventCreateGroupAccount): unknown {
      const obj: any = {};
message.address !== undefined && (obj.address = message.address);
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventCreateGroupAccount>, I>>(object: I): EventCreateGroupAccount {
      const message = { ...baseEventCreateGroupAccount } as EventCreateGroupAccount;
message.address = object.address ?? "";
return message;
}
          };

const baseEventUpdateGroupAccount: object = { address: "" };

export const EventUpdateGroupAccount = {
            encode(
      message: EventUpdateGroupAccount,
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
    ): EventUpdateGroupAccount {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventUpdateGroupAccount } as EventUpdateGroupAccount;
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

fromJSON(object: any): EventUpdateGroupAccount {
      const message = { ...baseEventUpdateGroupAccount } as EventUpdateGroupAccount;
message.address = (object.address !== undefined && object.address !== null)
          ? String(object.address)
          : "";
return message
},

toJSON(message: EventUpdateGroupAccount): unknown {
      const obj: any = {};
message.address !== undefined && (obj.address = message.address);
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventUpdateGroupAccount>, I>>(object: I): EventUpdateGroupAccount {
      const message = { ...baseEventUpdateGroupAccount } as EventUpdateGroupAccount;
message.address = object.address ?? "";
return message;
}
          };

const baseEventCreateProposal: object = { proposalId: Long.UZERO };

export const EventCreateProposal = {
            encode(
      message: EventCreateProposal,
      writer: Writer = Writer.create(),
    ): Writer {
if (!message.proposalId.isZero()) {
          writer.uint32(8).uint64(message.proposalId);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventCreateProposal {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventCreateProposal } as EventCreateProposal;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.proposalId = reader.uint64() as Long;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventCreateProposal {
      const message = { ...baseEventCreateProposal } as EventCreateProposal;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromString(object.proposalId)
          : Long.UZERO;
return message
},

toJSON(message: EventCreateProposal): unknown {
      const obj: any = {};
message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventCreateProposal>, I>>(object: I): EventCreateProposal {
      const message = { ...baseEventCreateProposal } as EventCreateProposal;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromValue(object.proposalId)
          : Long.UZERO;
return message;
}
          };

const baseEventVote: object = { proposalId: Long.UZERO };

export const EventVote = {
            encode(
      message: EventVote,
      writer: Writer = Writer.create(),
    ): Writer {
if (!message.proposalId.isZero()) {
          writer.uint32(8).uint64(message.proposalId);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventVote {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventVote } as EventVote;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.proposalId = reader.uint64() as Long;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventVote {
      const message = { ...baseEventVote } as EventVote;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromString(object.proposalId)
          : Long.UZERO;
return message
},

toJSON(message: EventVote): unknown {
      const obj: any = {};
message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventVote>, I>>(object: I): EventVote {
      const message = { ...baseEventVote } as EventVote;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromValue(object.proposalId)
          : Long.UZERO;
return message;
}
          };

const baseEventExec: object = { proposalId: Long.UZERO };

export const EventExec = {
            encode(
      message: EventExec,
      writer: Writer = Writer.create(),
    ): Writer {
if (!message.proposalId.isZero()) {
          writer.uint32(8).uint64(message.proposalId);
        }
return writer;
},

decode(
      input: Reader | Uint8Array,
      length?: number,
    ): EventExec {
      const reader = input instanceof Reader ? input : new Reader(input);
      let end = length === undefined ? reader.len : reader.pos + length;
      const message = { ...baseEventExec } as EventExec;
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.proposalId = reader.uint64() as Long;
break;
default:
      reader.skipType(tag & 7);
      break;
}
}
return message;
},

fromJSON(object: any): EventExec {
      const message = { ...baseEventExec } as EventExec;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromString(object.proposalId)
          : Long.UZERO;
return message
},

toJSON(message: EventExec): unknown {
      const obj: any = {};
message.proposalId !== undefined && (obj.proposalId = (message.proposalId || Long.UZERO).toString());
return obj;
},

fromPartial<I extends Exact<DeepPartial<EventExec>, I>>(object: I): EventExec {
      const message = { ...baseEventExec } as EventExec;
message.proposalId = (object.proposalId !== undefined && object.proposalId !== null)
          ? Long.fromValue(object.proposalId)
          : Long.UZERO;
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

