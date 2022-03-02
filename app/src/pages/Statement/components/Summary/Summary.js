import React from 'react'

import S from './Summary.style'
import Icon from 'components/Icon/Icon'
import {ReactComponent as CreditIcon} from 'pages/Statement/assets/ic_arrow-down-in.svg'
import {ReactComponent as DebitIcon} from 'pages/Statement/assets/ic_time-clock.svg'
import {ReactComponent as RefundIcon} from 'pages/Statement/assets/ic_arrow-return.svg'

const Summary = ({ lastUpdated }) => (
  <S.Wrapper>
    <S.Header forwardedAs='header' lastUpdated>
      <S.Day forwardedAs='p' size={3}>{'29 de Agosto'}</S.Day>
      {!lastUpdated && (
        <>
          <S.Headings forwardedAs='p' lighten size={2}>Tipo de transação</S.Headings>
          <S.Headings forwardedAs='p' lighten size={4}>Data</S.Headings>
          <S.Headings forwardedAs='p' lighten size={1}>Valor</S.Headings>
        </>
      )}
      {lastUpdated && (
          <S.Balance forwardedAs='p'>saldo do dia R$ 3.110,08</S.Balance>
        )
      }
    </S.Header>
    <S.Summary>
      <S.Details>
        <S.Detail forwardedAs='p' name size={3}>
          <Icon rounded detail>
            <CreditIcon />
          </Icon>
          Lucas Vallim da Costa
        </S.Detail>
        <S.Detail forwardedAs='p' size={2} className="type">Transferência recebida</S.Detail>
        <S.Detail forwardedAs='p' size={4} className="date">Hoje - 12 Jun 2020 - 17:35</S.Detail>
        <S.Detail forwardedAs='p' size={1} className="amount" credit>+ R$ 320,00</S.Detail>
      </S.Details>
      <S.Details>
        <S.Detail forwardedAs='p' name size={3}>
          <Icon rounded detail>
            <DebitIcon />
          </Icon>
          Lucas Vallim da Costa
        </S.Detail>
        <S.Detail forwardedAs='p' size={2} className="type">Transferência recebida</S.Detail>
        <S.Detail forwardedAs='p' size={4} className="date">Hoje - 12 Jun 2020 - 17:35</S.Detail>
        <S.Detail forwardedAs='p' size={1} className="amount" debit>- R$ 320,00</S.Detail>
      </S.Details>
      <S.Details>
        <S.Detail forwardedAs='p' name size={3}>
          <Icon rounded detail>
            <RefundIcon />
          </Icon>
          Lucas Vallim da Costa
        </S.Detail>
        <S.Detail forwardedAs='p' size={2} className="type">Transferência recebida</S.Detail>
        <S.Detail forwardedAs='p' size={4} className="date">Hoje - 12 Jun 2020 - 17:35</S.Detail>
        <S.Detail forwardedAs='p' size={1} className="amount" refunded> R$ 320,00</S.Detail>
      </S.Details>
    </S.Summary>
  </S.Wrapper>
)

export default Summary