import styled from 'styled-components'

import { theme } from 'configs/theme'

import misadCoin from 'assets/misadCoin.png'

const Spinner = ({ variant = 'big' }) => {
  return (
    <Wrapper>
      <BaseContainer variant={variant}>
        {variant === 'big' && (
          <LogoContainer>
            <img src={misadCoin} alt='' style={{ width: '110px', height: '110px' }} />
            {
              //inserir imagem aqui
            }
          </LogoContainer>
        )}
        <Base
          variant={variant}
          color={theme.palette.primary.main}
          speed='1.2s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
        <Base
          variant={variant}
          color={theme.palette.primary.dark}
          speed='1.9s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
        <Base
          variant={variant}
          color={theme.palette.primary.main}
          speed='2.5s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
        <Base
          variant={variant}
          color={theme.palette.primary.main}
          speed='3.5s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
        <Base
          variant={variant}
          color={theme.palette.primary.dark}
          speed='2.7s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
        <Base
          variant={variant}
          color={theme.palette.primary.dark}
          speed='3.7s'
          width={variant === 'big' ? '100px' : '50px'}
          height={variant === 'big' ? '100px' : '50px'}
        />
      </BaseContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const BaseContainer = styled.div`
  position: relative;
  width: ${({ variant }) => (variant === 'big' ? '150px' : '100px')};
  height: ${({ variant }) => (variant === 'big' ? '135px' : '85px')};
`
const Base = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
  border-top: ${({ color, variant }) => `${variant === 'big' ? '3px' : '2px'} solid ${color}`};
  animation: ${({ speed }) => `spinnerLoader ${speed} infinite ease`};
  @keyframes spinnerLoader {
    to {
      transform: rotate(360deg);
    }
  }
`
const LogoContainer = styled.div`
  position: absolute;
  top: 15.5px;
  left: 15.5px;
`

export default Spinner
