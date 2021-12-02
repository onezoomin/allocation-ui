/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import * as Long from 'long';
import { Coin } from '../../../cosmos/base/v1beta1/coin';

export const protobufPackage = 'regen.ecocredit.v1alpha2';

/** EventCreateClass is an event emitted when a credit class is created. */
export interface EventCreateClass {
	/** class_id is the unique ID of credit class. */
	classId: string;
	/** admin is the admin of the credit class. */
	admin: string;
}

/** EventCreateProject is an event emitted when a project is created. */
export interface EventCreateProject {
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
}

/** EventCreateBatch is an event emitted when a credit batch is created. */
export interface EventCreateBatch {
	/** class_id is the unique ID of credit class. */
	classId: string;
	/** batch_denom is the unique ID of credit batch. */
	batchDenom: string;
	/** issuer is the account address of the issuer of the credit batch. */
	issuer: string;
	/** total_amount is the total number of credits in the credit batch. */
	totalAmount: string;
	/**
	 * start_date is the beginning of the period during which this credit batch
	 * was quantified and verified.
	 */
	startDate: string;
	/**
	 * end_date is the end of the period during which this credit batch was
	 * quantified and verified.
	 */
	endDate: string;
	/**
	 * project_location is the location of the project.
	 * Full documentation can be found in MsgCreateProject.project_location.
	 */
	projectLocation: string;
	/** project_id is the unique ID of the project this batch belongs to. */
	projectId: string;
}

/**
 * EventReceive is an event emitted when credits are received either upon
 * creation of a new batch or upon transfer. Each batch_denom created or
 * transferred will result in a separate EventReceive for easy indexing.
 */
export interface EventReceive {
	/**
	 * sender is the sender of the credits in the case that this event is the
	 * result of a transfer. It will not be set when credits are received at
	 * initial issuance.
	 */
	sender: string;
	/** recipient is the recipient of the credits */
	recipient: string;
	/** batch_denom is the unique ID of credit batch. */
	batchDenom: string;
	/** tradable_amount is the decimal number of tradable credits received. */
	tradableAmount: string;
	/** retired_amount is the decimal number of retired credits received. */
	retiredAmount: string;
}

/**
 * EventRetire is an event emitted when credits are retired. When credits are
 * retired from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventRetire {
	/**
	 * retirer is the account which has done the "retiring". This will be the
	 * account receiving credits in the case that credits were retired upon
	 * issuance using Msg/CreateBatch or retired upon transfer using Msg/Send.
	 */
	retirer: string;
	/** batch_denom is the unique ID of credit batch. */
	batchDenom: string;
	/** amount is the decimal number of credits that have been retired. */
	amount: string;
	/**
	 * location is the location of the beneficiary or buyer of the retired
	 * credits. It is a string of the form
	 * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
	 * fields conforming to ISO 3166-2, and postal-code being up to 64
	 * alphanumeric characters.
	 */
	location: string;
}

/**
 * EventCancel is an event emitted when credits are cancelled. When credits are
 * cancelled from multiple batches in the same transaction, a separate event is
 * emitted for each batch_denom. This allows for easier indexing.
 */
export interface EventCancel {
	/**
	 * canceller is the account which has cancelled the credits, which should be
	 * the holder of the credits.
	 */
	canceller: string;
	/** batch_denom is the unique ID of credit batch. */
	batchDenom: string;
	/** amount is the decimal number of credits that have been cancelled. */
	amount: string;
}

/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
	/** order_id is the unique ID of sell order. */
	orderId: Long;
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

/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
	/** owner is the owner of the sell orders. */
	owner: string;
	/** sell_order_id is the ID of an existing sell order. */
	sellOrderId: Long;
	/** batch_denom is the credit batch being sold. */
	batchDenom: string;
	/**
	 * new_quantity is the updated quantity of credits available to sell, if it
	 * is set to zero then the order is cancelled.
	 */
	newQuantity: string;
	/** new_ask_price is the new ask price for this sell order */
	newAskPrice?: Coin;
	/** disable_auto_retire updates the disable_auto_retire field in the sell order. */
	disableAutoRetire: boolean;
}

