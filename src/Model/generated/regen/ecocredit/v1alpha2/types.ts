/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.ecocredit.v1alpha2';

/** ClassInfo represents the high-level on-chain information for a credit class. */
export interface ClassInfo {
	/** class_id is the unique ID of credit class. */
	classId: string;
	/** admin is the admin of the credit class. */
	admin: string;
	/** issuers are the approved issuers of the credit class. */
	issuers: string[];
	/** metadata is any arbitrary metadata to attached to the credit class. */
	metadata: Uint8Array;
	/** credit_type describes the type of credit (e.g. carbon, biodiversity), as well as unit and precision. */
	creditType?: CreditType;
	/** The number of batches issued in this credit class. */
	numBatches: Long;
}

/** ProjectInfo represents the high-level on-chain information for a project. */
export interface ProjectInfo {
	/** project_id is the unique ID of the project. */
	projectId: string;
	/** class_id is the unique ID of credit class for this project. */
	classId: string;
	/** issuer is the issuer of the credit batches for this project. */
	issuer: string;
	/**
	 * project_location is the location of the project.
	 * Full documentation can be found in MsgCreateProject.project_location.
	 */
	projectLocation: string;
	/** metadata is any arbitrary metadata attached to the project. */
	metadata: Uint8Array;
}

/** BatchInfo represents the high-level on-chain information for a credit batch. */
export interface BatchInfo {
	/** project_id is the unique ID of the project this batch belongs to. */
	projectId: string;
	/** batch_denom is the unique ID of credit batch. */
	batchDenom: string;
	/**
	 * total_amount is the total number of active credits in the credit batch.
	 * Some of the issued credits may be cancelled and will be removed from
	 * total_amount and tracked in amount_cancelled. total_amount and
	 * amount_cancelled will always sum to the original amount of credits that
	 * were issued.
	 */
	totalAmount: string;
	/** metadata is any arbitrary metadata attached to the credit batch. */
	metadata: Uint8Array;
	/**
	 * amount_cancelled is the number of credits in the batch that have been
	 * cancelled, effectively undoing there issuance. The sum of total_amount and
	 * amount_cancelled will always sum to the original amount of credits that
	 * were issued.
	 */
	amountCancelled: string;
	/**
	 * start_date is the beginning of the period during which this credit batch
	 * was quantified and verified.
	 */
	startDate?: Date;
	/**
	 * end_date is the end of the period during which this credit batch was
	 * quantified and verified.
	 */
	endDate?: Date;
}

/**
 * Params defines the updatable global parameters of the ecocredit module for
 * use with the x/params module.
 */
export interface Params {
	/** credit_class_fee is the fixed fee charged on creation of a new credit class */
	creditClassFee: Coin[];
	/**
	 * allowed_class_creators is an allowlist defining the addresses with
	 * the required permissions to create credit classes
	 */
	allowedClassCreators: string[];
	/**
	 * allowlist_enabled is a param that enables/disables the allowlist for credit
	 * creation
	 */
	allowlistEnabled: boolean;
	/** credit_types is a list of definitions for credit types */
	creditTypes: CreditType[];
}

/**
 * CreditType defines the measurement unit/precision of a certain credit type
 * (e.g. carbon, biodiversity...)
 */
export interface CreditType {
	/** the type of credit (e.g. carbon, biodiversity, etc) */
	name: string;
	/**
	 * abbreviation is a 1-3 character uppercase abbreviation of the CreditType
	 * name, used in batch denominations within the CreditType. It must be unique.
	 */
	abbreviation: string;
	/** the measurement unit (e.g. kg, ton, etc) */
	unit: string;
	/** the decimal precision */
	precision: number;
}

/**
 * CreditTypeSeq associates a sequence number with a credit type abbreviation.
 * This represents the number of credit classes created with that credit type.
 */
export interface CreditTypeSeq {
	/** The credit type abbreviation */
	abbreviation: string;
	/** The sequence number of classes of the credit type */
	seqNumber: Long;
}

/** SellOrder represents the information for a sell order. */
export interface SellOrder {
	/** order_id is the unique ID of sell order. */
	orderId: Long;
	/** owner is the address of the owner of the credits being sold. */
	owner: string;
	/** batch_denom is the credit batch being sold. */
	batchDenom: string;
	/** quantity is the quantity of credits being sold. */
	quantity: string;
	/**
	 * ask_price is the price the seller is asking for each unit of the
	 * batch_denom. Each credit unit of the batch will be sold for at least the
	 * ask_price or more.
	 */
	askPrice?: Coin;
	/**
	 * disable_auto_retire disables auto-retirement of credits which allows a
	 * buyer to disable auto-retirement in their buy order enabling them to
	 * resell the credits to another buyer.
	 */
	disableAutoRetire: boolean;
}

/** BuyOrder represents the information for a buy order. */
export interface BuyOrder {
	/** buy_order_id is the unique ID of buy order. */
	buyOrderId: Long;
	/** buyer is the address that created the buy order */
	buyer: string;
	/** selection is the buy order selection. */
	selection?: BuyOrder_Selection;
	/**
	 * quantity is the quantity of credits to buy. If the quantity of credits
	 * available is less than this amount the order will be partially filled
	 * unless disable_partial_fill is true.
	 */
	quantity: string;
	/**
	 * bid price is the bid price for this buy order. A credit unit will be
	 * settled at a purchase price that is no more than the bid price. The
	 * buy order will fail if the buyer does not have enough funds available
	 * to complete the purchase.
	 */
	bidPrice?: Coin;
	/**
	 * disable_auto_retire allows auto-retirement to be disabled. If it is set to true
	 * the credits will not auto-retire and can be resold assuming that the
	 * corresponding sell order has auto-retirement disabled. If the sell order
	 * hasn't disabled auto-retirement and the buy order tries to disable it,
	 * that buy order will fail.
	 */
	disableAutoRetire: boolean;
	/**
	 * disable_partial_fill disables the default behavior of partially filling
	 * buy orders if the requested quantity is not available.
	 */
	disablePartialFill: boolean;
}

