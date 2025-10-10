import styled from "styled-components";

import bg404 from "../../../assets/images/404-bg.jpg";

const Section = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 600px;
    width: 100%;
    gap: 32px;
`;

const Image = styled.img`
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--text-color);
        line-height: 1.2;
    }

    p {
        font-size: 1rem;
        color: var(--grey);
        line-height: 1.5;
        max-width: 480px;
    }
`;

function NotFound() {
    return (
        <Section>
            <Container>
                <Image src={bg404} alt="Not found illustration" />
                <Content>
                    <h1>No results found</h1>
                    <p>
                        We couldn’t find any books matching your search. Please try using different keywords or go back
                        to the homepage.
                    </p>
                </Content>
            </Container>
        </Section>
    );
}

export default NotFound;
