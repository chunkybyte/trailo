import styled from 'styled-components';

import { User } from '../../types';

interface Props {
    user: User
}

interface StyledProps {
    size: "sm" | "lg"
}

const sized = (props: StyledProps) => { 
    if (props.size === 'sm') {
        return '30px';
    } else if (props.size === 'lg') {
        return '40px';
    }
    return '30px';
}

const AvatarBlock = styled.a<StyledProps>`
    --size: ${sized};

    border-radius: 50%;
    background-color: grey;

    width: var(--size);
    height: var(--size);
    background-size: cover;
    background-position: center center;
`

const Avatar = (props: Props) => {
    return (
        <AvatarBlock 
            size="sm"
            title={props.user.name}
            style={{backgroundImage: `url(/assets/images/${props.user.image})`}}>
        </AvatarBlock>
    );
}

export default Avatar;