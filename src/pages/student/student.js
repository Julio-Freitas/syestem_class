import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import * as actions from '../../store/modules/student/actions';

import { Input } from '../../components/input';
import { InputFile } from '../../components/inputFile';

import * as Styled from './styled';
import { Button } from '../../components/button';

const Student = ({ student }) => {
    const [prevewImage, setPreviewImage] = useState('');
    const [formData, setFormData] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        if (history.location.state) {
            const { id } = history.location.state;
            if (!id) history.push('/alunos');

            dispatch(actions.showStudentById(id));
        } else {
            history.push('/alunos');
        }

        return () => {
            history.location.state = '';
        };
    }, [history, dispatch]);

    useState(() => {
        if (student.Fotos) setPreviewImage(student.Fotos[0].url);
    }, [student]);

    const initalValues = {
        nome: student.nome,
        sobrenome: student.sobrenome,
        email: student.email,
        idade: student.idade,
        peso: student.peso,
        altura: student.altura,
        foto: formData,
    };

    const _handleSubmitForm = (values, { setSubmitting }) => {
        dispatch(actions.updateStudent({ id: student.id, ...values }));
        setSubmitting(false);
    };

    const hasLoadImage = (size) => {
        if (size > 2097152) {
            toast.warning('Tamanho máximo da imagem permetida é de (2MB)!');
        }
    };

    const _handleFile = (target, callback) => {
        if (target.files[0] && !hasLoadImage(target.files[0].size)) {
            setPreviewImage(URL.createObjectURL(target.files[0]));
            const formDataImage = new FormData();
            formDataImage.append('aluno_id', student.id);
            formDataImage.append('fotos', target.files[0]);
            setFormData(formDataImage);
            callback('foto', formDataImage, false);
        }
    };

    const schema = Yup.object({
        email: Yup.string()
            .email('Formato de e-mail está inválido!')
            .required('Compo e-mail é obrigatorio!'),
    });

    return (
        <Styled.StudentContainer>
            <Styled.Title>Editar Aluno</Styled.Title>
            <Formik
                initialValues={initalValues}
                validationSchema={schema}
                onSubmit={_handleSubmitForm}
            >
                {({
                    isSubmitting,
                    setFieldValue,
                    touched,
                    errors,
                    handleBlur,
                }) => (
                    <Styled.FormContainer>
                        <Form>
                            <Styled.WrapperField>
                                <Field
                                    label="Nome"
                                    name="nome"
                                    touched={touched}
                                    errors={errors}
                                    component={Input}
                                    focusIn
                                />
                                <Field
                                    label="Sobrenome"
                                    name="sobrenome"
                                    touched={touched}
                                    errors={errors}
                                    component={Input}
                                />

                                <Field
                                    label="E-mail"
                                    name="email"
                                    touched={touched}
                                    errors={errors}
                                    handleBlur={handleBlur}
                                    component={Input}
                                />
                                <Field
                                    label="Idade"
                                    name="idade"
                                    touched={touched}
                                    errors={errors}
                                    component={Input}
                                />
                                <Field
                                    label="Peso"
                                    name="peso"
                                    touched={touched}
                                    errors={errors}
                                    component={Input}
                                />
                                <Field
                                    label="Altura"
                                    name="altura"
                                    touched={touched}
                                    errors={errors}
                                    component={Input}
                                />
                            </Styled.WrapperField>

                            <Field
                                label="Foto"
                                name="foto"
                                touched={touched}
                                errors={errors}
                                onChange={({ target }) =>
                                    _handleFile(target, setFieldValue)
                                }
                                prevewImage={prevewImage}
                                component={InputFile}
                            />
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                text="Enviar"
                                style={{ width: '160px' }}
                            />
                        </Form>
                    </Styled.FormContainer>
                )}
            </Formik>
        </Styled.StudentContainer>
    );
};

Student.propTypes = {
    student: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nome: PropTypes.string.isRequired,
        sobrenome: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        idade: PropTypes.number.isRequired,
        peso: PropTypes.number.isRequired,
        altura: PropTypes.number.isRequired,
        Fotos: PropTypes.array,
    }),
};

const mapStateToProps = (state) => ({
    student: state.student.student,
});
export default connect(mapStateToProps, null)(Student);
