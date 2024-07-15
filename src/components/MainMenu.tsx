import { Button } from "../components/ui/button"
import { useNavigate, useState } from 'react-router-dom';



function MainMenu(){
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
      };

      const handleAboutClick = () => {
        navigate('/about');
      };

    return (
        <div id="MainMenu" className="">
            <Button variant="outline" onClick={handleHomeClick} >Home</Button>
            <Button variant="outline" onClick={handleAboutClick} >About</Button>
        </div>
    )
}

export default MainMenu
