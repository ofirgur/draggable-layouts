import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 8px;

    > div {
        flex-basis: calc(100% - 16px);
        margin: 8px;
        min-height: 300px;
        background-color: #fff;
        box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
        position: relative;

        @media(min-width: 690px) {
            flex-basis: calc(33.33% - 16px);
        }

        > svg {
            position: absolute;
            right: 0;
            margin: 8px;
            cursor: pointer;
            z-index: 9999;
        }
    }
`;