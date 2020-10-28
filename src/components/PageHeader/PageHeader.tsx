import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  icon: React.ReactNode
  subtitle?: string
  title?: string
  content?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title, content }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        <StyledSubtitle>{content}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  padding-top: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
`

const StyledIcon = styled.div`
  font-size: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
  width: 120px;
`

const StyledTitle = styled.h1`
  font-family: Tomorrow, sans-serif;
  color: #e6dcd5;
  font-size: 34px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
font-family: Tomorrow, sans-serif;
  color: #e6dcd5;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
