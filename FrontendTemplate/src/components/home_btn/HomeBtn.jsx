import { useNavigate } from "react-router-dom";
import "./HomeBtn.css";

export default function HomeBtn(props) {
    const { btnTxt, nav, userData } = props;

    function afterClick() {
        const navigate = useNavigate();
        navigate(nav, { state: { userData: userData } });
    }

    return (
        <div className="home-btn-container" onClick={afterClick}>
            {btnTxt}
        </div>
    );
}
