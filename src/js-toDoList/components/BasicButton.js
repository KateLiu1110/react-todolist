import styled from 'styled-components'

const StyledButton=styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
`

const BasicButton = ()=>{
    return (
        <div>
            <StyledButton>Login</StyledButton>
        </div>
    )
}
export default BasicButton