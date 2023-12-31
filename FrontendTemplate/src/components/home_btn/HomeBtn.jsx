import { useNavigate } from "react-router-dom";
import "./HomeBtn.css";

export default function HomeBtn(props) {
    const { btnTxt, nav, userData } = props;
    const navigate = useNavigate();

    function afterClick() {        
        navigate(nav, { state: { userData: userData } });   
        console.log(nav);
    }

    return (
        <button className="home-btn-container" onClick={afterClick}>
            {btnTxt}
        </button>
    );
}
