import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is reqired!')
        .min(3, 'username must be more that 3 charaters long!'),
    email: yup
        .string()
        .email('valid email address is required!')
        .required('email is required'),
    password: yup
        .string()
        .required('password is required')
        .min(7, 'password must be 7 characters long'),
    check: yup
        .boolean()
        .oneOf([true], 'must agree to the terms that need to be followed')


})
export default formSchema;