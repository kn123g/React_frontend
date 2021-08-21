import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts,setProducts} from '../../redux/actions/productActions'

const Products = ()=>{
    
    const productSelector = (useSelector(state => state.allProducts?.products));
    const [productsState,setProductsState] = useState(productSelector);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('without dependency array called')
        if(!productSelector === true)
        {
            dispatch(getProducts());
        }
        else{
            setProductsState([...productSelector]);
        }
    },
    []);

    useEffect(()=>{
        if(!productSelector !== true){
            setProductsState([...productSelector]);
        }
    },[productSelector]);

    function onclick(){
        dispatch(setProducts());
        setProductsState([...productSelector]);
    }
        
    return (
        <>
        {productsState?.map(p => (<div key={p.id}><h1>{p.title}</h1><h1>{p.category}</h1></div>))}
        <button class="btn" onClick={onclick}>GET PRODUCTS</button>
        {/* {console.log(productsState)} */}
        </>
    )
}

export default Products;