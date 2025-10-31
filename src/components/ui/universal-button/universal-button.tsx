import styled, { css } from "styled-components";
import type { UniversalButtonProps } from "../../../types/type";

const StyledButton = styled.button<{ $variant: "bookmark" | "info" }>`
    cursor: pointer;
    border: none;
    outline: none;
    max-width: 120px;
    width: 100%;
    padding: 10px 0px;
    font-family: inherit;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;

    ${({ $variant }) =>
        $variant === "bookmark"
            ? css`
                  background: var(--yellow);
                  color: var(--text-color);
              `
            : css`
                  background: #0d75ff0d;
                  color: var(--blue);
              `}
`;

function UniversalButton({ type, handleClick, setIsModalOpen }: UniversalButtonProps) {
    const isBookmark = type === "bookmark-btn";

    const handleButtonClick = () => {
        if (!isBookmark) {
            setIsModalOpen((prev: boolean) => !prev);
            handleClick();
        }
    };

    return (
        <StyledButton
            $variant={isBookmark ? "bookmark" : "info"}
            aria-label={isBookmark ? "Add to bookmarks" : "More info"}
            onClick={handleButtonClick}
        >
            {isBookmark ? "Bookmark" : "More Info"}
        </StyledButton>
    );
}

export default UniversalButton;
