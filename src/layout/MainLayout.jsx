import {useRef} from "react";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = ({children}) => {

    const footerDivRef = useRef(null);
    const handleClick = () => {
        footerDivRef.current.innerHTML = "Footer nuevo"
        footerDivRef.current.setAttribute("class", "footer-new")
    };

    return (
        <div>
            <NavBar/>
            {children}
            <div ref={footerDivRef}>Footer</div> 
            <div onClick={handleClick}>Click</div>            
        </div>
    );
}

export default MainLayout;
