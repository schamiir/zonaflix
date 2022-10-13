import React, { useEffect, useState } from 'react'
import "./PlansScreen.css"
import db from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function PlansScreen() {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('products')
        .where('active', '==', true)
        .get().then(querySnapshot => {
            const products = {};
            querySnapshot.forEach(async productDoc => {
                products[productDoc.id] = productDoc.data();
                const priceSnap = await productDoc.ref.collection
                ('prices').get();
                priceSnap.docs.forEach(price => {
                    products[productDoc.id].prices = {
                        priceId: price.id,
                        priceData: price.data()
                    }
                })

            })

            setProducts(products);
        });
    }, []); 

    console.log(products)

    const loadCheckout = async (priceId) => {
        const docRef = await db
        .collection('customers')
        .doc(user.uid)
        .collection('checkout_session')
        .add({
            price: priceId,
            success_url: window.location.origin,
            cancel_url: window.location.origin,
        });

        

    }


  return (
  
  <div className='plansScreen'>

    {Object.entries(products).map(([productId, productData]) => {

        // TODO: add some logic to check if user subscription is active

        return (
            <div className='plansScreen__plan'>
                <div className='plansScreen__info'>
                   <h5>{productData.name}</h5>
                   <h6>{productData.description}</h6>
                </div>

                <button onClick={() => loadCheckout(productData.prices.priceId)}>
                    Subscribe</button>

            </div>

        );
    })}

  </div>

  )
}

export default PlansScreen