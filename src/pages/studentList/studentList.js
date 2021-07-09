/* eslint-disable react/prop-types */
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import * as Styled from './styled';
import * as action from '../../store/modules/studentList/actions';

const StudentList = ({ studentListRedux }) => {
    const dispatch = useDispatch();
    const [studentList, setStudentList] = useState([]);
    useEffect(() => {
        console.log(studentListRedux);
        setStudentList(studentListRedux);
    }, [studentListRedux]);

    useEffect(() => {
        dispatch(action.studentListRequest());
    }, [dispatch]);
    return (
        <Styled.StudentListContainer>
            {console.log(studentList)}
            <Styled.CardContainer>
                <Styled.Card>
                    <Styled.CardImage></Styled.CardImage>
                    <Styled.CardInfo>
                        <p> José Lemos de Freitas</p>
                        <p>jota@live.com</p>
                    </Styled.CardInfo>
                </Styled.Card>
            </Styled.CardContainer>
        </Styled.StudentListContainer>
    );
};
const mapStateToProps = (state) => ({
    studentListRedux: state.studientList.list,
});
export default connect(mapStateToProps, null)(StudentList);
