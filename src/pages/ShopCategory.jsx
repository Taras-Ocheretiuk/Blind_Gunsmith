import React, {useContext} from 'react';
import './CSS/ShopCategory.css';
import {ShopContext} from "../context/ShopContext";
import Item from "../components/Item/Item";


const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img src={props.banner} alt=""/>
            <div className='content-wrap'>
                <div className='shopcategory-products'>
                    {all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} description={item.description} category={item.category}/>
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopCategory;