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

function DetailsTable() {
  const loading = useAppSelector(state => state.mug.loading)

  const ip = useAppSelector(state => state.mug.ip)
  const screenWidth = useAppSelector(state => state.mug.windowWidth)
  const screenHeight = useAppSelector(state => state.mug.windowHeight)
  const browser = useAppSelector(state => state.mug.browser)
  const os = useAppSelector(state => state.mug.os)
  const device = useAppSelector(state => state.mug.device)

  return <>
    {loading
      ? <Row>
        <Text>Namierzanie złodzieja…</Text>
      </Row>
      : <Row>
        <Text>Złodziej namierzony</Text>
        <FillContainer />
        <Text>✔</Text>
      </Row>
    }
    <Table>
      <tbody>
        <TableRow>
          <TableCell style={{ width: '50%' }}><Text>Adres IP</Text></TableCell>
          <TableCellRight style={{ width: '50%' }}>
            {
              ip === undefined
                ? <BlinkingLoader />
                : <Text>{ip}</Text>
            }
          </TableCellRight>
        </TableRow>
        <TableRow>
          <TableCell><Text>Rozmiar ekranu</Text></TableCell>
          <TableCellRight>
            {
              screenHeight === undefined || screenWidth === undefined
                ? <BlinkingLoader />
                : <Text>{screenHeight}×{screenWidth}</Text>
            }
          </TableCellRight>
        </TableRow>
        <TableRow>
          <TableCell><Text>Przeglądarka</Text></TableCell>
          <TableCellRight>
            {
              browser === undefined
                ? <BlinkingLoader />
                : <Text>{browser}</Text>
            }
          </TableCellRight>
        </TableRow>
        <TableRow>
          <TableCell><Text>System</Text></TableCell>
          <TableCellRight>
            {
              os === undefined
                ? <BlinkingLoader />
                : <Text>{os}</Text>
            }
          </TableCellRight>
        </TableRow>
        <TableRow>
          <TableCell><Text>Urządzenie</Text></TableCell>
          <TableCellRight>
            {
              device === undefined
                ? <BlinkingLoader />
                : <Text>{device}</Text>
            }
          </TableCellRight>
        </TableRow>
      </tbody>
    </Table>
  </>
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
    <TopWarnings />
    <DetailsTable />
    <BottomWarnings />
  </>
}
