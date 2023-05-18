import styled, { css } from 'styled-components'

const StyledRow = styled.div<{ even: boolean }>`
    background-color: #fff;
    padding: 24px;

    ${(props) =>
        props.even &&
        css`
            background-color: #f2f2f2;
        `}
`
export default StyledRow
