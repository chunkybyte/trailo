import { CollectionItem } from '../../types';
import Column from './styles';
import TaskList from './TaskList';

const StatusColumn = (props: { collectionData: CollectionItem}) => {
    return (
        <Column>
            <h2>{props.collectionData.name}</h2>
            <TaskList collectionData={props.collectionData}></TaskList>
        </Column>
    );
}

export default StatusColumn;

// class StatusColumn extends React.Component<{ collectionData: CollectionItem}> {
//     // constructor (props: { collectionData: CollectionItem}) {
//     //     super(props);
//     // }

//     render () {
//         return (
//             <Column>
//                 <h2>{this.props.collectionData.name}</h2>
//                 <Droppable droppableId={this.props.collectionData.id}>
//                     {
//                         provided => (
//                             <div>
//                                 <TaskList
//                                     innerRef={provided.innerRef}
//                                     {...provided.droppableProps}
//                                     collectionData={this.props.collectionData}>{provided.placeholder}</TaskList>
//                             </div>
//                         )
//                     }
//                 </Droppable>
//             </Column>
//         );
//     }
// }