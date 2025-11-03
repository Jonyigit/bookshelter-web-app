import styled from "styled-components";
import { FiDelete, FiBookOpen } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { removeBookmark } from "../../../redux/actions/bookmark-actions";

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

const Title = styled.h4`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    cursor: default;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
`;

const Desc = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    cursor: default;
    font-size: 13px;
    font-weight: 400;
    color: var(--color);
`;

function BookmarkCard({ item }: any) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeBookmark(item.previewLink));
    };

    return (
        <Wrapper>
            <Content>
                <Title>{item.title}</Title>
                <Desc>{item.authors.join(",")}</Desc>
            </Content>
            <Controls>
                <Link to={item.previewLink} target="_blank">
                    <Button>
                        <FiBookOpen color="var(--grey)" />
                    </Button>
                </Link>
                <Button onClick={handleDelete}>
                    <FiDelete color="#FF6231" />
                </Button>
            </Controls>
        </Wrapper>
    );
}

export default BookmarkCard;
