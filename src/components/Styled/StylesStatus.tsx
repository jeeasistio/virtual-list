import styled, { css } from 'styled-components'

const StyledStatus = styled.div<{ status: 'completed' | 'in-progress' }>`
    ${(props) =>
        props.status === 'completed'
            ? css`
                  color: #3c3;
              `
            : css`
                  color: #f96;
              `}
`
export default StyledStatus
