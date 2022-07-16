import { useMoralis } from 'react-moralis'
import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from 'react-router-dom'
import Theme from './configs/theme'
import { UserContext } from 'helpers/UserContext'
import { contractAddressByType } from 'configs/contractAddress'
import Home from 'pages/Home'
//import ReactGA from 'react-ga';
//const TRACKING_ID = "UA-217305639-1"; // OUR_TRACKING_ID
//ReactGA.initialize(TRACKING_ID);

const App = () => {
  const { Moralis, isAuthenticated, account } = useMoralis()
  //const location = window.location.pathname;
  const [userData, setUserData] = useState({
    userWallet: null,
    userAllowance: {
      bnb: 0,
      misad: 0,
    },
    refetch: true
  })

  useEffect(() => {
    if (isAuthenticated) {
      setUserData({
        ...userData,
        userWallet: account,
        refetch: !userData.refetch
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, account])

  useEffect(() => {
    if (userData.userWallet) {
      checkAllowance('BUSD')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.refetch])
  /*
  useEffect(() => {
    ReactGA.pageview(location);
  }, [location]);
*/
  const checkAllowance = async (token) => {
    try {
      const response = await Moralis.Web3API.token.getTokenAllowance({
        address: contractAddressByType[token],
        spender_address: '0xB871b2E470576BaF99eBee563472d2468c02b18B',
        owner_address: account,
        chain: 'bsc'
      })
      return setUserData({
        ...userData,
        userAllowance: {
          ...userData.userAllowance,
          misad: response?.allowance
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserContext.Provider value={userData}>
      <Router>
        <Theme>
          <Switch>
            <Route path='/' element={<Home />} />
          </Switch>
        </Theme>
      </Router>
    </UserContext.Provider>
  )
}

export default App
