import * as yup from 'yup'

export const loginSchema = yup.object({
    username: yup.string().required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Minimum eight characters, at least one letter, one number and one special character'
        ),
})

export const signupSchema = yup.object({
    name: yup.string().required(),
    username: yup.string().required(),
    password: yup
        .string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            'Minimum eight characters, at least one letter, one number and one special character'
        ),
})