/** EventBuyOrderCreated is an event emitted when a buy order is created. */
export interface EventBuyOrderCreated {
	/** buy_order_id is the unique ID of buy order. */
	buyOrderId: Long;
	/** sell_order_id is the sell order ID against which the buyer is trying to buy. */
	sellOrderId: Long;
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

/** EventBuyOrderFilled is an event emitted when a buy order is filled. */
export interface EventBuyOrderFilled {
	/** buy_order_id is the unique ID of the buy order. */
	buyOrderId: Long;
	/** sell_order_id is the unique ID of the sell order. */
	sellOrderId: Long;
	/** batch_denom is the credit batch ID of the purchased credits. */
	batchDenom: string;
	/** quantity is the quantity of the purchased credits. */
	quantity: string;
	/** total_price is the total price for the purchased credits. */
	totalPrice?: Coin;
}

/** EventAllowAskDenom is an event emitted when an ask denom is added. */
export interface EventAllowAskDenom {
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

const baseEventCreateClass: object = { classId: '', admin: '' };

export const EventCreateClass = {
	encode(
		message: EventCreateClass,
		writer: Writer = Writer.create()
	): Writer {
		if (message.classId !== '') {
			writer.uint32(10).string(message.classId);
		}
		if (message.admin !== '') {
			writer.uint32(18).string(message.admin);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCreateClass {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCreateClass } as EventCreateClass;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classId = reader.string();
					break;
				case 2:
					message.admin = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCreateClass {
		const message = { ...baseEventCreateClass } as EventCreateClass;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		return message;
	},

	toJSON(message: EventCreateClass): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		message.admin !== undefined && (obj.admin = message.admin);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCreateClass>, I>>(
		object: I
	): EventCreateClass {
		const message = { ...baseEventCreateClass } as EventCreateClass;
		message.classId = object.classId ?? '';
		message.admin = object.admin ?? '';
		return message;
	},
};

const baseEventCreateProject: object = {
	projectId: '',
	classId: '',
	issuer: '',
	projectLocation: '',
};

export const EventCreateProject = {
	encode(
		message: EventCreateProject,
		writer: Writer = Writer.create()
	): Writer {
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
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCreateProject {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCreateProject } as EventCreateProject;
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
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCreateProject {
		const message = { ...baseEventCreateProject } as EventCreateProject;
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
		return message;
	},

	toJSON(message: EventCreateProject): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		message.classId !== undefined && (obj.classId = message.classId);
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.projectLocation !== undefined &&
			(obj.projectLocation = message.projectLocation);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCreateProject>, I>>(
		object: I
	): EventCreateProject {
		const message = { ...baseEventCreateProject } as EventCreateProject;
		message.projectId = object.projectId ?? '';
		message.classId = object.classId ?? '';
		message.issuer = object.issuer ?? '';
		message.projectLocation = object.projectLocation ?? '';
		return message;
	},
};

const baseEventCreateBatch: object = {
	classId: '',
	batchDenom: '',
	issuer: '',
	totalAmount: '',
	startDate: '',
	endDate: '',
	projectLocation: '',
	projectId: '',
};

export const EventCreateBatch = {
	encode(
		message: EventCreateBatch,
		writer: Writer = Writer.create()
	): Writer {
		if (message.classId !== '') {
			writer.uint32(10).string(message.classId);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		if (message.issuer !== '') {
			writer.uint32(26).string(message.issuer);
		}
		if (message.totalAmount !== '') {
			writer.uint32(34).string(message.totalAmount);
		}
		if (message.startDate !== '') {
			writer.uint32(42).string(message.startDate);
		}
		if (message.endDate !== '') {
			writer.uint32(50).string(message.endDate);
		}
		if (message.projectLocation !== '') {
			writer.uint32(58).string(message.projectLocation);
		}
		if (message.projectId !== '') {
			writer.uint32(66).string(message.projectId);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCreateBatch {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCreateBatch } as EventCreateBatch;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classId = reader.string();
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				case 3:
					message.issuer = reader.string();
					break;
				case 4:
					message.totalAmount = reader.string();
					break;
				case 5:
					message.startDate = reader.string();
					break;
				case 6:
					message.endDate = reader.string();
					break;
				case 7:
					message.projectLocation = reader.string();
					break;
				case 8:
					message.projectId = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCreateBatch {
		const message = { ...baseEventCreateBatch } as EventCreateBatch;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.issuer =
			object.issuer !== undefined && object.issuer !== null
				? String(object.issuer)
				: '';
		message.totalAmount =
			object.totalAmount !== undefined && object.totalAmount !== null
				? String(object.totalAmount)
				: '';
		message.startDate =
			object.startDate !== undefined && object.startDate !== null
				? String(object.startDate)
				: '';
		message.endDate =
			object.endDate !== undefined && object.endDate !== null
				? String(object.endDate)
				: '';
		message.projectLocation =
			object.projectLocation !== undefined &&
			object.projectLocation !== null
				? String(object.projectLocation)
				: '';
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		return message;
	},

	toJSON(message: EventCreateBatch): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.totalAmount !== undefined &&
			(obj.totalAmount = message.totalAmount);
		message.startDate !== undefined && (obj.startDate = message.startDate);
		message.endDate !== undefined && (obj.endDate = message.endDate);
		message.projectLocation !== undefined &&
			(obj.projectLocation = message.projectLocation);
		message.projectId !== undefined && (obj.projectId = message.projectId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCreateBatch>, I>>(
		object: I
	): EventCreateBatch {
		const message = { ...baseEventCreateBatch } as EventCreateBatch;
		message.classId = object.classId ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.issuer = object.issuer ?? '';
		message.totalAmount = object.totalAmount ?? '';
		message.startDate = object.startDate ?? '';
		message.endDate = object.endDate ?? '';
		message.projectLocation = object.projectLocation ?? '';
		message.projectId = object.projectId ?? '';
		return message;
	},
};

const baseEventReceive: object = {
	sender: '',
	recipient: '',
	batchDenom: '',
	tradableAmount: '',
	retiredAmount: '',
};

export const EventReceive = {
	encode(message: EventReceive, writer: Writer = Writer.create()): Writer {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.recipient !== '') {
			writer.uint32(18).string(message.recipient);
		}
		if (message.batchDenom !== '') {
			writer.uint32(26).string(message.batchDenom);
		}
		if (message.tradableAmount !== '') {
			writer.uint32(34).string(message.tradableAmount);
		}
		if (message.retiredAmount !== '') {
			writer.uint32(42).string(message.retiredAmount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventReceive {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventReceive } as EventReceive;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sender = reader.string();
					break;
				case 2:
					message.recipient = reader.string();
					break;
				case 3:
					message.batchDenom = reader.string();
					break;
				case 4:
					message.tradableAmount = reader.string();
					break;
				case 5:
					message.retiredAmount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventReceive {
		const message = { ...baseEventReceive } as EventReceive;
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.recipient =
			object.recipient !== undefined && object.recipient !== null
				? String(object.recipient)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.tradableAmount =
			object.tradableAmount !== undefined &&
			object.tradableAmount !== null
				? String(object.tradableAmount)
				: '';
		message.retiredAmount =
			object.retiredAmount !== undefined && object.retiredAmount !== null
				? String(object.retiredAmount)
				: '';
		return message;
	},

	toJSON(message: EventReceive): unknown {
		const obj: any = {};
		message.sender !== undefined && (obj.sender = message.sender);
		message.recipient !== undefined && (obj.recipient = message.recipient);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.tradableAmount !== undefined &&
			(obj.tradableAmount = message.tradableAmount);
		message.retiredAmount !== undefined &&
			(obj.retiredAmount = message.retiredAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventReceive>, I>>(
		object: I
	): EventReceive {
		const message = { ...baseEventReceive } as EventReceive;
		message.sender = object.sender ?? '';
		message.recipient = object.recipient ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.tradableAmount = object.tradableAmount ?? '';
		message.retiredAmount = object.retiredAmount ?? '';
		return message;
	},
};

const baseEventRetire: object = {
	retirer: '',
	batchDenom: '',
	amount: '',
	location: '',
};

export const EventRetire = {
	encode(message: EventRetire, writer: Writer = Writer.create()): Writer {
		if (message.retirer !== '') {
			writer.uint32(10).string(message.retirer);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		if (message.amount !== '') {
			writer.uint32(26).string(message.amount);
		}
		if (message.location !== '') {
			writer.uint32(34).string(message.location);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventRetire {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventRetire } as EventRetire;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.retirer = reader.string();
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				case 3:
					message.amount = reader.string();
					break;
				case 4:
					message.location = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventRetire {
		const message = { ...baseEventRetire } as EventRetire;
		message.retirer =
			object.retirer !== undefined && object.retirer !== null
				? String(object.retirer)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.amount =
			object.amount !== undefined && object.amount !== null
				? String(object.amount)
				: '';
		message.location =
			object.location !== undefined && object.location !== null
				? String(object.location)
				: '';
		return message;
	},

	toJSON(message: EventRetire): unknown {
		const obj: any = {};
		message.retirer !== undefined && (obj.retirer = message.retirer);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.amount !== undefined && (obj.amount = message.amount);
		message.location !== undefined && (obj.location = message.location);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventRetire>, I>>(
		object: I
	): EventRetire {
		const message = { ...baseEventRetire } as EventRetire;
		message.retirer = object.retirer ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.amount = object.amount ?? '';
		message.location = object.location ?? '';
		return message;
	},
};

const baseEventCancel: object = { canceller: '', batchDenom: '', amount: '' };

export const EventCancel = {
	encode(message: EventCancel, writer: Writer = Writer.create()): Writer {
		if (message.canceller !== '') {
			writer.uint32(10).string(message.canceller);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		if (message.amount !== '') {
			writer.uint32(26).string(message.amount);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventCancel {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventCancel } as EventCancel;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.canceller = reader.string();
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				case 3:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventCancel {
		const message = { ...baseEventCancel } as EventCancel;
		message.canceller =
			object.canceller !== undefined && object.canceller !== null
				? String(object.canceller)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.amount =
			object.amount !== undefined && object.amount !== null
				? String(object.amount)
				: '';
		return message;
	},

	toJSON(message: EventCancel): unknown {
		const obj: any = {};
		message.canceller !== undefined && (obj.canceller = message.canceller);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventCancel>, I>>(
		object: I
	): EventCancel {
		const message = { ...baseEventCancel } as EventCancel;
		message.canceller = object.canceller ?? '';
		message.batchDenom = object.batchDenom ?? '';
		message.amount = object.amount ?? '';
		return message;
	},
};

const baseEventSell: object = {
	orderId: Long.UZERO,
	batchDenom: '',
	quantity: '',
	disableAutoRetire: false,
};

export const EventSell = {
	encode(message: EventSell, writer: Writer = Writer.create()): Writer {
		if (!message.orderId.isZero()) {
			writer.uint32(8).uint64(message.orderId);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		if (message.quantity !== '') {
			writer.uint32(26).string(message.quantity);
		}
		if (message.askPrice !== undefined) {
			Coin.encode(message.askPrice, writer.uint32(34).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(40).bool(message.disableAutoRetire);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventSell {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventSell } as EventSell;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.orderId = reader.uint64() as Long;
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				case 3:
					message.quantity = reader.string();
					break;
				case 4:
					message.askPrice = Coin.decode(reader, reader.uint32());
					break;
				case 5:
					message.disableAutoRetire = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventSell {
		const message = { ...baseEventSell } as EventSell;
		message.orderId =
			object.orderId !== undefined && object.orderId !== null
				? Long.fromString(object.orderId)
				: Long.UZERO;
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

	toJSON(message: EventSell): unknown {
		const obj: any = {};
		message.orderId !== undefined &&
			(obj.orderId = (message.orderId || Long.UZERO).toString());
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

	fromPartial<I extends Exact<DeepPartial<EventSell>, I>>(
		object: I
	): EventSell {
		const message = { ...baseEventSell } as EventSell;
		message.orderId =
			object.orderId !== undefined && object.orderId !== null
				? Long.fromValue(object.orderId)
				: Long.UZERO;
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

const baseEventUpdateSellOrder: object = {
	owner: '',
	sellOrderId: Long.UZERO,
	batchDenom: '',
	newQuantity: '',
	disableAutoRetire: false,
};

export const EventUpdateSellOrder = {
	encode(
		message: EventUpdateSellOrder,
		writer: Writer = Writer.create()
	): Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		if (!message.sellOrderId.isZero()) {
			writer.uint32(16).uint64(message.sellOrderId);
		}
		if (message.batchDenom !== '') {
			writer.uint32(26).string(message.batchDenom);
		}
		if (message.newQuantity !== '') {
			writer.uint32(34).string(message.newQuantity);
		}
		if (message.newAskPrice !== undefined) {
			Coin.encode(message.newAskPrice, writer.uint32(42).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(48).bool(message.disableAutoRetire);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventUpdateSellOrder {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventUpdateSellOrder } as EventUpdateSellOrder;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.sellOrderId = reader.uint64() as Long;
					break;
				case 3:
					message.batchDenom = reader.string();
					break;
				case 4:
					message.newQuantity = reader.string();
					break;
				case 5:
					message.newAskPrice = Coin.decode(reader, reader.uint32());
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

	fromJSON(object: any): EventUpdateSellOrder {
		const message = { ...baseEventUpdateSellOrder } as EventUpdateSellOrder;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: Long.UZERO;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.newQuantity =
			object.newQuantity !== undefined && object.newQuantity !== null
				? String(object.newQuantity)
				: '';
		message.newAskPrice =
			object.newAskPrice !== undefined && object.newAskPrice !== null
				? Coin.fromJSON(object.newAskPrice)
				: undefined;
		message.disableAutoRetire =
			object.disableAutoRetire !== undefined &&
			object.disableAutoRetire !== null
				? Boolean(object.disableAutoRetire)
				: false;
		return message;
	},

	toJSON(message: EventUpdateSellOrder): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.newQuantity !== undefined &&
			(obj.newQuantity = message.newQuantity);
		message.newAskPrice !== undefined &&
			(obj.newAskPrice = message.newAskPrice
				? Coin.toJSON(message.newAskPrice)
				: undefined);
		message.disableAutoRetire !== undefined &&
			(obj.disableAutoRetire = message.disableAutoRetire);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventUpdateSellOrder>, I>>(
		object: I
	): EventUpdateSellOrder {
		const message = { ...baseEventUpdateSellOrder } as EventUpdateSellOrder;
		message.owner = object.owner ?? '';
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: Long.UZERO;
		message.batchDenom = object.batchDenom ?? '';
		message.newQuantity = object.newQuantity ?? '';
		message.newAskPrice =
			object.newAskPrice !== undefined && object.newAskPrice !== null
				? Coin.fromPartial(object.newAskPrice)
				: undefined;
		message.disableAutoRetire = object.disableAutoRetire ?? false;
		return message;
	},
};

const baseEventBuyOrderCreated: object = {
	buyOrderId: Long.UZERO,
	sellOrderId: Long.UZERO,
	quantity: '',
	disableAutoRetire: false,
	disablePartialFill: false,
};

export const EventBuyOrderCreated = {
	encode(
		message: EventBuyOrderCreated,
		writer: Writer = Writer.create()
	): Writer {
		if (!message.buyOrderId.isZero()) {
			writer.uint32(8).uint64(message.buyOrderId);
		}
		if (!message.sellOrderId.isZero()) {
			writer.uint32(16).uint64(message.sellOrderId);
		}
		if (message.quantity !== '') {
			writer.uint32(26).string(message.quantity);
		}
		if (message.bidPrice !== undefined) {
			Coin.encode(message.bidPrice, writer.uint32(34).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(40).bool(message.disableAutoRetire);
		}
		if (message.disablePartialFill === true) {
			writer.uint32(48).bool(message.disablePartialFill);
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventBuyOrderCreated {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventBuyOrderCreated } as EventBuyOrderCreated;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrderId = reader.uint64() as Long;
					break;
				case 2:
					message.sellOrderId = reader.uint64() as Long;
					break;
				case 3:
					message.quantity = reader.string();
					break;
				case 4:
					message.bidPrice = Coin.decode(reader, reader.uint32());
					break;
				case 5:
					message.disableAutoRetire = reader.bool();
					break;
				case 6:
					message.disablePartialFill = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventBuyOrderCreated {
		const message = { ...baseEventBuyOrderCreated } as EventBuyOrderCreated;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromString(object.buyOrderId)
				: Long.UZERO;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: Long.UZERO;
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

	toJSON(message: EventBuyOrderCreated): unknown {
		const obj: any = {};
		message.buyOrderId !== undefined &&
			(obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
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

	fromPartial<I extends Exact<DeepPartial<EventBuyOrderCreated>, I>>(
		object: I
	): EventBuyOrderCreated {
		const message = { ...baseEventBuyOrderCreated } as EventBuyOrderCreated;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromValue(object.buyOrderId)
				: Long.UZERO;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: Long.UZERO;
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

const baseEventBuyOrderFilled: object = {
	buyOrderId: Long.UZERO,
	sellOrderId: Long.UZERO,
	batchDenom: '',
	quantity: '',
};

export const EventBuyOrderFilled = {
	encode(
		message: EventBuyOrderFilled,
		writer: Writer = Writer.create()
	): Writer {
		if (!message.buyOrderId.isZero()) {
			writer.uint32(8).uint64(message.buyOrderId);
		}
		if (!message.sellOrderId.isZero()) {
			writer.uint32(16).uint64(message.sellOrderId);
		}
		if (message.batchDenom !== '') {
			writer.uint32(26).string(message.batchDenom);
		}
		if (message.quantity !== '') {
			writer.uint32(34).string(message.quantity);
		}
		if (message.totalPrice !== undefined) {
			Coin.encode(message.totalPrice, writer.uint32(42).fork()).ldelim();
		}
		return writer;
	},

	decode(input: Reader | Uint8Array, length?: number): EventBuyOrderFilled {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventBuyOrderFilled } as EventBuyOrderFilled;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrderId = reader.uint64() as Long;
					break;
				case 2:
					message.sellOrderId = reader.uint64() as Long;
					break;
				case 3:
					message.batchDenom = reader.string();
					break;
				case 4:
					message.quantity = reader.string();
					break;
				case 5:
					message.totalPrice = Coin.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): EventBuyOrderFilled {
		const message = { ...baseEventBuyOrderFilled } as EventBuyOrderFilled;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromString(object.buyOrderId)
				: Long.UZERO;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: Long.UZERO;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.quantity =
			object.quantity !== undefined && object.quantity !== null
				? String(object.quantity)
				: '';
		message.totalPrice =
			object.totalPrice !== undefined && object.totalPrice !== null
				? Coin.fromJSON(object.totalPrice)
				: undefined;
		return message;
	},

	toJSON(message: EventBuyOrderFilled): unknown {
		const obj: any = {};
		message.buyOrderId !== undefined &&
			(obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.quantity !== undefined && (obj.quantity = message.quantity);
		message.totalPrice !== undefined &&
			(obj.totalPrice = message.totalPrice
				? Coin.toJSON(message.totalPrice)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventBuyOrderFilled>, I>>(
		object: I
	): EventBuyOrderFilled {
		const message = { ...baseEventBuyOrderFilled } as EventBuyOrderFilled;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromValue(object.buyOrderId)
				: Long.UZERO;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: Long.UZERO;
		message.batchDenom = object.batchDenom ?? '';
		message.quantity = object.quantity ?? '';
		message.totalPrice =
			object.totalPrice !== undefined && object.totalPrice !== null
				? Coin.fromPartial(object.totalPrice)
				: undefined;
		return message;
	},
};

const baseEventAllowAskDenom: object = {
	denom: '',
	displayDenom: '',
	exponent: 0,
};

export const EventAllowAskDenom = {
	encode(
		message: EventAllowAskDenom,
		writer: Writer = Writer.create()
	): Writer {
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

	decode(input: Reader | Uint8Array, length?: number): EventAllowAskDenom {
		const reader = input instanceof Reader ? input : new Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseEventAllowAskDenom } as EventAllowAskDenom;
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

	fromJSON(object: any): EventAllowAskDenom {
		const message = { ...baseEventAllowAskDenom } as EventAllowAskDenom;
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

	toJSON(message: EventAllowAskDenom): unknown {
		const obj: any = {};
		message.denom !== undefined && (obj.denom = message.denom);
		message.displayDenom !== undefined &&
			(obj.displayDenom = message.displayDenom);
		message.exponent !== undefined && (obj.exponent = message.exponent);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<EventAllowAskDenom>, I>>(
		object: I
	): EventAllowAskDenom {
		const message = { ...baseEventAllowAskDenom } as EventAllowAskDenom;
		message.denom = object.denom ?? '';
		message.displayDenom = object.displayDenom ?? '';
		message.exponent = object.exponent ?? 0;
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
	util.Long = Long as any;
	configure();
}
