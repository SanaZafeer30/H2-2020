import React, { Component } from 'react';
import pageData from '../pagedata';
import InfoModal from "../InfoModal";
import '../index.css';


class Users extends Component {
    render () {
        const mainContainer= {
            padding: "30px",
            height: "100%",
            background: "#f9fdf8"
        }
        const cardContainer ={
            display: "flex",
            flexWrap: "wrap"
        }
        const cardWrpper={
            minHeight: "230px",
            maxHeight: "230px",
            overflow: "hidden",
            height:" 100%",
            backgroundColor: "#f9fdf8",
            width: "calc(100%/4 - 23px)",
            maxWidth: "300px",
            minWidth: "211px",
            border: "1px solid #cccac9",
            marginRight: "20px",
            marginBottom: "20px"
        }
        const cardImg ={
            width: "100",
            height: "180px"
        }
        return (
            <div className='main-container' style={mainContainer}>
                <div className="card-container" style={cardContainer}>
                    { pageData && pageData.map((value,index)=>{
                        return(
                            <div className='card-wrpper' style={cardWrpper}>
                                <div className='card-img' style={cardImg}>
                                    <img src={value.img} alt={value.title} style={{width: "100%",height:"100%"}}/>
                                </div>
                                <InfoModal data={value}/>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}

export default Users;