/* eslint-disable react/prop-types */
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as Styled from './styled';
import * as action from '../../store/modules/studentList/actions';
import { CardFlip } from '../../components/cardfip';

const StudentList = ({ studentListRedux, history }) => {
    const dispatch = useDispatch();
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        setStudentList(studentListRedux);
    }, [studentListRedux]);

    useEffect(() => {
        dispatch(action.studentListRequest());
    }, [dispatch]);
    return (
        <Styled.Container>
            <h1>Lista de Alunos</h1>
            <Styled.StudentListContainer>
                {studentList.map((student) => (
                    <CardFlip
                        key={student.id.toString()}
                        name={student.nome}
                        years={student.idade}
                        heigth={student.altura}
                        weigth={student.peso}
                        email={student.email}
                        onClickDelete={(e) => console.log(e)}
                        onClickEdit={() =>
                            history.push(`/aluno/edit`, { id: student.id })
                        }
                    />
                ))}
            </Styled.StudentListContainer>
        </Styled.Container>
    );
};
const mapStateToProps = (state) => ({
    studentListRedux: state.studientList.list,
});
export default connect(mapStateToProps, null)(StudentList);
