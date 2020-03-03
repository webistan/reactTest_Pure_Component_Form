export default function validate(values){
    let errors = {};
    if(!values.course){
        errors.course = "Course is Required"
    }
    if(!values.subject){
        errors.subject = "Subject is Required"
    }
    if(!values.date){
        errors.date = "Date is Required"
    }
    else if(values.date === '2019-12-20' || values.date === '2020-01-15' || values.date === '2020-02-01'){}
    else{
        errors.date = "Your selected course and subject is not offered beginning from your selected date"
    }
    if(values.additionalText){
        const length = values.additionalText.length
        if(length < 20){
            errors.additionalText = "Please enter atleast 20 Charcters"
        }
        else if(length > 500){
            errors.additionalText = "Charcters should not be more than 500"
        }
    }
    return errors;
}