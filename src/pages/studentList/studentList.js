/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as Styled from './styled';
import * as GlobalStyle from '../../styles/global';
import * as action from '../../store/modules/studentList/actions';

const StudentList = ({ studentListSate }) => {
    const dispatch = useDispatch();
    // const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        dispatch(action.studentListRequest());
    }, [dispatch]);
    return (
        <Styled.LoginContainer>
            <GlobalStyle.ContainerGlobal>
                {!!studentListSate && 'tem'}
            </GlobalStyle.ContainerGlobal>
        </Styled.LoginContainer>
    );
};

export default StudentList;
