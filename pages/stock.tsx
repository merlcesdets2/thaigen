import type { NextPage } from 'next'
import { AplicationContainer }  from '../components/layout/template'
import StockTable from '../components/stockTable'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const Stock: NextPage = () => {

  return (
          <AplicationContainer title='Stock'>
            <StockTable/>
          </AplicationContainer>
  )
}

export default Stock
