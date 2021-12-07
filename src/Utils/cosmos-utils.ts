import { createProtobufRpcClient, QueryClient, SigningStargateClient } from '@cosmjs/stargate'
import { QueryClientImpl } from './../Model/generated/regen/divvy/v1/query'

export const getAllAllocators = async (sgClient: SigningStargateClient) => {
  // https://github.com/cosmos/cosmjs/blob/main/packages/stargate/CUSTOM_PROTOBUF_CODECS.md#step-3b-instantiate-a-query-client-using-your-custom-query-service
  const tmC = sgClient.getTmClient()
  if (!tmC) return console.warn('no tm client')

  const queryClient = new QueryClient(tmC)
  const rpcClient = createProtobufRpcClient(queryClient)
  const queryService = new QueryClientImpl(rpcClient)
  const queryResult = await queryService.Allocators({
  // pagination: {
  //   /**
  //    * key is a value returned in PageResponse.next_key to begin
  //    * querying the next page most efficiently. Only one of offset or key
  //    * should be set.
  //    */
  //   key: Uint8Array;
  //   /**
  //    * offset is a numeric offset that can be used when key is unavailable.
  //    * It is less efficient than using key. Only one of offset or key should
  //    * be set.
  //    */
  //   offset: Long;
  //   /**
  //    * limit is the total number of results to be returned in the result page.
  //    * If left empty it will default to a value to be set by each app.
  //    */
  //   limit: Long;
  //   /**
  //    * count_total is set to true  to indicate that the result set should include
  //    * a count of the total number of items available for pagination in UIs.
  //    * count_total is only respected when offset is used. It is ignored when key
  //    * is set.
  //    */
  //   countTotal: boolean;
  // },
  })

  return queryResult
}

const chainInfo = {
  // Chain-id of the Regen chain.
  chainId: '',
  // The name of the chain to be displayed to the user.
  chainName: '',
  // RPC endpoint of the chain.
  rpc: '',
  // REST endpoint of the chain.
  rest: '',
  // Staking coin information
  stakeCurrency: {
    // Coin denomination to be displayed to the user.
    coinDenom: 'REGEN',
    // Actual denom (i.e. uatom, uscrt) used by the blockchain.
    coinMinimalDenom: 'uregen',
    // # of decimal points to convert minimal denomination to user-facing denomination.
    coinDecimals: 6,
    // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
    // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
    // coinGeckoId: ""
  },
  // (Optional) If you have a wallet webpage used to stake the coin then provide the url to the website in `walletUrlForStaking`.
  // The 'stake' button in Keplr extension will link to the webpage.
  // walletUrlForStaking: "",
  // The BIP44 path.
  bip44: {
    // You can only set the coin type of BIP44.
    // 'Purpose' is fixed to 44.
    coinType: 118,
  },
  // Bech32 configuration to show the address to user.
  bech32Config: {
    bech32PrefixAccAddr: 'regen',
    bech32PrefixAccPub: 'regenpub',
    bech32PrefixValAddr: 'regenvaloper',
    bech32PrefixValPub: 'regenvaloperpub',
    bech32PrefixConsAddr: 'regenvalcons',
    bech32PrefixConsPub: 'regenvalconspub',
  },
  // List of all coin/tokens used in this chain.
  currencies: [
    {
      // Coin denomination to be displayed to the user.
      coinDenom: 'REGEN',
      // Actual denom (i.e. uatom, uscrt) used by the blockchain.
      coinMinimalDenom: 'uregen',
      // # of decimal points to convert minimal denomination to user-facing denomination.
      coinDecimals: 6,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
    },
  ],
  // List of coin/tokens used as a fee token in this chain.
  feeCurrencies: [
    {
      // Coin denomination to be displayed to the user.
      coinDenom: 'REGEN',
      // Actual denom (i.e. uatom, uscrt) used by the blockchain.
      coinMinimalDenom: 'uregen',
      // # of decimal points to convert minimal denomination to user-facing denomination.
      coinDecimals: 6,
      // (Optional) Keplr can show the fiat value of the coin if a coingecko id is provided.
      // You can get id from https://api.coingecko.com/api/v3/coins/list if it is listed.
      // coinGeckoId: ""
    },
  ],
  // (Optional) The number of the coin type.
  // This field is only used to fetch the address from ENS.
  // Ideally, it is recommended to be the same with BIP44 path's coin type.
  // However, some early chains may choose to use the Cosmos Hub BIP44 path of '118'.
  // So, this is separated to support such chains.
  coinType: 118,
  // (Optional) This is used to set the fee of the transaction.
  // If this field is not provided, Keplr extension will set the default gas price as (low: 0.01, average: 0.025, high: 0.04).
  // Currently, Keplr doesn't support dynamic calculation of the gas prices based on on-chain data.
  // Make sure that the gas prices are higher than the minimum gas prices accepted by chain validators and RPC/REST endpoint.
  gasPriceStep: {
    low: 0.01,
    average: 0.025,
    high: 0.04,
  },
  features: ['stargate'],
}

export const addRegenLocalChain = (k) => {
  const local = {
    ...chainInfo,

    chainId: 'test',
    chainName: 'Regen Local Testnet',
    rpc: 'http://127.0.0.1:26657',
    rest: 'http://127.0.0.1:1317',
  }
  k.experimentalSuggestChain(local)
}

export const addRegenRedwoodChain = (k) => {
  const redwood = {
    ...chainInfo,

    chainId: 'regen-redwood-1',
    chainName: 'Regen Redwood Testnet',
    rpc: 'http://209.182.218.23:26657',
    rest: 'http://209.182.218.23:1317',
  }
  k.experimentalSuggestChain(redwood)
}

export const addRegenHambachChain = (k) => {
  const hambach = {
    ...chainInfo,

    chainId: 'regen-hambach-1',
    chainName: 'Regen Hambach Testnet',
    rpc: 'http://hambach.regen.network:26657/',
    rest: 'http://hambach.regen.network:1317/',
  }
  k.experimentalSuggestChain(hambach)
}
