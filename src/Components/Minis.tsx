
import FiberManualRecord from 'mdi-preact/FiberManualRecordIcon'
import { h } from 'preact'

// import { TokenSpecificQuery } from '../Data/data'
// import { Address } from '../Model/Address'
// import { TokenAccount, TokenInfo } from '../Model/Token'
// import { TokenAmount } from '@solana/web3.js'
// import { useLiveQuery } from 'dexie-react-hooks'

export const FlexRow = ({ className = '', children }) => {
  className = `flex flex-row ${className}`
  return (
    <div {...{ className }}>
      {children}
    </div>
  )
}
export const FlexCol = ({ className = '', children }) => {
  className = `flex flex-col ${className}`
  return (
    <div {...{ className }}>
      {children}
    </div>
  )
}

export const ShortAddress = ({ address, className = '' }: { address: Address, className?: string }) => {
  className = `w-min text-xxl ${className}`
  // console.log(address)

  return (
    <div {...{ className }}>
      {address.short}
    </div>
  )
}
// export const TokenBalance = ({ tokenBalance, className = '' }: { tokenBalance: TokenAmount, className?: string }) => {
//   className = `w-min text-xxl ${className}`
//   // console.log(address)

//   return (
//     <div {...{ className }}>
//       {tokenBalance.uiAmount}
//     </div>
//   )
// }

// export const TokenIcon = ({ token, className = '', ...restProps }: { token?: TokenInfo, className?: string, [key: string]: any }) => {
//   const liveTokenInfo: TokenInfo | undefined = useLiveQuery(() => TokenSpecificQuery(token?.address), [token, token?.address])
//   className = `block w-6 h-6 ${className}`
//   const iconURI = liveTokenInfo?.logoURI ?? '/qs.png'
//   // console.log('rendering token icon', token, iconURI)
//   const onError = (e) => {
//     // console.log(e)
//     e.target.src = '/qs.png'
//   }
//   return (
//     <img onErrorCapture={onError} {...restProps} {...{ className }} src={iconURI} />
//   )
// }
// export const TokenAccountIcon = ({ tokenAccount, ...restProps }: { tokenAccount: TokenAccount, [key: string]: any }) => {
//   const tokenInfo: TokenInfo | undefined = useLiveQuery(() => tokenAccount.mintAddress ? TokenSpecificQuery(tokenAccount.mintAddress) : undefined, [tokenAccount, tokenAccount.mintAddress])
//   // console.log('rendering token account icon', tokenAccount, tokenInfo)
//   return (
//     <TokenIcon {...restProps} token={tokenInfo} />
//   )
// }
// export const TokenInfoCard = ({ tokenAccount, ...restProps }: { tokenAccount: TokenAccount, [key: string]: any }) => {
//   const tokenInfo: TokenInfo | undefined = useLiveQuery(() => tokenAccount.mintAddress ? TokenSpecificQuery(tokenAccount.mintAddress) : undefined, [tokenAccount, tokenAccount.mintAddress])
//   // console.log('rendering token account icon', tokenAccount, tokenInfo)
//   return (
//     <FlexCol className="bg-gray-900 p-6 w-max">
//       <FlexRow>
//         <TokenIcon className="mt-2 mr-2" {...restProps} token={tokenInfo} />
//         <span className="mr-2">{tokenInfo?.symbol}</span>
//         {`: ${tokenAccount.balance.uiAmountString}`}
//       </FlexRow>
//       <FlexRow>
//         More info...
//       </FlexRow>
//     </FlexCol>
//   )
// }

export const BouncingEllipsis = ({ className = '' }) => {
  className = `flex flex-row max-w-fit justify-between animate-pulse ${className}`
  return (
    <div
  {...{ className }}
  >
      <FiberManualRecord className="max-h-2 max-w-3 animate-bounce" />
      <FiberManualRecord className="max-h-2 max-w-3 animate-bounce animation-delay-100" />
      <FiberManualRecord className="max-h-2 max-w-3 animate-bounce-d200" />
    </div>
  )
}
