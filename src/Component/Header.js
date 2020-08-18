import React from 'react'
import '../Component/Header.css'
import {Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'

function Header() {

    const [{basket},dispatch] = useStateValue();

    return (
        <nav className="header">
            <Link to="/login">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                <div className="header__option">
                        <span className="header__optionLineOne">Hello,Rohit</span>
                        <span className="header__optionLinetwo">Sign In</span>
                </div>
                </Link>
                <Link to="/" className="header__link">
                <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLinetwo">& Orders</span>
                </div>
                </Link>
                <Link to="/" className="header__link">
                <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLinetwo">Prime</span>
                </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShopingBasketIcon/>
                        <span className="header__optionLinetwo header__basketCount">{basket?.length}</span>
                        </div>
                </Link>
                </div>

        </nav>
    )
}

export default Header
