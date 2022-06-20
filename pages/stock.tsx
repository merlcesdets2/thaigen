import type { NextPage, InferGetServerSidePropsType } from 'next'
import { AplicationContainer }  from '../components/layout/template'
import { PrismaClient } from '@prisma/client'
import { Table, Badge } from '@mantine/core'

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

  const rows = listStock.map((row, index) => (
    <tr key={row.productCode} style= { index % 2? { background : "#FBE9E7" }:{ background : "white" }}>
        <td>{row.name}</td>
        <td>{row.productCode}</td>
        <td>{row.producDescription}</td>
        <td>
          <div style={{display:'flex', color: 'green'}}>
            {row.status === 'Available' ? <Badge color="lime" size="xl" variant="dot" style={{textTransform: 'capitalize', border:'none', paddingLeft:0}}>{row.status}</Badge> 
              : <Badge color="red" size="xl" variant="dot" style={{textTransform: 'capitalize', border:'none', paddingLeft:0}}>{row.status}</Badge>}
          </div>
        </td>
        <td>{row.remark}</td>
    </tr>
  ))

  return (
          <AplicationContainer title='Stock'>
              <Table striped>
                <thead>
                    <tr style={{background:'#FFAB91'}}>
                        <th style={{color:'white'}}>Name</th>
                        <th style={{color:'white'}}>Code</th>
                        <th style={{color:'white'}}>Description</th>
                        <th style={{color:'white'}}>Status</th>
                        <th style={{color:'white'}}>Remark</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
          </AplicationContainer>
  )
}

export default Stock
