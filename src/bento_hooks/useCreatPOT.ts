import { useCallback, useEffect, useState, useRef } from 'react'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { createPot } from '../bento/utils'
import useBento from './useBento'
import useBlock from './useBlock'


const useCreatPOT = ( provf, desc) => {
 
  const [success, setSuccess] = useState(false)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const bento = useBento()
  const block = useBlock()

  const create = useCallback(async () => {
    createPot(bento, provf, desc, account)
    setSuccess(true)
  }, [ bento, setSuccess])

  useEffect(() => {
    if (bento) {
      create()
    }
    // return () => {
    //   _isMounted.current = false
    // }
  }, [account, block, bento])

  return success
}

export default useCreatPOT
