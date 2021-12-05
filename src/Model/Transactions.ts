import { TxRaw } from './generated/cosmos/tx/v1beta1/tx'

export interface PendingTx{
  hash: string
  finished: Uint8Array
  raw: TxRaw
}
