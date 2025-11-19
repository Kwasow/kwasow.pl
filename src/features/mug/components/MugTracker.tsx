import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/setupHooks'
import {
  BlinkingLoader,
  CenteredText,
  FillContainer,
  Row,
  Table,
  TableCell,
  TableCellRight,
  TableRow,
  Text
} from '../../../components'
import { startTracking } from '../slice'

function LoadingHeader() {
  const loading = useAppSelector(state => state.mug.loading)

  if (loading) {
    return (
      <Row>
        <Text>Namierzanie złodzieja…</Text>
        <FillContainer />
        <BlinkingLoader />
      </Row>
    )
  } else {
    return (
      <Row>
        <Text>Złodziej namierzony</Text>
        <FillContainer />
        <Text>✔</Text>
      </Row>
    )
  }
}

function DetailsTable() {
  const ip = useAppSelector(state => state.mug.ip)
  const screenWidth = useAppSelector(state => state.mug.windowWidth)
  const screenHeight = useAppSelector(state => state.mug.windowHeight)
  const browser = useAppSelector(state => state.mug.browser)
  const os = useAppSelector(state => state.mug.os)
  const device = useAppSelector(state => state.mug.device)

  return <Table>
    <TableRow>
      <TableCell><Text>Adres IP</Text></TableCell>
      <TableCellRight><Text>{ip}</Text></TableCellRight>
    </TableRow>
    <TableRow>
      <TableCell><Text>Rozmiar ekranu</Text></TableCell>
      <TableCellRight><Text>{screenWidth}×{screenHeight}</Text></TableCellRight>
    </TableRow>
    <TableRow>
      <TableCell><Text>Przeglądarka</Text></TableCell>
      <TableCellRight><Text>{browser}</Text></TableCellRight>
    </TableRow>
    <TableRow>
      <TableCell><Text>System</Text></TableCell>
      <TableCellRight><Text>{os}</Text></TableCellRight>
    </TableRow>
    <TableRow>
      <TableCell><Text>Urządzenie</Text></TableCell>
      <TableCellRight><Text>{device}</Text></TableCellRight>
    </TableRow>
  </Table>
}

function TopWarnings() {
  return <>
    <CenteredText>
      Ktoś pił z mojego kubeczka… Mówiłem, żeby nie dotykać! Odłóż to!
      ODŁÓŻ TO P'DZIAŁEM! <br/>
      A tak poza tym to smacznej kawusi ;)
    </CenteredText>
  </>
}

function BottomWarnings() {
  return <>
    <CenteredText>Znajdę Cię…</CenteredText>
  </>
}

export function MugTracker() {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(startTracking())
  }, [])

  return <>
    <LoadingHeader />
    <TopWarnings />
    <DetailsTable />
    <BottomWarnings />
  </>
}
