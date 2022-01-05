import { Avatar } from "../User";

import { User } from '../../types';

import HeaderStyles from './styles';

const Header = (props: {user: User}) => {
    return (
        <HeaderStyles>
            <a href="/" className="home-icon">Home</a>
            <div className="middle-section">
                <span className="logo">Trailo</span>
            </div>
            <Avatar user={props.user}></Avatar>
        </HeaderStyles>
    );
}

export default Header;