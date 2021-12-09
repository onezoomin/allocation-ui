/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { Timestamp } from '../../../google/protobuf/timestamp';
import {
	BasketCriteria,
	BasketCredit,
} from '../../../regen/ecocredit/v1alpha2/types';

export const protobufPackage = 'regen.ecocredit.v1alpha2';

/** MsgCreateClass is the Msg/CreateClass request type. */
export interface MsgCreateClass {
	/** admin is the address of the account that created the credit class. */
	admin: string;
	/** issuers are the account addresses of the approved issuers. */
	issuers: string[];
	/** metadata is any arbitrary metadata to attached to the credit class. */
	metadata: Uint8Array;
	/** credit_type_name describes the type of credit (e.g. "carbon", "biodiversity"). */
	creditTypeName: string;
}

/** MsgCreateClassResponse is the Msg/CreateClass response type. */
export interface MsgCreateClassResponse {
	/** class_id is the unique ID of the newly created credit class. */
	classId: string;
}

/** MsgCreateProjectResponse is the Msg/CreateProject request type. */
export interface MsgCreateProject {
	/**
	 * issuer is the address of an approved issuer for the credit class through
	 * which batches will be issued. It is not required, however, that this same
	 * issuer issue all batches for a project.
	 */
	issuer: string;
	/** class_id is the unique ID of the class within which the project is created. */
	classId: string;
	/** metadata is any arbitrary metadata attached to the project. */
	metadata: Uint8Array;
	/**
	 * project_location is the location of the project backing the credits in this
	 * batch. It is a string of the form
	 * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
	 * fields conforming to ISO 3166-2, and postal-code being up to 64
	 * alphanumeric characters. country-code is required, while sub-national-code
	 * and postal-code can be added for increasing precision.
	 */
	projectLocation: string;
	/**
	 * project_id is an optional user-specified project ID which can be used
	 * instead of an auto-generated ID. If project_id is provided, it must be
	 * unique within the credit class and match the regex [A-Za-z0-9]{2,16}
	 * or else the operation will fail. If project_id is omitted an ID will
	 * automatically be generated.
	 */
	projectId: string;
}

/** MsgCreateProjectResponse is the Msg/CreateProject response type. */
export interface MsgCreateProjectResponse {
	/** project_id is the ID of the newly created project. */
	projectId: string;
}

