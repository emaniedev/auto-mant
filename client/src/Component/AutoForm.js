import React, { ReactDOM, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { useHistory, useParams  } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Autos from '../API/Autos';

const FIELDS = [
    'plate_number',
    'brand',
    'model',
    'alias',
    'description',
    //'obtention_date',
]
const EDITLBL = 'Editar';
const CREATELBL = 'Crear';

function AutoForm() {
    const [formState, setFormState] = useState();
    const [textBtn, setTextBtn] = useState('');
    const { register, handleSubmit, watch, errors, setValue } = useForm();
    const history = useHistory();
    const { id } = useParams();
    
    
    useEffect(() => {
        async function fetchAuto() {
            try {
                console.log(id);
                if (id) {
                    setTextBtn(EDITLBL);
                    const response = await Autos.getOneAuto(id);
                    FIELDS.forEach(field => setValue(field, response[field]));
                    // It´s a Date and needs to be cooked.
                    // Mongo Date Format = "2017-07-08T22:00:00.000Z"
                    // Needed Date = "yyyy-MM-dd"
                    if (response.obtention_date) {
                        const cleanDateMs = response['obtention_date'].split('T');
                        setValue('obtention_date', cleanDateMs[0]);
                    }

                } else {
                    setTextBtn(CREATELBL);
                }
            } catch (error) { }
        };
        fetchAuto();
    }, []);

    const onSubmit = (data) => {
        if (id) {
            Autos.updateOneAuto(id, data);   
        } else {
            Autos.createAuto(data);
        }
        history.push('/viewautos', { reload: true});
    }

    return (
        <div id="createFormDiv">
            < form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="plate_number">Matrícula</label>
                    <input type="text" className="form-control" name="plate_number" aria-describedby="plate_numberHelp" placeholder='0000-XXX' ref={register}/>
                    <small name="plate_numberHelp" className="form-text text-muted">ej; X-0000-X, 0000-XXX</small>
                </div>
                <div className="form-group">
                    <label htmlFor="brand">Marca</label>
                    <input type="text" className="form-control" name="brand" aria-describedby="brandHelp" ref={register}></input>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="model">Modelo</label>
                    <input type="text" className="form-control" name="model" aria-describedby="modelHelp" ref={register}></input>

                </div>
                <div className="form-group">
                    <label htmlFor="alias">Nombre Vehículo</label>
                    <input type="text" className="form-control" name="alias" aria-describedby="aliasHelp" ref={register}></input>
                    <small name="aliasHelp" className="form-text text-muted">Nombre para recordar el vehículo</small>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descripción</label>
                    <textarea className="form-control" name="description" aria-describedby="descriptionHelp" ref={register}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="obtention_date">Fecha de obtención</label>
                    <input type="date" className="form-control" name="obtention_date" aria-describedby="obtention_dateHelp" ref={register}></input>
                </div>

                <button type="submit" className="btn btn-warning">{textBtn}</button>
            </form>
        </div>
        
    )
}


export default AutoForm


