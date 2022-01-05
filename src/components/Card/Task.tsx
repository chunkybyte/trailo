// import { Draggable } from 'react-beautiful-dnd';
import { TaskItem } from '../../types';
import { Card } from '.';

// import React, { Component } from 'react'

const Task = (props: {data: TaskItem, index: number}) => {
    return (
        <Card 
            data={props.data} 
            index={props.index}
            ></Card>
    );
}

export default Task;

// export class Task extends Component<{data: TaskItem, index: number}> {
//     // constructor (props:  {data: TaskItem, index: number}) {
//     //     super(props);
//     // }

//     render() {
//         return (
//             <>
//                 <Draggable draggableId={this.props.data.id} index={this.props.index}>
//                     {
//                         (provided) => (
//                             <Card 
//                                 data={this.props.data} 
//                                 index={this.props.index}
//                                 {...provided.draggableProps}
//                                 highlight_line {...provided.dragHandleProps} end_highlight_line
//                                 innerRef={provided.innerRef}
//                                 ></Card>
//                         )
//                     }
//                 </Draggable>
//             </>
//         );
//     }
// }
