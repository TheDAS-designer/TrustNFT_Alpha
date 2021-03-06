import React, { useCallback, useEffect, useState } from 'react'
import { HashRouter as Router, Route, Switch,   } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import BentoFarmsProvider from './contexts/bento_Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import BentoProvider from './contexts/BentoProvider'
import useModal from './hooks/useModal'
import theme from './theme'
import Farms from './views/Farms'
import Home from './views/Home'
import Mining from './views/Mining'
import Stake from './views/Stake'
import Auction from './views/Auction'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    <Providers>
      
      <Router basename="/">
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/mining">
            <Mining />
          </Route>
          <Route path="/farms">
            <Farms />
          </Route>
          <Route path="/staking">
            <Stake />
          </Route>
          <Route path="/auction">
            <Auction />
          </Route>
        </Switch>
      </Router>
      
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={42}
        connectors={{
          //walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
          walletconnect: { rpcUrl: 'https://api.infura.io/v1/jsonrpc/kovan' },
        }}
      >
      <BentoProvider>
          <TransactionProvider>
            <BentoFarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </BentoFarmsProvider>
          </TransactionProvider>
        </BentoProvider>
      </UseWalletProvider>
      
      
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App
