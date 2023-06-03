import NotFoundImage from '../assets/Page-Not-Found-s.png';
import { useNavigate } from 'react-router-dom';

function NotFound() {

    const navigation = useNavigate();

    function notFaundToMain() {
        navigation('/');
    }

    return (
        <div className='notfound-div'>
            <img src={NotFoundImage} alt='hat' />
            <button className='notfound-btn' onClick={notFaundToMain}>Strona główna</button>
        </div>
    );
}
//<h1>Not Found 🧐</h1>

export default NotFound;