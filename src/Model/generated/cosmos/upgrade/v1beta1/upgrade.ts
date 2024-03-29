/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Any } from '../../../google/protobuf/any';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'cosmos.upgrade.v1beta1';

/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
	/**
	 * Sets the name for the upgrade. This name will be used by the upgraded
	 * version of the software to apply any special "on-upgrade" commands during
	 * the first BeginBlock method after the upgrade is applied. It is also used
	 * to detect whether a software version can handle a given upgrade. If no
	 * upgrade handler with this name has been set in the software, it will be
	 * assumed that the software is out-of-date when the upgrade Time or Height is
	 * reached and the software will exit.
	 */
	name: string;
	/**
	 * The time after which the upgrade must be performed.
	 * Leave set to its zero value to use a pre-defined Height instead.
	 */
	time?: Date;
	/**
	 * The height at which the upgrade must be performed.
	 * Only used if Time is not set.
	 */
	height: Long;
	/**
	 * Any application specific upgrade info to be included on-chain
	 * such as a git commit that validators could automatically upgrade to
	 */
	info: string;
	/**
	 * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
	 * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
	 * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
	 * previous version of the chain.
	 * This will allow IBC connections to persist smoothly across planned chain upgrades
	 */
	upgradedClientState?: Any;
}

/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
	title: string;
	description: string;
	plan?: Plan;
}

/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
	title: string;
	description: string;
}

const basePlan: object = { name: '', height: Long.ZERO, info: '' };

export const Plan = {
	encode(message: Plan, writer: Writer = Writer.create()): Writer {
		if (message.name !== '') {
			writer.uint32(10).string(message.name);
		}
		if (message.time !== undefined) {
			Timestamp.encode(
				toTimestamp(message.time),
				writer.uint32(18).fork()
			).ldelim();
		}
		if (!message.height.isZero()) {
			writer.uint32(24).int64(message.height);
		}
		if (message.info !== '') {
			writer.uint32(34).string(message.info);
		}
		if (message.upgradedClientState !== undefined) {
			Any.encode(
				message.upgradedClientState,
				writer.uint32(42).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Plan {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...basePlan } as Plan;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.name = reader.string();
					break;
				case 2:
					message.time = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.height = reader.int64() as Long;
					break;
				case 4:
					message.info = reader.string();
					break;
				case 5:
					message.upgradedClientState = Any.decode(
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

	fromJSON(object: any): Plan {
		const message = { ...basePlan } as Plan;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.time =
			object.time !== undefined && object.time !== null
				? fromJsonTimestamp(object.time)
				: undefined;
		message.height =
			object.height !== undefined && object.height !== null
				? Long.fromString(object.height)
				: Long.ZERO;
		message.info =
			object.info !== undefined && object.info !== null
				? String(object.info)
				: '';
		message.upgradedClientState =
			object.upgradedClientState !== undefined &&
			object.upgradedClientState !== null
				? Any.fromJSON(object.upgradedClientState)
				: undefined;
		return message;
	},

	toJSON(message: Plan): unknown {
		const obj: any = {};
		message.name !== undefined && (obj.name = message.name);
		message.time !== undefined && (obj.time = message.time.toISOString());
		message.height !== undefined &&
			(obj.height = (message.height || Long.ZERO).toString());
		message.info !== undefined && (obj.info = message.info);
		message.upgradedClientState !== undefined &&
			(obj.upgradedClientState = message.upgradedClientState
				? Any.toJSON(message.upgradedClientState)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Plan>, I>>(object: I): Plan {
		const message = { ...basePlan } as Plan;
		message.name = object.name ?? '';
		message.time = object.time ?? undefined;
		message.height =
			object.height !== undefined && object.height !== null
				? Long.fromValue(object.height)
				: Long.ZERO;
		message.info = object.info ?? '';
		message.upgradedClientState =
			object.upgradedClientState !== undefined &&
			object.upgradedClientState !== null
				? Any.fromPartial(object.upgradedClientState)
				: undefined;
		return message;
	},
};

const baseSoftwareUpgradeProposal: object = { title: '', description: '' };

export const SoftwareUpgradeProposal = {
	encode(
		message: SoftwareUpgradeProposal,
		writer: Writer = Writer.create()
	): Writer {
		if (message.title !== '') {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== '') {
			writer.uint32(18).string(message.description);
		}
		if (message.plan !== undefined) {
			Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): SoftwareUpgradeProposal {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseSoftwareUpgradeProposal,
		} as SoftwareUpgradeProposal;
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
					message.plan = Plan.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): SoftwareUpgradeProposal {
		const message = {
			...baseSoftwareUpgradeProposal,
		} as SoftwareUpgradeProposal;
		message.title =
			object.title !== undefined && object.title !== null
				? String(object.title)
				: '';
		message.description =
			object.description !== undefined && object.description !== null
				? String(object.description)
				: '';
		message.plan =
			object.plan !== undefined && object.plan !== null
				? Plan.fromJSON(object.plan)
				: undefined;
		return message;
	},

	toJSON(message: SoftwareUpgradeProposal): unknown {
		const obj: any = {};
		message.title !== undefined && (obj.title = message.title);
		message.description !== undefined &&
			(obj.description = message.description);
		message.plan !== undefined &&
			(obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<SoftwareUpgradeProposal>, I>>(
		object: I
	): SoftwareUpgradeProposal {
		const message = {
			...baseSoftwareUpgradeProposal,
		} as SoftwareUpgradeProposal;
		message.title = object.title ?? '';
		message.description = object.description ?? '';
		message.plan =
			object.plan !== undefined && object.plan !== null
				? Plan.fromPartial(object.plan)
				: undefined;
		return message;
	},
};

const baseCancelSoftwareUpgradeProposal: object = {
	title: '',
	description: '',
};

export const CancelSoftwareUpgradeProposal = {
	encode(
		message: CancelSoftwareUpgradeProposal,
		writer: Writer = Writer.create()
	): Writer {
		if (message.title !== '') {
			writer.uint32(10).string(message.title);
		}
		if (message.description !== '') {
			writer.uint32(18).string(message.description);
		}
		return writer;
	},

	decode(
		input: Reader | Uint8Array,
		length?: number
	): CancelSoftwareUpgradeProposal {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseCancelSoftwareUpgradeProposal,
		} as CancelSoftwareUpgradeProposal;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.title = reader.string();
					break;
				case 2:
					message.description = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): CancelSoftwareUpgradeProposal {
		const message = {
			...baseCancelSoftwareUpgradeProposal,
		} as CancelSoftwareUpgradeProposal;
		message.title =
			object.title !== undefined && object.title !== null
				? String(object.title)
				: '';
		message.description =
			object.description !== undefined && object.description !== null
				? String(object.description)
				: '';
		return message;
	},

	toJSON(message: CancelSoftwareUpgradeProposal): unknown {
		const obj: any = {};
		message.title !== undefined && (obj.title = message.title);
		message.description !== undefined &&
			(obj.description = message.description);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<CancelSoftwareUpgradeProposal>, I>>(
		object: I
	): CancelSoftwareUpgradeProposal {
		const message = {
			...baseCancelSoftwareUpgradeProposal,
		} as CancelSoftwareUpgradeProposal;
		message.title = object.title ?? '';
		message.description = object.description ?? '';
		return message;
	},
};

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
