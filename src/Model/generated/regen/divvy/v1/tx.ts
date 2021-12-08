/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Duration } from '../../../google/protobuf/duration';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Recipient } from '../../../regen/divvy/v1/types';

export const protobufPackage = 'regen.divvy.v1';

export interface MsgEmptyResp {}

/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateAllocator {
	/**
	 * admin is the address of the account that creates the allocator and signs
	 * the message
	 */
	admin: string;
	start?: Date;
	end?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** name of the allocator */
	name: string;
	/** url with metadata */
	url: string;
	/**
	 * Initial allocator mapping.
	 * Invariants:
	 * * sum of shares in recipients must equal to 100% (1mln)
	 */
	recipients: Recipient[];
}

/** MsgCreateClassResponse is the Msg/CreateAllocator response type. */
export interface MsgCreateAllocatorResp {
	/** Address is a unique address of newly created Allocator */
	address: string;
}

export interface MsgUpdateAllocatorSetting {
	/** address of the allocator */
	address: string;
	/** sender must the the Allocator admin */
	sender: string;
	start?: Date;
	end?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** name of the allocator */
	name: string;
	/** url with metadata */
	url: string;
}

export interface MsgSetAllocationMap {
	/** address of the allocator */
	address: string;
	/** sender must the the Allocator admin */
	sender: string;
	/**
	 * New allocator mapping.
	 * Invariants:
	 * * sum of shares in recipients must equal to 100% (1mln)
	 */
	recipients: Recipient[];
}

export interface MsgRemoveAllocator {
	/** address of the allocator */
	address: string;
	/** sender must the the Allocator admin */
	sender: string;
}

export interface MsgCreateSlowReleaseStream {
	/** signer and creator of the stream */
	admin: string;
	/** when the stream starts */
	start?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** Allocator address */
	destination: string;
	/** when paused, stream won't send funds */
	paused: boolean;
	/**
	 * fixed amount of tokens streamed in each round. If there is a zero balance
	 * available then then nothing will be streamed. If only fraction is
	 * available then the it will be fully streamed.
	 */
	fixedAmount: string | undefined;
}

/**
 * MsgCreateSlowReleaseStreamResp is response for
 * Msg/CreateSlowReleaseStreamResp
 */
export interface MsgCreateSlowReleaseStreamResp {
	/** address of the newly created streamer */
	address: string;
}

export interface MsgPauseSlowReleaseStream {
	/** address of a stream */
	address: string;
	/** sender must the the Stream admin */
	sender: string;
	/** the pause value to set */
	paused: boolean;
}

export interface MsgEditSlowReleaseStream {
	/** address of a stream */
	address: string;
	/** sender must the the Stream admin */
	sender: string;
	/** when the stream starts */
	start?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** Allocator address */
	destination: string;
	/** when paused, stream won't send funds */
	paused: boolean;
	/**
	 * fixed amount of tokens streamed in each round. If there is a zero balance
	 * available then then nothing will be streamed. If only fraction is
	 * available then the it will be fully streamed.
	 */
	fixedAmount: string | undefined;
}

const baseMsgEmptyResp: object = {};

