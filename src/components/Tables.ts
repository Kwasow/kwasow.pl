import styled from 'styled-components'

export const Table = styled.table`
  
`

export const TableHeader = styled.th``

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${props => props.theme.colors.altBackground};
  } 
`

export const TableCell = styled.td`
  padding-left: 16px;
  padding-right: 16px;
  border: 1px solid ${props => props.theme.colors.onBackground}
`

export const TableCellRight = styled(TableCell)`
  text-align: right
`