/** MsgCreateBatch is the Msg/CreateBatch request type. */
export interface MsgCreateBatch {
	/** issuer is the address of the batch issuer. */
	issuer: string;
	/** project_id is the unique ID of the project this batch belongs to. */
	projectId: string;
	/** issuance are the credits issued in the batch. */
	issuance: MsgCreateBatch_BatchIssuance[];
	/** metadata is any arbitrary metadata attached to the credit batch. */
	metadata: Uint8Array;
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
 * BatchIssuance represents the issuance of some credits in a batch to a
 * single recipient.
 */
export interface MsgCreateBatch_BatchIssuance {
	/** recipient is the account of the recipient. */
	recipient: string;
	/**
	 * tradable_amount is the number of credits in this issuance that can be
	 * traded by this recipient. Decimal values are acceptable.
	 */
	tradableAmount: string;
	/**
	 * retired_amount is the number of credits in this issuance that are
	 * effectively retired by the issuer on receipt. Decimal values are
	 * acceptable.
	 */
	retiredAmount: string;
	/**
	 * retirement_location is the location of the beneficiary or buyer of the
	 * retired credits. This must be provided if retired_amount is positive. It
	 * is a string of the form
	 * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
	 * fields conforming to ISO 3166-2, and postal-code being up to 64
	 * alphanumeric characters.
	 */
	retirementLocation: string;
}

/** MsgCreateBatchResponse is the Msg/CreateBatch response type. */
export interface MsgCreateBatchResponse {
	/** batch_denom is the unique denomination ID of the newly created batch. */
	batchDenom: string;
}

/** MsgSend is the Msg/Send request type. */
export interface MsgSend {
	/** sender is the address of the account sending credits. */
	sender: string;
	/** sender is the address of the account receiving credits. */
	recipient: string;
	/** credits are the credits being sent. */
	credits: MsgSend_SendCredits[];
}

/**
 * SendCredits specifies a batch and the number of credits being transferred.
 * This is split into tradable credits, which will remain tradable on receipt,
 * and retired credits, which will be retired on receipt.
 */
export interface MsgSend_SendCredits {
	/** batch_denom is the unique ID of the credit batch. */
	batchDenom: string;
	/**
	 * tradable_amount is the number of credits in this transfer that can be
	 * traded by the recipient. Decimal values are acceptable within the
	 * precision returned by Query/Precision.
	 */
	tradableAmount: string;
	/**
	 * retired_amount is the number of credits in this transfer that are
	 * effectively retired by the issuer on receipt. Decimal values are
	 * acceptable within the precision returned by Query/Precision.
	 */
	retiredAmount: string;
	/**
	 * retirement_location is the location of the beneficiary or buyer of the
	 * retired credits. This must be provided if retired_amount is positive. It
	 * is a string of the form
	 * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
	 * fields conforming to ISO 3166-2, and postal-code being up to 64
	 * alphanumeric characters.
	 */
	retirementLocation: string;
}

/** MsgSendResponse is the Msg/Send response type. */
export interface MsgSendResponse {}

/** MsgRetire is the Msg/Retire request type. */
export interface MsgRetire {
	/** holder is the credit holder address. */
	holder: string;
	/** credits are the credits being retired. */
	credits: MsgRetire_RetireCredits[];
	/**
	 * location is the location of the beneficiary or buyer of the retired
	 * credits. It is a string of the form
	 * <country-code>[-<sub-national-code>[ <postal-code>]], with the first two
	 * fields conforming to ISO 3166-2, and postal-code being up to 64
	 * alphanumeric characters.
	 */
	location: string;
}

/** RetireCredits specifies a batch and the number of credits being retired. */
export interface MsgRetire_RetireCredits {
	/** batch_denom is the unique ID of the credit batch. */
	batchDenom: string;
	/**
	 * amount is the number of credits being retired.
	 * Decimal values are acceptable within the precision returned by
	 * Query/Precision.
	 */
	amount: string;
}

/** MsgRetire is the Msg/Retire response type. */
export interface MsgRetireResponse {}

/** MsgCancel is the Msg/Cancel request type. */
export interface MsgCancel {
	/** holder is the credit holder address. */
	holder: string;
	/** credits are the credits being cancelled. */
	credits: MsgCancel_CancelCredits[];
}

/** CancelCredits specifies a batch and the number of credits being cancelled. */
export interface MsgCancel_CancelCredits {
	/** batch_denom is the unique ID of the credit batch. */
	batchDenom: string;
	/**
	 * amount is the number of credits being cancelled.
	 * Decimal values are acceptable within the precision returned by
	 * Query/Precision.
	 */
	amount: string;
}

/** MsgCancelResponse is the Msg/Cancel response type. */
export interface MsgCancelResponse {}

/** MsgUpdateClassAdmin is the Msg/UpdateClassAdmin request type. */
export interface MsgUpdateClassAdmin {
	/** admin is the address of the account that is the admin of the credit class. */
	admin: string;
	/** class_id is the unique ID of the credit class. */
	classId: string;
	/** new_admin is the address of the new admin of the credit class. */
	newAdmin: string;
}

/** MsgUpdateClassAdminResponse is the MsgUpdateClassAdmin response type. */
export interface MsgUpdateClassAdminResponse {}

/** MsgUpdateClassIssuers is the Msg/UpdateClassIssuers request type. */
export interface MsgUpdateClassIssuers {
	/** admin is the address of the account that is the admin of the credit class. */
	admin: string;
	/** class_id is the unique ID of the credit class. */
	classId: string;
	/** issuers are the updated account addresses of the approved issuers. */
	issuers: string[];
}

/** MsgUpdateClassIssuersResponse is the MsgUpdateClassIssuers response type. */
export interface MsgUpdateClassIssuersResponse {}

/** MsgUpdateClassMetadata is the Msg/UpdateClassMetadata request type. */
export interface MsgUpdateClassMetadata {
	/** admin is the address of the account that is the admin of the credit class. */
	admin: string;
	/** class_id is the unique ID of the credit class. */
	classId: string;
	/** metadata is the updated arbitrary metadata to be attached to the credit class. */
	metadata: Uint8Array;
}

/** MsgUpdateClassMetadataResponse is the MsgUpdateClassMetadata response type. */
export interface MsgUpdateClassMetadataResponse {}

/** MsgSell is the Msg/Sell request type. */
export interface MsgSell {
	/** owner is the address of the owner of the credits being sold. */
	owner: string;
	/** orders are the sell orders being created. */
	orders: MsgSell_Order[];
}

/** Order is the content of a new sell order. */
export interface MsgSell_Order {
	/** batch_denom is the credit batch being sold. */
	batchDenom: string;
	/**
	 * quantity is the quantity of credits being sold from this batch. If it is
	 * less then the balance of credits the owner has available at the time this
	 * sell order is matched, the quantity will be adjusted downwards to the
	 * owner's balance. However, if the balance of credits is less than this
	 * quantity at the time the sell order is created, the operation will fail.
	 */
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

/** MsgSellResponse is the Msg/Sell response type. */
export interface MsgSellResponse {
	/** sell_order_ids are the sell order IDs of the newly created sell orders. */
	sellOrderIds: Long[];
}

/** MsgUpdateSellOrders is the Msg/UpdateSellOrders request type. */
export interface MsgUpdateSellOrders {
	/** owner is the owner of the sell orders. */
	owner: string;
	/** updates are updates to existing sell orders. */
	updates: MsgUpdateSellOrders_Update[];
}

/** Update is an update to an existing sell order. */
export interface MsgUpdateSellOrders_Update {
	/** sell_order_id is the ID of an existing sell order. */
	sellOrderId: Long;
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

/** MsgUpdateSellOrdersResponse is the Msg/UpdateSellOrders response type. */
export interface MsgUpdateSellOrdersResponse {}

/** MsgBuy is the Msg/Buy request type. */
export interface MsgBuy {
	/** buyer is the address of the credit buyer. */
	buyer: string;
	/** orders are the new buy orders. */
	orders: MsgBuy_Order[];
}

/** Order is a buy order. */
export interface MsgBuy_Order {
	/** selection is the buy order selection. */
	selection?: MsgBuy_Order_Selection;
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
export interface MsgBuy_Order_Selection {
	/**
	 * sell_order_id is the sell order ID against which the buyer is trying to buy.
	 * When sell_order_id is set, this is known as a direct buy order because it
	 * is placed directly against a specific sell order.
	 */
	sellOrderId: Long | undefined;
}

/** MsgBuyResponse is the Msg/Buy response type. */
export interface MsgBuyResponse {
	/**
	 * buy_order_ids are the buy order IDs of the newly created buy orders. Buy
	 * orders may not settle instantaneously, but rather in batches at specified
	 * batch epoch times.
	 */
	buyOrderIds: Long[];
}

/** MsgAllowAskDenom is the Msg/AllowAskDenom request type. */
export interface MsgAllowAskDenom {
	/** root_address is the address of the governance account which can authorize ask denoms */
	rootAddress: string;
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

/** MsgAllowAskDenomResponse is the Msg/AllowAskDenom response type. */
export interface MsgAllowAskDenomResponse {}

/** MsgCreateBasket is the Msg/CreateBasket request type. */
export interface MsgCreateBasket {
	/**
	 * curator is the address of the basket curator who is able to change certain
	 * basket settings.
	 */
	curator: string;
	/**
	 * name will be used to create a bank denom for this basket token of the form
	 * ecocredit:{curator}:{name}.
	 */
	name: string;
	/**
	 * display_name will be used to create a bank Metadata display name for this
	 * basket token of the form ecocredit:{curator}:{display_name}.
	 */
	displayName: string;
	/**
	 * exponent is the exponent that will be used for denom metadata. An exponent
	 * of 6 will mean that 10^6 units of a basket token should be displayed
	 * as one unit in user interfaces.
	 */
	exponent: number;
	/**
	 * basket_criteria is the criteria by which credits can be added to the
	 * basket. Basket criteria will be applied in order and the first criteria
	 * which applies to a credit will determine its multiplier in the basket.
	 */
	basketCriteria: BasketCriteria[];
	/**
	 * disable_auto_retire allows auto-retirement to be disabled.
	 * The credits will be auto-retired if disable_auto_retire is
	 * false unless the credits were previously put into the basket by the
	 * address picking them from the basket, in which case they will remain
	 * tradable.
	 */
	disableAutoRetire: boolean;
	/**
	 * allow_picking specifies whether an address which didn't deposit the credits
	 * in the basket can pick those credits or not.
	 */
	allowPicking: boolean;
}

/** MsgCreateBasketResponse is the Msg/CreateBasket response type. */
export interface MsgCreateBasketResponse {
	/** basket_denom is the unique denomination ID of the newly created basket. */
	basketDenom: string;
}

/** MsgAddToBasket is the Msg/AddToBasket request type. */
export interface MsgAddToBasket {
	/** owner is the owner of credits being added to the basket. */
	owner: string;
	/** basket_denom is the basket denom to add credits to. */
	basketDenom: string;
	/**
	 * credits are credits to add to the basket. If they do not match the basket's
	 * admission criteria the operation will fail.
	 */
	credits: BasketCredit[];
}

/** MsgAddToBasketResponse is the Msg/AddToBasket response type. */
export interface MsgAddToBasketResponse {
	/** amount_received is the amount of basket tokens received. */
	amountReceived: string;
}

/** MsgTakeFromBasket is the Msg/TakeFromBasket request type. */
export interface MsgTakeFromBasket {
	/** owner is the owner of the basket tokens. */
	owner: string;
	/** basket_denom is the basket denom to take credits from. */
	basketDenom: string;
	/** amount is the number of credits to take from the basket. */
	amount: string;
	/**
	 * retirement_location is the optional retirement location for the credits
	 * which will be used only if retire_on_take is true for this basket.
	 */
	retirementLocation: string;
}

/** MsgTakeFromBasketResponse is the Msg/TakeFromBasket response type. */
export interface MsgTakeFromBasketResponse {
	/** credits are the credits taken out of the basket. */
	credits: BasketCredit[];
}

/** MsgPickFromBasket is the Msg/PickFromBasket request type. */
export interface MsgPickFromBasket {
	/** owner is the owner of the basket tokens. */
	owner: string;
	/** basket_denom is the basket denom to pick credits from. */
	basketDenom: string;
	/** credits are the units of credits being picked from the basket */
	credits: BasketCredit[];
	/**
	 * retirement_location is the optional retirement location for the credits
	 * which will be used only if retire_on_take is true for this basket.
	 */
	retirementLocation: string;
}

/** MsgPickFromBasketResponse is the Msg/PickFromBasket response type. */
export interface MsgPickFromBasketResponse {}

const baseMsgCreateClass: object = {
	admin: '',
	issuers: '',
	creditTypeName: '',
};

export const MsgCreateClass = {
	encode(
		message: MsgCreateClass,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		for (const v of message.issuers) {
			writer.uint32(18).string(v!);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(26).bytes(message.metadata);
		}
		if (message.creditTypeName !== '') {
			writer.uint32(34).string(message.creditTypeName);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateClass {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCreateClass } as MsgCreateClass;
		message.issuers = [];
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.issuers.push(reader.string());
					break;
				case 3:
					message.metadata = reader.bytes();
					break;
				case 4:
					message.creditTypeName = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateClass {
		const message = { ...baseMsgCreateClass } as MsgCreateClass;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.issuers = (object.issuers ?? []).map((e: any) => String(e));
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
		message.creditTypeName =
			object.creditTypeName !== undefined &&
			object.creditTypeName !== null
				? String(object.creditTypeName)
				: '';
		return message;
	},

	toJSON(message: MsgCreateClass): unknown {
		const obj: any = {};
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
		message.creditTypeName !== undefined &&
			(obj.creditTypeName = message.creditTypeName);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateClass>, I>>(
		object: I
	): MsgCreateClass {
		const message = { ...baseMsgCreateClass } as MsgCreateClass;
		message.admin = object.admin ?? '';
		message.issuers = object.issuers?.map((e) => e) || [];
		message.metadata = object.metadata ?? new Uint8Array();
		message.creditTypeName = object.creditTypeName ?? '';
		return message;
	},
};

const baseMsgCreateClassResponse: object = { classId: '' };

export const MsgCreateClassResponse = {
	encode(
		message: MsgCreateClassResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.classId !== '') {
			writer.uint32(10).string(message.classId);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateClassResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateClassResponse,
		} as MsgCreateClassResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classId = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateClassResponse {
		const message = {
			...baseMsgCreateClassResponse,
		} as MsgCreateClassResponse;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		return message;
	},

	toJSON(message: MsgCreateClassResponse): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateClassResponse>, I>>(
		object: I
	): MsgCreateClassResponse {
		const message = {
			...baseMsgCreateClassResponse,
		} as MsgCreateClassResponse;
		message.classId = object.classId ?? '';
		return message;
	},
};

const baseMsgCreateProject: object = {
	issuer: '',
	classId: '',
	projectLocation: '',
	projectId: '',
};

export const MsgCreateProject = {
	encode(
		message: MsgCreateProject,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.issuer !== '') {
			writer.uint32(10).string(message.issuer);
		}
		if (message.classId !== '') {
			writer.uint32(18).string(message.classId);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(26).bytes(message.metadata);
		}
		if (message.projectLocation !== '') {
			writer.uint32(34).string(message.projectLocation);
		}
		if (message.projectId !== '') {
			writer.uint32(42).string(message.projectId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateProject {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCreateProject } as MsgCreateProject;
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.issuer = reader.string();
					break;
				case 2:
					message.classId = reader.string();
					break;
				case 3:
					message.metadata = reader.bytes();
					break;
				case 4:
					message.projectLocation = reader.string();
					break;
				case 5:
					message.projectId = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateProject {
		const message = { ...baseMsgCreateProject } as MsgCreateProject;
		message.issuer =
			object.issuer !== undefined && object.issuer !== null
				? String(object.issuer)
				: '';
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
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

	toJSON(message: MsgCreateProject): unknown {
		const obj: any = {};
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.classId !== undefined && (obj.classId = message.classId);
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		message.projectLocation !== undefined &&
			(obj.projectLocation = message.projectLocation);
		message.projectId !== undefined && (obj.projectId = message.projectId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateProject>, I>>(
		object: I
	): MsgCreateProject {
		const message = { ...baseMsgCreateProject } as MsgCreateProject;
		message.issuer = object.issuer ?? '';
		message.classId = object.classId ?? '';
		message.metadata = object.metadata ?? new Uint8Array();
		message.projectLocation = object.projectLocation ?? '';
		message.projectId = object.projectId ?? '';
		return message;
	},
};

const baseMsgCreateProjectResponse: object = { projectId: '' };

export const MsgCreateProjectResponse = {
	encode(
		message: MsgCreateProjectResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.projectId !== '') {
			writer.uint32(10).string(message.projectId);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateProjectResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateProjectResponse,
		} as MsgCreateProjectResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.projectId = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateProjectResponse {
		const message = {
			...baseMsgCreateProjectResponse,
		} as MsgCreateProjectResponse;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		return message;
	},

	toJSON(message: MsgCreateProjectResponse): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateProjectResponse>, I>>(
		object: I
	): MsgCreateProjectResponse {
		const message = {
			...baseMsgCreateProjectResponse,
		} as MsgCreateProjectResponse;
		message.projectId = object.projectId ?? '';
		return message;
	},
};

const baseMsgCreateBatch: object = { issuer: '', projectId: '' };

export const MsgCreateBatch = {
	encode(
		message: MsgCreateBatch,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.issuer !== '') {
			writer.uint32(10).string(message.issuer);
		}
		if (message.projectId !== '') {
			writer.uint32(18).string(message.projectId);
		}
		for (const v of message.issuance) {
			MsgCreateBatch_BatchIssuance.encode(
				v!,
				writer.uint32(26).fork()
			).ldelim();
		}
		if (message.metadata.length !== 0) {
			writer.uint32(34).bytes(message.metadata);
		}
		if (message.startDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.startDate),
				writer.uint32(42).fork()
			).ldelim();
		}
		if (message.endDate !== undefined) {
			Timestamp.encode(
				toTimestamp(message.endDate),
				writer.uint32(50).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBatch {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCreateBatch } as MsgCreateBatch;
		message.issuance = [];
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.issuer = reader.string();
					break;
				case 2:
					message.projectId = reader.string();
					break;
				case 3:
					message.issuance.push(
						MsgCreateBatch_BatchIssuance.decode(
							reader,
							reader.uint32()
						)
					);
					break;
				case 4:
					message.metadata = reader.bytes();
					break;
				case 5:
					message.startDate = fromTimestamp(
						Timestamp.decode(reader, reader.uint32())
					);
					break;
				case 6:
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

	fromJSON(object: any): MsgCreateBatch {
		const message = { ...baseMsgCreateBatch } as MsgCreateBatch;
		message.issuer =
			object.issuer !== undefined && object.issuer !== null
				? String(object.issuer)
				: '';
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		message.issuance = (object.issuance ?? []).map((e: any) =>
			MsgCreateBatch_BatchIssuance.fromJSON(e)
		);
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
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

	toJSON(message: MsgCreateBatch): unknown {
		const obj: any = {};
		message.issuer !== undefined && (obj.issuer = message.issuer);
		message.projectId !== undefined && (obj.projectId = message.projectId);
		if (message.issuance) {
			obj.issuance = message.issuance.map((e) =>
				e ? MsgCreateBatch_BatchIssuance.toJSON(e) : undefined
			);
		} else {
			obj.issuance = [];
		}
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		message.startDate !== undefined &&
			(obj.startDate = message.startDate.toISOString());
		message.endDate !== undefined &&
			(obj.endDate = message.endDate.toISOString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateBatch>, I>>(
		object: I
	): MsgCreateBatch {
		const message = { ...baseMsgCreateBatch } as MsgCreateBatch;
		message.issuer = object.issuer ?? '';
		message.projectId = object.projectId ?? '';
		message.issuance =
			object.issuance?.map((e) =>
				MsgCreateBatch_BatchIssuance.fromPartial(e)
			) || [];
		message.metadata = object.metadata ?? new Uint8Array();
		message.startDate = object.startDate ?? undefined;
		message.endDate = object.endDate ?? undefined;
		return message;
	},
};

const baseMsgCreateBatch_BatchIssuance: object = {
	recipient: '',
	tradableAmount: '',
	retiredAmount: '',
	retirementLocation: '',
};

export const MsgCreateBatch_BatchIssuance = {
	encode(
		message: MsgCreateBatch_BatchIssuance,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.recipient !== '') {
			writer.uint32(10).string(message.recipient);
		}
		if (message.tradableAmount !== '') {
			writer.uint32(18).string(message.tradableAmount);
		}
		if (message.retiredAmount !== '') {
			writer.uint32(26).string(message.retiredAmount);
		}
		if (message.retirementLocation !== '') {
			writer.uint32(34).string(message.retirementLocation);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateBatch_BatchIssuance {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateBatch_BatchIssuance,
		} as MsgCreateBatch_BatchIssuance;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.recipient = reader.string();
					break;
				case 2:
					message.tradableAmount = reader.string();
					break;
				case 3:
					message.retiredAmount = reader.string();
					break;
				case 4:
					message.retirementLocation = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateBatch_BatchIssuance {
		const message = {
			...baseMsgCreateBatch_BatchIssuance,
		} as MsgCreateBatch_BatchIssuance;
		message.recipient =
			object.recipient !== undefined && object.recipient !== null
				? String(object.recipient)
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
		message.retirementLocation =
			object.retirementLocation !== undefined &&
			object.retirementLocation !== null
				? String(object.retirementLocation)
				: '';
		return message;
	},

	toJSON(message: MsgCreateBatch_BatchIssuance): unknown {
		const obj: any = {};
		message.recipient !== undefined && (obj.recipient = message.recipient);
		message.tradableAmount !== undefined &&
			(obj.tradableAmount = message.tradableAmount);
		message.retiredAmount !== undefined &&
			(obj.retiredAmount = message.retiredAmount);
		message.retirementLocation !== undefined &&
			(obj.retirementLocation = message.retirementLocation);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateBatch_BatchIssuance>, I>>(
		object: I
	): MsgCreateBatch_BatchIssuance {
		const message = {
			...baseMsgCreateBatch_BatchIssuance,
		} as MsgCreateBatch_BatchIssuance;
		message.recipient = object.recipient ?? '';
		message.tradableAmount = object.tradableAmount ?? '';
		message.retiredAmount = object.retiredAmount ?? '';
		message.retirementLocation = object.retirementLocation ?? '';
		return message;
	},
};

const baseMsgCreateBatchResponse: object = { batchDenom: '' };

export const MsgCreateBatchResponse = {
	encode(
		message: MsgCreateBatchResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateBatchResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateBatchResponse,
		} as MsgCreateBatchResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateBatchResponse {
		const message = {
			...baseMsgCreateBatchResponse,
		} as MsgCreateBatchResponse;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		return message;
	},

	toJSON(message: MsgCreateBatchResponse): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateBatchResponse>, I>>(
		object: I
	): MsgCreateBatchResponse {
		const message = {
			...baseMsgCreateBatchResponse,
		} as MsgCreateBatchResponse;
		message.batchDenom = object.batchDenom ?? '';
		return message;
	},
};

const baseMsgSend: object = { sender: '', recipient: '' };

export const MsgSend = {
	encode(
		message: MsgSend,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sender !== '') {
			writer.uint32(10).string(message.sender);
		}
		if (message.recipient !== '') {
			writer.uint32(18).string(message.recipient);
		}
		for (const v of message.credits) {
			MsgSend_SendCredits.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgSend {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSend } as MsgSend;
		message.credits = [];
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
					message.credits.push(
						MsgSend_SendCredits.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSend {
		const message = { ...baseMsgSend } as MsgSend;
		message.sender =
			object.sender !== undefined && object.sender !== null
				? String(object.sender)
				: '';
		message.recipient =
			object.recipient !== undefined && object.recipient !== null
				? String(object.recipient)
				: '';
		message.credits = (object.credits ?? []).map((e: any) =>
			MsgSend_SendCredits.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgSend): unknown {
		const obj: any = {};
		message.sender !== undefined && (obj.sender = message.sender);
		message.recipient !== undefined && (obj.recipient = message.recipient);
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? MsgSend_SendCredits.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSend>, I>>(object: I): MsgSend {
		const message = { ...baseMsgSend } as MsgSend;
		message.sender = object.sender ?? '';
		message.recipient = object.recipient ?? '';
		message.credits =
			object.credits?.map((e) => MsgSend_SendCredits.fromPartial(e)) ||
			[];
		return message;
	},
};

const baseMsgSend_SendCredits: object = {
	batchDenom: '',
	tradableAmount: '',
	retiredAmount: '',
	retirementLocation: '',
};

export const MsgSend_SendCredits = {
	encode(
		message: MsgSend_SendCredits,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.tradableAmount !== '') {
			writer.uint32(18).string(message.tradableAmount);
		}
		if (message.retiredAmount !== '') {
			writer.uint32(26).string(message.retiredAmount);
		}
		if (message.retirementLocation !== '') {
			writer.uint32(34).string(message.retirementLocation);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgSend_SendCredits {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSend_SendCredits } as MsgSend_SendCredits;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.tradableAmount = reader.string();
					break;
				case 3:
					message.retiredAmount = reader.string();
					break;
				case 4:
					message.retirementLocation = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSend_SendCredits {
		const message = { ...baseMsgSend_SendCredits } as MsgSend_SendCredits;
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
		message.retirementLocation =
			object.retirementLocation !== undefined &&
			object.retirementLocation !== null
				? String(object.retirementLocation)
				: '';
		return message;
	},

	toJSON(message: MsgSend_SendCredits): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.tradableAmount !== undefined &&
			(obj.tradableAmount = message.tradableAmount);
		message.retiredAmount !== undefined &&
			(obj.retiredAmount = message.retiredAmount);
		message.retirementLocation !== undefined &&
			(obj.retirementLocation = message.retirementLocation);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSend_SendCredits>, I>>(
		object: I
	): MsgSend_SendCredits {
		const message = { ...baseMsgSend_SendCredits } as MsgSend_SendCredits;
		message.batchDenom = object.batchDenom ?? '';
		message.tradableAmount = object.tradableAmount ?? '';
		message.retiredAmount = object.retiredAmount ?? '';
		message.retirementLocation = object.retirementLocation ?? '';
		return message;
	},
};

const baseMsgSendResponse: object = {};

export const MsgSendResponse = {
	encode(
		_: MsgSendResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSendResponse } as MsgSendResponse;
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

	fromJSON(_: any): MsgSendResponse {
		const message = { ...baseMsgSendResponse } as MsgSendResponse;
		return message;
	},

	toJSON(_: MsgSendResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSendResponse>, I>>(
		_: I
	): MsgSendResponse {
		const message = { ...baseMsgSendResponse } as MsgSendResponse;
		return message;
	},
};

const baseMsgRetire: object = { holder: '', location: '' };

export const MsgRetire = {
	encode(
		message: MsgRetire,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.holder !== '') {
			writer.uint32(10).string(message.holder);
		}
		for (const v of message.credits) {
			MsgRetire_RetireCredits.encode(
				v!,
				writer.uint32(18).fork()
			).ldelim();
		}
		if (message.location !== '') {
			writer.uint32(26).string(message.location);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetire {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgRetire } as MsgRetire;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.holder = reader.string();
					break;
				case 2:
					message.credits.push(
						MsgRetire_RetireCredits.decode(reader, reader.uint32())
					);
					break;
				case 3:
					message.location = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgRetire {
		const message = { ...baseMsgRetire } as MsgRetire;
		message.holder =
			object.holder !== undefined && object.holder !== null
				? String(object.holder)
				: '';
		message.credits = (object.credits ?? []).map((e: any) =>
			MsgRetire_RetireCredits.fromJSON(e)
		);
		message.location =
			object.location !== undefined && object.location !== null
				? String(object.location)
				: '';
		return message;
	},

	toJSON(message: MsgRetire): unknown {
		const obj: any = {};
		message.holder !== undefined && (obj.holder = message.holder);
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? MsgRetire_RetireCredits.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		message.location !== undefined && (obj.location = message.location);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgRetire>, I>>(
		object: I
	): MsgRetire {
		const message = { ...baseMsgRetire } as MsgRetire;
		message.holder = object.holder ?? '';
		message.credits =
			object.credits?.map((e) =>
				MsgRetire_RetireCredits.fromPartial(e)
			) || [];
		message.location = object.location ?? '';
		return message;
	},
};

const baseMsgRetire_RetireCredits: object = { batchDenom: '', amount: '' };

export const MsgRetire_RetireCredits = {
	encode(
		message: MsgRetire_RetireCredits,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.amount !== '') {
			writer.uint32(18).string(message.amount);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgRetire_RetireCredits {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgRetire_RetireCredits,
		} as MsgRetire_RetireCredits;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgRetire_RetireCredits {
		const message = {
			...baseMsgRetire_RetireCredits,
		} as MsgRetire_RetireCredits;
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

	toJSON(message: MsgRetire_RetireCredits): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgRetire_RetireCredits>, I>>(
		object: I
	): MsgRetire_RetireCredits {
		const message = {
			...baseMsgRetire_RetireCredits,
		} as MsgRetire_RetireCredits;
		message.batchDenom = object.batchDenom ?? '';
		message.amount = object.amount ?? '';
		return message;
	},
};

const baseMsgRetireResponse: object = {};

export const MsgRetireResponse = {
	encode(
		_: MsgRetireResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgRetireResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
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

	fromJSON(_: any): MsgRetireResponse {
		const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
		return message;
	},

	toJSON(_: MsgRetireResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgRetireResponse>, I>>(
		_: I
	): MsgRetireResponse {
		const message = { ...baseMsgRetireResponse } as MsgRetireResponse;
		return message;
	},
};

const baseMsgCancel: object = { holder: '' };

export const MsgCancel = {
	encode(
		message: MsgCancel,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.holder !== '') {
			writer.uint32(10).string(message.holder);
		}
		for (const v of message.credits) {
			MsgCancel_CancelCredits.encode(
				v!,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancel {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCancel } as MsgCancel;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.holder = reader.string();
					break;
				case 2:
					message.credits.push(
						MsgCancel_CancelCredits.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCancel {
		const message = { ...baseMsgCancel } as MsgCancel;
		message.holder =
			object.holder !== undefined && object.holder !== null
				? String(object.holder)
				: '';
		message.credits = (object.credits ?? []).map((e: any) =>
			MsgCancel_CancelCredits.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgCancel): unknown {
		const obj: any = {};
		message.holder !== undefined && (obj.holder = message.holder);
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? MsgCancel_CancelCredits.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCancel>, I>>(
		object: I
	): MsgCancel {
		const message = { ...baseMsgCancel } as MsgCancel;
		message.holder = object.holder ?? '';
		message.credits =
			object.credits?.map((e) =>
				MsgCancel_CancelCredits.fromPartial(e)
			) || [];
		return message;
	},
};

const baseMsgCancel_CancelCredits: object = { batchDenom: '', amount: '' };

export const MsgCancel_CancelCredits = {
	encode(
		message: MsgCancel_CancelCredits,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.amount !== '') {
			writer.uint32(18).string(message.amount);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCancel_CancelCredits {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCancel_CancelCredits,
		} as MsgCancel_CancelCredits;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.amount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCancel_CancelCredits {
		const message = {
			...baseMsgCancel_CancelCredits,
		} as MsgCancel_CancelCredits;
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

	toJSON(message: MsgCancel_CancelCredits): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.amount !== undefined && (obj.amount = message.amount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCancel_CancelCredits>, I>>(
		object: I
	): MsgCancel_CancelCredits {
		const message = {
			...baseMsgCancel_CancelCredits,
		} as MsgCancel_CancelCredits;
		message.batchDenom = object.batchDenom ?? '';
		message.amount = object.amount ?? '';
		return message;
	},
};

const baseMsgCancelResponse: object = {};

export const MsgCancelResponse = {
	encode(
		_: MsgCancelResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
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

	fromJSON(_: any): MsgCancelResponse {
		const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
		return message;
	},

	toJSON(_: MsgCancelResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCancelResponse>, I>>(
		_: I
	): MsgCancelResponse {
		const message = { ...baseMsgCancelResponse } as MsgCancelResponse;
		return message;
	},
};

const baseMsgUpdateClassAdmin: object = {
	admin: '',
	classId: '',
	newAdmin: '',
};

export const MsgUpdateClassAdmin = {
	encode(
		message: MsgUpdateClassAdmin,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.classId !== '') {
			writer.uint32(18).string(message.classId);
		}
		if (message.newAdmin !== '') {
			writer.uint32(26).string(message.newAdmin);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassAdmin {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgUpdateClassAdmin } as MsgUpdateClassAdmin;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.classId = reader.string();
					break;
				case 3:
					message.newAdmin = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateClassAdmin {
		const message = { ...baseMsgUpdateClassAdmin } as MsgUpdateClassAdmin;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.newAdmin =
			object.newAdmin !== undefined && object.newAdmin !== null
				? String(object.newAdmin)
				: '';
		return message;
	},

	toJSON(message: MsgUpdateClassAdmin): unknown {
		const obj: any = {};
		message.admin !== undefined && (obj.admin = message.admin);
		message.classId !== undefined && (obj.classId = message.classId);
		message.newAdmin !== undefined && (obj.newAdmin = message.newAdmin);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateClassAdmin>, I>>(
		object: I
	): MsgUpdateClassAdmin {
		const message = { ...baseMsgUpdateClassAdmin } as MsgUpdateClassAdmin;
		message.admin = object.admin ?? '';
		message.classId = object.classId ?? '';
		message.newAdmin = object.newAdmin ?? '';
		return message;
	},
};

const baseMsgUpdateClassAdminResponse: object = {};

export const MsgUpdateClassAdminResponse = {
	encode(
		_: MsgUpdateClassAdminResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassAdminResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateClassAdminResponse,
		} as MsgUpdateClassAdminResponse;
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

	fromJSON(_: any): MsgUpdateClassAdminResponse {
		const message = {
			...baseMsgUpdateClassAdminResponse,
		} as MsgUpdateClassAdminResponse;
		return message;
	},

	toJSON(_: MsgUpdateClassAdminResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateClassAdminResponse>, I>>(
		_: I
	): MsgUpdateClassAdminResponse {
		const message = {
			...baseMsgUpdateClassAdminResponse,
		} as MsgUpdateClassAdminResponse;
		return message;
	},
};

const baseMsgUpdateClassIssuers: object = {
	admin: '',
	classId: '',
	issuers: '',
};

export const MsgUpdateClassIssuers = {
	encode(
		message: MsgUpdateClassIssuers,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.classId !== '') {
			writer.uint32(18).string(message.classId);
		}
		for (const v of message.issuers) {
			writer.uint32(26).string(v!);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassIssuers {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateClassIssuers,
		} as MsgUpdateClassIssuers;
		message.issuers = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.classId = reader.string();
					break;
				case 3:
					message.issuers.push(reader.string());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateClassIssuers {
		const message = {
			...baseMsgUpdateClassIssuers,
		} as MsgUpdateClassIssuers;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.issuers = (object.issuers ?? []).map((e: any) => String(e));
		return message;
	},

	toJSON(message: MsgUpdateClassIssuers): unknown {
		const obj: any = {};
		message.admin !== undefined && (obj.admin = message.admin);
		message.classId !== undefined && (obj.classId = message.classId);
		if (message.issuers) {
			obj.issuers = message.issuers.map((e) => e);
		} else {
			obj.issuers = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateClassIssuers>, I>>(
		object: I
	): MsgUpdateClassIssuers {
		const message = {
			...baseMsgUpdateClassIssuers,
		} as MsgUpdateClassIssuers;
		message.admin = object.admin ?? '';
		message.classId = object.classId ?? '';
		message.issuers = object.issuers?.map((e) => e) || [];
		return message;
	},
};

const baseMsgUpdateClassIssuersResponse: object = {};

export const MsgUpdateClassIssuersResponse = {
	encode(
		_: MsgUpdateClassIssuersResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassIssuersResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateClassIssuersResponse,
		} as MsgUpdateClassIssuersResponse;
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

	fromJSON(_: any): MsgUpdateClassIssuersResponse {
		const message = {
			...baseMsgUpdateClassIssuersResponse,
		} as MsgUpdateClassIssuersResponse;
		return message;
	},

	toJSON(_: MsgUpdateClassIssuersResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateClassIssuersResponse>, I>>(
		_: I
	): MsgUpdateClassIssuersResponse {
		const message = {
			...baseMsgUpdateClassIssuersResponse,
		} as MsgUpdateClassIssuersResponse;
		return message;
	},
};

const baseMsgUpdateClassMetadata: object = { admin: '', classId: '' };

export const MsgUpdateClassMetadata = {
	encode(
		message: MsgUpdateClassMetadata,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.admin !== '') {
			writer.uint32(10).string(message.admin);
		}
		if (message.classId !== '') {
			writer.uint32(18).string(message.classId);
		}
		if (message.metadata.length !== 0) {
			writer.uint32(26).bytes(message.metadata);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassMetadata {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateClassMetadata,
		} as MsgUpdateClassMetadata;
		message.metadata = new Uint8Array();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.admin = reader.string();
					break;
				case 2:
					message.classId = reader.string();
					break;
				case 3:
					message.metadata = reader.bytes();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateClassMetadata {
		const message = {
			...baseMsgUpdateClassMetadata,
		} as MsgUpdateClassMetadata;
		message.admin =
			object.admin !== undefined && object.admin !== null
				? String(object.admin)
				: '';
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.metadata =
			object.metadata !== undefined && object.metadata !== null
				? bytesFromBase64(object.metadata)
				: new Uint8Array();
		return message;
	},

	toJSON(message: MsgUpdateClassMetadata): unknown {
		const obj: any = {};
		message.admin !== undefined && (obj.admin = message.admin);
		message.classId !== undefined && (obj.classId = message.classId);
		message.metadata !== undefined &&
			(obj.metadata = base64FromBytes(
				message.metadata !== undefined
					? message.metadata
					: new Uint8Array()
			));
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateClassMetadata>, I>>(
		object: I
	): MsgUpdateClassMetadata {
		const message = {
			...baseMsgUpdateClassMetadata,
		} as MsgUpdateClassMetadata;
		message.admin = object.admin ?? '';
		message.classId = object.classId ?? '';
		message.metadata = object.metadata ?? new Uint8Array();
		return message;
	},
};

const baseMsgUpdateClassMetadataResponse: object = {};

export const MsgUpdateClassMetadataResponse = {
	encode(
		_: MsgUpdateClassMetadataResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateClassMetadataResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateClassMetadataResponse,
		} as MsgUpdateClassMetadataResponse;
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

	fromJSON(_: any): MsgUpdateClassMetadataResponse {
		const message = {
			...baseMsgUpdateClassMetadataResponse,
		} as MsgUpdateClassMetadataResponse;
		return message;
	},

	toJSON(_: MsgUpdateClassMetadataResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<MsgUpdateClassMetadataResponse>, I>
	>(_: I): MsgUpdateClassMetadataResponse {
		const message = {
			...baseMsgUpdateClassMetadataResponse,
		} as MsgUpdateClassMetadataResponse;
		return message;
	},
};

const baseMsgSell: object = { owner: '' };

export const MsgSell = {
	encode(
		message: MsgSell,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		for (const v of message.orders) {
			MsgSell_Order.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSell } as MsgSell;
		message.orders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.orders.push(
						MsgSell_Order.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSell {
		const message = { ...baseMsgSell } as MsgSell;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.orders = (object.orders ?? []).map((e: any) =>
			MsgSell_Order.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgSell): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		if (message.orders) {
			obj.orders = message.orders.map((e) =>
				e ? MsgSell_Order.toJSON(e) : undefined
			);
		} else {
			obj.orders = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSell>, I>>(object: I): MsgSell {
		const message = { ...baseMsgSell } as MsgSell;
		message.owner = object.owner ?? '';
		message.orders =
			object.orders?.map((e) => MsgSell_Order.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgSell_Order: object = {
	batchDenom: '',
	quantity: '',
	disableAutoRetire: false,
};

export const MsgSell_Order = {
	encode(
		message: MsgSell_Order,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.quantity !== '') {
			writer.uint32(18).string(message.quantity);
		}
		if (message.askPrice !== undefined) {
			Coin.encode(message.askPrice, writer.uint32(26).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(32).bool(message.disableAutoRetire);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgSell_Order {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSell_Order } as MsgSell_Order;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.quantity = reader.string();
					break;
				case 3:
					message.askPrice = Coin.decode(reader, reader.uint32());
					break;
				case 4:
					message.disableAutoRetire = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSell_Order {
		const message = { ...baseMsgSell_Order } as MsgSell_Order;
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

	toJSON(message: MsgSell_Order): unknown {
		const obj: any = {};
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

	fromPartial<I extends Exact<DeepPartial<MsgSell_Order>, I>>(
		object: I
	): MsgSell_Order {
		const message = { ...baseMsgSell_Order } as MsgSell_Order;
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

const baseMsgSellResponse: object = { sellOrderIds: Long.UZERO };

export const MsgSellResponse = {
	encode(
		message: MsgSellResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		writer.uint32(10).fork();
		for (const v of message.sellOrderIds) {
			writer.uint64(v);
		}
		writer.ldelim();
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgSellResponse } as MsgSellResponse;
		message.sellOrderIds = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if ((tag & 7) === 2) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.sellOrderIds.push(reader.uint64() as Long);
						}
					} else {
						message.sellOrderIds.push(reader.uint64() as Long);
					}
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgSellResponse {
		const message = { ...baseMsgSellResponse } as MsgSellResponse;
		message.sellOrderIds = (object.sellOrderIds ?? []).map((e: any) =>
			Long.fromString(e)
		);
		return message;
	},

	toJSON(message: MsgSellResponse): unknown {
		const obj: any = {};
		if (message.sellOrderIds) {
			obj.sellOrderIds = message.sellOrderIds.map((e) =>
				(e || Long.UZERO).toString()
			);
		} else {
			obj.sellOrderIds = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgSellResponse>, I>>(
		object: I
	): MsgSellResponse {
		const message = { ...baseMsgSellResponse } as MsgSellResponse;
		message.sellOrderIds =
			object.sellOrderIds?.map((e) => Long.fromValue(e)) || [];
		return message;
	},
};

const baseMsgUpdateSellOrders: object = { owner: '' };

export const MsgUpdateSellOrders = {
	encode(
		message: MsgUpdateSellOrders,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		for (const v of message.updates) {
			MsgUpdateSellOrders_Update.encode(
				v!,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateSellOrders {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgUpdateSellOrders } as MsgUpdateSellOrders;
		message.updates = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.updates.push(
						MsgUpdateSellOrders_Update.decode(
							reader,
							reader.uint32()
						)
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateSellOrders {
		const message = { ...baseMsgUpdateSellOrders } as MsgUpdateSellOrders;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.updates = (object.updates ?? []).map((e: any) =>
			MsgUpdateSellOrders_Update.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgUpdateSellOrders): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		if (message.updates) {
			obj.updates = message.updates.map((e) =>
				e ? MsgUpdateSellOrders_Update.toJSON(e) : undefined
			);
		} else {
			obj.updates = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateSellOrders>, I>>(
		object: I
	): MsgUpdateSellOrders {
		const message = { ...baseMsgUpdateSellOrders } as MsgUpdateSellOrders;
		message.owner = object.owner ?? '';
		message.updates =
			object.updates?.map((e) =>
				MsgUpdateSellOrders_Update.fromPartial(e)
			) || [];
		return message;
	},
};

const baseMsgUpdateSellOrders_Update: object = {
	sellOrderId: Long.UZERO,
	newQuantity: '',
	disableAutoRetire: false,
};

export const MsgUpdateSellOrders_Update = {
	encode(
		message: MsgUpdateSellOrders_Update,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (!message.sellOrderId.isZero()) {
			writer.uint32(8).uint64(message.sellOrderId);
		}
		if (message.newQuantity !== '') {
			writer.uint32(18).string(message.newQuantity);
		}
		if (message.newAskPrice !== undefined) {
			Coin.encode(message.newAskPrice, writer.uint32(26).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(32).bool(message.disableAutoRetire);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateSellOrders_Update {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateSellOrders_Update,
		} as MsgUpdateSellOrders_Update;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrderId = reader.uint64() as Long;
					break;
				case 2:
					message.newQuantity = reader.string();
					break;
				case 3:
					message.newAskPrice = Coin.decode(reader, reader.uint32());
					break;
				case 4:
					message.disableAutoRetire = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgUpdateSellOrders_Update {
		const message = {
			...baseMsgUpdateSellOrders_Update,
		} as MsgUpdateSellOrders_Update;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: Long.UZERO;
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

	toJSON(message: MsgUpdateSellOrders_Update): unknown {
		const obj: any = {};
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
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

	fromPartial<I extends Exact<DeepPartial<MsgUpdateSellOrders_Update>, I>>(
		object: I
	): MsgUpdateSellOrders_Update {
		const message = {
			...baseMsgUpdateSellOrders_Update,
		} as MsgUpdateSellOrders_Update;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: Long.UZERO;
		message.newQuantity = object.newQuantity ?? '';
		message.newAskPrice =
			object.newAskPrice !== undefined && object.newAskPrice !== null
				? Coin.fromPartial(object.newAskPrice)
				: undefined;
		message.disableAutoRetire = object.disableAutoRetire ?? false;
		return message;
	},
};

const baseMsgUpdateSellOrdersResponse: object = {};

export const MsgUpdateSellOrdersResponse = {
	encode(
		_: MsgUpdateSellOrdersResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgUpdateSellOrdersResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgUpdateSellOrdersResponse,
		} as MsgUpdateSellOrdersResponse;
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

	fromJSON(_: any): MsgUpdateSellOrdersResponse {
		const message = {
			...baseMsgUpdateSellOrdersResponse,
		} as MsgUpdateSellOrdersResponse;
		return message;
	},

	toJSON(_: MsgUpdateSellOrdersResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgUpdateSellOrdersResponse>, I>>(
		_: I
	): MsgUpdateSellOrdersResponse {
		const message = {
			...baseMsgUpdateSellOrdersResponse,
		} as MsgUpdateSellOrdersResponse;
		return message;
	},
};

const baseMsgBuy: object = { buyer: '' };

export const MsgBuy = {
	encode(
		message: MsgBuy,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.buyer !== '') {
			writer.uint32(10).string(message.buyer);
		}
		for (const v of message.orders) {
			MsgBuy_Order.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgBuy } as MsgBuy;
		message.orders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyer = reader.string();
					break;
				case 2:
					message.orders.push(
						MsgBuy_Order.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgBuy {
		const message = { ...baseMsgBuy } as MsgBuy;
		message.buyer =
			object.buyer !== undefined && object.buyer !== null
				? String(object.buyer)
				: '';
		message.orders = (object.orders ?? []).map((e: any) =>
			MsgBuy_Order.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgBuy): unknown {
		const obj: any = {};
		message.buyer !== undefined && (obj.buyer = message.buyer);
		if (message.orders) {
			obj.orders = message.orders.map((e) =>
				e ? MsgBuy_Order.toJSON(e) : undefined
			);
		} else {
			obj.orders = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgBuy>, I>>(object: I): MsgBuy {
		const message = { ...baseMsgBuy } as MsgBuy;
		message.buyer = object.buyer ?? '';
		message.orders =
			object.orders?.map((e) => MsgBuy_Order.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgBuy_Order: object = {
	quantity: '',
	disableAutoRetire: false,
	disablePartialFill: false,
};

export const MsgBuy_Order = {
	encode(
		message: MsgBuy_Order,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.selection !== undefined) {
			MsgBuy_Order_Selection.encode(
				message.selection,
				writer.uint32(10).fork()
			).ldelim();
		}
		if (message.quantity !== '') {
			writer.uint32(18).string(message.quantity);
		}
		if (message.bidPrice !== undefined) {
			Coin.encode(message.bidPrice, writer.uint32(26).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(32).bool(message.disableAutoRetire);
		}
		if (message.disablePartialFill === true) {
			writer.uint32(40).bool(message.disablePartialFill);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuy_Order {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgBuy_Order } as MsgBuy_Order;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.selection = MsgBuy_Order_Selection.decode(
						reader,
						reader.uint32()
					);
					break;
				case 2:
					message.quantity = reader.string();
					break;
				case 3:
					message.bidPrice = Coin.decode(reader, reader.uint32());
					break;
				case 4:
					message.disableAutoRetire = reader.bool();
					break;
				case 5:
					message.disablePartialFill = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgBuy_Order {
		const message = { ...baseMsgBuy_Order } as MsgBuy_Order;
		message.selection =
			object.selection !== undefined && object.selection !== null
				? MsgBuy_Order_Selection.fromJSON(object.selection)
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

	toJSON(message: MsgBuy_Order): unknown {
		const obj: any = {};
		message.selection !== undefined &&
			(obj.selection = message.selection
				? MsgBuy_Order_Selection.toJSON(message.selection)
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

	fromPartial<I extends Exact<DeepPartial<MsgBuy_Order>, I>>(
		object: I
	): MsgBuy_Order {
		const message = { ...baseMsgBuy_Order } as MsgBuy_Order;
		message.selection =
			object.selection !== undefined && object.selection !== null
				? MsgBuy_Order_Selection.fromPartial(object.selection)
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

const baseMsgBuy_Order_Selection: object = {};

export const MsgBuy_Order_Selection = {
	encode(
		message: MsgBuy_Order_Selection,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sellOrderId !== undefined) {
			writer.uint32(8).uint64(message.sellOrderId);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgBuy_Order_Selection {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgBuy_Order_Selection,
		} as MsgBuy_Order_Selection;
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

	fromJSON(object: any): MsgBuy_Order_Selection {
		const message = {
			...baseMsgBuy_Order_Selection,
		} as MsgBuy_Order_Selection;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: undefined;
		return message;
	},

	toJSON(message: MsgBuy_Order_Selection): unknown {
		const obj: any = {};
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || undefined).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgBuy_Order_Selection>, I>>(
		object: I
	): MsgBuy_Order_Selection {
		const message = {
			...baseMsgBuy_Order_Selection,
		} as MsgBuy_Order_Selection;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: undefined;
		return message;
	},
};

const baseMsgBuyResponse: object = { buyOrderIds: Long.UZERO };

export const MsgBuyResponse = {
	encode(
		message: MsgBuyResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		writer.uint32(10).fork();
		for (const v of message.buyOrderIds) {
			writer.uint64(v);
		}
		writer.ldelim();
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
		message.buyOrderIds = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if ((tag & 7) === 2) {
						const end2 = reader.uint32() + reader.pos;
						while (reader.pos < end2) {
							message.buyOrderIds.push(reader.uint64() as Long);
						}
					} else {
						message.buyOrderIds.push(reader.uint64() as Long);
					}
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgBuyResponse {
		const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
		message.buyOrderIds = (object.buyOrderIds ?? []).map((e: any) =>
			Long.fromString(e)
		);
		return message;
	},

	toJSON(message: MsgBuyResponse): unknown {
		const obj: any = {};
		if (message.buyOrderIds) {
			obj.buyOrderIds = message.buyOrderIds.map((e) =>
				(e || Long.UZERO).toString()
			);
		} else {
			obj.buyOrderIds = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgBuyResponse>, I>>(
		object: I
	): MsgBuyResponse {
		const message = { ...baseMsgBuyResponse } as MsgBuyResponse;
		message.buyOrderIds =
			object.buyOrderIds?.map((e) => Long.fromValue(e)) || [];
		return message;
	},
};

const baseMsgAllowAskDenom: object = {
	rootAddress: '',
	denom: '',
	displayDenom: '',
	exponent: 0,
};

export const MsgAllowAskDenom = {
	encode(
		message: MsgAllowAskDenom,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.rootAddress !== '') {
			writer.uint32(10).string(message.rootAddress);
		}
		if (message.denom !== '') {
			writer.uint32(18).string(message.denom);
		}
		if (message.displayDenom !== '') {
			writer.uint32(26).string(message.displayDenom);
		}
		if (message.exponent !== 0) {
			writer.uint32(32).uint32(message.exponent);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgAllowAskDenom {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgAllowAskDenom } as MsgAllowAskDenom;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.rootAddress = reader.string();
					break;
				case 2:
					message.denom = reader.string();
					break;
				case 3:
					message.displayDenom = reader.string();
					break;
				case 4:
					message.exponent = reader.uint32();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgAllowAskDenom {
		const message = { ...baseMsgAllowAskDenom } as MsgAllowAskDenom;
		message.rootAddress =
			object.rootAddress !== undefined && object.rootAddress !== null
				? String(object.rootAddress)
				: '';
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

	toJSON(message: MsgAllowAskDenom): unknown {
		const obj: any = {};
		message.rootAddress !== undefined &&
			(obj.rootAddress = message.rootAddress);
		message.denom !== undefined && (obj.denom = message.denom);
		message.displayDenom !== undefined &&
			(obj.displayDenom = message.displayDenom);
		message.exponent !== undefined && (obj.exponent = message.exponent);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgAllowAskDenom>, I>>(
		object: I
	): MsgAllowAskDenom {
		const message = { ...baseMsgAllowAskDenom } as MsgAllowAskDenom;
		message.rootAddress = object.rootAddress ?? '';
		message.denom = object.denom ?? '';
		message.displayDenom = object.displayDenom ?? '';
		message.exponent = object.exponent ?? 0;
		return message;
	},
};

const baseMsgAllowAskDenomResponse: object = {};

export const MsgAllowAskDenomResponse = {
	encode(
		_: MsgAllowAskDenomResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgAllowAskDenomResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgAllowAskDenomResponse,
		} as MsgAllowAskDenomResponse;
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

	fromJSON(_: any): MsgAllowAskDenomResponse {
		const message = {
			...baseMsgAllowAskDenomResponse,
		} as MsgAllowAskDenomResponse;
		return message;
	},

	toJSON(_: MsgAllowAskDenomResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgAllowAskDenomResponse>, I>>(
		_: I
	): MsgAllowAskDenomResponse {
		const message = {
			...baseMsgAllowAskDenomResponse,
		} as MsgAllowAskDenomResponse;
		return message;
	},
};

const baseMsgCreateBasket: object = {
	curator: '',
	name: '',
	displayName: '',
	exponent: 0,
	disableAutoRetire: false,
	allowPicking: false,
};

export const MsgCreateBasket = {
	encode(
		message: MsgCreateBasket,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.curator !== '') {
			writer.uint32(10).string(message.curator);
		}
		if (message.name !== '') {
			writer.uint32(18).string(message.name);
		}
		if (message.displayName !== '') {
			writer.uint32(26).string(message.displayName);
		}
		if (message.exponent !== 0) {
			writer.uint32(32).uint32(message.exponent);
		}
		for (const v of message.basketCriteria) {
			BasketCriteria.encode(v!, writer.uint32(42).fork()).ldelim();
		}
		if (message.disableAutoRetire === true) {
			writer.uint32(48).bool(message.disableAutoRetire);
		}
		if (message.allowPicking === true) {
			writer.uint32(56).bool(message.allowPicking);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBasket {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgCreateBasket } as MsgCreateBasket;
		message.basketCriteria = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.curator = reader.string();
					break;
				case 2:
					message.name = reader.string();
					break;
				case 3:
					message.displayName = reader.string();
					break;
				case 4:
					message.exponent = reader.uint32();
					break;
				case 5:
					message.basketCriteria.push(
						BasketCriteria.decode(reader, reader.uint32())
					);
					break;
				case 6:
					message.disableAutoRetire = reader.bool();
					break;
				case 7:
					message.allowPicking = reader.bool();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateBasket {
		const message = { ...baseMsgCreateBasket } as MsgCreateBasket;
		message.curator =
			object.curator !== undefined && object.curator !== null
				? String(object.curator)
				: '';
		message.name =
			object.name !== undefined && object.name !== null
				? String(object.name)
				: '';
		message.displayName =
			object.displayName !== undefined && object.displayName !== null
				? String(object.displayName)
				: '';
		message.exponent =
			object.exponent !== undefined && object.exponent !== null
				? Number(object.exponent)
				: 0;
		message.basketCriteria = (object.basketCriteria ?? []).map((e: any) =>
			BasketCriteria.fromJSON(e)
		);
		message.disableAutoRetire =
			object.disableAutoRetire !== undefined &&
			object.disableAutoRetire !== null
				? Boolean(object.disableAutoRetire)
				: false;
		message.allowPicking =
			object.allowPicking !== undefined && object.allowPicking !== null
				? Boolean(object.allowPicking)
				: false;
		return message;
	},

	toJSON(message: MsgCreateBasket): unknown {
		const obj: any = {};
		message.curator !== undefined && (obj.curator = message.curator);
		message.name !== undefined && (obj.name = message.name);
		message.displayName !== undefined &&
			(obj.displayName = message.displayName);
		message.exponent !== undefined && (obj.exponent = message.exponent);
		if (message.basketCriteria) {
			obj.basketCriteria = message.basketCriteria.map((e) =>
				e ? BasketCriteria.toJSON(e) : undefined
			);
		} else {
			obj.basketCriteria = [];
		}
		message.disableAutoRetire !== undefined &&
			(obj.disableAutoRetire = message.disableAutoRetire);
		message.allowPicking !== undefined &&
			(obj.allowPicking = message.allowPicking);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateBasket>, I>>(
		object: I
	): MsgCreateBasket {
		const message = { ...baseMsgCreateBasket } as MsgCreateBasket;
		message.curator = object.curator ?? '';
		message.name = object.name ?? '';
		message.displayName = object.displayName ?? '';
		message.exponent = object.exponent ?? 0;
		message.basketCriteria =
			object.basketCriteria?.map((e) => BasketCriteria.fromPartial(e)) ||
			[];
		message.disableAutoRetire = object.disableAutoRetire ?? false;
		message.allowPicking = object.allowPicking ?? false;
		return message;
	},
};

const baseMsgCreateBasketResponse: object = { basketDenom: '' };

export const MsgCreateBasketResponse = {
	encode(
		message: MsgCreateBasketResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.basketDenom !== '') {
			writer.uint32(10).string(message.basketDenom);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgCreateBasketResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgCreateBasketResponse,
		} as MsgCreateBasketResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.basketDenom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgCreateBasketResponse {
		const message = {
			...baseMsgCreateBasketResponse,
		} as MsgCreateBasketResponse;
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		return message;
	},

	toJSON(message: MsgCreateBasketResponse): unknown {
		const obj: any = {};
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgCreateBasketResponse>, I>>(
		object: I
	): MsgCreateBasketResponse {
		const message = {
			...baseMsgCreateBasketResponse,
		} as MsgCreateBasketResponse;
		message.basketDenom = object.basketDenom ?? '';
		return message;
	},
};

const baseMsgAddToBasket: object = { owner: '', basketDenom: '' };

export const MsgAddToBasket = {
	encode(
		message: MsgAddToBasket,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		if (message.basketDenom !== '') {
			writer.uint32(18).string(message.basketDenom);
		}
		for (const v of message.credits) {
			BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToBasket {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgAddToBasket } as MsgAddToBasket;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.basketDenom = reader.string();
					break;
				case 3:
					message.credits.push(
						BasketCredit.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgAddToBasket {
		const message = { ...baseMsgAddToBasket } as MsgAddToBasket;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		message.credits = (object.credits ?? []).map((e: any) =>
			BasketCredit.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgAddToBasket): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? BasketCredit.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgAddToBasket>, I>>(
		object: I
	): MsgAddToBasket {
		const message = { ...baseMsgAddToBasket } as MsgAddToBasket;
		message.owner = object.owner ?? '';
		message.basketDenom = object.basketDenom ?? '';
		message.credits =
			object.credits?.map((e) => BasketCredit.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgAddToBasketResponse: object = { amountReceived: '' };

export const MsgAddToBasketResponse = {
	encode(
		message: MsgAddToBasketResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.amountReceived !== '') {
			writer.uint32(10).string(message.amountReceived);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgAddToBasketResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgAddToBasketResponse,
		} as MsgAddToBasketResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.amountReceived = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgAddToBasketResponse {
		const message = {
			...baseMsgAddToBasketResponse,
		} as MsgAddToBasketResponse;
		message.amountReceived =
			object.amountReceived !== undefined &&
			object.amountReceived !== null
				? String(object.amountReceived)
				: '';
		return message;
	},

	toJSON(message: MsgAddToBasketResponse): unknown {
		const obj: any = {};
		message.amountReceived !== undefined &&
			(obj.amountReceived = message.amountReceived);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgAddToBasketResponse>, I>>(
		object: I
	): MsgAddToBasketResponse {
		const message = {
			...baseMsgAddToBasketResponse,
		} as MsgAddToBasketResponse;
		message.amountReceived = object.amountReceived ?? '';
		return message;
	},
};

const baseMsgTakeFromBasket: object = {
	owner: '',
	basketDenom: '',
	amount: '',
	retirementLocation: '',
};

export const MsgTakeFromBasket = {
	encode(
		message: MsgTakeFromBasket,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		if (message.basketDenom !== '') {
			writer.uint32(18).string(message.basketDenom);
		}
		if (message.amount !== '') {
			writer.uint32(26).string(message.amount);
		}
		if (message.retirementLocation !== '') {
			writer.uint32(34).string(message.retirementLocation);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgTakeFromBasket {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgTakeFromBasket } as MsgTakeFromBasket;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.basketDenom = reader.string();
					break;
				case 3:
					message.amount = reader.string();
					break;
				case 4:
					message.retirementLocation = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgTakeFromBasket {
		const message = { ...baseMsgTakeFromBasket } as MsgTakeFromBasket;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		message.amount =
			object.amount !== undefined && object.amount !== null
				? String(object.amount)
				: '';
		message.retirementLocation =
			object.retirementLocation !== undefined &&
			object.retirementLocation !== null
				? String(object.retirementLocation)
				: '';
		return message;
	},

	toJSON(message: MsgTakeFromBasket): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		message.amount !== undefined && (obj.amount = message.amount);
		message.retirementLocation !== undefined &&
			(obj.retirementLocation = message.retirementLocation);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgTakeFromBasket>, I>>(
		object: I
	): MsgTakeFromBasket {
		const message = { ...baseMsgTakeFromBasket } as MsgTakeFromBasket;
		message.owner = object.owner ?? '';
		message.basketDenom = object.basketDenom ?? '';
		message.amount = object.amount ?? '';
		message.retirementLocation = object.retirementLocation ?? '';
		return message;
	},
};

const baseMsgTakeFromBasketResponse: object = {};

export const MsgTakeFromBasketResponse = {
	encode(
		message: MsgTakeFromBasketResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.credits) {
			BasketCredit.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgTakeFromBasketResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgTakeFromBasketResponse,
		} as MsgTakeFromBasketResponse;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.credits.push(
						BasketCredit.decode(reader, reader.uint32())
					);
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgTakeFromBasketResponse {
		const message = {
			...baseMsgTakeFromBasketResponse,
		} as MsgTakeFromBasketResponse;
		message.credits = (object.credits ?? []).map((e: any) =>
			BasketCredit.fromJSON(e)
		);
		return message;
	},

	toJSON(message: MsgTakeFromBasketResponse): unknown {
		const obj: any = {};
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? BasketCredit.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgTakeFromBasketResponse>, I>>(
		object: I
	): MsgTakeFromBasketResponse {
		const message = {
			...baseMsgTakeFromBasketResponse,
		} as MsgTakeFromBasketResponse;
		message.credits =
			object.credits?.map((e) => BasketCredit.fromPartial(e)) || [];
		return message;
	},
};

const baseMsgPickFromBasket: object = {
	owner: '',
	basketDenom: '',
	retirementLocation: '',
};

export const MsgPickFromBasket = {
	encode(
		message: MsgPickFromBasket,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.owner !== '') {
			writer.uint32(10).string(message.owner);
		}
		if (message.basketDenom !== '') {
			writer.uint32(18).string(message.basketDenom);
		}
		for (const v of message.credits) {
			BasketCredit.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		if (message.retirementLocation !== '') {
			writer.uint32(34).string(message.retirementLocation);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): MsgPickFromBasket {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseMsgPickFromBasket } as MsgPickFromBasket;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.owner = reader.string();
					break;
				case 2:
					message.basketDenom = reader.string();
					break;
				case 3:
					message.credits.push(
						BasketCredit.decode(reader, reader.uint32())
					);
					break;
				case 4:
					message.retirementLocation = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): MsgPickFromBasket {
		const message = { ...baseMsgPickFromBasket } as MsgPickFromBasket;
		message.owner =
			object.owner !== undefined && object.owner !== null
				? String(object.owner)
				: '';
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		message.credits = (object.credits ?? []).map((e: any) =>
			BasketCredit.fromJSON(e)
		);
		message.retirementLocation =
			object.retirementLocation !== undefined &&
			object.retirementLocation !== null
				? String(object.retirementLocation)
				: '';
		return message;
	},

	toJSON(message: MsgPickFromBasket): unknown {
		const obj: any = {};
		message.owner !== undefined && (obj.owner = message.owner);
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? BasketCredit.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		message.retirementLocation !== undefined &&
			(obj.retirementLocation = message.retirementLocation);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgPickFromBasket>, I>>(
		object: I
	): MsgPickFromBasket {
		const message = { ...baseMsgPickFromBasket } as MsgPickFromBasket;
		message.owner = object.owner ?? '';
		message.basketDenom = object.basketDenom ?? '';
		message.credits =
			object.credits?.map((e) => BasketCredit.fromPartial(e)) || [];
		message.retirementLocation = object.retirementLocation ?? '';
		return message;
	},
};

const baseMsgPickFromBasketResponse: object = {};

export const MsgPickFromBasketResponse = {
	encode(
		_: MsgPickFromBasketResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): MsgPickFromBasketResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseMsgPickFromBasketResponse,
		} as MsgPickFromBasketResponse;
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

	fromJSON(_: any): MsgPickFromBasketResponse {
		const message = {
			...baseMsgPickFromBasketResponse,
		} as MsgPickFromBasketResponse;
		return message;
	},

	toJSON(_: MsgPickFromBasketResponse): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<MsgPickFromBasketResponse>, I>>(
		_: I
	): MsgPickFromBasketResponse {
		const message = {
			...baseMsgPickFromBasketResponse,
		} as MsgPickFromBasketResponse;
		return message;
	},
};

/** Msg is the regen.ecocredit.v1alpha1 Msg service. */
export interface Msg {
	/**
	 * CreateClass creates a new credit class with an approved list of issuers and
	 * optional metadata.
	 */
	CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse>;
	/** CreateProject creates a new project within a credit class. */
	CreateProject(request: MsgCreateProject): Promise<MsgCreateProjectResponse>;
	/**
	 * CreateBatch creates a new batch of credits for an existing project.
	 * This will create a new batch denom with a fixed supply. Issued credits can
	 * be distributed to recipients in either tradable or retired form.
	 */
	CreateBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse>;
	/**
	 * Send sends tradable credits from one account to another account. Sent
	 * credits can either be tradable or retired on receipt.
	 */
	Send(request: MsgSend): Promise<MsgSendResponse>;
	/** Retire retires a specified number of credits in the holder's account. */
	Retire(request: MsgRetire): Promise<MsgRetireResponse>;
	/**
	 * Cancel removes a number of credits from the holder's account and also
	 * deducts them from the tradable supply, effectively cancelling their
	 * issuance on Regen Ledger
	 */
	Cancel(request: MsgCancel): Promise<MsgCancelResponse>;
	/** UpdateClassAdmin updates the credit class admin */
	UpdateClassAdmin(
		request: MsgUpdateClassAdmin
	): Promise<MsgUpdateClassAdminResponse>;
	/** UpdateClassIssuers updates the credit class issuer list */
	UpdateClassIssuers(
		request: MsgUpdateClassIssuers
	): Promise<MsgUpdateClassIssuersResponse>;
	/** UpdateClassMetadata updates the credit class metadata */
	UpdateClassMetadata(
		request: MsgUpdateClassMetadata
	): Promise<MsgUpdateClassMetadataResponse>;
	/** Sell creates new sell orders. */
	Sell(request: MsgSell): Promise<MsgSellResponse>;
	/** UpdateSellOrders updates existing sell orders. */
	UpdateSellOrders(
		request: MsgUpdateSellOrders
	): Promise<MsgUpdateSellOrdersResponse>;
	/** Buy creates credit buy orders. */
	Buy(request: MsgBuy): Promise<MsgBuyResponse>;
	/** AllowAskDenom is a governance operation which authorizes a new ask denom to be used in sell orders */
	AllowAskDenom(request: MsgAllowAskDenom): Promise<MsgAllowAskDenomResponse>;
	/** CreateBasket creates a bank denom which wraps credits. */
	CreateBasket(request: MsgCreateBasket): Promise<MsgCreateBasketResponse>;
	/** AddToBasket adds credits to a basket in return for basket tokens. */
	AddToBasket(request: MsgAddToBasket): Promise<MsgAddToBasketResponse>;
	/**
	 * TakeFromBasket takes credits from a basket without regard for which
	 * credits they are. The credits will be auto-retired if disable_auto_retire
	 * is false. Credits will be chosen randomly using the previous block hash
	 * as a consensus source of randomness.
	 * More concretely, the implementation is as follows:
	 * - take the previous block hash and convert it into an uint64,
	 * - given the total number of different credits within the basket `n`, the
	 *   first credits that will get picked correspond to: hash modulo n (in
	 *   terms of order),
	 * - then if we need to take more credits, we get some from the next one and
	 *   so on.
	 */
	TakeFromBasket(
		request: MsgTakeFromBasket
	): Promise<MsgTakeFromBasketResponse>;
	/**
	 * PickFromBasket picks specific credits from a basket. If allow_picking is
	 * set to false, then only an address which deposited credits in the basket
	 * can pick those credits. All other addresses will be blocked from picking
	 * those credits. The credits will be auto-retired if disable_auto_retire is
	 * false unless the credits were previously put into the basket by the
	 * address picking them from the basket, in which case they will remain
	 * tradable. This functionality allows the owner of a credit to have more
	 * control over the credits they are putting in baskets then ordinary users
	 * to deal with the scenario where basket tokens end up being worth
	 * significantly less than the credits on their own.
	 */
	PickFromBasket(
		request: MsgPickFromBasket
	): Promise<MsgPickFromBasketResponse>;
}

export class MsgClientImpl implements Msg {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.CreateClass = this.CreateClass.bind(this);
		this.CreateProject = this.CreateProject.bind(this);
		this.CreateBatch = this.CreateBatch.bind(this);
		this.Send = this.Send.bind(this);
		this.Retire = this.Retire.bind(this);
		this.Cancel = this.Cancel.bind(this);
		this.UpdateClassAdmin = this.UpdateClassAdmin.bind(this);
		this.UpdateClassIssuers = this.UpdateClassIssuers.bind(this);
		this.UpdateClassMetadata = this.UpdateClassMetadata.bind(this);
		this.Sell = this.Sell.bind(this);
		this.UpdateSellOrders = this.UpdateSellOrders.bind(this);
		this.Buy = this.Buy.bind(this);
		this.AllowAskDenom = this.AllowAskDenom.bind(this);
		this.CreateBasket = this.CreateBasket.bind(this);
		this.AddToBasket = this.AddToBasket.bind(this);
		this.TakeFromBasket = this.TakeFromBasket.bind(this);
		this.PickFromBasket = this.PickFromBasket.bind(this);
	}
	CreateClass(request: MsgCreateClass): Promise<MsgCreateClassResponse> {
		const data = MsgCreateClass.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'CreateClass',
			data
		);
		return promise.then((data) =>
			MsgCreateClassResponse.decode(new _m0.Reader(data))
		);
	}

	CreateProject(
		request: MsgCreateProject
	): Promise<MsgCreateProjectResponse> {
		const data = MsgCreateProject.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'CreateProject',
			data
		);
		return promise.then((data) =>
			MsgCreateProjectResponse.decode(new _m0.Reader(data))
		);
	}

	CreateBatch(request: MsgCreateBatch): Promise<MsgCreateBatchResponse> {
		const data = MsgCreateBatch.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'CreateBatch',
			data
		);
		return promise.then((data) =>
			MsgCreateBatchResponse.decode(new _m0.Reader(data))
		);
	}

	Send(request: MsgSend): Promise<MsgSendResponse> {
		const data = MsgSend.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'Send',
			data
		);
		return promise.then((data) =>
			MsgSendResponse.decode(new _m0.Reader(data))
		);
	}

	Retire(request: MsgRetire): Promise<MsgRetireResponse> {
		const data = MsgRetire.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'Retire',
			data
		);
		return promise.then((data) =>
			MsgRetireResponse.decode(new _m0.Reader(data))
		);
	}

	Cancel(request: MsgCancel): Promise<MsgCancelResponse> {
		const data = MsgCancel.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'Cancel',
			data
		);
		return promise.then((data) =>
			MsgCancelResponse.decode(new _m0.Reader(data))
		);
	}

	UpdateClassAdmin(
		request: MsgUpdateClassAdmin
	): Promise<MsgUpdateClassAdminResponse> {
		const data = MsgUpdateClassAdmin.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'UpdateClassAdmin',
			data
		);
		return promise.then((data) =>
			MsgUpdateClassAdminResponse.decode(new _m0.Reader(data))
		);
	}

	UpdateClassIssuers(
		request: MsgUpdateClassIssuers
	): Promise<MsgUpdateClassIssuersResponse> {
		const data = MsgUpdateClassIssuers.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'UpdateClassIssuers',
			data
		);
		return promise.then((data) =>
			MsgUpdateClassIssuersResponse.decode(new _m0.Reader(data))
		);
	}

	UpdateClassMetadata(
		request: MsgUpdateClassMetadata
	): Promise<MsgUpdateClassMetadataResponse> {
		const data = MsgUpdateClassMetadata.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'UpdateClassMetadata',
			data
		);
		return promise.then((data) =>
			MsgUpdateClassMetadataResponse.decode(new _m0.Reader(data))
		);
	}

	Sell(request: MsgSell): Promise<MsgSellResponse> {
		const data = MsgSell.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'Sell',
			data
		);
		return promise.then((data) =>
			MsgSellResponse.decode(new _m0.Reader(data))
		);
	}

	UpdateSellOrders(
		request: MsgUpdateSellOrders
	): Promise<MsgUpdateSellOrdersResponse> {
		const data = MsgUpdateSellOrders.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'UpdateSellOrders',
			data
		);
		return promise.then((data) =>
			MsgUpdateSellOrdersResponse.decode(new _m0.Reader(data))
		);
	}

	Buy(request: MsgBuy): Promise<MsgBuyResponse> {
		const data = MsgBuy.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'Buy',
			data
		);
		return promise.then((data) =>
			MsgBuyResponse.decode(new _m0.Reader(data))
		);
	}

	AllowAskDenom(
		request: MsgAllowAskDenom
	): Promise<MsgAllowAskDenomResponse> {
		const data = MsgAllowAskDenom.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'AllowAskDenom',
			data
		);
		return promise.then((data) =>
			MsgAllowAskDenomResponse.decode(new _m0.Reader(data))
		);
	}

	CreateBasket(request: MsgCreateBasket): Promise<MsgCreateBasketResponse> {
		const data = MsgCreateBasket.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'CreateBasket',
			data
		);
		return promise.then((data) =>
			MsgCreateBasketResponse.decode(new _m0.Reader(data))
		);
	}

	AddToBasket(request: MsgAddToBasket): Promise<MsgAddToBasketResponse> {
		const data = MsgAddToBasket.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'AddToBasket',
			data
		);
		return promise.then((data) =>
			MsgAddToBasketResponse.decode(new _m0.Reader(data))
		);
	}

	TakeFromBasket(
		request: MsgTakeFromBasket
	): Promise<MsgTakeFromBasketResponse> {
		const data = MsgTakeFromBasket.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'TakeFromBasket',
			data
		);
		return promise.then((data) =>
			MsgTakeFromBasketResponse.decode(new _m0.Reader(data))
		);
	}

	PickFromBasket(
		request: MsgPickFromBasket
	): Promise<MsgPickFromBasketResponse> {
		const data = MsgPickFromBasket.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Msg',
			'PickFromBasket',
			data
		);
		return promise.then((data) =>
			MsgPickFromBasketResponse.decode(new _m0.Reader(data))
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
