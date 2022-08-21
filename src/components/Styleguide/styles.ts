import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  > span {
    background: #efefef;
    padding: 4px 8px;
    border-radius: 4px;
  }
`

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Primary = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
  `}
`
export const Secondary = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `}
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-top: 1rem;
`

export const HeadingContainer = styled.div`
  margin-bottom: 2rem;
  > h1 {
    margin-bottom: 8px;
    margin-top: 1rem;
  }
  > h2 {
    margin-bottom: 8px;
  }
  > h3 {
    margin-bottom: 8px;
  }
`
