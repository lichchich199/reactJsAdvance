import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

 export default function FormProject(props) {
    const navigate = useNavigate();

    // use yup to create a validattion schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name is required'),
        type: Yup.string()
            .required('Type is required'),
        image: Yup.string()
            .required('Image is required'),
        postalCode: Yup.string()
            .required('Postal Code is required'),
        numberPeople: Yup.string()
            .required('Number People is required'),
        startDate: Yup.string()
            .required('Start Date is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };
    if(props.valuesEdit) {
        formOptions.values = props.valuesEdit
    }
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    return (
            <form onSubmit={handleSubmit((data) => {
                console.log(data)
                props.onSubmit(data)
            })}>
                <div className="form-row">
                    <div className="form-group col-5">
                        <label>Name</label>
                        <input name="name" type="text" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.name?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Type</label>
                        <input name="type" type="text" {...register('type')} className={`form-control ${errors.type ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.type?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Image URL</label>
                        <input name="image" type="text" placeholder='https://example.com/avatar.jpg' {...register('image')} className={`form-control ${errors.image ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.image?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Postal Code</label>
                        <input name="postalCode" type="text" {...register('postalCode')} className={`form-control ${errors.postalCode ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.postalCode?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Number People</label>
                        <input name="numberPeople" type="text" {...register('numberPeople')} className={`form-control ${errors.numberPeople ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.numberPeople?.message}</div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col">
                        <label>Start Date</label>
                        <input name="startDate" type="date" {...register('startDate')} className={`form-control ${errors.startDate ? 'is-invalid' : ''}`} disabled={props?.mode === 'CONFIRM'}/>
                        <div className="invalid-feedback">{errors.startDate?.message}</div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-1">{props.titleButton}</button>
                </div>
                {props.titleButton === 'Edit' ? 
                <button type="button" onClick={() => {
                        navigate(-1);
                }}>Cancel
                </button>
                    : ''
                }
            </form>
    );
}
