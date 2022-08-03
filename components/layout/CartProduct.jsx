import styled from 'styled-components';


const Container = styled.div`
    display:flex;
    align-items: center;
    &>img {
        height: 100px;
    }
    margin-bottom: 1.5rem;
`
const Info = styled.div`
    padding: 0 5rem;
`

const Name = styled.h1`
    font-size: 1rem;
`

const Detail = styled.span`
    display:block;
    font-size: 0.875rem
`

const CartProduct = () => {
    return (
        <Container>
            <img src={'/images/products/bedTJ.jpg'}/>
            <Info>
                <Name>Bež lanene ženske pantalone sa širim nogavicama</Name>
                <Detail>Šifra: 814569</Detail>
                <Detail>Količina: 1</Detail>
                <Detail>Veličina 34</Detail>
                <Detail>Ukupan iznos: 4.990 RSD sa PDV</Detail>
            </Info>
        </Container>
    )
}

export default CartProduct;