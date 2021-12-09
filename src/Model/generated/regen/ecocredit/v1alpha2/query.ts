/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
	Params,
	ClassInfo,
	ProjectInfo,
	BatchInfo,
	SellOrder,
	BuyOrder,
	CreditType,
	AskDenom,
	BasketCriteria,
	BasketCredit,
} from '../../../regen/ecocredit/v1alpha2/types';
import {
	PageRequest,
	PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'regen.ecocredit.v1alpha2';

/** QueryParamsRequest is the Query/Params request type. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the Query/Params response type. */
export interface QueryParamsResponse {
	/** params defines the parameters of the ecocredit module. */
	params?: Params;
}

/** QueryClassesRequest is the Query/Classes request type. */
export interface QueryClassesRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryClassesResponse is the Query/Classes response type. */
export interface QueryClassesResponse {
	/** classes are the fetched credit classes. */
	classes: ClassInfo[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

/** QueryClassInfoRequest is the Query/ClassInfo request type. */
export interface QueryClassInfoRequest {
	/** class_id is the unique ID of credit class to query. */
	classId: string;
}

/** QueryClassInfoResponse is the Query/ClassInfo request type. */
export interface QueryClassInfoResponse {
	/** info is the ClassInfo for the credit class. */
	info?: ClassInfo;
}

/** QueryProjectsRequest is the Query/Projects request type. */
export interface QueryProjectsRequest {
	/** class_id is the unique ID of credit class to query. */
	classId: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryProjectsResponse is the Query/Projects response type. */
export interface QueryProjectsResponse {
	/** projects are the fetched projects. */
	projects: ProjectInfo[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

/** QueryProjectInfoRequest is the Query/Project request type. */
export interface QueryProjectInfoRequest {
	/** project_id is the unique ID of the project to query. */
	projectId: string;
}

/** QueryProjectInfoResponse is the Query/Project response type. */
export interface QueryProjectInfoResponse {
	/** info is the ProjectInfo for the project. */
	info?: ProjectInfo;
}

/** QueryBatchesRequest is the Query/Batches request type. */
export interface QueryBatchesRequest {
	/** project_id is the unique ID of the project to query. */
	projectId: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryBatchesResponse is the Query/Batches response type. */
export interface QueryBatchesResponse {
	/** batches are the fetched credit batches within the project. */
	batches: BatchInfo[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

/** QueryBatchInfoRequest is the Query/BatchInfo request type. */
export interface QueryBatchInfoRequest {
	/** batch_denom is the unique ID of credit batch to query. */
	batchDenom: string;
}

/** QueryBatchInfoResponse is the Query/BatchInfo response type. */
export interface QueryBatchInfoResponse {
	/** info is the BatchInfo for the credit batch. */
	info?: BatchInfo;
}

/** QueryBalanceRequest is the Query/Balance request type. */
export interface QueryBalanceRequest {
	/** account is the address of the account whose balance is being queried. */
	account: string;
	/** batch_denom is the unique ID of credit batch balance to query. */
	batchDenom: string;
}

/** QueryBalanceResponse is the Query/Balance response type. */
export interface QueryBalanceResponse {
	/** tradable_amount is the decimal number of tradable credits. */
	tradableAmount: string;
	/** retired_amount is the decimal number of retired credits. */
	retiredAmount: string;
}

/** QuerySupplyRequest is the Query/Supply request type. */
export interface QuerySupplyRequest {
	/** batch_denom is the unique ID of credit batch to query. */
	batchDenom: string;
}

/** QuerySupplyResponse is the Query/Supply response type. */
export interface QuerySupplyResponse {
	/**
	 * tradable_supply is the decimal number of tradable credits in the batch
	 * supply.
	 */
	tradableSupply: string;
	/**
	 * retired_supply is the decimal number of retired credits in the batch
	 * supply.
	 */
	retiredSupply: string;
}

/** QueryCreditTypesRequest is the Query/Credit_Types request type */
export interface QueryCreditTypesRequest {}

/** QueryCreditTypesRequest is the Query/Credit_Types response type */
export interface QueryCreditTypesResponse {
	/** list of credit types */
	creditTypes: CreditType[];
}

/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
	/** sell_order_id is the id of the requested sell order. */
	sellOrderId: Long;
}

/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
	/** sell_order contains all information related to a sell order. */
	sellOrder?: SellOrder;
}

/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
	/** sell_orders is a list of sell orders. */
	sellOrders: SellOrder[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

/** QuerySellOrdersByDenomRequest is the Query/SellOrdersByDenom request type. */
export interface QuerySellOrdersByBatchDenomRequest {
	/** batch_denom is an ecocredit denom */
	batchDenom: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QuerySellOrdersByDenomResponse is the Query/SellOrdersByDenom response type. */
export interface QuerySellOrdersByBatchDenomResponse {
	/** sell_orders is a list of sell orders. */
	sellOrders: SellOrder[];
	/** pagination defines an optional pagination for the response. */
	pagination?: PageResponse;
}

/** QuerySellOrdersByAddressRequest is the Query/SellOrdersByAddress request type. */
export interface QuerySellOrdersByAddressRequest {
	/** address is the creator of the sell order */
	address: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QuerySellOrdersByAddressResponse is the Query/SellOrdersByAddressResponse response type. */
export interface QuerySellOrdersByAddressResponse {
	/** sell_orders is a list of sell orders. */
	sellOrders: SellOrder[];
	/** pagination defines an optional pagination for the response. */
	pagination?: PageResponse;
}

/** QueryBuyOrderRequest is the Query/BuyOrder request type. */
export interface QueryBuyOrderRequest {
	/** buy_order_id is the id of the buy order. */
	buyOrderId: Long;
}

/** QueryBuyOrderResponse is the Query/BuyOrder response type. */
export interface QueryBuyOrderResponse {
	/** buy_order contains all information related to a buy order. */
	buyOrder?: BuyOrder;
}

/** QueryBuyOrdersRequest is the Query/BuyOrders request type. */
export interface QueryBuyOrdersRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryBuyOrdersResponse is the Query/BuyOrders response type. */
export interface QueryBuyOrdersResponse {
	/** buy_orders is a list of buy orders. */
	buyOrders: BuyOrder[];
	/** pagination defines an optional pagination for the response. */
	pagination?: PageResponse;
}

/** QueryBuyOrdersByAddressRequest is the Query/BuyOrdersByAddress request type */
export interface QueryBuyOrdersByAddressRequest {
	/** address of the buy order creator */
	address: string;
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryBuyOrdersByAddressResponse is the Query/BuyOrdersByAddress response type. */
export interface QueryBuyOrdersByAddressResponse {
	/** buy_orders is a list of buy orders. */
	buyOrders: BuyOrder[];
	/** pagination defines an optional pagination for the response. */
	pagination?: PageResponse;
}

/** QueryAllowedAskDenomsRequest is the Query/AllowedAskDenoms request type. */
export interface QueryAllowedAskDenomsRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryAllowedAskDenomsResponse is the Query/AllowedAskDenoms response type. */
export interface QueryAllowedAskDenomsResponse {
	/** ask_denoms is a list of coin denoms allowed to use in the ask price of sell orders. */
	askDenoms: AskDenom[];
	/** pagination defines an optional pagination for the response. */
	pagination?: PageResponse;
}

/** Basket defines a credit basket. */
export interface Basket {
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

/** QueryBasketRequest is the Query/Basket request type. */
export interface QueryBasketRequest {
	/** basket_denom represents the denom of the basket to query. */
	basketDenom: string;
}

/** QueryBasketResponse is the Query/Basket response type. */
export interface QueryBasketResponse {
	/** basket is the queried basket. */
	basket?: Basket;
}

/** QueryBasketsRequest is the Query/Baskets request type. */
export interface QueryBasketsRequest {
	/** pagination defines an optional pagination for the request. */
	pagination?: PageRequest;
}

/** QueryBasketsResponse is the Query/Baskets response type. */
export interface QueryBasketsResponse {
	/** baskets are the fetched baskets. */
	baskets: Basket[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

/** QueryBasketCreditsRequest is the Query/BasketCredits request type. */
export interface QueryBasketCreditsRequest {
	/** basket_denom is the basket denom to query credits for. */
	basketDenom: string;
}

/** QueryBasketCreditsResponse is the Query/BasketCredits response type. */
export interface QueryBasketCreditsResponse {
	/** credits are the credits inside the basket. */
	credits: BasketCredit[];
	/** pagination defines the pagination in the response. */
	pagination?: PageResponse;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
	encode(
		_: QueryParamsRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryParamsRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

	fromJSON(_: any): QueryParamsRequest {
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
		return message;
	},

	toJSON(_: QueryParamsRequest): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
		_: I
	): QueryParamsRequest {
		const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
		return message;
	},
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
	encode(
		message: QueryParamsResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.params !== undefined) {
			Params.encode(message.params, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryParamsResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.params = Params.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryParamsResponse {
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromJSON(object.params)
				: undefined;
		return message;
	},

	toJSON(message: QueryParamsResponse): unknown {
		const obj: any = {};
		message.params !== undefined &&
			(obj.params = message.params
				? Params.toJSON(message.params)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
		object: I
	): QueryParamsResponse {
		const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
		message.params =
			object.params !== undefined && object.params !== null
				? Params.fromPartial(object.params)
				: undefined;
		return message;
	},
};

const baseQueryClassesRequest: object = {};

export const QueryClassesRequest = {
	encode(
		message: QueryClassesRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryClassesRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryClassesRequest } as QueryClassesRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryClassesRequest {
		const message = { ...baseQueryClassesRequest } as QueryClassesRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryClassesRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryClassesRequest>, I>>(
		object: I
	): QueryClassesRequest {
		const message = { ...baseQueryClassesRequest } as QueryClassesRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryClassesResponse: object = {};

export const QueryClassesResponse = {
	encode(
		message: QueryClassesResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.classes) {
			ClassInfo.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryClassesResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryClassesResponse } as QueryClassesResponse;
		message.classes = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classes.push(
						ClassInfo.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryClassesResponse {
		const message = { ...baseQueryClassesResponse } as QueryClassesResponse;
		message.classes = (object.classes ?? []).map((e: any) =>
			ClassInfo.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryClassesResponse): unknown {
		const obj: any = {};
		if (message.classes) {
			obj.classes = message.classes.map((e) =>
				e ? ClassInfo.toJSON(e) : undefined
			);
		} else {
			obj.classes = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryClassesResponse>, I>>(
		object: I
	): QueryClassesResponse {
		const message = { ...baseQueryClassesResponse } as QueryClassesResponse;
		message.classes =
			object.classes?.map((e) => ClassInfo.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryClassInfoRequest: object = { classId: '' };

export const QueryClassInfoRequest = {
	encode(
		message: QueryClassInfoRequest,
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
	): QueryClassInfoRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryClassInfoRequest,
		} as QueryClassInfoRequest;
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

	fromJSON(object: any): QueryClassInfoRequest {
		const message = {
			...baseQueryClassInfoRequest,
		} as QueryClassInfoRequest;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		return message;
	},

	toJSON(message: QueryClassInfoRequest): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryClassInfoRequest>, I>>(
		object: I
	): QueryClassInfoRequest {
		const message = {
			...baseQueryClassInfoRequest,
		} as QueryClassInfoRequest;
		message.classId = object.classId ?? '';
		return message;
	},
};

const baseQueryClassInfoResponse: object = {};

export const QueryClassInfoResponse = {
	encode(
		message: QueryClassInfoResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.info !== undefined) {
			ClassInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryClassInfoResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryClassInfoResponse,
		} as QueryClassInfoResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.info = ClassInfo.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryClassInfoResponse {
		const message = {
			...baseQueryClassInfoResponse,
		} as QueryClassInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? ClassInfo.fromJSON(object.info)
				: undefined;
		return message;
	},

	toJSON(message: QueryClassInfoResponse): unknown {
		const obj: any = {};
		message.info !== undefined &&
			(obj.info = message.info
				? ClassInfo.toJSON(message.info)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryClassInfoResponse>, I>>(
		object: I
	): QueryClassInfoResponse {
		const message = {
			...baseQueryClassInfoResponse,
		} as QueryClassInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? ClassInfo.fromPartial(object.info)
				: undefined;
		return message;
	},
};

const baseQueryProjectsRequest: object = { classId: '' };

export const QueryProjectsRequest = {
	encode(
		message: QueryProjectsRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.classId !== '') {
			writer.uint32(10).string(message.classId);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryProjectsRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryProjectsRequest } as QueryProjectsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.classId = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryProjectsRequest {
		const message = { ...baseQueryProjectsRequest } as QueryProjectsRequest;
		message.classId =
			object.classId !== undefined && object.classId !== null
				? String(object.classId)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryProjectsRequest): unknown {
		const obj: any = {};
		message.classId !== undefined && (obj.classId = message.classId);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryProjectsRequest>, I>>(
		object: I
	): QueryProjectsRequest {
		const message = { ...baseQueryProjectsRequest } as QueryProjectsRequest;
		message.classId = object.classId ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryProjectsResponse: object = {};

export const QueryProjectsResponse = {
	encode(
		message: QueryProjectsResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.projects) {
			ProjectInfo.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryProjectsResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryProjectsResponse,
		} as QueryProjectsResponse;
		message.projects = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.projects.push(
						ProjectInfo.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryProjectsResponse {
		const message = {
			...baseQueryProjectsResponse,
		} as QueryProjectsResponse;
		message.projects = (object.projects ?? []).map((e: any) =>
			ProjectInfo.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryProjectsResponse): unknown {
		const obj: any = {};
		if (message.projects) {
			obj.projects = message.projects.map((e) =>
				e ? ProjectInfo.toJSON(e) : undefined
			);
		} else {
			obj.projects = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryProjectsResponse>, I>>(
		object: I
	): QueryProjectsResponse {
		const message = {
			...baseQueryProjectsResponse,
		} as QueryProjectsResponse;
		message.projects =
			object.projects?.map((e) => ProjectInfo.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryProjectInfoRequest: object = { projectId: '' };

export const QueryProjectInfoRequest = {
	encode(
		message: QueryProjectInfoRequest,
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
	): QueryProjectInfoRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryProjectInfoRequest,
		} as QueryProjectInfoRequest;
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

	fromJSON(object: any): QueryProjectInfoRequest {
		const message = {
			...baseQueryProjectInfoRequest,
		} as QueryProjectInfoRequest;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		return message;
	},

	toJSON(message: QueryProjectInfoRequest): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryProjectInfoRequest>, I>>(
		object: I
	): QueryProjectInfoRequest {
		const message = {
			...baseQueryProjectInfoRequest,
		} as QueryProjectInfoRequest;
		message.projectId = object.projectId ?? '';
		return message;
	},
};

const baseQueryProjectInfoResponse: object = {};

export const QueryProjectInfoResponse = {
	encode(
		message: QueryProjectInfoResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.info !== undefined) {
			ProjectInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryProjectInfoResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryProjectInfoResponse,
		} as QueryProjectInfoResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.info = ProjectInfo.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryProjectInfoResponse {
		const message = {
			...baseQueryProjectInfoResponse,
		} as QueryProjectInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? ProjectInfo.fromJSON(object.info)
				: undefined;
		return message;
	},

	toJSON(message: QueryProjectInfoResponse): unknown {
		const obj: any = {};
		message.info !== undefined &&
			(obj.info = message.info
				? ProjectInfo.toJSON(message.info)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryProjectInfoResponse>, I>>(
		object: I
	): QueryProjectInfoResponse {
		const message = {
			...baseQueryProjectInfoResponse,
		} as QueryProjectInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? ProjectInfo.fromPartial(object.info)
				: undefined;
		return message;
	},
};

const baseQueryBatchesRequest: object = { projectId: '' };

export const QueryBatchesRequest = {
	encode(
		message: QueryBatchesRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.projectId !== '') {
			writer.uint32(10).string(message.projectId);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBatchesRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBatchesRequest } as QueryBatchesRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.projectId = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryBatchesRequest {
		const message = { ...baseQueryBatchesRequest } as QueryBatchesRequest;
		message.projectId =
			object.projectId !== undefined && object.projectId !== null
				? String(object.projectId)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBatchesRequest): unknown {
		const obj: any = {};
		message.projectId !== undefined && (obj.projectId = message.projectId);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBatchesRequest>, I>>(
		object: I
	): QueryBatchesRequest {
		const message = { ...baseQueryBatchesRequest } as QueryBatchesRequest;
		message.projectId = object.projectId ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBatchesResponse: object = {};

export const QueryBatchesResponse = {
	encode(
		message: QueryBatchesResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.batches) {
			BatchInfo.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBatchesResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBatchesResponse } as QueryBatchesResponse;
		message.batches = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batches.push(
						BatchInfo.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryBatchesResponse {
		const message = { ...baseQueryBatchesResponse } as QueryBatchesResponse;
		message.batches = (object.batches ?? []).map((e: any) =>
			BatchInfo.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBatchesResponse): unknown {
		const obj: any = {};
		if (message.batches) {
			obj.batches = message.batches.map((e) =>
				e ? BatchInfo.toJSON(e) : undefined
			);
		} else {
			obj.batches = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBatchesResponse>, I>>(
		object: I
	): QueryBatchesResponse {
		const message = { ...baseQueryBatchesResponse } as QueryBatchesResponse;
		message.batches =
			object.batches?.map((e) => BatchInfo.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBatchInfoRequest: object = { batchDenom: '' };

export const QueryBatchInfoRequest = {
	encode(
		message: QueryBatchInfoRequest,
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
	): QueryBatchInfoRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBatchInfoRequest,
		} as QueryBatchInfoRequest;
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

	fromJSON(object: any): QueryBatchInfoRequest {
		const message = {
			...baseQueryBatchInfoRequest,
		} as QueryBatchInfoRequest;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		return message;
	},

	toJSON(message: QueryBatchInfoRequest): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBatchInfoRequest>, I>>(
		object: I
	): QueryBatchInfoRequest {
		const message = {
			...baseQueryBatchInfoRequest,
		} as QueryBatchInfoRequest;
		message.batchDenom = object.batchDenom ?? '';
		return message;
	},
};

const baseQueryBatchInfoResponse: object = {};

export const QueryBatchInfoResponse = {
	encode(
		message: QueryBatchInfoResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.info !== undefined) {
			BatchInfo.encode(message.info, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBatchInfoResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBatchInfoResponse,
		} as QueryBatchInfoResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.info = BatchInfo.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBatchInfoResponse {
		const message = {
			...baseQueryBatchInfoResponse,
		} as QueryBatchInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? BatchInfo.fromJSON(object.info)
				: undefined;
		return message;
	},

	toJSON(message: QueryBatchInfoResponse): unknown {
		const obj: any = {};
		message.info !== undefined &&
			(obj.info = message.info
				? BatchInfo.toJSON(message.info)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBatchInfoResponse>, I>>(
		object: I
	): QueryBatchInfoResponse {
		const message = {
			...baseQueryBatchInfoResponse,
		} as QueryBatchInfoResponse;
		message.info =
			object.info !== undefined && object.info !== null
				? BatchInfo.fromPartial(object.info)
				: undefined;
		return message;
	},
};

const baseQueryBalanceRequest: object = { account: '', batchDenom: '' };

export const QueryBalanceRequest = {
	encode(
		message: QueryBalanceRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.account !== '') {
			writer.uint32(10).string(message.account);
		}
		if (message.batchDenom !== '') {
			writer.uint32(18).string(message.batchDenom);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBalanceRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.account = reader.string();
					break;
				case 2:
					message.batchDenom = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBalanceRequest {
		const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
		message.account =
			object.account !== undefined && object.account !== null
				? String(object.account)
				: '';
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		return message;
	},

	toJSON(message: QueryBalanceRequest): unknown {
		const obj: any = {};
		message.account !== undefined && (obj.account = message.account);
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBalanceRequest>, I>>(
		object: I
	): QueryBalanceRequest {
		const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
		message.account = object.account ?? '';
		message.batchDenom = object.batchDenom ?? '';
		return message;
	},
};

const baseQueryBalanceResponse: object = {
	tradableAmount: '',
	retiredAmount: '',
};

export const QueryBalanceResponse = {
	encode(
		message: QueryBalanceResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.tradableAmount !== '') {
			writer.uint32(10).string(message.tradableAmount);
		}
		if (message.retiredAmount !== '') {
			writer.uint32(18).string(message.retiredAmount);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBalanceResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.tradableAmount = reader.string();
					break;
				case 2:
					message.retiredAmount = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBalanceResponse {
		const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
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

	toJSON(message: QueryBalanceResponse): unknown {
		const obj: any = {};
		message.tradableAmount !== undefined &&
			(obj.tradableAmount = message.tradableAmount);
		message.retiredAmount !== undefined &&
			(obj.retiredAmount = message.retiredAmount);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBalanceResponse>, I>>(
		object: I
	): QueryBalanceResponse {
		const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
		message.tradableAmount = object.tradableAmount ?? '';
		message.retiredAmount = object.retiredAmount ?? '';
		return message;
	},
};

const baseQuerySupplyRequest: object = { batchDenom: '' };

export const QuerySupplyRequest = {
	encode(
		message: QuerySupplyRequest,
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
	): QuerySupplyRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
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

	fromJSON(object: any): QuerySupplyRequest {
		const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		return message;
	},

	toJSON(message: QuerySupplyRequest): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySupplyRequest>, I>>(
		object: I
	): QuerySupplyRequest {
		const message = { ...baseQuerySupplyRequest } as QuerySupplyRequest;
		message.batchDenom = object.batchDenom ?? '';
		return message;
	},
};

const baseQuerySupplyResponse: object = {
	tradableSupply: '',
	retiredSupply: '',
};

export const QuerySupplyResponse = {
	encode(
		message: QuerySupplyResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.tradableSupply !== '') {
			writer.uint32(10).string(message.tradableSupply);
		}
		if (message.retiredSupply !== '') {
			writer.uint32(18).string(message.retiredSupply);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySupplyResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.tradableSupply = reader.string();
					break;
				case 2:
					message.retiredSupply = reader.string();
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QuerySupplyResponse {
		const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
		message.tradableSupply =
			object.tradableSupply !== undefined &&
			object.tradableSupply !== null
				? String(object.tradableSupply)
				: '';
		message.retiredSupply =
			object.retiredSupply !== undefined && object.retiredSupply !== null
				? String(object.retiredSupply)
				: '';
		return message;
	},

	toJSON(message: QuerySupplyResponse): unknown {
		const obj: any = {};
		message.tradableSupply !== undefined &&
			(obj.tradableSupply = message.tradableSupply);
		message.retiredSupply !== undefined &&
			(obj.retiredSupply = message.retiredSupply);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySupplyResponse>, I>>(
		object: I
	): QuerySupplyResponse {
		const message = { ...baseQuerySupplyResponse } as QuerySupplyResponse;
		message.tradableSupply = object.tradableSupply ?? '';
		message.retiredSupply = object.retiredSupply ?? '';
		return message;
	},
};

const baseQueryCreditTypesRequest: object = {};

export const QueryCreditTypesRequest = {
	encode(
		_: QueryCreditTypesRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryCreditTypesRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryCreditTypesRequest,
		} as QueryCreditTypesRequest;
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

	fromJSON(_: any): QueryCreditTypesRequest {
		const message = {
			...baseQueryCreditTypesRequest,
		} as QueryCreditTypesRequest;
		return message;
	},

	toJSON(_: QueryCreditTypesRequest): unknown {
		const obj: any = {};
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryCreditTypesRequest>, I>>(
		_: I
	): QueryCreditTypesRequest {
		const message = {
			...baseQueryCreditTypesRequest,
		} as QueryCreditTypesRequest;
		return message;
	},
};

const baseQueryCreditTypesResponse: object = {};

export const QueryCreditTypesResponse = {
	encode(
		message: QueryCreditTypesResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.creditTypes) {
			CreditType.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryCreditTypesResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryCreditTypesResponse,
		} as QueryCreditTypesResponse;
		message.creditTypes = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
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

	fromJSON(object: any): QueryCreditTypesResponse {
		const message = {
			...baseQueryCreditTypesResponse,
		} as QueryCreditTypesResponse;
		message.creditTypes = (object.creditTypes ?? []).map((e: any) =>
			CreditType.fromJSON(e)
		);
		return message;
	},

	toJSON(message: QueryCreditTypesResponse): unknown {
		const obj: any = {};
		if (message.creditTypes) {
			obj.creditTypes = message.creditTypes.map((e) =>
				e ? CreditType.toJSON(e) : undefined
			);
		} else {
			obj.creditTypes = [];
		}
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryCreditTypesResponse>, I>>(
		object: I
	): QueryCreditTypesResponse {
		const message = {
			...baseQueryCreditTypesResponse,
		} as QueryCreditTypesResponse;
		message.creditTypes =
			object.creditTypes?.map((e) => CreditType.fromPartial(e)) || [];
		return message;
	},
};

const baseQuerySellOrderRequest: object = { sellOrderId: Long.UZERO };

export const QuerySellOrderRequest = {
	encode(
		message: QuerySellOrderRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (!message.sellOrderId.isZero()) {
			writer.uint32(8).uint64(message.sellOrderId);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrderRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrderRequest,
		} as QuerySellOrderRequest;
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

	fromJSON(object: any): QuerySellOrderRequest {
		const message = {
			...baseQuerySellOrderRequest,
		} as QuerySellOrderRequest;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromString(object.sellOrderId)
				: Long.UZERO;
		return message;
	},

	toJSON(message: QuerySellOrderRequest): unknown {
		const obj: any = {};
		message.sellOrderId !== undefined &&
			(obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySellOrderRequest>, I>>(
		object: I
	): QuerySellOrderRequest {
		const message = {
			...baseQuerySellOrderRequest,
		} as QuerySellOrderRequest;
		message.sellOrderId =
			object.sellOrderId !== undefined && object.sellOrderId !== null
				? Long.fromValue(object.sellOrderId)
				: Long.UZERO;
		return message;
	},
};

const baseQuerySellOrderResponse: object = {};

export const QuerySellOrderResponse = {
	encode(
		message: QuerySellOrderResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sellOrder !== undefined) {
			SellOrder.encode(
				message.sellOrder,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrderResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrderResponse,
		} as QuerySellOrderResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrder = SellOrder.decode(
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

	fromJSON(object: any): QuerySellOrderResponse {
		const message = {
			...baseQuerySellOrderResponse,
		} as QuerySellOrderResponse;
		message.sellOrder =
			object.sellOrder !== undefined && object.sellOrder !== null
				? SellOrder.fromJSON(object.sellOrder)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrderResponse): unknown {
		const obj: any = {};
		message.sellOrder !== undefined &&
			(obj.sellOrder = message.sellOrder
				? SellOrder.toJSON(message.sellOrder)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySellOrderResponse>, I>>(
		object: I
	): QuerySellOrderResponse {
		const message = {
			...baseQuerySellOrderResponse,
		} as QuerySellOrderResponse;
		message.sellOrder =
			object.sellOrder !== undefined && object.sellOrder !== null
				? SellOrder.fromPartial(object.sellOrder)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersRequest: object = {};

export const QuerySellOrdersRequest = {
	encode(
		message: QuerySellOrdersRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersRequest,
		} as QuerySellOrdersRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QuerySellOrdersRequest {
		const message = {
			...baseQuerySellOrdersRequest,
		} as QuerySellOrdersRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySellOrdersRequest>, I>>(
		object: I
	): QuerySellOrdersRequest {
		const message = {
			...baseQuerySellOrdersRequest,
		} as QuerySellOrdersRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersResponse: object = {};

export const QuerySellOrdersResponse = {
	encode(
		message: QuerySellOrdersResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.sellOrders) {
			SellOrder.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersResponse,
		} as QuerySellOrdersResponse;
		message.sellOrders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrders.push(
						SellOrder.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QuerySellOrdersResponse {
		const message = {
			...baseQuerySellOrdersResponse,
		} as QuerySellOrdersResponse;
		message.sellOrders = (object.sellOrders ?? []).map((e: any) =>
			SellOrder.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersResponse): unknown {
		const obj: any = {};
		if (message.sellOrders) {
			obj.sellOrders = message.sellOrders.map((e) =>
				e ? SellOrder.toJSON(e) : undefined
			);
		} else {
			obj.sellOrders = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QuerySellOrdersResponse>, I>>(
		object: I
	): QuerySellOrdersResponse {
		const message = {
			...baseQuerySellOrdersResponse,
		} as QuerySellOrdersResponse;
		message.sellOrders =
			object.sellOrders?.map((e) => SellOrder.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersByBatchDenomRequest: object = { batchDenom: '' };

export const QuerySellOrdersByBatchDenomRequest = {
	encode(
		message: QuerySellOrdersByBatchDenomRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.batchDenom !== '') {
			writer.uint32(10).string(message.batchDenom);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersByBatchDenomRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersByBatchDenomRequest,
		} as QuerySellOrdersByBatchDenomRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.batchDenom = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QuerySellOrdersByBatchDenomRequest {
		const message = {
			...baseQuerySellOrdersByBatchDenomRequest,
		} as QuerySellOrdersByBatchDenomRequest;
		message.batchDenom =
			object.batchDenom !== undefined && object.batchDenom !== null
				? String(object.batchDenom)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersByBatchDenomRequest): unknown {
		const obj: any = {};
		message.batchDenom !== undefined &&
			(obj.batchDenom = message.batchDenom);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QuerySellOrdersByBatchDenomRequest>, I>
	>(object: I): QuerySellOrdersByBatchDenomRequest {
		const message = {
			...baseQuerySellOrdersByBatchDenomRequest,
		} as QuerySellOrdersByBatchDenomRequest;
		message.batchDenom = object.batchDenom ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersByBatchDenomResponse: object = {};

export const QuerySellOrdersByBatchDenomResponse = {
	encode(
		message: QuerySellOrdersByBatchDenomResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.sellOrders) {
			SellOrder.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersByBatchDenomResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersByBatchDenomResponse,
		} as QuerySellOrdersByBatchDenomResponse;
		message.sellOrders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrders.push(
						SellOrder.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QuerySellOrdersByBatchDenomResponse {
		const message = {
			...baseQuerySellOrdersByBatchDenomResponse,
		} as QuerySellOrdersByBatchDenomResponse;
		message.sellOrders = (object.sellOrders ?? []).map((e: any) =>
			SellOrder.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersByBatchDenomResponse): unknown {
		const obj: any = {};
		if (message.sellOrders) {
			obj.sellOrders = message.sellOrders.map((e) =>
				e ? SellOrder.toJSON(e) : undefined
			);
		} else {
			obj.sellOrders = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QuerySellOrdersByBatchDenomResponse>, I>
	>(object: I): QuerySellOrdersByBatchDenomResponse {
		const message = {
			...baseQuerySellOrdersByBatchDenomResponse,
		} as QuerySellOrdersByBatchDenomResponse;
		message.sellOrders =
			object.sellOrders?.map((e) => SellOrder.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersByAddressRequest: object = { address: '' };

export const QuerySellOrdersByAddressRequest = {
	encode(
		message: QuerySellOrdersByAddressRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersByAddressRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersByAddressRequest,
		} as QuerySellOrdersByAddressRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QuerySellOrdersByAddressRequest {
		const message = {
			...baseQuerySellOrdersByAddressRequest,
		} as QuerySellOrdersByAddressRequest;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersByAddressRequest): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QuerySellOrdersByAddressRequest>, I>
	>(object: I): QuerySellOrdersByAddressRequest {
		const message = {
			...baseQuerySellOrdersByAddressRequest,
		} as QuerySellOrdersByAddressRequest;
		message.address = object.address ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQuerySellOrdersByAddressResponse: object = {};

export const QuerySellOrdersByAddressResponse = {
	encode(
		message: QuerySellOrdersByAddressResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.sellOrders) {
			SellOrder.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QuerySellOrdersByAddressResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQuerySellOrdersByAddressResponse,
		} as QuerySellOrdersByAddressResponse;
		message.sellOrders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.sellOrders.push(
						SellOrder.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QuerySellOrdersByAddressResponse {
		const message = {
			...baseQuerySellOrdersByAddressResponse,
		} as QuerySellOrdersByAddressResponse;
		message.sellOrders = (object.sellOrders ?? []).map((e: any) =>
			SellOrder.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QuerySellOrdersByAddressResponse): unknown {
		const obj: any = {};
		if (message.sellOrders) {
			obj.sellOrders = message.sellOrders.map((e) =>
				e ? SellOrder.toJSON(e) : undefined
			);
		} else {
			obj.sellOrders = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QuerySellOrdersByAddressResponse>, I>
	>(object: I): QuerySellOrdersByAddressResponse {
		const message = {
			...baseQuerySellOrdersByAddressResponse,
		} as QuerySellOrdersByAddressResponse;
		message.sellOrders =
			object.sellOrders?.map((e) => SellOrder.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBuyOrderRequest: object = { buyOrderId: Long.UZERO };

export const QueryBuyOrderRequest = {
	encode(
		message: QueryBuyOrderRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (!message.buyOrderId.isZero()) {
			writer.uint32(8).uint64(message.buyOrderId);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrderRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBuyOrderRequest } as QueryBuyOrderRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrderId = reader.uint64() as Long;
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBuyOrderRequest {
		const message = { ...baseQueryBuyOrderRequest } as QueryBuyOrderRequest;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromString(object.buyOrderId)
				: Long.UZERO;
		return message;
	},

	toJSON(message: QueryBuyOrderRequest): unknown {
		const obj: any = {};
		message.buyOrderId !== undefined &&
			(obj.buyOrderId = (message.buyOrderId || Long.UZERO).toString());
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBuyOrderRequest>, I>>(
		object: I
	): QueryBuyOrderRequest {
		const message = { ...baseQueryBuyOrderRequest } as QueryBuyOrderRequest;
		message.buyOrderId =
			object.buyOrderId !== undefined && object.buyOrderId !== null
				? Long.fromValue(object.buyOrderId)
				: Long.UZERO;
		return message;
	},
};

const baseQueryBuyOrderResponse: object = {};

export const QueryBuyOrderResponse = {
	encode(
		message: QueryBuyOrderResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.buyOrder !== undefined) {
			BuyOrder.encode(
				message.buyOrder,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrderResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBuyOrderResponse,
		} as QueryBuyOrderResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrder = BuyOrder.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBuyOrderResponse {
		const message = {
			...baseQueryBuyOrderResponse,
		} as QueryBuyOrderResponse;
		message.buyOrder =
			object.buyOrder !== undefined && object.buyOrder !== null
				? BuyOrder.fromJSON(object.buyOrder)
				: undefined;
		return message;
	},

	toJSON(message: QueryBuyOrderResponse): unknown {
		const obj: any = {};
		message.buyOrder !== undefined &&
			(obj.buyOrder = message.buyOrder
				? BuyOrder.toJSON(message.buyOrder)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBuyOrderResponse>, I>>(
		object: I
	): QueryBuyOrderResponse {
		const message = {
			...baseQueryBuyOrderResponse,
		} as QueryBuyOrderResponse;
		message.buyOrder =
			object.buyOrder !== undefined && object.buyOrder !== null
				? BuyOrder.fromPartial(object.buyOrder)
				: undefined;
		return message;
	},
};

const baseQueryBuyOrdersRequest: object = {};

export const QueryBuyOrdersRequest = {
	encode(
		message: QueryBuyOrdersRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrdersRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBuyOrdersRequest,
		} as QueryBuyOrdersRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryBuyOrdersRequest {
		const message = {
			...baseQueryBuyOrdersRequest,
		} as QueryBuyOrdersRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBuyOrdersRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBuyOrdersRequest>, I>>(
		object: I
	): QueryBuyOrdersRequest {
		const message = {
			...baseQueryBuyOrdersRequest,
		} as QueryBuyOrdersRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBuyOrdersResponse: object = {};

export const QueryBuyOrdersResponse = {
	encode(
		message: QueryBuyOrdersResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.buyOrders) {
			BuyOrder.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrdersResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBuyOrdersResponse,
		} as QueryBuyOrdersResponse;
		message.buyOrders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrders.push(
						BuyOrder.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryBuyOrdersResponse {
		const message = {
			...baseQueryBuyOrdersResponse,
		} as QueryBuyOrdersResponse;
		message.buyOrders = (object.buyOrders ?? []).map((e: any) =>
			BuyOrder.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBuyOrdersResponse): unknown {
		const obj: any = {};
		if (message.buyOrders) {
			obj.buyOrders = message.buyOrders.map((e) =>
				e ? BuyOrder.toJSON(e) : undefined
			);
		} else {
			obj.buyOrders = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBuyOrdersResponse>, I>>(
		object: I
	): QueryBuyOrdersResponse {
		const message = {
			...baseQueryBuyOrdersResponse,
		} as QueryBuyOrdersResponse;
		message.buyOrders =
			object.buyOrders?.map((e) => BuyOrder.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBuyOrdersByAddressRequest: object = { address: '' };

export const QueryBuyOrdersByAddressRequest = {
	encode(
		message: QueryBuyOrdersByAddressRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.address !== '') {
			writer.uint32(10).string(message.address);
		}
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrdersByAddressRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBuyOrdersByAddressRequest,
		} as QueryBuyOrdersByAddressRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.address = reader.string();
					break;
				case 2:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryBuyOrdersByAddressRequest {
		const message = {
			...baseQueryBuyOrdersByAddressRequest,
		} as QueryBuyOrdersByAddressRequest;
		message.address =
			object.address !== undefined && object.address !== null
				? String(object.address)
				: '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBuyOrdersByAddressRequest): unknown {
		const obj: any = {};
		message.address !== undefined && (obj.address = message.address);
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QueryBuyOrdersByAddressRequest>, I>
	>(object: I): QueryBuyOrdersByAddressRequest {
		const message = {
			...baseQueryBuyOrdersByAddressRequest,
		} as QueryBuyOrdersByAddressRequest;
		message.address = object.address ?? '';
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBuyOrdersByAddressResponse: object = {};

export const QueryBuyOrdersByAddressResponse = {
	encode(
		message: QueryBuyOrdersByAddressResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.buyOrders) {
			BuyOrder.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBuyOrdersByAddressResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBuyOrdersByAddressResponse,
		} as QueryBuyOrdersByAddressResponse;
		message.buyOrders = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.buyOrders.push(
						BuyOrder.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryBuyOrdersByAddressResponse {
		const message = {
			...baseQueryBuyOrdersByAddressResponse,
		} as QueryBuyOrdersByAddressResponse;
		message.buyOrders = (object.buyOrders ?? []).map((e: any) =>
			BuyOrder.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBuyOrdersByAddressResponse): unknown {
		const obj: any = {};
		if (message.buyOrders) {
			obj.buyOrders = message.buyOrders.map((e) =>
				e ? BuyOrder.toJSON(e) : undefined
			);
		} else {
			obj.buyOrders = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<
		I extends Exact<DeepPartial<QueryBuyOrdersByAddressResponse>, I>
	>(object: I): QueryBuyOrdersByAddressResponse {
		const message = {
			...baseQueryBuyOrdersByAddressResponse,
		} as QueryBuyOrdersByAddressResponse;
		message.buyOrders =
			object.buyOrders?.map((e) => BuyOrder.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryAllowedAskDenomsRequest: object = {};

export const QueryAllowedAskDenomsRequest = {
	encode(
		message: QueryAllowedAskDenomsRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryAllowedAskDenomsRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryAllowedAskDenomsRequest,
		} as QueryAllowedAskDenomsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryAllowedAskDenomsRequest {
		const message = {
			...baseQueryAllowedAskDenomsRequest,
		} as QueryAllowedAskDenomsRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryAllowedAskDenomsRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllowedAskDenomsRequest>, I>>(
		object: I
	): QueryAllowedAskDenomsRequest {
		const message = {
			...baseQueryAllowedAskDenomsRequest,
		} as QueryAllowedAskDenomsRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryAllowedAskDenomsResponse: object = {};

export const QueryAllowedAskDenomsResponse = {
	encode(
		message: QueryAllowedAskDenomsResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.askDenoms) {
			AskDenom.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryAllowedAskDenomsResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryAllowedAskDenomsResponse,
		} as QueryAllowedAskDenomsResponse;
		message.askDenoms = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.askDenoms.push(
						AskDenom.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryAllowedAskDenomsResponse {
		const message = {
			...baseQueryAllowedAskDenomsResponse,
		} as QueryAllowedAskDenomsResponse;
		message.askDenoms = (object.askDenoms ?? []).map((e: any) =>
			AskDenom.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryAllowedAskDenomsResponse): unknown {
		const obj: any = {};
		if (message.askDenoms) {
			obj.askDenoms = message.askDenoms.map((e) =>
				e ? AskDenom.toJSON(e) : undefined
			);
		} else {
			obj.askDenoms = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryAllowedAskDenomsResponse>, I>>(
		object: I
	): QueryAllowedAskDenomsResponse {
		const message = {
			...baseQueryAllowedAskDenomsResponse,
		} as QueryAllowedAskDenomsResponse;
		message.askDenoms =
			object.askDenoms?.map((e) => AskDenom.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseBasket: object = {
	curator: '',
	name: '',
	displayName: '',
	exponent: 0,
	disableAutoRetire: false,
	allowPicking: false,
};

export const Basket = {
	encode(
		message: Basket,
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

	decode(input: _m0.Reader | Uint8Array, length?: number): Basket {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseBasket } as Basket;
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

	fromJSON(object: any): Basket {
		const message = { ...baseBasket } as Basket;
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

	toJSON(message: Basket): unknown {
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

	fromPartial<I extends Exact<DeepPartial<Basket>, I>>(object: I): Basket {
		const message = { ...baseBasket } as Basket;
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

const baseQueryBasketRequest: object = { basketDenom: '' };

export const QueryBasketRequest = {
	encode(
		message: QueryBasketRequest,
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
	): QueryBasketRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBasketRequest } as QueryBasketRequest;
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

	fromJSON(object: any): QueryBasketRequest {
		const message = { ...baseQueryBasketRequest } as QueryBasketRequest;
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		return message;
	},

	toJSON(message: QueryBasketRequest): unknown {
		const obj: any = {};
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketRequest>, I>>(
		object: I
	): QueryBasketRequest {
		const message = { ...baseQueryBasketRequest } as QueryBasketRequest;
		message.basketDenom = object.basketDenom ?? '';
		return message;
	},
};

const baseQueryBasketResponse: object = {};

export const QueryBasketResponse = {
	encode(
		message: QueryBasketResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.basket !== undefined) {
			Basket.encode(message.basket, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBasketResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBasketResponse } as QueryBasketResponse;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.basket = Basket.decode(reader, reader.uint32());
					break;
				default:
					reader.skipType(tag & 7);
					break;
			}
		}
		return message;
	},

	fromJSON(object: any): QueryBasketResponse {
		const message = { ...baseQueryBasketResponse } as QueryBasketResponse;
		message.basket =
			object.basket !== undefined && object.basket !== null
				? Basket.fromJSON(object.basket)
				: undefined;
		return message;
	},

	toJSON(message: QueryBasketResponse): unknown {
		const obj: any = {};
		message.basket !== undefined &&
			(obj.basket = message.basket
				? Basket.toJSON(message.basket)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketResponse>, I>>(
		object: I
	): QueryBasketResponse {
		const message = { ...baseQueryBasketResponse } as QueryBasketResponse;
		message.basket =
			object.basket !== undefined && object.basket !== null
				? Basket.fromPartial(object.basket)
				: undefined;
		return message;
	},
};

const baseQueryBasketsRequest: object = {};

export const QueryBasketsRequest = {
	encode(
		message: QueryBasketsRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.pagination !== undefined) {
			PageRequest.encode(
				message.pagination,
				writer.uint32(10).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBasketsRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBasketsRequest } as QueryBasketsRequest;
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.pagination = PageRequest.decode(
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

	fromJSON(object: any): QueryBasketsRequest {
		const message = { ...baseQueryBasketsRequest } as QueryBasketsRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBasketsRequest): unknown {
		const obj: any = {};
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageRequest.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketsRequest>, I>>(
		object: I
	): QueryBasketsRequest {
		const message = { ...baseQueryBasketsRequest } as QueryBasketsRequest;
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageRequest.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBasketsResponse: object = {};

export const QueryBasketsResponse = {
	encode(
		message: QueryBasketsResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.baskets) {
			Basket.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBasketsResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = { ...baseQueryBasketsResponse } as QueryBasketsResponse;
		message.baskets = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.baskets.push(
						Basket.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryBasketsResponse {
		const message = { ...baseQueryBasketsResponse } as QueryBasketsResponse;
		message.baskets = (object.baskets ?? []).map((e: any) =>
			Basket.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBasketsResponse): unknown {
		const obj: any = {};
		if (message.baskets) {
			obj.baskets = message.baskets.map((e) =>
				e ? Basket.toJSON(e) : undefined
			);
		} else {
			obj.baskets = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketsResponse>, I>>(
		object: I
	): QueryBasketsResponse {
		const message = { ...baseQueryBasketsResponse } as QueryBasketsResponse;
		message.baskets =
			object.baskets?.map((e) => Basket.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

const baseQueryBasketCreditsRequest: object = { basketDenom: '' };

export const QueryBasketCreditsRequest = {
	encode(
		message: QueryBasketCreditsRequest,
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
	): QueryBasketCreditsRequest {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBasketCreditsRequest,
		} as QueryBasketCreditsRequest;
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

	fromJSON(object: any): QueryBasketCreditsRequest {
		const message = {
			...baseQueryBasketCreditsRequest,
		} as QueryBasketCreditsRequest;
		message.basketDenom =
			object.basketDenom !== undefined && object.basketDenom !== null
				? String(object.basketDenom)
				: '';
		return message;
	},

	toJSON(message: QueryBasketCreditsRequest): unknown {
		const obj: any = {};
		message.basketDenom !== undefined &&
			(obj.basketDenom = message.basketDenom);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketCreditsRequest>, I>>(
		object: I
	): QueryBasketCreditsRequest {
		const message = {
			...baseQueryBasketCreditsRequest,
		} as QueryBasketCreditsRequest;
		message.basketDenom = object.basketDenom ?? '';
		return message;
	},
};

const baseQueryBasketCreditsResponse: object = {};

export const QueryBasketCreditsResponse = {
	encode(
		message: QueryBasketCreditsResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.credits) {
			BasketCredit.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		if (message.pagination !== undefined) {
			PageResponse.encode(
				message.pagination,
				writer.uint32(18).fork()
			).ldelim();
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): QueryBasketCreditsResponse {
		const reader =
			input instanceof _m0.Reader ? input : new _m0.Reader(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = {
			...baseQueryBasketCreditsResponse,
		} as QueryBasketCreditsResponse;
		message.credits = [];
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					message.credits.push(
						BasketCredit.decode(reader, reader.uint32())
					);
					break;
				case 2:
					message.pagination = PageResponse.decode(
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

	fromJSON(object: any): QueryBasketCreditsResponse {
		const message = {
			...baseQueryBasketCreditsResponse,
		} as QueryBasketCreditsResponse;
		message.credits = (object.credits ?? []).map((e: any) =>
			BasketCredit.fromJSON(e)
		);
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromJSON(object.pagination)
				: undefined;
		return message;
	},

	toJSON(message: QueryBasketCreditsResponse): unknown {
		const obj: any = {};
		if (message.credits) {
			obj.credits = message.credits.map((e) =>
				e ? BasketCredit.toJSON(e) : undefined
			);
		} else {
			obj.credits = [];
		}
		message.pagination !== undefined &&
			(obj.pagination = message.pagination
				? PageResponse.toJSON(message.pagination)
				: undefined);
		return obj;
	},

	fromPartial<I extends Exact<DeepPartial<QueryBasketCreditsResponse>, I>>(
		object: I
	): QueryBasketCreditsResponse {
		const message = {
			...baseQueryBasketCreditsResponse,
		} as QueryBasketCreditsResponse;
		message.credits =
			object.credits?.map((e) => BasketCredit.fromPartial(e)) || [];
		message.pagination =
			object.pagination !== undefined && object.pagination !== null
				? PageResponse.fromPartial(object.pagination)
				: undefined;
		return message;
	},
};

/** Msg is the regen.ecocredit.v1alpha2 Query service. */
export interface Query {
	/** Classes queries for all credit classes with pagination. */
	Classes(request: QueryClassesRequest): Promise<QueryClassesResponse>;
	/** ClassInfo queries for information on a credit class. */
	ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse>;
	/** Projects queries for all projects within a class with pagination. */
	Projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse>;
	/** ClassInfo queries for information on a project. */
	ProjectInfo(
		request: QueryProjectInfoRequest
	): Promise<QueryProjectInfoResponse>;
	/** Batches queries for all batches in the given project with pagination. */
	Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse>;
	/** BatchInfo queries for information on a credit batch. */
	BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse>;
	/**
	 * Balance queries the balance (both tradable and retired) of a given credit
	 * batch for a given account.
	 */
	Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
	/** Supply queries the tradable and retired supply of a credit batch. */
	Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse>;
	/**
	 * CreditTypes returns the list of allowed types that credit classes can have.
	 * See Types/CreditType for more details.
	 */
	CreditTypes(
		request: QueryCreditTypesRequest
	): Promise<QueryCreditTypesResponse>;
	/** Params queries the ecocredit module parameters. */
	Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
	/** SellOrder queries a sell order by its ID */
	SellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse>;
	/** SellOrders queries a paginated list of all sell orders */
	SellOrders(
		request: QuerySellOrdersRequest
	): Promise<QuerySellOrdersResponse>;
	/** SellOrdersByDenom queries a paginated list of all sell orders of a specific ecocredit denom */
	SellOrdersByBatchDenom(
		request: QuerySellOrdersByBatchDenomRequest
	): Promise<QuerySellOrdersByBatchDenomResponse>;
	/** SellOrdersByAddress queries a paginated list of all sell orders from a specific address */
	SellOrdersByAddress(
		request: QuerySellOrdersByAddressRequest
	): Promise<QuerySellOrdersByAddressResponse>;
	/** BuyOrder queries a buy order by its id */
	BuyOrder(request: QueryBuyOrderRequest): Promise<QueryBuyOrderResponse>;
	/** BuyOrders queries a paginated list of all buy orders */
	BuyOrders(request: QueryBuyOrdersRequest): Promise<QueryBuyOrdersResponse>;
	/** BuyOrdersByAddress queries a paginated list of buy orders by creator address */
	BuyOrdersByAddress(
		request: QueryBuyOrdersByAddressRequest
	): Promise<QueryBuyOrdersByAddressResponse>;
	/** AllowedAskDenoms queries all denoms allowed to be set in the AskPrice of a sell order */
	AllowedAskDenoms(
		request: QueryAllowedAskDenomsRequest
	): Promise<QueryAllowedAskDenomsResponse>;
	/** Basket queries one basket by denom. */
	Basket(request: QueryBasketRequest): Promise<QueryBasketResponse>;
	/** Baskets lists all baskets in the ecocredit module. */
	Baskets(request: QueryBasketsRequest): Promise<QueryBasketsResponse>;
	/** BasketCredits lists all ecocredits inside a given basket. */
	BasketCredits(
		request: QueryBasketCreditsRequest
	): Promise<QueryBasketCreditsResponse>;
}

export class QueryClientImpl implements Query {
	private readonly rpc: Rpc;
	constructor(rpc: Rpc) {
		this.rpc = rpc;
		this.Classes = this.Classes.bind(this);
		this.ClassInfo = this.ClassInfo.bind(this);
		this.Projects = this.Projects.bind(this);
		this.ProjectInfo = this.ProjectInfo.bind(this);
		this.Batches = this.Batches.bind(this);
		this.BatchInfo = this.BatchInfo.bind(this);
		this.Balance = this.Balance.bind(this);
		this.Supply = this.Supply.bind(this);
		this.CreditTypes = this.CreditTypes.bind(this);
		this.Params = this.Params.bind(this);
		this.SellOrder = this.SellOrder.bind(this);
		this.SellOrders = this.SellOrders.bind(this);
		this.SellOrdersByBatchDenom = this.SellOrdersByBatchDenom.bind(this);
		this.SellOrdersByAddress = this.SellOrdersByAddress.bind(this);
		this.BuyOrder = this.BuyOrder.bind(this);
		this.BuyOrders = this.BuyOrders.bind(this);
		this.BuyOrdersByAddress = this.BuyOrdersByAddress.bind(this);
		this.AllowedAskDenoms = this.AllowedAskDenoms.bind(this);
		this.Basket = this.Basket.bind(this);
		this.Baskets = this.Baskets.bind(this);
		this.BasketCredits = this.BasketCredits.bind(this);
	}
	Classes(request: QueryClassesRequest): Promise<QueryClassesResponse> {
		const data = QueryClassesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Classes',
			data
		);
		return promise.then((data) =>
			QueryClassesResponse.decode(new _m0.Reader(data))
		);
	}

	ClassInfo(request: QueryClassInfoRequest): Promise<QueryClassInfoResponse> {
		const data = QueryClassInfoRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'ClassInfo',
			data
		);
		return promise.then((data) =>
			QueryClassInfoResponse.decode(new _m0.Reader(data))
		);
	}

	Projects(request: QueryProjectsRequest): Promise<QueryProjectsResponse> {
		const data = QueryProjectsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Projects',
			data
		);
		return promise.then((data) =>
			QueryProjectsResponse.decode(new _m0.Reader(data))
		);
	}

	ProjectInfo(
		request: QueryProjectInfoRequest
	): Promise<QueryProjectInfoResponse> {
		const data = QueryProjectInfoRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'ProjectInfo',
			data
		);
		return promise.then((data) =>
			QueryProjectInfoResponse.decode(new _m0.Reader(data))
		);
	}

	Batches(request: QueryBatchesRequest): Promise<QueryBatchesResponse> {
		const data = QueryBatchesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Batches',
			data
		);
		return promise.then((data) =>
			QueryBatchesResponse.decode(new _m0.Reader(data))
		);
	}

	BatchInfo(request: QueryBatchInfoRequest): Promise<QueryBatchInfoResponse> {
		const data = QueryBatchInfoRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'BatchInfo',
			data
		);
		return promise.then((data) =>
			QueryBatchInfoResponse.decode(new _m0.Reader(data))
		);
	}

	Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
		const data = QueryBalanceRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Balance',
			data
		);
		return promise.then((data) =>
			QueryBalanceResponse.decode(new _m0.Reader(data))
		);
	}

	Supply(request: QuerySupplyRequest): Promise<QuerySupplyResponse> {
		const data = QuerySupplyRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Supply',
			data
		);
		return promise.then((data) =>
			QuerySupplyResponse.decode(new _m0.Reader(data))
		);
	}

	CreditTypes(
		request: QueryCreditTypesRequest
	): Promise<QueryCreditTypesResponse> {
		const data = QueryCreditTypesRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'CreditTypes',
			data
		);
		return promise.then((data) =>
			QueryCreditTypesResponse.decode(new _m0.Reader(data))
		);
	}

	Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
		const data = QueryParamsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Params',
			data
		);
		return promise.then((data) =>
			QueryParamsResponse.decode(new _m0.Reader(data))
		);
	}

	SellOrder(request: QuerySellOrderRequest): Promise<QuerySellOrderResponse> {
		const data = QuerySellOrderRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'SellOrder',
			data
		);
		return promise.then((data) =>
			QuerySellOrderResponse.decode(new _m0.Reader(data))
		);
	}

	SellOrders(
		request: QuerySellOrdersRequest
	): Promise<QuerySellOrdersResponse> {
		const data = QuerySellOrdersRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'SellOrders',
			data
		);
		return promise.then((data) =>
			QuerySellOrdersResponse.decode(new _m0.Reader(data))
		);
	}

	SellOrdersByBatchDenom(
		request: QuerySellOrdersByBatchDenomRequest
	): Promise<QuerySellOrdersByBatchDenomResponse> {
		const data =
			QuerySellOrdersByBatchDenomRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'SellOrdersByBatchDenom',
			data
		);
		return promise.then((data) =>
			QuerySellOrdersByBatchDenomResponse.decode(new _m0.Reader(data))
		);
	}

	SellOrdersByAddress(
		request: QuerySellOrdersByAddressRequest
	): Promise<QuerySellOrdersByAddressResponse> {
		const data = QuerySellOrdersByAddressRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'SellOrdersByAddress',
			data
		);
		return promise.then((data) =>
			QuerySellOrdersByAddressResponse.decode(new _m0.Reader(data))
		);
	}

	BuyOrder(request: QueryBuyOrderRequest): Promise<QueryBuyOrderResponse> {
		const data = QueryBuyOrderRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'BuyOrder',
			data
		);
		return promise.then((data) =>
			QueryBuyOrderResponse.decode(new _m0.Reader(data))
		);
	}

	BuyOrders(request: QueryBuyOrdersRequest): Promise<QueryBuyOrdersResponse> {
		const data = QueryBuyOrdersRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'BuyOrders',
			data
		);
		return promise.then((data) =>
			QueryBuyOrdersResponse.decode(new _m0.Reader(data))
		);
	}

	BuyOrdersByAddress(
		request: QueryBuyOrdersByAddressRequest
	): Promise<QueryBuyOrdersByAddressResponse> {
		const data = QueryBuyOrdersByAddressRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'BuyOrdersByAddress',
			data
		);
		return promise.then((data) =>
			QueryBuyOrdersByAddressResponse.decode(new _m0.Reader(data))
		);
	}

	AllowedAskDenoms(
		request: QueryAllowedAskDenomsRequest
	): Promise<QueryAllowedAskDenomsResponse> {
		const data = QueryAllowedAskDenomsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'AllowedAskDenoms',
			data
		);
		return promise.then((data) =>
			QueryAllowedAskDenomsResponse.decode(new _m0.Reader(data))
		);
	}

	Basket(request: QueryBasketRequest): Promise<QueryBasketResponse> {
		const data = QueryBasketRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Basket',
			data
		);
		return promise.then((data) =>
			QueryBasketResponse.decode(new _m0.Reader(data))
		);
	}

	Baskets(request: QueryBasketsRequest): Promise<QueryBasketsResponse> {
		const data = QueryBasketsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'Baskets',
			data
		);
		return promise.then((data) =>
			QueryBasketsResponse.decode(new _m0.Reader(data))
		);
	}

	BasketCredits(
		request: QueryBasketCreditsRequest
	): Promise<QueryBasketCreditsResponse> {
		const data = QueryBasketCreditsRequest.encode(request).finish();
		const promise = this.rpc.request(
			'regen.ecocredit.v1alpha2.Query',
			'BasketCredits',
			data
		);
		return promise.then((data) =>
			QueryBasketCreditsResponse.decode(new _m0.Reader(data))
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

if (_m0.util.Long !== Long) {
	_m0.util.Long = Long as any;
	_m0.configure();
}
