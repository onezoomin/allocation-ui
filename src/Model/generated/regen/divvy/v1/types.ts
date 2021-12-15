/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Duration } from '../../../google/protobuf/duration';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.divvy.v1';

export interface Recipient {
	/** address wallet address */
	address: string;
	/** allocation share. 100% = 1e6. */
	share: number;
	name: string;
}

export interface StoreAllocator {
	/**
	 * admin is the address of the account that creates the allocator and signs
	 * the message
	 */
	admin: string;
	start?: Date;
	end?: Date;
	/** how often we do a distribution, min = 1s */
	interval?: Duration;
	/** name of the allocator */
	name: string;
	/** url with metadata */
	url: string;
	paused: boolean;
	/**
	 * Invariant:
	 * * sum of shares in entires must equal to 100% (1mln)
	 * list of allocation entries
	 */
	recipients: StoreRecipient[];
	/** timestamp when anyone can call for the next time. */
	nextClaim?: Date;
}

export interface StoreRecipient {
	/** address wallet address */
	address: Uint8Array;
	/** allocation share. 100% = 1e6. */
	share: number;
	name: string;
}

export interface Allocator {
	/**
	 * admin is the address of the account that creates the allocator and signs
	 * the message
	 */
	admin: string;
	start?: Date;
	end?: Date;
	/** how often we do a distribution, min = 1s */
	interval?: Duration;
	/** name of the allocator */
	name: string;
	/** url with metadata */
	url: string;
	paused: boolean;
	/** submodule address of the given allocator */
	address: string;
	/**
	 * Invariant:
	 * * sum of shares in entires must equal to 100% (1mln)
	 * list of allocation entries
	 */
	recipients: Recipient[];
	/** timestamp when anyone can call for the next time. */
	nextClaim?: Date;
}

export interface StoreSlowReleaseStream {
	/** signer and creator of the stream */
	admin: Uint8Array;
	/** when the stream starts */
	start?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** Allocator address */
	destination: Uint8Array;
	/** name of the allocator */
	name: string;
	paused: boolean;
	strategy?: StreamStrategy;
}

export interface SlowReleaseStream {
	/** signer and creator of the stream */
	admin: string;
	/** when the stream starts */
	start?: Date;
	/** how often we do a distribution */
	interval?: Duration;
	/** Allocator address */
	destination: string;
	/** name of the allocator */
	name: string;
	paused: boolean;
	strategy?: StreamStrategy;
	/** submodule address of the given stream */
	address: string;
}

export interface StreamStrategy {
	/**
	 * fixed amount of tokens streamed in each round. If there is a zero balance
	 * available then then nothing will be streamed. If only fraction is
	 * available then the it will be fully streamed.
	 */
	fixedAmount: string | undefined;
}

const baseRecipient: object = { address: '', share: 0, name: '' };

export const Recipient = {
	encode(
		message: Recipient,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.share !== 0) {
			writer.uint32(16).uint32(message.share);
		}
		if (message.name !== '') {
			writer.uint32(26).string(message.name);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): Recipient {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseRecipient } as Recipient;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.share = reader.uint32();
					break;
				case 3:
					message.name = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Recipient {
		const message = { ...baseRecipient } as Recipient;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.share =
			object.share !== undefined && object.share !== null
				? Number(object.share)
				: 0;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		return message;
	},

	toJSON(message: Recipient): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.share !== undefined && (obj.share = message.share);
		message.name !== undefined && (obj.name = message.name);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Recipient>, I>>(
		object: I
	): Recipient {
		const message = { ...baseRecipient } as Recipient;
		message.address = object.address ?? '';
		message.share = object.share ?? 0;
		message.name = object.name ?? '';
		return message;
	},
};

const baseStoreAllocator: object = {
	admin: '',
	name: '',
	url: '',
	paused: false,
};

