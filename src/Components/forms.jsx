import React from 'react';
import { ErrorMessage, Field,Form, Formik } from 'formik';
import * as Yup from 'yup';

const Forms = () => {

        const initialValues={
            text:'',
            password:''
        }
        const validationSchema=Yup.object().shape({
            text:Yup.string().required('Name is not empty'),
            password:Yup.string().matches(/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/,"Inavaild").required("Enter your password")
        })
        const handlesubmit=(values)=>
            {
                console.log(values);
            }
    return (
        <div>
            <h1>hello</h1>
            <div>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlesubmit}>
                    <Form>
                        <div>
                            <p>
                            <label>Test</label>
                            <div>
                            <Field type="text" name="text"/>
                            <ErrorMessage name='text' component='h5' className='error '/>
                            </div>
                            
                            </p>
                        </div>
                        <div>
                            <p>
                            <label>Password</label>
                            <div>
                            <Field type="text" name="password"/>
                            <ErrorMessage name='password' component='h5' className='error '/>
                            </div>
                            
                            </p>
                        </div>
                        <dv>
                            <button type='submit'>Submit</button>
                        </dv>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Forms;