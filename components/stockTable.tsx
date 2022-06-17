import { Table } from '@mantine/core'

const elements = [
    { name: 'AAA', productCode: 111, producDescription: 'loremloremloremloremlorem', status: 'Avilable', remark: 'Carbon' },
    { name: 'BBB', productCode: 112, producDescription: 'loremloremloremloremlorem', status: 'Rental', remark: 'Nitrogen' },
    { name: 'CCC', productCode: 113, producDescription: 'loremloremloremloremlorem', status: 'Sold', remark: 'Yttrium' },
    { name: 'DDD', productCode: 113, producDescription: 'loremloremloremloremlorem', status: 'Avilable', remark: 'Barium' },
    { name: 'FFF', productCode: 114, producDescription: 'loremloremloremloremlorem', status: 'Avilable', remark: 'Cerium' },
  ]

function StockTable() {
    const rows = elements.map((element) => (
        <tr key={element.productCode}>
            <td>{element.name}</td>
            <td>{element.productCode}</td>
            <td>{element.producDescription}</td>
            <td>{element.status}</td>
            <td>{element.remark}</td>
        </tr>
    ));

  return (
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
    );
}

export default StockTable