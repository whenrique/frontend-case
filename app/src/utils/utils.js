import { LANG, TRANSACTIONS } from "./constants"

export const transaction = (status, source, entry) => {
  return TRANSACTIONS[status][`${source}_${entry}`]
}

export const formatDate = (date, opts = { day: '2-digit', month: 'long' } ) => {
  return new Date(date).toLocaleDateString(LANG, opts)
}

export const formatCurrency = (amount) => {
  return amount.toLocaleString(LANG, {
    currency: 'BRL',
    style: 'currency'
  })
}
