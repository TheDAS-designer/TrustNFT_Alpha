import React, { useCallback, useEffect, useState } from 'react'
import { Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import styled from 'styled-components'
import WalletProviderModal from '../../components/WalletProviderModal'
import successModal from '../../components/successModal'
import womenChef from '../../assets/img/womenChef.png'
import {CyberButton} from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import useModal from '../../bento_hooks/useModal'
import Bento_Balances from './components/Bento_Balances'
import { useI18n } from 'use-i18n';
import { useWallet } from 'use-wallet'
import miningBG from '../../assets/img/Mining.jpg'
import {createPot} from '../../bento/utils'
import useMemo from 'react';
import useBento from '../../bento_hooks/useBento'

const Mining: React.FC = () => {
  const [title, setTitle] = useState('')
  const [des, setDes] = useState('')
  const [hash1, sethash1] = useState('')
  const [hash2, sethash2] = useState('')
  const [hash3, sethash3] = useState('')
  const [hash4, sethash4] = useState('')
  


  const t = useI18n()
  const { account } = useWallet()
  const bento = useBento()
  const onCLickHandle = useCallback(
    ()=>{
      if(!bento) return
      const txhash = createPot(bento, hash1, des , account)
      if(txhash){
        console.log(txhash)
      }
    },[bento,account]
  )
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            

<div style={{height:'3900px', width: '100%', backgroundImage:`url(${miningBG})`, backgroundPosition: '0 -1072px', backgroundSize: '100%'}}>
<StyledInput placeholder={'   Title'} style={{ position: 'absolute',
  left: '450px',
  top: '455px'}}  onChange={(e) => {
  setTitle(e.target.value)
}} />

<StyleTextarea placeholder={'Description'}  style={{ position: 'absolute',
  left: '450px',
  top: '555px'}} 
  onChange={(e) => {
    setDes(e.target.value)
}}></StyleTextarea>
  </div>

  <StyledInput2 style={{ position: 'absolute',
  left: '540px',
  top: '765px'}}  onChange={(e) => {
    sethash1(e.target.value)
}} />

<StyledInput2  style={{ position: 'absolute',
  left: '540px',
  top: '850px'}} onChange={(e) => {
    sethash2(e.target.value)
}}  />

<StyledInput2  style={{ position: 'absolute',
  left: '540px',
  top: '941px'}}  onChange={(e) => {
    sethash3(e.target.value)
}}  />

<StyledInput2  style={{ position: 'absolute',
  left: '540px',
  top: '1027px'}} onChange={(e) => {
    sethash4(e.target.value)
}} />

<Stylebutton value="hahhahahahhahahah" 
style={{ position: 'absolute',
left: '450px',
top: '1168px'}}

onClick={onCLickHandle}></Stylebutton>
          </>
        ) : (
            <div
              style={{
                alignItems: 'center',
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
              }}
            >
            </div>
          )}
      </Page>
    </Switch>

  )
}


const Stylebutton = styled.button`
align-items: center;
background-color: rgba(255,31,171,0);
border: 0;
border-radius: 12px;
color: rgb(255,31,171);
cursor: pointer;
display: flex;
font-size: 30px;
font-weight: 700;
height: 60px;
justify-content: center;
outline: none;
pointer-events: ${props => !props.disabled ? undefined : 'none'};
width: 590px;
`


const StyleTextarea = styled.textarea`
  background: rgb(46,63,135);
  border: 0;
  color: rgb(255,255,255);
  font-size: 24px;
  height: 175px;
  width: 600px;
  padding: 0;
  outline: none;
`

const StyledInput = styled.input`
  background: rgb(46,63,135);
  border: 0;
  color: rgb(255,255,255);
  font-size: 24px;
  height: 60px;
  width: 600px;
  padding: 0;
  outline: none;
`


const StyledInput2 = styled.input`
  background: rgb(46,63,135);
  border: 0;
  color: rgb(255,255,255);
  font-size: 24px;
  height: 60px;
  width: 400px;
  padding: 0;
  outline: none;
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Mining
