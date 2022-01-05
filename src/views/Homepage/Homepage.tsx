import React from "react";
import data from '../../assets/data/data';
import { Board } from "../../components/Board";
import { Header } from "../../components/Header";
import Home from './styles';

class Homepage extends React.Component {
    render () {
        return (
            <Home className="homepage">
                <Header user={data.user}></Header>
                {/* Using only one board data for now [V1] */}
                <Board boardData={data.boards[0]}></Board>
                <footer>No Copyright &copy; Ekansh Kothiyal 2022</footer>
            </Home>
        );
    }
}

export default Homepage;