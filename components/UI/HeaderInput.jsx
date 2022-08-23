import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items:center;
    input {
        border: none;
        border-bottom: 1px solid var(--primary-black);
        width: fit-content;
        padding: 0.25rem 2rem 0rem 0.5rem;
        width: 240px;
    }
    img {
        margin-inline-start: 1rem;
        height:30px;
        cursor: pointer;
    }
    @media(max-width:991.98px) {
        display:none;
    }
`

const HeaderInput = () => {
    return <Container>
        <input placeholder="Unesite pojam za pretragu..."/>
        <img src='/images/icons/search.png' alt='search'/>
    </Container>
}

export default HeaderInput;