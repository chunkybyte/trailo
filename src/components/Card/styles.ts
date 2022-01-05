import styled from 'styled-components';

export default styled.div`
    padding: 6px 10px;
    background-color: white;
    box-shadow: 1px 2px 2px #CCC;
    border-radius: 6px;
    margin: 4px 0;
    cursor: pointer;

    h3 {
        font-size: 16px;
        font-weight: 400;
        margin: 5px 0 0 0;
    }
`

export const Tag = styled.span`
    display: inline-block;
    font-weight: bold;
    font-size: 12px;
    border-radius: 4px;
    padding: 3px 5px;
    margin-right: 4px;

    &.cyan {
        background-color: cyan;
        color: white;
    }

    &.purple {
        background-color: purple;
        color: white;
    }
`;