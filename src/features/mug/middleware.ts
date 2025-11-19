import { ListenerMiddlewareInstance } from '@reduxjs/toolkit'
import {
  setDimensions,
  setIp,
  setBrowser,
  startTracking,
  setOs,
  setDevice,
  finishTracking
} from './slice'
import { UAParser } from 'ua-parser-js'
import { sleep } from '../../util'

const IP_ADDRESS_LINK = 'https://api.ipify.org/?format=json'
interface IpAddressResponse {
  ip: string
}

export function setupMugMiddleware(
  listenerMiddleware: ListenerMiddlewareInstance
) {
  listenerMiddleware.startListening({
    actionCreator: startTracking,
    effect: async (_, listener) => {
      const ipPromise = fetch(IP_ADDRESS_LINK)
        .then(res => res.json())
        .then((res: IpAddressResponse) => res.ip)
        .catch(e => console.log(e))
      
      const parser = new UAParser()
      const browser = parser.getBrowser()
      const os = parser.getOS()
      const device = parser.getDevice()
      
      await sleep(1000)
      listener.dispatch(
        setDimensions([window.screen.height, window.screen.width])
      )
      
      await sleep(700)
      listener.dispatch(setBrowser(browser.name) || 'N/A')
      
      await sleep(950)
      if (device.vendor && device.model) {
        listener.dispatch(setDevice(`${device.vendor} ${device.model}`))
      } else {
        listener.dispatch(setDevice('N/A'))
      }

      await sleep(650)
      listener.dispatch(setOs(os.name || 'N/A'))
      
      await sleep(450)
      const ip = await ipPromise
      if (typeof ip === 'string') {
        listener.dispatch(setIp(ip))
      } else {
        listener.dispatch(setIp('N/A'))
      }
      
      listener.dispatch(finishTracking())
    },
  })
}
