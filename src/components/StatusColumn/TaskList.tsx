import React, { Component } from 'react';
import { CollectionItem } from '../../types';
import { Task } from '../Card';

interface Props {
    collectionData: CollectionItem
}

export class TaskList extends Component<Props> {
    render() {
        return (
            <div>
                {
                    this.props.collectionData.items.map(
                        (cardData, i) => <Task key={i} data={cardData} index={i}></Task>
                    )
                }
            </div> 
        )
    }
}

// const TaskList = (props: Props) => {
//     return (
//         <div>
//             {
//                 props.collectionData.items.map(
//                     (cardData, i) => <Task key={i} data={cardData} index={i}></Task>
//                 )
//             }
//         </div>    
//     );
// }

export default TaskList;