import {Table, Caption, Thead, Tbody, Tfoot, Tr, Th, Td, TrHeaderForDrawers, TrWithoutDrawer, TrWithDrawer} from 'pivotal-ui/react/table';
import {Panel} from 'pivotal-ui/react/panels';
const TableView = () => {
    return ( 
        <Panel {...{title: 'Table View'}}>
        <Table className="pui-table--tr-hover">
    <Caption>Some table</Caption>
    <Thead>
      <Tr>
        <Th>A column header</Th>
        <Th>Another column header</Th>
        <Th>One more column header</Th>
        <Th>Last column header</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>The</Td>
        <Td>very</Td>
        <Td>first</Td>
        <Td>row</Td>
      </Tr>
      <Tr>
        <Td>Hover</Td>
        <Td>over</Td>
        <Td>me</Td>
        <Td>!</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Td>A</Td>
        <Td>place</Td>
        <Td>for</Td>
        <Td>totals</Td>
      </Tr>
    </Tfoot>
  </Table>
      </Panel>
     );
}

export default TableView;
