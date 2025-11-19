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
      
      await sleep(250)
      listener.dispatch(
        setDimensions([window.screen.height, window.screen.width])
      )
      
      await sleep(500)
      listener.dispatch(setBrowser(browser.name))
      
      await sleep(650)
      listener.dispatch(setDevice(`${device.vendor} ${device.model}`))

      await sleep(450)
      listener.dispatch(setOs(os.name))
      
      await sleep(250)
      const ip = await ipPromise
      if (typeof ip === 'string') {
        listener.dispatch(setIp(ip))
      }

      await sleep(2000)
      listener.dispatch(finishTracking())
    },
  })
}
