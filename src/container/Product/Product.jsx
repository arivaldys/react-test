import React, { Component, Fragment } from 'react';
import './Product.css';
import Logo from '../../assets/images/fast-food-outline.svg';
import Cart from '../../assets/images/cart-outline.svg';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component
{
    state =
    {
        order: 5
    }

    handleCounterChange = (newValue) =>
    {
        this.setState({
            order: newValue
        });
    }

    render()
    {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="troley">
                        <img src={Cart} alt=""/>
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}

export default Product;