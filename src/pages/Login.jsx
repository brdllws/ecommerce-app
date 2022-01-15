import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)),
        url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=marvin-meyer-SYTO3xs06fU-unsplash.jpg&w=1920")
        center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    flex: 1;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    padding: 15px 20px;
    margin-top: 15px;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const Link = styled.a`
    margin: 5px 0;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Sign In</Title>
                <Form>
                    <Input placeholder="Username"/>
                    <Input placeholder="Password"/>
                    <Button>Log In</Button>
                    <Link>Forgot Password?</Link>
                    <Link>Create Account</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
