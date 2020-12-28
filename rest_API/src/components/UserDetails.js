
import Map from './Map';
import {Link} from "react-router-dom";
import React from "react";
 const UserDetails = (props) => {
     const user = props.location.state;
     const latitude = parseFloat(user[0].location.coordinates.latitude);
     const longitude= parseFloat(user[0].location.coordinates.longitude);
     const position = [latitude, longitude];
        return(

            <div className = {'container__context--text'}>
                <nav>
                    <Link to={"/"}>Home</Link>
                </nav>
                <img className={'avatar'} alt={'avatar'} src={user[0].picture.large}/>
                <p>Name:<strong>{user[0].name.first}</strong></p>
                <p>Surname:<strong>{user[0].name.last}</strong></p>
                <p>Email: <strong>{user[0].email}</strong></p>
                <p>Address: <strong>I am here :)</strong></p>
                <Map position={position}></Map>
            </div>
        )
}

export default UserDetails;