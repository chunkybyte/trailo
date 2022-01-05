import React, { Component, useState } from 'react';
import { TaskItem } from '../../types';
import { Modal } from '../Modal';
import CardStyles, { Tag } from './styles';

interface Props {
    data: TaskItem;
    index: number;
}

// export class Card extends Component<Props, { showModal: boolean}> {
//     constructor (props: Props) {
//         super(props);
//         this.state = {
//             showModal: false
//         }

//         this.toggleModal = this.toggleModal.bind(this);
//     }

//     toggleModal() {
//         this.setState({showModal: !this.state.showModal});
//     }

//     render() {
//         return (
//             <CardStyles 
//                 className="card" 
//                 onClick={this.toggleModal}>
//                 {
//                     this.props.data.tags.map(tag => <Tag key={tag} className='tag purple'>{tag}</Tag>)
//                 }
//                 <h3>{this.props.data.title}</h3>
//                 { this.state.showModal && <Modal data={this.props.data} toggleModal={this.toggleModal}></Modal>}
//             </CardStyles>
//         )
//     }
// }

const Card = (props: Props) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
       <CardStyles 
            className="card" 
            onClick={toggleModal}>
            {
                props.data.tags.map(tag => <Tag key={tag} className='tag purple'>{tag}</Tag>)
            }
            <h3>{props.data.title}</h3>
            { showModal && <Modal data={props.data} toggleModal={toggleModal}></Modal>}
        </CardStyles>
    );
}

export default Card;