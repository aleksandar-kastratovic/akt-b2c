import styled from "styled-components";

const Container = styled.div`
    width: min(1600px, 95%);
    margin-inline: auto;
`
const MainContainer = (props) => {
    return <>
        <Container {...props}>
            {props.children}
        </Container>
    </>
}

export default MainContainer;