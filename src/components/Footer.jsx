import { Facebook, Instagram, MailOutline, Phone, Room, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialsContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    transition: all 0.5s ease;

    &:hover {
        background-color: #${props=>props.color};
    }
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>GAMMA.</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan purus vel odio convallis,
                    id rhoncus lacus rutrum. In hac habitasse platea dictumst.
                </Desc>
                <SocialsContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="FF0000">
                        <YouTube/>
                    </SocialIcon>
                </SocialsContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem><Link to="/">Home</Link></ListItem>
                    <ListItem><Link to="/cart">Cart</Link></ListItem>
                    <ListItem><Link to="/login">My Account</Link></ListItem>
                    <ListItem><Link to="/">Track an Order</Link></ListItem>
                    <ListItem><Link to="/cart">Wishlist</Link></ListItem>
                    <ListItem><Link to="/">Terms and Conditions</Link></ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    123 Main Street, Toronto ON M3A 5H8
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +1 234 567 8910
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/>
                    contact@gamma.ca
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