export const StoreAllocator = {
	encode(
		message: StoreAllocator,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.end !== undefined) {
			Timestamp.encode(
				toTimestamp(message.end),
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
		if (message.url !== '') {
			writer.uint32(50).string(message.url);
		}
		if (message.paused === true) {
			writer.uint32(56).bool(message.paused);
		}
		for (const v of message.recipients) {
			StoreRecipient.encode(v!, writer.uint32(82).fork()).ldelim();
		}
		if (message.nextClaim !== undefined) {
			Timestamp.encode(
				toTimestamp(message.nextClaim),
				writer.uint32(90).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StoreAllocator {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseStoreAllocator } as StoreAllocator;
		message.recipients = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.end = fromTimestamp(
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
					message.url = reader.string();
					break;
				case 7:
					message.paused = reader.bool();
					break;
				case 10:
					message.recipients.push(
						StoreRecipient.decode(reader, reader.uint32())
					);
					break;
				case 11:
					message.nextClaim = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): StoreAllocator {
		const message = { ...baseStoreAllocator } as StoreAllocator;
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
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.recipients = (object.recipients ?? []).map((e: any) =>
			StoreRecipient.fromJSON(e)
		);
		message.nextClaim =
			object.nextClaim !== undefined && object.nextClaim !== null
				? fromJsonTimestamp(object.nextClaim)
				: undefined;
		return message;
	},

	toJSON(message: StoreAllocator): unknown {
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
		message.paused !== undefined && (obj.paused = message.paused);
		if (message.recipients) {
			obj.recipients = message.recipients.map((e) =>
				e ? StoreRecipient.toJSON(e) : undefined
			);
		} else {
			obj.recipients = [];
		}
		message.nextClaim !== undefined &&
			(obj.nextClaim = message.nextClaim.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<StoreAllocator>, I>>(
		object: I
	): StoreAllocator {
		const message = { ...baseStoreAllocator } as StoreAllocator;
		message.admin = object.admin ?? '';
		message.start = object.start ?? undefined;
		message.end = object.end ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.name = object.name ?? '';
		message.url = object.url ?? '';
		message.paused = object.paused ?? false;
		message.recipients =
			object.recipients?.map((e) => StoreRecipient.fromPartial(e)) || [];
		message.nextClaim = object.nextClaim ?? undefined;
		return message;
	},
};

const baseStoreRecipient: object = { share: 0, name: '' };

export const StoreRecipient = {
	encode(
		message: StoreRecipient,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address.length !== 0) {
			writer.uint32(10).bytes(message.address);
		}
		if (message.share !== 0) {
			writer.uint32(16).uint32(message.share);
		}
		if (message.name !== '') {
			writer.uint32(26).string(message.name);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StoreRecipient {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseStoreRecipient } as StoreRecipient;
		message.address = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.bytes();
					break;
				case 2:
					message.share = reader.uint32();
					break;
				case 3:
					message.name = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): StoreRecipient {
		const message = { ...baseStoreRecipient } as StoreRecipient;
		message.address =
			object.address !== undefined && object.address !== null
				? bytesFromBase64(object.address)
				: new Uint8Array();
		message.share =
			object.share !== undefined && object.share !== null
				? Number(object.share)
				: 0;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		return message;
	},

	toJSON(message: StoreRecipient): unknown {
		const obj: any = {};
		message.address !== undefined &&
			(obj.address = base64FromBytes(
				message.address !== undefined
					? message.address
					: new Uint8Array()
			));
		message.share !== undefined && (obj.share = message.share);
		message.name !== undefined && (obj.name = message.name);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<StoreRecipient>, I>>(
		object: I
	): StoreRecipient {
		const message = { ...baseStoreRecipient } as StoreRecipient;
		message.address = object.address ?? new Uint8Array();
		message.share = object.share ?? 0;
		message.name = object.name ?? '';
		return message;
	},
};

const baseAllocator: object = {
	admin: '',
	name: '',
	url: '',
	paused: false,
	address: '',
};

export const Allocator = {
	encode(
		message: Allocator,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.end !== undefined) {
			Timestamp.encode(
				toTimestamp(message.end),
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
		if (message.url !== '') {
			writer.uint32(50).string(message.url);
		}
		if (message.paused === true) {
			writer.uint32(56).bool(message.paused);
		}
		if (message.address !== '') {
			writer.uint32(74).string(message.address);
		}
		for (const v of message.recipients) {
			Recipient.encode(v!, writer.uint32(82).fork()).ldelim();
		}
		if (message.nextClaim !== undefined) {
			Timestamp.encode(
				toTimestamp(message.nextClaim),
				writer.uint32(90).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): Allocator {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseAllocator } as Allocator;
		message.recipients = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.end = fromTimestamp(
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
					message.url = reader.string();
					break;
				case 7:
					message.paused = reader.bool();
					break;
				case 9:
					message.address = reader.string();
					break;
				case 10:
					message.recipients.push(
						Recipient.decode(reader, reader.uint32())
					);
					break;
				case 11:
					message.nextClaim = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
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
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.recipients = (object.recipients ?? []).map((e: any) =>
			Recipient.fromJSON(e)
		);
		message.nextClaim =
			object.nextClaim !== undefined && object.nextClaim !== null
				? fromJsonTimestamp(object.nextClaim)
				: undefined;
		return message;
	},

	toJSON(message: Allocator): unknown {
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
		message.paused !== undefined && (obj.paused = message.paused);
		message.address !== undefined && (obj.address = message.address);
		if (message.recipients) {
			obj.recipients = message.recipients.map((e) =>
				e ? Recipient.toJSON(e) : undefined
			);
		} else {
			obj.recipients = [];
		}
		message.nextClaim !== undefined &&
			(obj.nextClaim = message.nextClaim.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Allocator>, I>>(
		object: I
	): Allocator {
		const message = { ...baseAllocator } as Allocator;
		message.admin = object.admin ?? '';
		message.start = object.start ?? undefined;
		message.end = object.end ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.name = object.name ?? '';
		message.url = object.url ?? '';
		message.paused = object.paused ?? false;
		message.address = object.address ?? '';
		message.recipients =
			object.recipients?.map((e) => Recipient.fromPartial(e)) || [];
		message.nextClaim = object.nextClaim ?? undefined;
		return message;
	},
};

const baseStoreSlowReleaseStream: object = { name: '', paused: false };

export const StoreSlowReleaseStream = {
	encode(
		message: StoreSlowReleaseStream,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin.length !== 0) {
			writer.uint32(10).bytes(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.destination.length !== 0) {
			writer.uint32(34).bytes(message.destination);
		}
		if (message.name !== '') {
			writer.uint32(42).string(message.name);
		}
		if (message.paused === true) {
			writer.uint32(48).bool(message.paused);
		}
		if (message.strategy !== undefined) {
			StreamStrategy.encode(
				message.strategy,
				writer.uint32(58).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): StoreSlowReleaseStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseStoreSlowReleaseStream,
		} as StoreSlowReleaseStream;
		message.admin = new Uint8Array();
		message.destination = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.bytes();
					break;
				case 2:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.interval = Duration.decode(reader, reader.uint32());
					break;
				case 4:
					message.destination = reader.bytes();
					break;
				case 5:
					message.name = reader.string();
					break;
				case 6:
					message.paused = reader.bool();
					break;
				case 7:
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

	fromJSON(object: any): StoreSlowReleaseStream {
		const message = {
			...baseStoreSlowReleaseStream,
		} as StoreSlowReleaseStream;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? bytesFromBase64(object.admin)
				: new Uint8Array();
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
				? bytesFromBase64(object.destination)
				: new Uint8Array();
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
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

	toJSON(message: StoreSlowReleaseStream): unknown {
		const obj: any = {};
		message.admin !== undefined &&
			(obj.admin = base64FromBytes(
				message.admin !== undefined ? message.admin : new Uint8Array()
			));
		message.start !== undefined &&
			(obj.start = message.start.toISOString());
		message.interval !== undefined &&
			(obj.interval = message.interval
				? Duration.toJSON(message.interval)
				: undefined);
		message.destination !== undefined &&
			(obj.destination = base64FromBytes(
				message.destination !== undefined
					? message.destination
					: new Uint8Array()
			));
		message.name !== undefined && (obj.name = message.name);
		message.paused !== undefined && (obj.paused = message.paused);
		message.strategy !== undefined &&
			(obj.strategy = message.strategy
				? StreamStrategy.toJSON(message.strategy)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<StoreSlowReleaseStream>, I>>(
		object: I
	): StoreSlowReleaseStream {
		const message = {
			...baseStoreSlowReleaseStream,
		} as StoreSlowReleaseStream;
		message.admin = object.admin ?? new Uint8Array();
		message.start = object.start ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.destination = object.destination ?? new Uint8Array();
		message.name = object.name ?? '';
		message.paused = object.paused ?? false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromPartial(object.strategy)
				: undefined;
		return message;
	},
};

const baseSlowReleaseStream: object = {
	admin: '',
	destination: '',
	name: '',
	paused: false,
	address: '',
};

export const SlowReleaseStream = {
	encode(
		message: SlowReleaseStream,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.start !== undefined) {
			Timestamp.encode(
				toTimestamp(message.start),
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.interval !== undefined) {
			Duration.encode(
				message.interval,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.destination !== '') {
			writer.uint32(34).string(message.destination);
		}
		if (message.name !== '') {
			writer.uint32(42).string(message.name);
		}
		if (message.paused === true) {
			writer.uint32(48).bool(message.paused);
		}
		if (message.strategy !== undefined) {
			StreamStrategy.encode(
				message.strategy,
				writer.uint32(58).fork()
			).ldelim();
		}
		if (message.address !== '') {
			writer.uint32(82).string(message.address);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): SlowReleaseStream {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseSlowReleaseStream } as SlowReleaseStream;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.start = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
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
				case 7:
					message.strategy = StreamStrategy.decode(
						reader,
						reader.uint32()
					);
					break;
				case 10:
					message.address = reader.string();
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
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.paused =
			object.paused !== undefined && object.paused !== null
				? Boolean(object.paused)
				: false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromJSON(object.strategy)
				: undefined;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		return message;
	},

	toJSON(message: SlowReleaseStream): unknown {
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
		message.name !== undefined && (obj.name = message.name);
		message.paused !== undefined && (obj.paused = message.paused);
		message.strategy !== undefined &&
			(obj.strategy = message.strategy
				? StreamStrategy.toJSON(message.strategy)
				: undefined);
		message.address !== undefined && (obj.address = message.address);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<SlowReleaseStream>, I>>(
		object: I
	): SlowReleaseStream {
		const message = { ...baseSlowReleaseStream } as SlowReleaseStream;
		message.admin = object.admin ?? '';
		message.start = object.start ?? undefined;
		message.interval =
			object.interval !== undefined && object.interval !== null
				? Duration.fromPartial(object.interval)
				: undefined;
		message.destination = object.destination ?? '';
		message.name = object.name ?? '';
		message.paused = object.paused ?? false;
		message.strategy =
			object.strategy !== undefined && object.strategy !== null
				? StreamStrategy.fromPartial(object.strategy)
				: undefined;
		message.address = object.address ?? '';
		return message;
	},
};

const baseStreamStrategy: object = {};

export const StreamStrategy = {
	encode(
		message: StreamStrategy,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.fixedAmount !== undefined) {
			writer.uint32(10).string(message.fixedAmount);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StreamStrategy {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseStreamStrategy } as StreamStrategy;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.fixedAmount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): StreamStrategy {
		const message = { ...baseStreamStrategy } as StreamStrategy;
		message.fixedAmount =
			object.fixedAmount !== undefined && object.fixedAmount !== null
				? String(object.fixedAmount)
				: undefined;
		return message;
	},

	toJSON(message: StreamStrategy): unknown {
		const obj: any = {};
		message.fixedAmount !== undefined &&
			(obj.fixedAmount = message.fixedAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<StreamStrategy>, I>>(
		object: I
	): StreamStrategy {
		const message = { ...baseStreamStrategy } as StreamStrategy;
		message.fixedAmount = object.fixedAmount ?? undefined;
		return message;
	},
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
	if (typeof globalThis !== 'undefined') return globalThis;
	if (typeof self !== 'undefined') return self;
	if (typeof window !== 'undefined') return window;
	if (typeof global !== 'undefined') return global;
	throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
	globalThis.atob ||
	((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
	const bin = atob(b64);
	const arr = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; ++i) {
		arr[i] = bin.charCodeAt(i);
	}
	return arr;
}

const btoa: (bin: string) => string =
	globalThis.btoa ||
	((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
	const bin: string[] = [];
	for (const byte of arr) {
		bin.push(String.fromCharCode(byte));
	}
	return btoa(bin.join(''));
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