/** Selection defines a buy order selection. */
export interface BuyOrder_Selection {
	/**
	 * sell_order_id is the sell order ID against which the buyer is trying to buy.
	 * When sell_order_id is set, this is known as a direct buy order because it
	 * is placed directly against a specific sell order.
	 */
	sellOrderId: Long | undefined;
}

/** AskDenom represents the information for an ask denom. */
export interface AskDenom {
	/** denom is the denom to allow (ex. ibc/GLKHDSG423SGS) */
	denom: string;
	/** display_denom is the denom to display to the user and is informational */
	displayDenom: string;
	/**
	 * exponent is the exponent that relates the denom to the display_denom and is
	 * informational
	 */
	exponent: number;
}

/** BasketCredit represents the information for a credit batch inside a basket. */
export interface BasketCredit {
	/** batch_denom is the unique ID of the credit batch. */
	batchDenom: string;
	/**
	 * tradable_amount is the number of credits in this transfer that can be
	 * traded by the recipient. Decimal values are acceptable within the
	 * precision returned by Query/Precision.
	 */
	tradableAmount: string;
}

/** BasketCriteria defines a criteria by which credits can be added to a basket. */
export interface BasketCriteria {
	/**
	 * filter defines condition(s) that credits should satisfy in order to be
	 * added to the basket.
	 */
	filter?: Filter;
	/**
	 * multiplier is an integer number which is applied to credit units when
	 * converting to basket units. For example if the multiplier is 2000, then
	 * 1.1 credits will result in 2200 basket tokens. If there are any fractional
	 * amounts left over in this calculation when adding credits to a basket,
	 * those fractional amounts will not get added to the basket.
	 */
	multiplier: string;
}

/**
 * Filter defines condition(s) that credits should satisfy in order to be added
 * to the basket. It can handled nested conditions linked with and/or operators.
 */
export interface Filter {
	/** and specifies a list of filters where all conditions should be satisfied. */
	and?: Filter_And | undefined;
	/** or specifies a list of filters where at least one of the conditions should be satisfied. */
	or?: Filter_Or | undefined;
	/** credit_type_name filters against credits from this credit type name. */
	creditTypeName: string | undefined;
	/** class_id filters against credits from this credit class id. */
	classId: string | undefined;
	/** project_id filters against credits from this project. */
	projectId: string | undefined;
	/** batch_denom filters against credits from this batch. */
	batchDenom: string | undefined;
	/** class_admin filters against credits issued by this class admin. */
	classAdmin: string | undefined;
	/** issuer filters against credits issued by this issuer address. */
	issuer: string | undefined;
	/** owner filters against credits currently owned by this address. */
	owner: string | undefined;
	/**
	 * project_location can be specified in three levels of granularity:
	 * country, sub-national-code, or postal code. If just country is given,
	 * for instance "US" then any credits in the "US" will be matched even
	 * their project location is more specific, ex. "US-NY 12345". If
	 * a country, sub-national-code and postal code are all provided then
	 * only projects in that postal code will match.
	 */
	projectLocation: string | undefined;
	/** date_range filters against credit batch start_date and/or end_date. */
	dateRange?: Filter_DateRange | undefined;
	/** tag specifies a curation tag to match against. */
	tag: string | undefined;
}

/** And specifies an "and" condition between the list of filters. */
export interface Filter_And {
	/** filters is a list of filters where all conditions should be satisfied. */
	filters: Filter[];
}

/** And specifies an "or" condition between the list of filters. */
export interface Filter_Or {
	/** filters is a list of filters where at least one of the conditions should be satisfied. */
	filters: Filter[];
}

/** DateRange defines a period for credit batches in a basket. */
export interface Filter_DateRange {
	/**
	 * start_date is the beginning of the period during which this credit batch
	 * was quantified and verified. If it is empty then there is no start date
	 * limit.
	 */
	startDate?: Date;
	/**
	 * end_date is the end of the period during which this credit batch was
	 * quantified and verified. If it is empty then there is no end date
	 * limit.
	 */
	endDate?: Date;
}

const baseClassInfo: object = {
	classId: '',
	admin: '',
	issuers: '',
	numBatches: Long.UZERO,
};

