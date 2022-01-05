import { DragDropContext } from 'react-beautiful-dnd';
import { BoardItem } from '../../types';
import { StatusColumn } from "../StatusColumn";
import BoardStyles from './styles';


type Props = {
    boardData: BoardItem
}

const Board = (props: Props) => {
    const collections = props.boardData.collections;

    const onDragEnd = (result: any) => {
        console.log(result);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <BoardStyles>
                <h2>{props.boardData.name}</h2>
                <div className="board-dashboard">
                    { 
                        collections.map( 
                            columnData => 
                                <StatusColumn 
                                    key={columnData.id} 
                                    collectionData={columnData}></StatusColumn>
                        ) 
                    }
                </div>
            </BoardStyles>
        </DragDropContext>
    );
}

export default Board;