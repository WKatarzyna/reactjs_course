import React from 'react';
import Moment from 'react-moment';



const User = (props) => {
    return (
        <div className={'container__context--text'}>
            <img className={'avatar'} alt={'avatar'} src={props.avatar}/>
            <p>Name and Surname:<strong>{props.name}</strong></p>
            <p>Email: <strong>{props.email}</strong></p>
            <p>Address: <strong>{props.address}</strong></p>
            <p>Registration date:<strong> <Moment
                format="dddd, MMMM Do YYYY, h:mm:ss a">{props.reqistered}</Moment></strong></p>
                <button className={'submitBtn'} type="button" value={props.id} onClick={() => props.click(props.id)}>
                    Click Me for details!
                </button>
        </div>
    )
};


export default User;