export const ClassInfo = {
	encode(message: ClassInfo, writer: Writer = Writer.create()): Writer {
		if (message.classId !== '') {
			writer.uint32(10).string(message.classId);
		}
		if (message.admin !== '') {
			writer.uint32(18).string(message.admin);
		}
		for (const v of message.issuers) {
			writer.uint32(26).string(v!);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(34).bytes(message.metadata);
		}
		if (message.creditType !== undefined) {
			CreditType.encode(
				message.creditType,
				writer.uint32(42).fork()
			).ldelim();
		}
		if (!message.numBatches.isZero()) {
			writer.uint32(48).uint64(message.numBatches);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): ClassInfo {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseClassInfo } as ClassInfo;
		message.issuers = [];
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classId = reader.string();
					break;
				case 2:
					message.admin = reader.string();
					break;
				case 3:
					message.issuers.push(reader.string());
					break;
				case 4:
					message.metadata = reader.bytes();
					break;
				case 5:
					message.creditType = CreditType.decode(
						reader,
						reader.uint32()
					);
					break;
				case 6:
					message.numBatches = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ClassInfo {
		const message = { ...baseClassInfo } as ClassInfo;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.issuers = (object.issuers ?? []).map((e: any) => String(e));
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
		message.creditType =
			object.creditType !== undefined && object.creditType !== null
				? CreditType.fromJSON(object.creditType)
				: undefined;
		message.numBatches =
			object.numBatches !== undefined && object.numBatches !== null
				? Long.fromString(object.numBatches)
				: Long.UZERO;
		return message;
	},

	toJSON(message: ClassInfo): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		message.admin !== undefined && (obj.admin = message.admin);
		if (message.issuers) {
			obj.issuers = message.issuers.map((e) => e);
		} else {
			obj.issuers = [];
		}
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		message.creditType !== undefined &&
			(obj.creditType = message.creditType
				? CreditType.toJSON(message.creditType)
				: undefined);
		message.numBatches !== undefined &&
			(obj.numBatches = (message.numBatches || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ClassInfo>, I>>(
		object: I
	): ClassInfo {
		const message = { ...baseClassInfo } as ClassInfo;
		message.classId = object.classId ?? '';
		message.admin = object.admin ?? '';
		message.issuers = object.issuers?.map((e) => e) || [];
		message.metadata = object.metadata ?? new Uint8Array();
		message.creditType =
			object.creditType !== undefined && object.creditType !== null
				? CreditType.fromPartial(object.creditType)
				: undefined;
		message.numBatches =
			object.numBatches !== undefined && object.numBatches !== null
				? Long.fromValue(object.numBatches)
				: Long.UZERO;
		return message;
	},
};

const baseProjectInfo: object = {
	projectId: '',
	classId: '',
	issuer: '',
	projectLocation: '',
};

export const ProjectInfo = {
	encode(message: ProjectInfo, writer: Writer = Writer.create()): Writer {
		if (message.projectId !== '') {
			writer.uint32(10).string(message.projectId);
		}
		if (message.classId !== '') {
			writer.uint32(18).string(message.classId);
		}
		if (message.issuer !== '') {
			writer.uint32(26).string(message.issuer);
		}
		if (message.projectLocation !== '') {
			writer.uint32(34).string(message.projectLocation);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(42).bytes(message.metadata);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): ProjectInfo {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseProjectInfo } as ProjectInfo;
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.projectId = reader.string();
					break;
				case 2:
					message.classId = reader.string();
					break;
				case 3:
					message.issuer = reader.string();
					break;
				case 4:
					message.projectLocation = reader.string();
					break;
				case 5:
					message.metadata = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): ProjectInfo {
		const message = { ...baseProjectInfo } as ProjectInfo;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.issuer =
			object.issuer !== undefined && object.issuer !== null
				? String(object.issuer)
				: '';
		message.projectLocation =
			object.projectLocation !== undefined &&
			object.projectLocation !== null
				? String(object.projectLocation)
				: '';
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
		return message;
	},

	toJSON(message: ProjectInfo): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		message.classId !== undefined && (obj.classId = message.classId);
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.projectLocation !== undefined &&
			(obj.projectLocation = message.projectLocation);
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<ProjectInfo>, I>>(
		object: I
	): ProjectInfo {
		const message = { ...baseProjectInfo } as ProjectInfo;
		message.projectId = object.projectId ?? '';
		message.classId = object.classId ?? '';
		message.issuer = object.issuer ?? '';
		message.projectLocation = object.projectLocation ?? '';
		message.metadata = object.metadata ?? new Uint8Array();
		return message;
	},
};

const baseBatchInfo: object = {
	projectId: '',
	batchDenom: '',
	totalAmount: '',
	amountCancelled: '',
};

export const BatchInfo = {
	encode(message: BatchInfo, writer: Writer = Writer.create()): Writer {
		if (message.projectId !== '') {
			writer.uint32(10).string(message.projectId);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		if (message.totalAmount !== '') {
			writer.uint32(34).string(message.totalAmount);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(42).bytes(message.metadata);
		}
		if (message.amountCancelled !== '') {
			writer.uint32(50).string(message.amountCancelled);
		}
		if (message.startDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.startDate),
				writer.uint32(58).fork()
			).ldelim();
		}
		if (message.endDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.endDate),
				writer.uint32(66).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BatchInfo {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBatchInfo } as BatchInfo;
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.projectId = reader.string();
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				case 4:
					message.totalAmount = reader.string();
					break;
				case 5:
					message.metadata = reader.bytes();
					break;
				case 6:
					message.amountCancelled = reader.string();
					break;
				case 7:
					message.startDate = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 8:
					message.endDate = fromTimestamp(
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

	fromJSON(object: any): BatchInfo {
		const message = { ...baseBatchInfo } as BatchInfo;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.totalAmount =
			object.totalAmount !== undefined && object.totalAmount !== null
				? String(object.totalAmount)
				: '';
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
		message.amountCancelled =
			object.amountCancelled !== undefined &&
			object.amountCancelled !== null
				? String(object.amountCancelled)
				: '';
		message.startDate =
			object.startDate !== undefined && object.startDate !== null
				? fromJsonTimestamp(object.startDate)
				: undefined;
		message.endDate =
			object.endDate !== undefined && object.endDate !== null
				? fromJsonTimestamp(object.endDate)
				: undefined;
		return message;
	},

	toJSON(message: BatchInfo): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.totalAmount !== undefined &&
			(obj.totalAmount = message.totalAmount);
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		message.amountCancelled !== undefined &&
			(obj.amountCancelled = message.amountCancelled);
		message.startDate !== undefined &&
			(obj.startDate = message.startDate.toISOString());
		message.endDate !== undefined &&
			(obj.endDate = message.endDate.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<BatchInfo>, I>>(
		object: I
	): BatchInfo {
		const message = { ...baseBatchInfo } as BatchInfo;
		message.projectId = object.projectId ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.totalAmount = object.totalAmount ?? '';
		message.metadata = object.metadata ?? new Uint8Array();
		message.amountCancelled = object.amountCancelled ?? '';
		message.startDate = object.startDate ?? undefined;
		message.endDate = object.endDate ?? undefined;
		return message;
	},
};

const baseParams: object = {
	allowedClassCreators: '',
	allowlistEnabled: false,
};

export const Params = {
	encode(message: Params, writer: Writer = Writer.create()): Writer {
		for (const v of message.creditClassFee) {
			Coin.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.allowedClassCreators) {
			writer.uint32(18).string(v!);
		}
		if (message.allowlistEnabled === true) {
			writer.uint32(24).bool(message.allowlistEnabled);
		}
		for (const v of message.creditTypes) {
			CreditType.encode(v!, writer.uint32(34).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Params {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseParams } as Params;
		message.creditClassFee = [];
		message.allowedClassCreators = [];
		message.creditTypes = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.creditClassFee.push(
						Coin.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.allowedClassCreators.push(reader.string());
					break;
				case 3:
					message.allowlistEnabled = reader.bool();
					break;
				case 4:
					message.creditTypes.push(
						CreditType.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Params {
		const message = { ...baseParams } as Params;
		message.creditClassFee = (object.creditClassFee ?? []).map((e: any) =>
			Coin.fromJSON(e)
		);
		message.allowedClassCreators = (object.allowedClassCreators ?? []).map(
			(e: any) => String(e)
		);
		message.allowlistEnabled =
			object.allowlistEnabled !== undefined &&
			object.allowlistEnabled !== null
				? Boolean(object.allowlistEnabled)
				: false;
		message.creditTypes = (object.creditTypes ?? []).map((e: any) =>
			CreditType.fromJSON(e)
		);
		return message;
	},

	toJSON(message: Params): unknown {
		const obj: any = {};
		if (message.creditClassFee) {
			obj.creditClassFee = message.creditClassFee.map((e) =>
				e ? Coin.toJSON(e) : undefined
			);
		} else {
			obj.creditClassFee = [];
		}
		if (message.allowedClassCreators) {
			obj.allowedClassCreators = message.allowedClassCreators.map(
				(e) => e
			);
		} else {
			obj.allowedClassCreators = [];
		}
		message.allowlistEnabled !== undefined &&
			(obj.allowlistEnabled = message.allowlistEnabled);
		if (message.creditTypes) {
			obj.creditTypes = message.creditTypes.map((e) =>
				e ? CreditType.toJSON(e) : undefined
			);
		} else {
			obj.creditTypes = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
		const message = { ...baseParams } as Params;
		message.creditClassFee =
			object.creditClassFee?.map((e) => Coin.fromPartial(e)) || [];
		message.allowedClassCreators =
			object.allowedClassCreators?.map((e) => e) || [];
		message.allowlistEnabled = object.allowlistEnabled ?? false;
		message.creditTypes =
			object.creditTypes?.map((e) => CreditType.fromPartial(e)) || [];
		return message;
	},
};

const baseCreditType: object = {
	name: '',
	abbreviation: '',
	unit: '',
	precision: 0,
};

export const CreditType = {
	encode(message: CreditType, writer: Writer = Writer.create()): Writer {
		if (message.name !== '') {
			writer.uint32(10).string(message.name);
		}
		if (message.abbreviation !== '') {
			writer.uint32(18).string(message.abbreviation);
		}
		if (message.unit !== '') {
			writer.uint32(26).string(message.unit);
		}
		if (message.precision !== 0) {
			writer.uint32(32).uint32(message.precision);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): CreditType {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseCreditType } as CreditType;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.name = reader.string();
					break;
				case 2:
					message.abbreviation = reader.string();
					break;
				case 3:
					message.unit = reader.string();
					break;
				case 4:
					message.precision = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): CreditType {
		const message = { ...baseCreditType } as CreditType;
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.abbreviation =
			object.abbreviation !== undefined && object.abbreviation !== null
				? String(object.abbreviation)
				: '';
		message.unit =
			object.unit !== undefined && object.unit !== null
				? String(object.unit)
				: '';
		message.precision =
			object.precision !== undefined && object.precision !== null
				? Number(object.precision)
				: 0;
		return message;
	},

	toJSON(message: CreditType): unknown {
		const obj: any = {};
		message.name !== undefined && (obj.name = message.name);
		message.abbreviation !== undefined &&
			(obj.abbreviation = message.abbreviation);
		message.unit !== undefined && (obj.unit = message.unit);
		message.precision !== undefined && (obj.precision = message.precision);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<CreditType>, I>>(
		object: I
	): CreditType {
		const message = { ...baseCreditType } as CreditType;
		message.name = object.name ?? '';
		message.abbreviation = object.abbreviation ?? '';
		message.unit = object.unit ?? '';
		message.precision = object.precision ?? 0;
		return message;
	},
};

const baseCreditTypeSeq: object = { abbreviation: '', seqNumber: Long.UZERO };

export const CreditTypeSeq = {
	encode(message: CreditTypeSeq, writer: Writer = Writer.create()): Writer {
		if (message.abbreviation !== '') {
			writer.uint32(10).string(message.abbreviation);
		}
		if (!message.seqNumber.isZero()) {
			writer.uint32(16).uint64(message.seqNumber);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): CreditTypeSeq {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseCreditTypeSeq } as CreditTypeSeq;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.abbreviation = reader.string();
					break;
				case 2:
					message.seqNumber = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): CreditTypeSeq {
		const message = { ...baseCreditTypeSeq } as CreditTypeSeq;
		message.abbreviation =
			object.abbreviation !== undefined && object.abbreviation !== null
				? String(object.abbreviation)
				: '';
		message.seqNumber =
			object.seqNumber !== undefined && object.seqNumber !== null
				? Long.fromString(object.seqNumber)
				: Long.UZERO;
		return message;
	},

	toJSON(message: CreditTypeSeq): unknown {
		const obj: any = {};
		message.abbreviation !== undefined &&
			(obj.abbreviation = message.abbreviation);
		message.seqNumber !== undefined &&
			(obj.seqNumber = (message.seqNumber || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<CreditTypeSeq>, I>>(
		object: I
	): CreditTypeSeq {
		const message = { ...baseCreditTypeSeq } as CreditTypeSeq;
		message.abbreviation = object.abbreviation ?? '';
		message.seqNumber =
			object.seqNumber !== undefined && object.seqNumber !== null
				? Long.fromValue(object.seqNumber)
				: Long.UZERO;
		return message;
	},
};

const baseSellOrder: object = {
	orderId: Long.UZERO,
	owner: '',
	batchDenom: '',
	quantity: '',
	disableAutoRetire: false,
};

export const SellOrder = {
	encode(message: SellOrder, writer: Writer = Writer.create()): Writer {
		if (!message.orderId.isZero()) {
			writer.uint32(8).uint64(message.orderId);
		}
		if (message.owner !== '') {
			writer.uint32(18).string(message.owner);
		}
		if (message.batchDenom !== '') {
			writer.uint32(26).string(message.batchDenom);
		}
		if (message.quantity !== '') {
			writer.uint32(34).string(message.quantity);
		}
		if (message.askPrice !== undefined) {
			Coin.encode(message.askPrice, writer.uint32(42).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(48).bool(message.disableAutoRetire);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): SellOrder {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseSellOrder } as SellOrder;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.orderId = reader.uint64() as Long;
					break;
				case 2:
					message.owner = reader.string();
					break;
				case 3:
					message.batchDenom = reader.string();
					break;
				case 4:
					message.quantity = reader.string();
					break;
				case 5:
					message.askPrice = Coin.decode(reader, reader.uint32());
					break;
				case 6:
					message.disableAutoRetire = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): SellOrder {
		const message = { ...baseSellOrder } as SellOrder;
		message.orderId =
			object.orderId !== undefined && object.orderId !== null
				? Long.fromString(object.orderId)
				: Long.UZERO;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.quantity =
			object.quantity !== undefined && object.quantity !== null
				? String(object.quantity)
				: '';
		message.askPrice =
			object.askPrice !== undefined && object.askPrice !== null
				? Coin.fromJSON(object.askPrice)
				: undefined;
		message.disableAutoRetire =
			object.disableAutoRetire !== undefined &&
			object.disableAutoRetire !== null
				? Boolean(object.disableAutoRetire)
				: false;
		return message;
	},

	toJSON(message: SellOrder): unknown {
		const obj: any = {};
		message.orderId !== undefined &&
			(obj.orderId = (message.orderId || Long.UZERO).toString());
		message.owner !== undefined && (obj.owner = message.owner);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.quantity !== undefined && (obj.quantity = message.quantity);
		message.askPrice !== undefined &&
			(obj.askPrice = message.askPrice
				? Coin.toJSON(message.askPrice)
				: undefined);
		message.disableAutoRetire !== undefined &&
			(obj.disableAutoRetire = message.disableAutoRetire);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<SellOrder>, I>>(
		object: I
	): SellOrder {
		const message = { ...baseSellOrder } as SellOrder;
		message.orderId =
			object.orderId !== undefined && object.orderId !== null
				? Long.fromValue(object.orderId)
				: Long.UZERO;
		message.owner = object.owner ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.quantity = object.quantity ?? '';
		message.askPrice =
			object.askPrice !== undefined && object.askPrice !== null
				? Coin.fromPartial(object.askPrice)
				: undefined;
		message.disableAutoRetire = object.disableAutoRetire ?? false;
		return message;
	},
};

const baseBuyOrder: object = {
	buyOrderId: Long.UZERO,
	buyer: '',
	quantity: '',
	disableAutoRetire: false,
	disablePartialFill: false,
};

export const BuyOrder = {
	encode(message: BuyOrder, writer: Writer = Writer.create()): Writer {
		if (!message.buyOrderId.isZero()) {
			writer.uint32(8).uint64(message.buyOrderId);
		}
		if (message.buyer !== '') {
			writer.uint32(18).string(message.buyer);
		}
		if (message.selection !== undefined) {
			BuyOrder_Selection.encode(
				message.selection,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.quantity !== '') {
			writer.uint32(34).string(message.quantity);
		}
		if (message.bidPrice !== undefined) {
			Coin.encode(message.bidPrice, writer.uint32(42).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(48).bool(message.disableAutoRetire);
		}
		if (message.disablePartialFill === true) {
			writer.uint32(56).bool(message.disablePartialFill);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BuyOrder {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBuyOrder } as BuyOrder;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrderId = reader.uint64() as Long;
					break;
				case 2:
					message.buyer = reader.string();
					break;
				case 3:
					message.selection = BuyOrder_Selection.decode(
						reader,
						reader.uint32()
					);
					break;
				case 4:
					message.quantity = reader.string();
					break;
				case 5:
					message.bidPrice = Coin.decode(reader, reader.uint32());
					break;
				case 6:
					message.disableAutoRetire = reader.bool();
					break;
				case 7:
					message.disablePartialFill = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BuyOrder {
		const message = { ...baseBuyOrder } as BuyOrder;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromString(object.buyOrderId)
				: Long.UZERO;
		message.buyer =
			object.buyer !== undefined && object.buyer !== null
				? String(object.buyer)
				: '';
		message.selection =
			object.selection !== undefined && object.selection !== null
				? BuyOrder_Selection.fromJSON(object.selection)
				: undefined;
		message.quantity =
			object.quantity !== undefined && object.quantity !== null
				? String(object.quantity)
				: '';
		message.bidPrice =
			object.bidPrice !== undefined && object.bidPrice !== null
				? Coin.fromJSON(object.bidPrice)
				: undefined;
		message.disableAutoRetire =
			object.disableAutoRetire !== undefined &&
			object.disableAutoRetire !== null
				? Boolean(object.disableAutoRetire)
				: false;
		message.disablePartialFill =
			object.disablePartialFill !== undefined &&
			object.disablePartialFill !== null
				? Boolean(object.disablePartialFill)
				: false;
		return message;
	},

	toJSON(message: BuyOrder): unknown {
		const obj: any = {};
		message.buyOrderId !== undefined &&
			(obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
		message.buyer !== undefined && (obj.buyer = message.buyer);
		message.selection !== undefined &&
			(obj.selection = message.selection
				? BuyOrder_Selection.toJSON(message.selection)
				: undefined);
		message.quantity !== undefined && (obj.quantity = message.quantity);
		message.bidPrice !== undefined &&
			(obj.bidPrice = message.bidPrice
				? Coin.toJSON(message.bidPrice)
				: undefined);
		message.disableAutoRetire !== undefined &&
			(obj.disableAutoRetire = message.disableAutoRetire);
		message.disablePartialFill !== undefined &&
			(obj.disablePartialFill = message.disablePartialFill);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<BuyOrder>, I>>(
		object: I
	): BuyOrder {
		const message = { ...baseBuyOrder } as BuyOrder;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromValue(object.buyOrderId)
				: Long.UZERO;
		message.buyer = object.buyer ?? '';
		message.selection =
			object.selection !== undefined && object.selection !== null
				? BuyOrder_Selection.fromPartial(object.selection)
				: undefined;
		message.quantity = object.quantity ?? '';
		message.bidPrice =
			object.bidPrice !== undefined && object.bidPrice !== null
				? Coin.fromPartial(object.bidPrice)
				: undefined;
		message.disableAutoRetire = object.disableAutoRetire ?? false;
		message.disablePartialFill = object.disablePartialFill ?? false;
		return message;
	},
};

const baseBuyOrder_Selection: object = {};

export const BuyOrder_Selection = {
	encode(
		message: BuyOrder_Selection,
		writer: Writer = Writer.create()
	): Writer {
		if (message.sellOrderId !== undefined) {
			writer.uint32(8).uint64(message.sellOrderId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BuyOrder_Selection {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBuyOrder_Selection } as BuyOrder_Selection;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrderId = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BuyOrder_Selection {
		const message = { ...baseBuyOrder_Selection } as BuyOrder_Selection;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: undefined;
		return message;
	},

	toJSON(message: BuyOrder_Selection): unknown {
		const obj: any = {};
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || undefined).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<BuyOrder_Selection>, I>>(
		object: I
	): BuyOrder_Selection {
		const message = { ...baseBuyOrder_Selection } as BuyOrder_Selection;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: undefined;
		return message;
	},
};

const baseAskDenom: object = { denom: '', displayDenom: '', exponent: 0 };

export const AskDenom = {
	encode(message: AskDenom, writer: Writer = Writer.create()): Writer {
		if (message.denom !== '') {
			writer.uint32(10).string(message.denom);
		}
		if (message.displayDenom !== '') {
			writer.uint32(18).string(message.displayDenom);
		}
		if (message.exponent !== 0) {
			writer.uint32(24).uint32(message.exponent);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): AskDenom {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseAskDenom } as AskDenom;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.denom = reader.string();
					break;
				case 2:
					message.displayDenom = reader.string();
					break;
				case 3:
					message.exponent = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): AskDenom {
		const message = { ...baseAskDenom } as AskDenom;
		message.denom =
			object.denom !== undefined && object.denom !== null
				? String(object.denom)
				: '';
		message.displayDenom =
			object.displayDenom !== undefined && object.displayDenom !== null
				? String(object.displayDenom)
				: '';
		message.exponent =
			object.exponent !== undefined && object.exponent !== null
				? Number(object.exponent)
				: 0;
		return message;
	},

	toJSON(message: AskDenom): unknown {
		const obj: any = {};
		message.denom !== undefined && (obj.denom = message.denom);
		message.displayDenom !== undefined &&
			(obj.displayDenom = message.displayDenom);
		message.exponent !== undefined && (obj.exponent = message.exponent);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<AskDenom>, I>>(
		object: I
	): AskDenom {
		const message = { ...baseAskDenom } as AskDenom;
		message.denom = object.denom ?? '';
		message.displayDenom = object.displayDenom ?? '';
		message.exponent = object.exponent ?? 0;
		return message;
	},
};

const baseBasketCredit: object = { batchDenom: '', tradableAmount: '' };

export const BasketCredit = {
	encode(message: BasketCredit, writer: Writer = Writer.create()): Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.tradableAmount !== '') {
			writer.uint32(18).string(message.tradableAmount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BasketCredit {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBasketCredit } as BasketCredit;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.tradableAmount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BasketCredit {
		const message = { ...baseBasketCredit } as BasketCredit;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.tradableAmount =
			object.tradableAmount !== undefined &&
			object.tradableAmount !== null
				? String(object.tradableAmount)
				: '';
		return message;
	},

	toJSON(message: BasketCredit): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.tradableAmount !== undefined &&
			(obj.tradableAmount = message.tradableAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<BasketCredit>, I>>(
		object: I
	): BasketCredit {
		const message = { ...baseBasketCredit } as BasketCredit;
		message.batchDenom = object.batchDenom ?? '';
		message.tradableAmount = object.tradableAmount ?? '';
		return message;
	},
};

const baseBasketCriteria: object = { multiplier: '' };

export const BasketCriteria = {
	encode(message: BasketCriteria, writer: Writer = Writer.create()): Writer {
		if (message.filter !== undefined) {
			Filter.encode(message.filter, writer.uint32(10).fork()).ldelim();
		}
		if (message.multiplier !== '') {
			writer.uint32(18).string(message.multiplier);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): BasketCriteria {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBasketCriteria } as BasketCriteria;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.filter = Filter.decode(reader, reader.uint32());
					break;
				case 2:
					message.multiplier = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): BasketCriteria {
		const message = { ...baseBasketCriteria } as BasketCriteria;
		message.filter =
			object.filter !== undefined && object.filter !== null
				? Filter.fromJSON(object.filter)
				: undefined;
		message.multiplier =
			object.multiplier !== undefined && object.multiplier !== null
				? String(object.multiplier)
				: '';
		return message;
	},

	toJSON(message: BasketCriteria): unknown {
		const obj: any = {};
		message.filter !== undefined &&
			(obj.filter = message.filter
				? Filter.toJSON(message.filter)
				: undefined);
		message.multiplier !== undefined &&
			(obj.multiplier = message.multiplier);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<BasketCriteria>, I>>(
		object: I
	): BasketCriteria {
		const message = { ...baseBasketCriteria } as BasketCriteria;
		message.filter =
			object.filter !== undefined && object.filter !== null
				? Filter.fromPartial(object.filter)
				: undefined;
		message.multiplier = object.multiplier ?? '';
		return message;
	},
};

const baseFilter: object = {};

export const Filter = {
	encode(message: Filter, writer: Writer = Writer.create()): Writer {
		if (message.and !== undefined) {
			Filter_And.encode(message.and, writer.uint32(10).fork()).ldelim();
		}
		if (message.or !== undefined) {
			Filter_Or.encode(message.or, writer.uint32(18).fork()).ldelim();
		}
		if (message.creditTypeName !== undefined) {
			writer.uint32(26).string(message.creditTypeName);
		}
		if (message.classId !== undefined) {
			writer.uint32(34).string(message.classId);
		}
		if (message.projectId !== undefined) {
			writer.uint32(42).string(message.projectId);
		}
		if (message.batchDenom !== undefined) {
			writer.uint32(50).string(message.batchDenom);
		}
		if (message.classAdmin !== undefined) {
			writer.uint32(58).string(message.classAdmin);
		}
		if (message.issuer !== undefined) {
			writer.uint32(66).string(message.issuer);
		}
		if (message.owner !== undefined) {
			writer.uint32(74).string(message.owner);
		}
		if (message.projectLocation !== undefined) {
			writer.uint32(82).string(message.projectLocation);
		}
		if (message.dateRange !== undefined) {
			Filter_DateRange.encode(
				message.dateRange,
				writer.uint32(90).fork()
			).ldelim();
		}
		if (message.tag !== undefined) {
			writer.uint32(98).string(message.tag);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Filter {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseFilter } as Filter;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.and = Filter_And.decode(reader, reader.uint32());
					break;
				case 2:
					message.or = Filter_Or.decode(reader, reader.uint32());
					break;
				case 3:
					message.creditTypeName = reader.string();
					break;
				case 4:
					message.classId = reader.string();
					break;
				case 5:
					message.projectId = reader.string();
					break;
				case 6:
					message.batchDenom = reader.string();
					break;
				case 7:
					message.classAdmin = reader.string();
					break;
				case 8:
					message.issuer = reader.string();
					break;
				case 9:
					message.owner = reader.string();
					break;
				case 10:
					message.projectLocation = reader.string();
					break;
				case 11:
					message.dateRange = Filter_DateRange.decode(
						reader,
						reader.uint32()
					);
					break;
				case 12:
					message.tag = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Filter {
		const message = { ...baseFilter } as Filter;
		message.and =
			object.and !== undefined && object.and !== null
				? Filter_And.fromJSON(object.and)
				: undefined;
		message.or =
			object.or !== undefined && object.or !== null
				? Filter_Or.fromJSON(object.or)
				: undefined;
		message.creditTypeName =
			object.creditTypeName !== undefined &&
			object.creditTypeName !== null
				? String(object.creditTypeName)
				: undefined;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: undefined;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: undefined;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: undefined;
		message.classAdmin =
			object.classAdmin !== undefined && object.classAdmin !== null
				? String(object.classAdmin)
				: undefined;
		message.issuer =
			object.issuer !== undefined && object.issuer !== null
				? String(object.issuer)
				: undefined;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: undefined;
		message.projectLocation =
			object.projectLocation !== undefined &&
			object.projectLocation !== null
				? String(object.projectLocation)
				: undefined;
		message.dateRange =
			object.dateRange !== undefined && object.dateRange !== null
				? Filter_DateRange.fromJSON(object.dateRange)
				: undefined;
		message.tag =
			object.tag !== undefined && object.tag !== null
				? String(object.tag)
				: undefined;
		return message;
	},

	toJSON(message: Filter): unknown {
		const obj: any = {};
		message.and !== undefined &&
			(obj.and = message.and
				? Filter_And.toJSON(message.and)
				: undefined);
		message.or !== undefined &&
			(obj.or = message.or ? Filter_Or.toJSON(message.or) : undefined);
		message.creditTypeName !== undefined &&
			(obj.creditTypeName = message.creditTypeName);
		message.classId !== undefined && (obj.classId = message.classId);
		message.projectId !== undefined && (obj.projectId = message.projectId);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.classAdmin !== undefined &&
			(obj.classAdmin = message.classAdmin);
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.owner !== undefined && (obj.owner = message.owner);
		message.projectLocation !== undefined &&
			(obj.projectLocation = message.projectLocation);
		message.dateRange !== undefined &&
			(obj.dateRange = message.dateRange
				? Filter_DateRange.toJSON(message.dateRange)
				: undefined);
		message.tag !== undefined && (obj.tag = message.tag);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Filter>, I>>(object: I): Filter {
		const message = { ...baseFilter } as Filter;
		message.and =
			object.and !== undefined && object.and !== null
				? Filter_And.fromPartial(object.and)
				: undefined;
		message.or =
			object.or !== undefined && object.or !== null
				? Filter_Or.fromPartial(object.or)
				: undefined;
		message.creditTypeName = object.creditTypeName ?? undefined;
		message.classId = object.classId ?? undefined;
		message.projectId = object.projectId ?? undefined;
		message.batchDenom = object.batchDenom ?? undefined;
		message.classAdmin = object.classAdmin ?? undefined;
		message.issuer = object.issuer ?? undefined;
		message.owner = object.owner ?? undefined;
		message.projectLocation = object.projectLocation ?? undefined;
		message.dateRange =
			object.dateRange !== undefined && object.dateRange !== null
				? Filter_DateRange.fromPartial(object.dateRange)
				: undefined;
		message.tag = object.tag ?? undefined;
		return message;
	},
};

const baseFilter_And: object = {};

export const Filter_And = {
	encode(message: Filter_And, writer: Writer = Writer.create()): Writer {
		for (const v of message.filters) {
			Filter.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Filter_And {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseFilter_And } as Filter_And;
		message.filters = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.filters.push(
						Filter.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Filter_And {
		const message = { ...baseFilter_And } as Filter_And;
		message.filters = (object.filters ?? []).map((e: any) =>
			Filter.fromJSON(e)
		);
		return message;
	},

	toJSON(message: Filter_And): unknown {
		const obj: any = {};
		if (message.filters) {
			obj.filters = message.filters.map((e) =>
				e ? Filter.toJSON(e) : undefined
			);
		} else {
			obj.filters = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Filter_And>, I>>(
		object: I
	): Filter_And {
		const message = { ...baseFilter_And } as Filter_And;
		message.filters =
			object.filters?.map((e) => Filter.fromPartial(e)) || [];
		return message;
	},
};

const baseFilter_Or: object = {};

export const Filter_Or = {
	encode(message: Filter_Or, writer: Writer = Writer.create()): Writer {
		for (const v of message.filters) {
			Filter.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Filter_Or {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseFilter_Or } as Filter_Or;
		message.filters = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.filters.push(
						Filter.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): Filter_Or {
		const message = { ...baseFilter_Or } as Filter_Or;
		message.filters = (object.filters ?? []).map((e: any) =>
			Filter.fromJSON(e)
		);
		return message;
	},

	toJSON(message: Filter_Or): unknown {
		const obj: any = {};
		if (message.filters) {
			obj.filters = message.filters.map((e) =>
				e ? Filter.toJSON(e) : undefined
			);
		} else {
			obj.filters = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Filter_Or>, I>>(
		object: I
	): Filter_Or {
		const message = { ...baseFilter_Or } as Filter_Or;
		message.filters =
			object.filters?.map((e) => Filter.fromPartial(e)) || [];
		return message;
	},
};

const baseFilter_DateRange: object = {};

export const Filter_DateRange = {
	encode(
		message: Filter_DateRange,
		writer: Writer = Writer.create()
	): Writer {
		if (message.startDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.startDate),
				writer.uint32(58).fork()
			).ldelim();
		}
		if (message.endDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.endDate),
				writer.uint32(66).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): Filter_DateRange {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseFilter_DateRange } as Filter_DateRange;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 7:
					message.startDate = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 8:
					message.endDate = fromTimestamp(
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

	fromJSON(object: any): Filter_DateRange {
		const message = { ...baseFilter_DateRange } as Filter_DateRange;
		message.startDate =
			object.startDate !== undefined && object.startDate !== null
				? fromJsonTimestamp(object.startDate)
				: undefined;
		message.endDate =
			object.endDate !== undefined && object.endDate !== null
				? fromJsonTimestamp(object.endDate)
				: undefined;
		return message;
	},

	toJSON(message: Filter_DateRange): unknown {
		const obj: any = {};
		message.startDate !== undefined &&
			(obj.startDate = message.startDate.toISOString());
		message.endDate !== undefined &&
			(obj.endDate = message.endDate.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<Filter_DateRange>, I>>(
		object: I
	): Filter_DateRange {
		const message = { ...baseFilter_DateRange } as Filter_DateRange;
		message.startDate = object.startDate ?? undefined;
		message.endDate = object.endDate ?? undefined;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
