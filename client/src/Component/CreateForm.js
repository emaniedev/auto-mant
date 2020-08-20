import React, { ReactDOM, useState } from 'react';
import { useForm } from "react-hook-form";
import { createAuto } from '../API/Api';



function CreateForm() {
    const [formState, setFormState] = useState();
    const { register, handleSubmit, watch, errors } = useForm();


    const onSubmit = data => createAuto(data);

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

                    <button type="submit" className="btn btn-warning">Crear</button>
            </form>
        </div>
        
    )
}


export default CreateForm


