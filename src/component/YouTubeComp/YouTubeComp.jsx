import React from 'react';
import './YouTubeComp.css';
import Rendang from '../../assets/images/rendang.jpg';

const YouTubeComp = (props) =>
{
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={Rendang} alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps =
{
    time: '00.00',
    title: 'Judul',
    desc: 'Deskripsi'
}

export default YouTubeComp;