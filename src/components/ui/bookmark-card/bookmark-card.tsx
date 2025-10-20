import styled from "styled-components";
import { FiDelete, FiBookOpen } from "react-icons/fi";

const Wrapper = styled.div`
    background: var(--bg);
    width: 100%;
    padding: 15px 10px;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

const Controls = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 5px;
`;

const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background: inherit;
    font-size: 20px;
`;

function BookmarkCard() {
    return (
        <Wrapper>
            <Content>
                <h4 style={{ fontSize: "16px", fontWeight: "400", color: "var(--text-color)" }}>Python</h4>
                <span style={{ fontSize: "13px", fontWeight: "500", color: "var(--color)" }}>David M. Beazley</span>
            </Content>
            <Controls>
                <Button>
                    <FiBookOpen color="var(--grey)" />
                </Button>
                <Button>
                    <FiDelete color="#FF6231" />
                </Button>
            </Controls>
        </Wrapper>
    );
}

export default BookmarkCard;
