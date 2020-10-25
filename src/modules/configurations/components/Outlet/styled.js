import styled from 'styled-components';

export default styled.div`
    width: 100;
    height: 100%;

    display: flex;
    flex-direction: column;
    @media(min-width: 690px) {
        flex-direction: row;
    }
`;