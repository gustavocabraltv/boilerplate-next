import * as S from './styles'

const Styleguide = () => (
  <S.Wrapper>
    <span>TYPOGRAPHY</span>
    <S.HeadingContainer>
      <h1>Headline 1 (h1)</h1>
      <h2>Headline 4 (h2)</h2>
      <h3>Headline 3 (h3)</h3>
      <h4>Headline 4 (h4)</h4>
    </S.HeadingContainer>
    <span>COLORS</span>

    <S.ColorContainer>
      <S.BoxContainer>
        <h3>Primary</h3>
        <S.Primary></S.Primary>
        <span>#F231A5</span>
      </S.BoxContainer>

      <S.BoxContainer>
        <h3>Secondary</h3>
        <S.Secondary></S.Secondary>
        <span>#3CD3C1</span>
      </S.BoxContainer>
    </S.ColorContainer>
  </S.Wrapper>
)

export default Styleguide
