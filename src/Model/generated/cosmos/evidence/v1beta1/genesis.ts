/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Any } from '../../../google/protobuf/any';

export const protobufPackage = 'cosmos.evidence.v1beta1';

/** GenesisState defines the evidence module's genesis state. */
export interface GenesisState {
/** evidence defines all the evidence at genesis. */
evidence: Any[],
}

const baseGenesisState: object = {  };

export const GenesisState = {
            encode(
      message: GenesisState,
      writer: Writer = Writer.create(),
    ): Writer {
for (const v of message.evidence) {
            Any.encode(v!, writer.uint32(10).fork()).ldelim();
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
message.evidence = [];
while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
case 1:
message.evidence.push(Any.decode(reader, reader.uint32()));
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
message.evidence = (object.evidence ?? []).map((e: any) => Any.fromJSON(e));
return message
},

toJSON(message: GenesisState): unknown {
      const obj: any = {};
if (message.evidence) {
          obj.evidence = message.evidence.map(e => e ? Any.toJSON(e) : undefined);
        } else {
          obj.evidence = [];
        }
return obj;
},

fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
      const message = { ...baseGenesisState } as GenesisState;
message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
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

