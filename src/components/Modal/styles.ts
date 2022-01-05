import styled from "styled-components";

export default styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);

    .modal {
        position: relative;
        margin: 20px 0;
        width: 800px;
        height: auto;
        background: white;
        border: 1px solid #CCC;

        &__bannerImage {
            width: 100%;
            height: 180px;
            background-size: cover;
        }

        &__body {
            display: flex;
            padding: 12px 16px;
        }

        &__close {
            position: absolute;
            top: 0;
            right: 0;
            margin: 10px 10px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0.6);
            padding: 4px 6px;
            border-radius: 4px;
        }
    }
`

export const ModalLeft = styled.div`
    flex: 1;

    .leftSection__row {
        display: flex;
        margin-bottom: 10px;

        .row__iconDrawer {
            margin-right: 10px;
        }
        
        .row__body {
            margin: 0;
            h4 {
                margin: 0;
            }
            span {
                font-size: 12px;
                color: #999;
            }
            div {
                margin-top: 10px;
            }
        }
    }
`

export const ModalRight = styled.div`
    margin: 40px 0 0 20px;
    flex: 0 0 200px;
`