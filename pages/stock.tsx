import type { NextPage, InferGetServerSidePropsType } from 'next'
import { AplicationContainer }  from '../components/layout/template'
import { PrismaClient } from '@prisma/client'
import { Table } from '@mantine/core'

const prisma = new PrismaClient()

export async function getServerSideProps() {
  const listStock = await prisma.stock.findMany()
  return {
    props: {
      listStock
    }
  }
}

const Stock: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({listStock}) => {

  const rows = listStock.map((row) => (
    <tr key={row.productCode}>
        <td>{row.name}</td>
        <td>{row.productCode}</td>
        <td>{row.producDescription}</td>
        <td>{row.status}</td>
        <td>{row.remark}</td>
    </tr>
  ))

  return (
          <AplicationContainer title='Stock'>
              <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Remark</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
          </AplicationContainer>
  )
}

export default Stock
