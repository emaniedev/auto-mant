import React from 'react';
import { Link } from 'react-router-dom';

function AutoCard(props) {
    return (
        <div className="card" style={{ width: 18+'rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.data.alias}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.data.brand}</h6>
                <p className="card-text">{props.data.description}</p>
                <Link className="btn btn-danger" to={`/autoForm/${props.data._id}`}> 
                   editar
                </Link>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}

export default AutoCard;