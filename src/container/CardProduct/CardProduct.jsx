import React, { Component, Fragment } from 'react';
import '../Product/Product.css';
import Rendang from '../../assets/images/rendang.jpg';

class CardProduct extends Component
{
    state =
    {
        order: 5
    }

    handleCounterChange = (newValue) =>
    {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () =>
    {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        });
    }

    handleMinus = () =>
    {
        if(this.state.order > 0)
        {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            });
        }
    }

    render()
    {
        return (
            <Fragment>
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src={Rendang} alt=""/>
                    </div>
                    <p className="product-title">Rendang pilihan</p>
                    <p className="product-price">Rp. 35.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;