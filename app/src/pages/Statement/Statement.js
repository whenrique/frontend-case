import React, { useContext, useState, useEffect } from 'react'

import { Column } from 'components/Grid'
import Filter from './components/Filter'
import Search from './components/Search'
import Summary from './components/Summary'

import S from './Statement.style'
import SummaryContext from 'providers/SummaryProvider'

const Statement = () => {
  const { data, loading, error, filter, setFilter } = useContext(SummaryContext)
  const [summary, setSummary] = useState(null)

  const handleFilter = (slug) => {
    setFilter(slug)

    if (slug === 'all') {
      setSummary(data)
      return
    }

    if (slug.includes('pending')) {
      const filteredSummary = data.filter(({ items }) => {
          return items.some(item => item.scheduled)
        })
      setSummary(filteredSummary)
      return
    }

    const regex = new RegExp(slug, 'ig')
    const newItems = []
    data.filter(({ items, ...props }) => {
      items.some(item => item.entry.match(regex) && newItems.push({
        ...props,
        items: [
          item
        ]
      }))
    })
    setSummary(newItems)
  }

  const handleSearch = (term) => {
    const regex = new RegExp(term, 'ig')
    const newItems = []
    data.filter(({ items, ...props }) => {
      items.some(item => item.actor.match(regex) && newItems.push({
        ...props,
        items: [
          item
        ]
      }))
    })
  }

  useEffect(() => {
    if(loading || error) return
    setSummary(data)
  }, [data, loading, error])

  return (
    <>
      <S.Wrapper>
        <Column size={4}>
          <Filter handleFilter={handleFilter} active={filter} />
        </Column>
        <Column size={6}>
          <Search handleSearch={handleSearch} />
        </Column>
      </S.Wrapper>
      <S.Wrapper wrap>
        {summary ? (
          <>
            {summary.map((props, index) => (
              <Summary {...props} headings={index === 0} key={index} />
            ))}
          </>
        ) : 'Loading...'}
      </S.Wrapper>
    </>
  )
}

export default Statement