import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css"
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux'
import { addContact } from '../../redux/contactsSlice'


const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
 name: "",
 number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();
 
  const handleSubmit = (values, actions) => {
    const finalContact = { ...values, id: nanoid() };
    dispatch(addContact(finalContact));
    actions.resetForm();
    }
  return (
      <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={ContactFormSchema}>
      <Form className={css.form}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage className={css.error}  name="name" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="tel" name="number" id={numberFieldId} />
              <ErrorMessage className={css.error} name="number" component="span" />
			<button  className={css.add_button} type="submit">Add contact</button>
			</Form>
    </Formik>

          
  )
}

export default ContactForm