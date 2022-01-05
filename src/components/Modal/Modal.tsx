import { TaskItem } from '../../types';
import ModalStyles, { ModalLeft, ModalRight } from './styles';

interface Props {
    toggleModal: any,
    data: TaskItem
}

const Modal = (props: Props) => {
    const data = props.data;
    return (
        <ModalStyles>
            <section className="modal">
                {
                    data.image 
                    &&
                    <div 
                        className="modal__bannerImage" 
                        style={{backgroundImage: `url(/assets/images/${data.image})`}}>
                    </div>
                }
                
                <div className="modal__body">
                    <div className="modal__close" onClick={props.toggleModal}>Close</div>
                    <ModalLeft className="modal__body__leftSection">
                        <div className="leftSection__row">
                            <div className="row__iconDrawer">
                                T
                            </div>
                            <div className="row__body">
                                <h4>{data.title}</h4>
                                {/* <span>in the list Todos</span> */}
                            </div>
                        </div>
                        <div className="leftSection__row">
                            <div className="row__iconDrawer">
                                D
                            </div>
                            <div className="row__body">
                                <strong>Description</strong>
                                <div>
                                    {data.description}
                                </div>
                            </div>
                        </div>
                    </ModalLeft>
                    <ModalRight className="modal__body__rightSection">
                        Card Actions [TBD]
                    </ModalRight>
                </div>
            </section>
        </ModalStyles>
    );
}

export default Modal;