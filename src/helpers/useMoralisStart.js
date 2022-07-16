import { useMoralis } from 'react-moralis'

const useMoralisStart = () => {
  const { Moralis } = useMoralis()
  const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID
  const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL
  Moralis.start({ serverUrl: SERVER_URL, appId: APP_ID })
}

export default useMoralisStart
