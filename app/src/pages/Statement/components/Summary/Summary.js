import React from 'react'

import S from './Summary.style'
import Icon from 'components/Icon/Icon'
import {ReactComponent as CreditIcon} from 'pages/Statement/assets/ic_arrow-down-in.svg'
import {ReactComponent as RefundIcon} from 'pages/Statement/assets/ic_arrow-return.svg'
import {ReactComponent as DebitIcon} from 'pages/Statement/assets/ic_time-clock.svg'
import { formatCurrency, formatDate, transaction } from 'utils/utils'

const Summary = ({ headings, ...props }) => {
  const { items, date, amountTotal } = props
  const formatedDate = formatDate(date)

  return (
    <S.Wrapper>
      <S.Header forwardedAs='header'>
        <S.Day forwardedAs='p' size={3}>{formatedDate}</S.Day>
        {headings && (
          <>
            <S.Headings forwardedAs='p' lighten size={2}>Tipo de transação</S.Headings>
            <S.Headings forwardedAs='p' lighten size={4} extraPadding>Data</S.Headings>
            <S.Headings forwardedAs='p' lighten size={1}>Valor</S.Headings>
          </>
        )}
        {!headings && (
            <S.Balance forwardedAs='p'>saldo do dia {formatCurrency(amountTotal)}</S.Balance>
          )
        }
      </S.Header>
      <S.Summary>
        {items.map(item => {
          const { status, source, entry, actor, dateEvent, amount } = item
          const type = status.match(/REFUNDED/ig) ? status : entry

          return (
            <S.Details>
              <S.Detail forwardedAs='p' name size={3}>
                <Icon rounded detail>
                  {(status === 'COMPLETED') && (
                    <CreditIcon />
                  )}
  
                  {(status === 'REFUNDED') && (
                    <RefundIcon />
                  )}
  
                  {(status === 'PENDING') && (
                    <DebitIcon />
                  )}
                </Icon>
                {actor}
              </S.Detail>
              <S.Detail forwardedAs='p' size={2}>{transaction(status, source, entry)}</S.Detail>
              <S.Detail forwardedAs='p' size={4} extraPadding>{formatDate(dateEvent, {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</S.Detail>
              <S.Detail forwardedAs='p' size={1} entry={type}>{formatCurrency(amount)}</S.Detail>
            </S.Details>
          )
        })}
      </S.Summary>
    </S.Wrapper>
  )
}
export default Summary