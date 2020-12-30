import React, { Component } from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import BlogPost from '../BlogPost/BlogPost';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';

class Home extends Component
{
    state =
    {
        showComponent: true
    }

    componentDidMount()
    {
        // setTimeout(() => 
        // {
        //     this.setState(
        //     {
        //         showComponent: false
        //     })
        // }, 15000)
    }

    render()
    {
        return (
            <div>
                {/* <p>YouTube Component</p>
                <hr/>
                <YouTubeComp 
                    time="7.12" 
                    title="Makan Rendang"
                    desc="2x ditonton, 2 hari yang lalu" />
                <YouTubeComp 
                    time="8.02" 
                    title="Hobi Rendang"
                    desc="200x ditonton, 10 hari yang lalu" />
                <YouTubeComp 
                    time="5.05" 
                    title="Rendang Bikin Laper"
                    desc="500x ditonton, 5 hari yang lalu" />
                <YouTubeComp 
                    time="4.12" 
                    title="Dosis Rendang Harian"
                    desc="1.000x ditonton, 14 hari yang lalu" />
                <YouTubeComp /> */}
                {/* <p>Counter</p>
                <hr/>
                <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr/>
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    :
                    null
                } */}
                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            </div>
        )
    }
}

export default Home;