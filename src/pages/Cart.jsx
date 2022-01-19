import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"}; /* if filled, border: none */
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"}; /* if filled, back-color: black, else transparent */
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`;

const ProductDetails = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
    margin-right: 40px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProdColorWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ProductColor = styled.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    border: 1px solid teal;
    background-color: ${props => props.color};
    margin-left: 5px;
`;

const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 30px 0;
`;

const Summary = styled.span`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>Your Cart</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.stickpng.com/img/download/59401c27bd0e8b4eeeb603c3/image"/>
                                <Details>
                                    <ProductName><b>Product:</b> iMac</ProductName>
                                    <ProductId><b>ID:</b> 3582945</ProductId>
                                    <ProdColorWrapper><span><b>Color: </b></span><ProductColor color="#acacac"/></ProdColorWrapper>              
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://www.stickpng.com/img/download/580b57fbd9996e24bc43bfbf/image"/>
                                <Details>
                                    <ProductName><b>Product:</b> Headphones</ProductName>
                                    <ProductId><b>ID:</b> 8546585</ProductId>
                                    <ProdColorWrapper><span><b>Color: </b></span><ProductColor color="#9b7141"/></ProdColorWrapper>              
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$850</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemText>$9.50</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemText>- $9.50</SummaryItemText>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$850</SummaryItemPrice>
                        </SummaryItem>
                        <Button>Checkout</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
