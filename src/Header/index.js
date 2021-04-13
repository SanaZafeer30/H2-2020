import React from 'react';
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';

const Header =()=> {
    const history = useHistory();
    const clickHandler = (e)=>{
        history.push('/user-login');
    }
    const mainHeader={
        backgroundColor: "rgba(151, 161, 151, 0.952)",
        boxShadow:"1px 2px 2px #cccac9" ,
        padding:" 20px",
        height: "70px",
        minHeight:" 70px",
        position: "relative",
    }
    const loginBtn={
        backgroundImage: "linear-gradient(to right,rgba(217, 231, 16, 0.952)0%, rgba(3, 75, 3, 0.856) 66%)",
        border: "none",
        padding:" 5px 28px",
        boxSizing: "content-box",
        fontSize: "16px",
        fontFamily: 'EB Garamond',
        fontWeight: "600",
        color: "#fdfffd",
        textTransform: "capitalize",
        borderRadius: "6px",
        outline: "none",
        marginRight: "12px",
    }
    return (
    <div className='main-header' style={mainHeader}>
        <div style={{display:"flex",justifyContent:"flex-end"}}>
            <button className="login-btn" onClick={clickHandler} style={loginBtn}>login</button>
        </div>
    </div>
    )
}
export default withRouter(Header);