import { BroadcastTxResponse } from '@cosmjs/stargate'
import { TxRaw } from './generated/cosmos/tx/v1beta1/tx'

export interface PendingTx{
  hash: string
  finished: Uint8Array // "finished" means fully encoded via TxRaw.encode(raw).finish()
  raw: TxRaw
  date: Date
}

export interface CompletedTx{
  hash: string
  finished: Uint8Array // "finished" means fully encoded via TxRaw.encode(raw).finish()
  raw: TxRaw
  response: BroadcastTxResponse
  date: Date
  span: number
}
