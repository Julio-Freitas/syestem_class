import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import * as actionLogin from '../../store/modules/login/actions';
import { Input } from '../../components/input';

import * as Styled from './styled';

const Login = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Formato de e-mail está inválido!')
            .required('Compo e-mail é obrigatorio!'),
        password: Yup.string()
            .min(6, 'Senha deve ter no minimo 6 caracteres')
            .required('Senha obrigatória!'),
    });

    const _handleSubmitForm = (values, { setSubmitting }) => {
        dispatch(actionLogin.login(values));
        setSubmitting(false);
    };

    return (
        <Styled.LoginContainer>
            <Formik
                initialValues={{
                    email: 'juliocesar@live.com',
                    password: '123456',
                }}
                validationSchema={validationSchema}
                onSubmit={_handleSubmitForm}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <Styled.FieldWrapper>
                            <Field
                                label="E-mail"
                                type="email"
                                name="email"
                                focusIn
                                component={Input}
                                errors={errors}
                            />
                        </Styled.FieldWrapper>

                        <Field
                            label="Senha"
                            type="password"
                            name="password"
                            component={Input}
                        />

                        <button type="submit" disabled={isSubmitting}>
                            Enviar
                        </button>
                    </Form>
                )}
            </Formik>
        </Styled.LoginContainer>
    );
};

export default Login;
