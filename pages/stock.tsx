import type { NextPage } from 'next'
import { AplicationContainer }  from '../components/layout/template'
// import { Container, Text } from '@mantine/core'
import StockTable from '../components/stockTable'

const Stock: NextPage = () => {

  return (
          <AplicationContainer title='Stock'>
            <StockTable/>
          </AplicationContainer>
  )
}

export default Stock
