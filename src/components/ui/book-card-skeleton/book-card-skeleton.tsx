import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StyledBookCardSkeleton = styled.article`
    background: var(--secondary-bg);
    border-radius: 5px;
    border: 1px solid var(--border);
    box-shadow: 0px 1px 3px 0px #0000001a;
    padding: 13px 15px 13px 18px;
    max-width: 282px;
    width: 100%;
`;

const PictureBoxSkeleton = styled.figure`
    background: var(--bg);
    border-radius: 5px;
    max-width: 249px;
    width: 100%;
    height: 238px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const InfoBoxSkeleton = styled.header`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const BtnsBoxSkeleton = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 10px;
`;

const RowSkeleton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

function BookCardSkeleton() {
    return (
        <StyledBookCardSkeleton>
            <PictureBoxSkeleton>
                <Skeleton height={202} width={201} borderRadius={5} baseColor="var(--border)" />
            </PictureBoxSkeleton>
            <InfoBoxSkeleton>
                <Skeleton height={20} width="80%" baseColor="var(--border)" />
                <Skeleton height={16} width="60%" baseColor="var(--border)" />
                <Skeleton height={16} width="55%" baseColor="var(--border)" />
            </InfoBoxSkeleton>
            <BtnsBoxSkeleton>
                <RowSkeleton>
                    <Skeleton height={37} width={120} borderRadius={4} baseColor="var(--border)" />
                    <Skeleton height={37} width={120} borderRadius={4} baseColor="var(--border)" />
                </RowSkeleton>
                <Skeleton height={37} width="100%" borderRadius={4} baseColor="var(--border)" />
            </BtnsBoxSkeleton>
        </StyledBookCardSkeleton>
    );
}

export default BookCardSkeleton;
