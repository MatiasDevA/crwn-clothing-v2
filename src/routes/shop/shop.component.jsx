

import { useContext } from 'react'
import { ProductContext } from '../../context/product.context'
import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'
const Shop = () => {

    const {products} = useContext(ProductContext)

    return (
        <div className='products-containter'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product}></ProductCard>
               
            ))}
        </div>
    )
}

export default Shop