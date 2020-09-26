import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import { useI18n  } from 'use-i18n';

const Home: React.FC = () => {
  const t = useI18n()
  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={120} />}
        title={t.title}
        subtitle={t.subtitle}
        content={t.content}
      />

      <Container>
        <Balances />
      </Container>

    </Page>
  )
}

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

export default Home
