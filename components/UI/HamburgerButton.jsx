import { useEffect } from 'react';
import classes from '../../styles/HamburgerButton.module.scss';

const HamburgerButton = ({active, handleActive}) => {
    useEffect(()=>{
        console.log(active)
    },[])
    return (
        <div
              id="nav-icon"
              className={
                active
                  ? ` ${classes["nav-icon"]} open ${classes["nav-icon-active"]}`
                  : classes["nav-icon"]
              }
              onClick={handleActive}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
    );
}

export default HamburgerButton;