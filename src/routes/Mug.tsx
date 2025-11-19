import React from 'react'
import {
  Content,
  NavigationBar,
} from '../components'
import { MugTracker } from '../features/mug/components'
import { useAppDispatch, useAppSelector } from '../redux/setupHooks'
import { ThemeSwitcher } from '../features/theme/components'
import { startTracking } from '../features/mug/slice'

function LoadingAwareTitle() {
  const loading = useAppSelector(state => state.mug.loading)

  return <p>Trwa namierzanie... {loading}</p>
}

export default function Mug() {
  const dispatch = useAppDispatch()

  return (
    <>
      <NavigationBar title='Złodziej kubka'/>
      <Content>
        <LoadingAwareTitle />

        <button onClick={() => { dispatch(startTracking()) }}>
          Click test here
        </button>

        <MugTracker />
      </Content>
    </>
  )
}
