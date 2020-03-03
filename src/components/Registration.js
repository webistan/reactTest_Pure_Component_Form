import React, { useEffect, useReducer } from 'react'
import useForm from "./useForm";
import validate from './RegistrationFormValidationRules'
import { Button, Cascader, DatePicker, Form, FormControl, FormGroup, Loader, Modal, Radio, RadioGroup } from 'rsuite'
import dataReducer from '../reducers/dataReducer'

function Registration() {
  const {
      values,
      errors,
      show,
      submitting,
      handleChange,
      select,
      selectDate,
      changeText,
      getModal,
      handleSubmit
  } = useForm(form, validate)

  const [state, dispatch] = useReducer(dataReducer)
  let data = state !== undefined ? state.data : []

  useEffect(() => {
    dispatch({ type: 'GETDATA'})
  })

  function form() {
    console.log('No errors, submit callback called!');
  }

  return (
    <Form style={{ textAlign: 'center', display: 'inline-block'}}>
      <h2> Registration Form </h2>
      <br />
      <FormGroup> 
        <h5> Course </h5>
        <RadioGroup>
          <Radio value="technical"
                 checked={values.course === 'technical'}
                 onChange={(e) => handleChange('course', 'technical')}>
              Technical Report Writing </Radio>
          <Radio  value="literature"
                  checked={values.course === 'literature'}
                  onChange={(e) => handleChange('course', 'literature')}>
                English Literature </Radio>
          <Radio  value="science"
                  checked={values.course === 'science'}
                  onChange={(e) => handleChange('course', 'science')}>
                Computer Sciences </Radio>
        </RadioGroup>
        {errors.course && (
            <h6 style={{ color: 'red'}}>{errors.course}</h6>
        )}
      </FormGroup>
      <FormGroup>
        <h5> Subject </h5>
        <Cascader data={data} style={{ width: 224 }} defaultValue={values.subject} onSelect={select} />
        {errors.subject && (
            <h6 style={{ color: 'red'}}>{errors.subject}</h6>
        )}
      </FormGroup>
      <FormGroup>
        <h5> Start Date </h5>
        <DatePicker style={{ width: 280 }} onChange={selectDate} />
        {errors.date && (
            <h6 style={{ color: 'red'}}>{errors.date}</h6>
        )}
      </FormGroup>
      <FormGroup>
        <h5> Additional Notes (optional) </h5>
        <FormControl rows={5} componentClass="textarea" onChange={changeText} />
        {errors.additionalText && (
            <h6 style={{ color: 'red'}}>{errors.additionalText}</h6>
        )}
      </FormGroup>
      <FormGroup>
          <Button appearance="primary" onClick={handleSubmit}>{values.course && values.subject && values.date !== undefined && submitting === true && Object.keys(errors).length === 0 ? <Loader />: 'Register'}</Button>
          {values.course && values.subject && values.date !== undefined && submitting === true && Object.keys(errors).length === 0 ? 
            <Modal show={show}>
              <Modal.Body>
               <h5> Your course has been successfully registered </h5>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={getModal} appearance="primary"> Ok </Button>
              </Modal.Footer>
            </Modal>: null}
      </FormGroup>
    </Form>
  );
}

export default Registration;
