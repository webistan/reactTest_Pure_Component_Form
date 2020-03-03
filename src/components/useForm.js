import { useState } from 'react'
import moment from 'moment'

const useForm = (callback, validate) => {
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [show, close] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    const handleSubmit = (event) => {
        if(event) event.preventDefault()
        if(values.length !== undefined) {}
        else{
            setErrors(validate(values))
            setSubmitting(true)
        }
    }

    const handleChange = (name, value) => {
        setValues({ ...values, [name]: value });
    };

    const select = (event) => {
        let value
        if(event.parent){
            value = event.parent.value + ' ' + event.value
        }
        setValues({ ...values, 'subject': value })
    }

    const selectDate = (event) => {
        const date = moment(event).format('YYYY-MM-DD')
        setValues({ ...values, 'date': date })
    }

    const changeText= (event) => {
        setValues({ ...values, 'additionalText': event })
    }

    const getModal = () => {
        close(false)
        setSubmitting(false)
    }
    
      return {
        handleChange,
        select,
        selectDate,
        changeText,
        getModal,
        handleSubmit,
        values,
        show,
        submitting,
        errors,
    }
}

export default useForm;