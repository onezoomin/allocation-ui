/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../google/protobuf/duration';
import { StreamStrategy, Recipient } from '../../../regen/divvy/v1/types';
import { Timestamp } from '../../../google/protobuf/timestamp';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

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

export interface MsgUpdateAllocatorSettings {
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

export interface MsgSetAllocatorRecipients {
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

export interface MsgClaimAllocations {
	/** signer, anyone can claim rewards */
	sender: string;
	/** allocator address */
	allocator: string;
}

export interface MsgClaimAllocationsResp {
	/** distributed allocations */
	coins: Coin[];
}

export interface MsgCreateSlowReleaseStream {
	/** signer and creator of the stream */
	admin: string;
	/** when the stream starts */
	start?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	name: string;
	/** Allocator address */
	destination: string;
	/** when paused, stream won't send funds */
	paused: boolean;
	strategy?: StreamStrategy;
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
	name: string;
	/** Allocator address */
	destination: string;
	/** when paused, stream won't send funds */
	paused: boolean;
	strategy?: StreamStrategy;
}

const baseMsgEmptyResp: object = {};

export const MsgEmptyResp = {
	encode(
		_: MsgEmptyResp,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgEmptyResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateAllocator {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateAllocatorResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

const baseMsgUpdateAllocatorSettings: object = {
	address: '',
	sender: '',
	name: '',
	url: '',
};

export const MsgUpdateAllocatorSettings = {
	encode(
		message: MsgUpdateAllocatorSettings,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateAllocatorSettings {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateAllocatorSettings,
		} as MsgUpdateAllocatorSettings;
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

	fromJSON(object: any): MsgUpdateAllocatorSettings {
		const message = {
			...baseMsgUpdateAllocatorSettings,
		} as MsgUpdateAllocatorSettings;
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

	toJSON(message: MsgUpdateAllocatorSettings): unknown {
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

	fromPartial<I extends Exact<DeepPartial<MsgUpdateAllocatorSettings>, I>>(
		object: I
	): MsgUpdateAllocatorSettings {
		const message = {
			...baseMsgUpdateAllocatorSettings,
		} as MsgUpdateAllocatorSettings;
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

const baseMsgSetAllocatorRecipients: object = { address: '', sender: '' };

export const MsgSetAllocatorRecipients = {
	encode(
		message: MsgSetAllocatorRecipients,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgSetAllocatorRecipients {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgSetAllocatorRecipients,
		} as MsgSetAllocatorRecipients;
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

	fromJSON(object: any): MsgSetAllocatorRecipients {
		const message = {
			...baseMsgSetAllocatorRecipients,
		} as MsgSetAllocatorRecipients;
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

	toJSON(message: MsgSetAllocatorRecipients): unknown {
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

	fromPartial<I extends Exact<DeepPartial<MsgSetAllocatorRecipients>, I>>(
		object: I
	): MsgSetAllocatorRecipients {
		const message = {
			...baseMsgSetAllocatorRecipients,
		} as MsgSetAllocatorRecipients;
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
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.sender !== '') {
			writer.uint32(18).string(message.sender);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgRemoveAllocator {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

const baseMsgClaimAllocations: object = { sender: '', allocator: '' };

export const MsgClaimAllocations = {
	encode(
		message: MsgClaimAllocations,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.allocator !== '') {
			writer.uint32(18).string(message.allocator);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgClaimAllocations {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgClaimAllocations } as MsgClaimAllocations;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.allocator = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgClaimAllocations {
		const message = { ...baseMsgClaimAllocations } as MsgClaimAllocations;
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.allocator =
			object.allocator !== undefined && object.allocator !== null
				? String(object.allocator)
				: '';
		return message;
	},

	toJSON(message: MsgClaimAllocations): unknown {
		const obj: any = {};
		message.sender !== undefined && (obj.sender = message.sender);
		message.allocator !== undefined && (obj.allocator = message.allocator);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgClaimAllocations>, I>>(
		object: I
	): MsgClaimAllocations {
		const message = { ...baseMsgClaimAllocations } as MsgClaimAllocations;
		message.sender = object.sender ?? '';
		message.allocator = object.allocator ?? '';
		return message;
	},
};

const baseMsgClaimAllocationsResp: object = {};

export const MsgClaimAllocationsResp = {
	encode(
		message: MsgClaimAllocationsResp,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.coins) {
			Coin.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgClaimAllocationsResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgClaimAllocationsResp,
		} as MsgClaimAllocationsResp;
		message.coins = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.coins.push(Coin.decode(reader, reader.uint32()));
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgClaimAllocationsResp {
		const message = {
			...baseMsgClaimAllocationsResp,
		} as MsgClaimAllocationsResp;
		message.coins = (object.coins ?? []).map((e: any) => Coin.fromJSON(e));
		return message;
	},

	toJSON(message: MsgClaimAllocationsResp): unknown {
		const obj: any = {};
		if (message.coins) {
			obj.coins = message.coins.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.coins = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgClaimAllocationsResp>, I>>(
		object: I
	): MsgClaimAllocationsResp {
		const message = {
			...baseMsgClaimAllocationsResp,
		} as MsgClaimAllocationsResp;
		message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgCreateSlowReleaseStream: object = {
	admin: '',
	name: '',
	destination: '',
	paused: false,
};

export const MsgCreateSlowReleaseStream = {
	encode(
		message: MsgCreateSlowReleaseStream,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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
		if (message.name !== '') {
			writer.uint32(42).string(message.name);
		}
		if (message.destination !== '') {
			writer.uint32(50).string(message.destination);
		}
		if (message.paused === true) {
			writer.uint32(56).bool(message.paused);
		}
		if (message.strategy !== undefined) {
			StreamStrategy.encode(
				message.strategy,
				writer.uint32(82).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateSlowReleaseStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
					message.name = reader.string();
					break;
				case 6:
					message.destination = reader.string();
					break;
				case 7:
					message.paused = reader.bool();
					break;
				case 10:
					message.strategy = StreamStrategy.decode(
						reader,
						reader.uint32()
					);
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
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.destination =
			object.destination !== undefined && object.destination !== null
				? String(object.destination)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromJSON(object.strategy)
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
		message.name !== undefined && (obj.name = message.name);
		message.destination !== undefined &&
			(obj.destination = message.destination);
		message.paused !== undefined && (obj.paused = message.paused);
		message.strategy !== undefined &&
			(obj.strategy = message.strategy
				? StreamStrategy.toJSON(message.strategy)
				: undefined);
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
		message.name = object.name ?? '';
		message.destination = object.destination ?? '';
		message.paused = object.paused ?? false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromPartial(object.strategy)
				: undefined;
		return message;
	},
};

const baseMsgCreateSlowReleaseStreamResp: object = { address: '' };

export const MsgCreateSlowReleaseStreamResp = {
	encode(
		message: MsgCreateSlowReleaseStreamResp,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateSlowReleaseStreamResp {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgPauseSlowReleaseStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
	name: '',
	destination: '',
	paused: false,
};

export const MsgEditSlowReleaseStream = {
	encode(
		message: MsgEditSlowReleaseStream,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
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
		if (message.name !== '') {
			writer.uint32(42).string(message.name);
		}
		if (message.destination !== '') {
			writer.uint32(50).string(message.destination);
		}
		if (message.paused === true) {
			writer.uint32(56).bool(message.paused);
		}
		if (message.strategy !== undefined) {
			StreamStrategy.encode(
				message.strategy,
				writer.uint32(82).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgEditSlowReleaseStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
					message.name = reader.string();
					break;
				case 6:
					message.destination = reader.string();
					break;
				case 7:
					message.paused = reader.bool();
					break;
				case 10:
					message.strategy = StreamStrategy.decode(
						reader,
						reader.uint32()
					);
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
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.destination =
			object.destination !== undefined && object.destination !== null
				? String(object.destination)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromJSON(object.strategy)
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
		message.name !== undefined && (obj.name = message.name);
		message.destination !== undefined &&
			(obj.destination = message.destination);
		message.paused !== undefined && (obj.paused = message.paused);
		message.strategy !== undefined &&
			(obj.strategy = message.strategy
				? StreamStrategy.toJSON(message.strategy)
				: undefined);
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
		message.name = object.name ?? '';
		message.destination = object.destination ?? '';
		message.paused = object.paused ?? false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromPartial(object.strategy)
				: undefined;
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
	UpdateAllocatorSettings(
		request: MsgUpdateAllocatorSettings
	): Promise<MsgEmptyResp>;
	/**
	 * Allocator owner can update the recipient list by setting a new
	 * allocation map.
	 */
	SetAllocatorRecipients(
		request: MsgSetAllocatorRecipients
	): Promise<MsgEmptyResp>;
	/** Removes allocator and disables all streamers! */
	RemoveAllocator(request: MsgRemoveAllocator): Promise<MsgEmptyResp>;
	ClaimAllocations(
		request: MsgClaimAllocations
	): Promise<MsgClaimAllocationsResp>;
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
		this.UpdateAllocatorSettings = this.UpdateAllocatorSettings.bind(this);
		this.SetAllocatorRecipients = this.SetAllocatorRecipients.bind(this);
		this.RemoveAllocator = this.RemoveAllocator.bind(this);
		this.ClaimAllocations = this.ClaimAllocations.bind(this);
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
			MsgCreateAllocatorResp.decode(new _m0.Reader(data))
		);
	}

	UpdateAllocatorSettings(
		request: MsgUpdateAllocatorSettings
	): Promise<MsgEmptyResp> {
		const data = MsgUpdateAllocatorSettings.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'UpdateAllocatorSettings',
			data
		);
		return promise.then((data) =>
			MsgEmptyResp.decode(new _m0.Reader(data))
		);
	}

	SetAllocatorRecipients(
		request: MsgSetAllocatorRecipients
	): Promise<MsgEmptyResp> {
		const data = MsgSetAllocatorRecipients.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'SetAllocatorRecipients',
			data
		);
		return promise.then((data) =>
			MsgEmptyResp.decode(new _m0.Reader(data))
		);
	}

	RemoveAllocator(request: MsgRemoveAllocator): Promise<MsgEmptyResp> {
		const data = MsgRemoveAllocator.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'RemoveAllocator',
			data
		);
		return promise.then((data) =>
			MsgEmptyResp.decode(new _m0.Reader(data))
		);
	}

	ClaimAllocations(
		request: MsgClaimAllocations
	): Promise<MsgClaimAllocationsResp> {
		const data = MsgClaimAllocations.encode(request).finish();
		const promise = this.rpc.request(
			'regen.divvy.v1.Msg',
			'ClaimAllocations',
			data
		);
		return promise.then((data) =>
			MsgClaimAllocationsResp.decode(new _m0.Reader(data))
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
			MsgCreateSlowReleaseStreamResp.decode(new _m0.Reader(data))
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
		return promise.then((data) =>
			MsgEmptyResp.decode(new _m0.Reader(data))
		);
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
		return promise.then((data) =>
			MsgEmptyResp.decode(new _m0.Reader(data))
		);
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

if (_m0.util.Long !== Long) {
	_m0.util.Long = Long as any;
	_m0.configure();
}
