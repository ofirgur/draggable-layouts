import styled from 'styled-components';

export default styled.div`
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;

    @media(min-width: 690px) {
        width: 150px;
        height: 100%; 
    }

    > section {
        flex-grow: 1;
        flex-shrink: 1;

        display: flex;
        @media(min-width: 690px) {
            flex-direction: column;
        }
    }

    > footer {
        display: flex;
        justify-content: center;

        @media(min-width: 690px) {
            flex-direction: column;
        }

        button {
            width: 140px;
            margin: 0 10px 10px;
        }
    }
`;