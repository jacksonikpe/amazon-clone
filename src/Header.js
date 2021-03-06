import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider"

export default function Header() {
    const [{ basket }, state, dispatch] = useStateValue();

    return (
        <div className='header'>
            <Link to="/">
                <img 
                    className="header_logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="Amazon logo" 
                />
            </Link>

            <div className="header_search">
                <input 
                type="text" 
                className="header_searchInput" />
                <SearchIcon 
                className="header_searchIcon" />
            </div>

            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionLineOne">Hello</span>
                    <span className="header_optionLineTwo">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLinetwo
                        header_basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}
