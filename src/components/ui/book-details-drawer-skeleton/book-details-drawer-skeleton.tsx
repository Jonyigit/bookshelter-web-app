import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const Wrapper = styled.div`
    background: var(--secondary-bg);
    min-height: 100vh;
    max-width: 552px;
    width: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

const Header = styled.header`
    background: var(--bg);
    padding: 22px 33px;
    width: 100%;
    margin-bottom: 45px;
`;

const Content = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
`;

const DescBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 27px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
    padding: 0px 43px;
    margin-bottom: 50px;
`;

const Item = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 6px;
`;

const Footer = styled.footer`
    width: 100%;
    height: max-content;
    background: var(--bg);
    padding: 14px 20px 16px 20px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

function BookDetailsDrawerSkeleton() {
    return (
        <Wrapper>
            <Header>
                <Skeleton height={32} width={250} borderRadius={3} baseColor="var(--border)" />
            </Header>
            <Content>
                <Skeleton height={300} width={228} borderRadius={5} baseColor="var(--border)" />
                <DescBox>
                    <Skeleton height={15} width={470} borderRadius={3} baseColor="var(--border)" count={5} />
                </DescBox>
            </Content>
            <Info>
                <Item>
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                </Item>
                <Item>
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                </Item>
                <Item>
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                </Item>
                <Item>
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                    <Skeleton height={30} width={130} borderRadius={30} baseColor="var(--border)" />
                </Item>
            </Info>
            <Footer>
                <Skeleton height={35} width={112} borderRadius={4} baseColor="var(--border)" />
            </Footer>
        </Wrapper>
    );
}

export default BookDetailsDrawerSkeleton;