export const MsgEmptyResp = {
	encode(_: MsgEmptyResp, writer: Writer = Writer.create()): Writer {
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgEmptyResp {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgEmptyResp } as MsgEmptyResp;
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

	fromJSON(_: any): MsgEmptyResp {
		const message = { ...baseMsgEmptyResp } as MsgEmptyResp;
		return message;
	},

	toJSON(_: MsgEmptyResp): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgEmptyResp>, I>>(
		_: I
	): MsgEmptyResp {
		const message = { ...baseMsgEmptyResp } as MsgEmptyResp;
		return message;
	},
};

const baseMsgCreateAllocator: object = { admin: '', name: '', url: '' };

export const MsgCreateAllocator = {
	encode(
		message: MsgCreateAllocator,
		writer: Writer = Writer.create()
	): Writer {
		if (message.admin !== '') {
			writer.uint32(18).string(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.end !== undefined) {
			Timestamp.encode(
				toTimestamp(message.end),
				writer.uint32(34).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(42).fork()
			).ldelim();
		}
		if (message.name !== '') {
			writer.uint32(50).string(message.name);
		}
		if (message.url !== '') {
			writer.uint32(58).string(message.url);
		}
		for (const v of message.recipients) {
			Recipient.encode(v!, writer.uint32(82).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgCreateAllocator {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCreateAllocator } as MsgCreateAllocator;
		message.recipients = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					message.admin = reader.string();
					break;
				case 3:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.end = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 5:
					message.interval = Duration.decode(reader, reader.uint32());
					break;
				case 6:
					message.name = reader.string();
					break;
				case 7:
					message.url = reader.string();
					break;
				case 10:
					message.recipients.push(
						Recipient.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateAllocator {
		const message = { ...baseMsgCreateAllocator } as MsgCreateAllocator;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.start =
			object.start !== undefined && object.start !== null
				? fromJsonTimestamp(object.start)
				: undefined;
		message.end =
			object.end !== undefined && object.end !== null
				? fromJsonTimestamp(object.end)
				: undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromJSON(object.interval)
				: undefined;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.url =
			object.url !== undefined && object.url !== null
				? String(object.url)
				: '';
		message.recipients = (object.recipients ?? []).map((e: any) =>
			Recipient.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgCreateAllocator): unknown {
		const obj: any = {};
		message.admin !== undefined && (obj.admin = message.admin);
		message.start !== undefined &&
			(obj.start = message.start.toISOString());
		message.end !== undefined && (obj.end = message.end.toISOString());
		message.interval !== undefined &&
			(obj.interval = message.interval
				? Duration.toJSON(message.interval)
				: undefined);
		message.name !== undefined && (obj.name = message.name);
		message.url !== undefined && (obj.url = message.url);
		if (message.recipients) {
			obj.recipients = message.recipients.map((e) =>
				e ? Recipient.toJSON(e) : undefined
			);
		} else {
			obj.recipients = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateAllocator>, I>>(
		object: I
	): MsgCreateAllocator {
		const message = { ...baseMsgCreateAllocator } as MsgCreateAllocator;
		message.admin = object.admin ?? '';
		message.start = object.start ?? undefined;
		message.end = object.end ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.name = object.name ?? '';
		message.url = object.url ?? '';
		message.recipients =
			object.recipients?.map((e) => Recipient.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgCreateAllocatorResp: object = { address: '' };

export const MsgCreateAllocatorResp = {
	encode(
		message: MsgCreateAllocatorResp,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgCreateAllocatorResp {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateAllocatorResp,
		} as MsgCreateAllocatorResp;
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

	fromJSON(object: any): MsgCreateAllocatorResp {
		const message = {
			...baseMsgCreateAllocatorResp,
		} as MsgCreateAllocatorResp;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		return message;
	},

	toJSON(message: MsgCreateAllocatorResp): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateAllocatorResp>, I>>(
		object: I
	): MsgCreateAllocatorResp {
		const message = {
			...baseMsgCreateAllocatorResp,
		} as MsgCreateAllocatorResp;
		message.address = object.address ?? '';
		return message;
	},
};

const baseMsgUpdateAllocatorSetting: object = {
	address: '',
	sender: '',
	name: '',
	url: '',
};

export const MsgUpdateAllocatorSetting = {
	encode(
		message: MsgUpdateAllocatorSetting,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.end !== undefined) {
			Timestamp.encode(
				toTimestamp(message.end),
				writer.uint32(34).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(42).fork()
			).ldelim();
		}
		if (message.name !== '') {
			writer.uint32(50).string(message.name);
		}
		if (message.url !== '') {
			writer.uint32(58).string(message.url);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgUpdateAllocatorSetting {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateAllocatorSetting,
		} as MsgUpdateAllocatorSetting;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.sender = reader.string();
					break;
				case 3:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.end = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 5:
					message.interval = Duration.decode(reader, reader.uint32());
					break;
				case 6:
					message.name = reader.string();
					break;
				case 7:
					message.url = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateAllocatorSetting {
		const message = {
			...baseMsgUpdateAllocatorSetting,
		} as MsgUpdateAllocatorSetting;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.start =
			object.start !== undefined && object.start !== null
				? fromJsonTimestamp(object.start)
				: undefined;
		message.end =
			object.end !== undefined && object.end !== null
				? fromJsonTimestamp(object.end)
				: undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromJSON(object.interval)
				: undefined;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.url =
			object.url !== undefined && object.url !== null
				? String(object.url)
				: '';
		return message;
	},

	toJSON(message: MsgUpdateAllocatorSetting): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.sender !== undefined && (obj.sender = message.sender);
		message.start !== undefined &&
			(obj.start = message.start.toISOString());
		message.end !== undefined && (obj.end = message.end.toISOString());
		message.interval !== undefined &&
			(obj.interval = message.interval
				? Duration.toJSON(message.interval)
				: undefined);
		message.name !== undefined && (obj.name = message.name);
		message.url !== undefined && (obj.url = message.url);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateAllocatorSetting>, I>>(
		object: I
	): MsgUpdateAllocatorSetting {
		const message = {
			...baseMsgUpdateAllocatorSetting,
		} as MsgUpdateAllocatorSetting;
		message.address = object.address ?? '';
		message.sender = object.sender ?? '';
		message.start = object.start ?? undefined;
		message.end = object.end ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.name = object.name ?? '';
		message.url = object.url ?? '';
		return message;
	},
};

const baseMsgSetAllocationMap: object = { address: '', sender: '' };

export const MsgSetAllocationMap = {
	encode(
		message: MsgSetAllocationMap,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		for (const v of message.recipients) {
			Recipient.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgSetAllocationMap {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSetAllocationMap } as MsgSetAllocationMap;
		message.recipients = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.sender = reader.string();
					break;
				case 3:
					message.recipients.push(
						Recipient.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSetAllocationMap {
		const message = { ...baseMsgSetAllocationMap } as MsgSetAllocationMap;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.recipients = (object.recipients ?? []).map((e: any) =>
			Recipient.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgSetAllocationMap): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.sender !== undefined && (obj.sender = message.sender);
		if (message.recipients) {
			obj.recipients = message.recipients.map((e) =>
				e ? Recipient.toJSON(e) : undefined
			);
		} else {
			obj.recipients = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSetAllocationMap>, I>>(
		object: I
	): MsgSetAllocationMap {
		const message = { ...baseMsgSetAllocationMap } as MsgSetAllocationMap;
		message.address = object.address ?? '';
		message.sender = object.sender ?? '';
		message.recipients =
			object.recipients?.map((e) => Recipient.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgRemoveAllocator: object = { address: '', sender: '' };

export const MsgRemoveAllocator = {
	encode(
		message: MsgRemoveAllocator,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): MsgRemoveAllocator {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgRemoveAllocator } as MsgRemoveAllocator;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.sender = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgRemoveAllocator {
		const message = { ...baseMsgRemoveAllocator } as MsgRemoveAllocator;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		return message;
	},

	toJSON(message: MsgRemoveAllocator): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.sender !== undefined && (obj.sender = message.sender);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgRemoveAllocator>, I>>(
		object: I
	): MsgRemoveAllocator {
		const message = { ...baseMsgRemoveAllocator } as MsgRemoveAllocator;
		message.address = object.address ?? '';
		message.sender = object.sender ?? '';
		return message;
	},
};

const baseMsgCreateSlowReleaseStream: object = {
	admin: '',
	destination: '',
	paused: false,
};

export const MsgCreateSlowReleaseStream = {
	encode(
		message: MsgCreateSlowReleaseStream,
		writer: Writer = Writer.create()
	): Writer {
		if (message.admin !== '') {
			writer.uint32(18).string(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(34).fork()
			).ldelim();
		}
		if (message.destination !== '') {
			writer.uint32(42).string(message.destination);
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
		length?: number
	): MsgCreateSlowReleaseStream {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateSlowReleaseStream,
		} as MsgCreateSlowReleaseStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 2:
					message.admin = reader.string();
					break;
				case 3:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.interval = Duration.decode(reader, reader.uint32());
					break;
				case 5:
					message.destination = reader.string();
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

	fromJSON(object: any): MsgCreateSlowReleaseStream {
		const message = {
			...baseMsgCreateSlowReleaseStream,
		} as MsgCreateSlowReleaseStream;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.start =
			object.start !== undefined && object.start !== null
				? fromJsonTimestamp(object.start)
				: undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromJSON(object.interval)
				: undefined;
		message.destination =
			object.destination !== undefined && object.destination !== null
				? String(object.destination)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.fixedAmount =
			object.fixedAmount !== undefined && object.fixedAmount !== null
				? String(object.fixedAmount)
				: undefined;
		return message;
	},

	toJSON(message: MsgCreateSlowReleaseStream): unknown {
		const obj: any = {};
		message.admin !== undefined && (obj.admin = message.admin);
		message.start !== undefined &&
			(obj.start = message.start.toISOString());
		message.interval !== undefined &&
			(obj.interval = message.interval
				? Duration.toJSON(message.interval)
				: undefined);
		message.destination !== undefined &&
			(obj.destination = message.destination);
		message.paused !== undefined && (obj.paused = message.paused);
		message.fixedAmount !== undefined &&
			(obj.fixedAmount = message.fixedAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateSlowReleaseStream>, I>>(
		object: I
	): MsgCreateSlowReleaseStream {
		const message = {
			...baseMsgCreateSlowReleaseStream,
		} as MsgCreateSlowReleaseStream;
		message.admin = object.admin ?? '';
		message.start = object.start ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.destination = object.destination ?? '';
		message.paused = object.paused ?? false;
		message.fixedAmount = object.fixedAmount ?? undefined;
		return message;
	},
};

const baseMsgCreateSlowReleaseStreamResp: object = { address: '' };

export const MsgCreateSlowReleaseStreamResp = {
	encode(
		message: MsgCreateSlowReleaseStreamResp,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgCreateSlowReleaseStreamResp {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateSlowReleaseStreamResp,
		} as MsgCreateSlowReleaseStreamResp;
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

	fromJSON(object: any): MsgCreateSlowReleaseStreamResp {
		const message = {
			...baseMsgCreateSlowReleaseStreamResp,
		} as MsgCreateSlowReleaseStreamResp;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		return message;
	},

	toJSON(message: MsgCreateSlowReleaseStreamResp): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<MsgCreateSlowReleaseStreamResp>, I>
	>(object: I): MsgCreateSlowReleaseStreamResp {
		const message = {
			...baseMsgCreateSlowReleaseStreamResp,
		} as MsgCreateSlowReleaseStreamResp;
		message.address = object.address ?? '';
		return message;
	},
};

const baseMsgPauseSlowReleaseStream: object = {
	address: '',
	sender: '',
	paused: false,
};

export const MsgPauseSlowReleaseStream = {
	encode(
		message: MsgPauseSlowReleaseStream,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		if (message.paused === true) {
			writer.uint32(24).bool(message.paused);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): MsgPauseSlowReleaseStream {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgPauseSlowReleaseStream,
		} as MsgPauseSlowReleaseStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.sender = reader.string();
					break;
				case 3:
					message.paused = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgPauseSlowReleaseStream {
		const message = {
			...baseMsgPauseSlowReleaseStream,
		} as MsgPauseSlowReleaseStream;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		return message;
	},

	toJSON(message: MsgPauseSlowReleaseStream): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.sender !== undefined && (obj.sender = message.sender);
		message.paused !== undefined && (obj.paused = message.paused);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgPauseSlowReleaseStream>, I>>(
		object: I
	): MsgPauseSlowReleaseStream {
		const message = {
			...baseMsgPauseSlowReleaseStream,
		} as MsgPauseSlowReleaseStream;
		message.address = object.address ?? '';
		message.sender = object.sender ?? '';
		message.paused = object.paused ?? false;
		return message;
	},
};

const baseMsgEditSlowReleaseStream: object = {
	address: '',
	sender: '',
	destination: '',
	paused: false,
};

export const MsgEditSlowReleaseStream = {
	encode(
		message: MsgEditSlowReleaseStream,
		writer: Writer = Writer.create()
	): Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(34).fork()
			).ldelim();
		}
		if (message.destination !== '') {
			writer.uint32(42).string(message.destination);
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
		length?: number
	): MsgEditSlowReleaseStream {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgEditSlowReleaseStream,
		} as MsgEditSlowReleaseStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.sender = reader.string();
					break;
				case 3:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.interval = Duration.decode(reader, reader.uint32());
					break;
				case 5:
					message.destination = reader.string();
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

	fromJSON(object: any): MsgEditSlowReleaseStream {
		const message = {
			...baseMsgEditSlowReleaseStream,
		} as MsgEditSlowReleaseStream;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.start =
			object.start !== undefined && object.start !== null
				? fromJsonTimestamp(object.start)
				: undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromJSON(object.interval)
				: undefined;
		message.destination =
			object.destination !== undefined && object.destination !== null
				? String(object.destination)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.fixedAmount =
			object.fixedAmount !== undefined && object.fixedAmount !== null
				? String(object.fixedAmount)
				: undefined;
		return message;
	},

	toJSON(message: MsgEditSlowReleaseStream): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.sender !== undefined && (obj.sender = message.sender);
		message.start !== undefined &&
			(obj.start = message.start.toISOString());
		message.interval !== undefined &&
			(obj.interval = message.interval
				? Duration.toJSON(message.interval)
				: undefined);
		message.destination !== undefined &&
			(obj.destination = message.destination);
		message.paused !== undefined && (obj.paused = message.paused);
		message.fixedAmount !== undefined &&
			(obj.fixedAmount = message.fixedAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgEditSlowReleaseStream>, I>>(
		object: I
	): MsgEditSlowReleaseStream {
		const message = {
			...baseMsgEditSlowReleaseStream,
		} as MsgEditSlowReleaseStream;
		message.address = object.address ?? '';
		message.sender = object.sender ?? '';
		message.start = object.start ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.destination = object.destination ?? '';
		message.paused = object.paused ?? false;
		message.fixedAmount = object.fixedAmount ?? undefined;
		return message;
	},
};

/** Msg is the divvy Msg service. */
export interface Msg {
	/**
	 * Allocator is a distribution engine, which "divvys out" all incoming funds,
	 * at configurable time intervals to all registered recipients.
	 * Each allocator has only one owner.
	 * Ideally this can be managed by a group module.
	 */
	CreateAllocator(
		request: MsgCreateAllocator
	): Promise<MsgCreateAllocatorResp>;
	/** Updates all allocator settings except admin and recipient map. */
	UpdateAllocatorSetting(
		request: MsgUpdateAllocatorSetting
	): Promise<MsgEmptyResp>;
	/**
	 * Allocator owner can update the recipient list by setting a new
	 * allocation map.
	 */
	SetAllocationMap(request: MsgSetAllocationMap): Promise<MsgEmptyResp>;
	/** Removes allocator and disables all streamers! */
	RemoveAllocator(
		request: MsgRemoveAllocator
	): Promise<MsgCreateAllocatorResp>;
	/**
	 * Creates a new stream to feed an address
	 * User creates a stream. Parameters:
	 * * % of total amount to be streamed to allocator every second.
	 * * destination address where the stream will go (ideally allocator)
	 */
	CreateSlowReleaseStream(
		request: MsgCreateSlowReleaseStream
	): Promise<MsgCreateSlowReleaseStreamResp>;
	PauseSlowReleaseStream(
		request: MsgPauseSlowReleaseStream
	): Promise<MsgEmptyResp>;
	EditSlowReleaseStream(
		request: MsgEditSlowReleaseStream
	): Promise<MsgEmptyResp>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.CreateAllocator = this.CreateAllocator.bind(this);
		this.UpdateAllocatorSetting = this.UpdateAllocatorSetting.bind(this);
		this.SetAllocationMap = this.SetAllocationMap.bind(this);
		this.RemoveAllocator = this.RemoveAllocator.bind(this);
		this.CreateSlowReleaseStream = this.CreateSlowReleaseStream.bind(this);
		this.PauseSlowReleaseStream = this.PauseSlowReleaseStream.bind(this);
		this.EditSlowReleaseStream = this.EditSlowReleaseStream.bind(this);
	}
	CreateAllocator(
		request: MsgCreateAllocator
	): Promise<MsgCreateAllocatorResp> {
		const data = MsgCreateAllocator.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'CreateAllocator',
			data
		);
		return promise.then((data) =>
			MsgCreateAllocatorResp.decode(new Reader(data))
		);
	}

	UpdateAllocatorSetting(
		request: MsgUpdateAllocatorSetting
	): Promise<MsgEmptyResp> {
		const data = MsgUpdateAllocatorSetting.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'UpdateAllocatorSetting',
			data
		);
		return promise.then((data) => MsgEmptyResp.decode(new Reader(data)));
	}

	SetAllocationMap(request: MsgSetAllocationMap): Promise<MsgEmptyResp> {
		const data = MsgSetAllocationMap.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'SetAllocationMap',
			data
		);
		return promise.then((data) => MsgEmptyResp.decode(new Reader(data)));
	}

	RemoveAllocator(
		request: MsgRemoveAllocator
	): Promise<MsgCreateAllocatorResp> {
		const data = MsgRemoveAllocator.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'RemoveAllocator',
			data
		);
		return promise.then((data) =>
			MsgCreateAllocatorResp.decode(new Reader(data))
		);
	}

	CreateSlowReleaseStream(
		request: MsgCreateSlowReleaseStream
	): Promise<MsgCreateSlowReleaseStreamResp> {
		const data = MsgCreateSlowReleaseStream.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'CreateSlowReleaseStream',
			data
		);
		return promise.then((data) =>
			MsgCreateSlowReleaseStreamResp.decode(new Reader(data))
		);
	}

	PauseSlowReleaseStream(
		request: MsgPauseSlowReleaseStream
	): Promise<MsgEmptyResp> {
		const data = MsgPauseSlowReleaseStream.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'PauseSlowReleaseStream',
			data
		);
		return promise.then((data) => MsgEmptyResp.decode(new Reader(data)));
	}

	EditSlowReleaseStream(
		request: MsgEditSlowReleaseStream
	): Promise<MsgEmptyResp> {
		const data = MsgEditSlowReleaseStream.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'EditSlowReleaseStream',
			data
		);
		return promise.then((data) => MsgEmptyResp.decode(new Reader(data)));
	}
}

interface Rpc {
	request(
		service: string,
		method: string,
		data: Uint8Array
	): Promise<Uint8Array>;
}

type Builtin =
	| Date
	| Function
	| Uint8Array
	| string
	| number
	| boolean
	| undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends Long
	? string | number | Long
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
	: P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
				Exclude<keyof I, KeysOfUnion<P>>,
				never
			>;

function toTimestamp(date: Date): Timestamp {
	const seconds = numberToLong(date.getTime() / 1_000);
	const nanos = (date.getTime() % 1_000) * 1_000_000;
	return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
	let millis = t.seconds.toNumber() * 1_000;
	millis += t.nanos / 1_000_000;
	return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
	if (o instanceof Date) {
		return o;
	} else if (typeof o === 'string') {
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
