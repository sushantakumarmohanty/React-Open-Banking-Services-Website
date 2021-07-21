
import React from 'react'
import Button from '@material-ui/core/Button';
function Maplist(props) {
    return (
        <div>
            {props.data.map((user, id) => (
                <div className="bg-colorId">
                    <div className="user" key={id}>{user.name}</div>
                    <h4>{user.id}</h4>
                    <hr />
                    <hr />
                </div>
            ))}
           
        </div>
    )
}

export default Maplist
