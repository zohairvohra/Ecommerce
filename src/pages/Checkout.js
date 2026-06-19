import {useState} from 'react';

function Checkout({onOrderComplete}) {
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderNumber, setOrderNumber] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        
        const newOrderNumber = Math.floor(Math.random() * 10000);
        setOrderNumber(newOrderNumber);
        setOrderPlaced(true);
    }

    if (orderPlaced) {
        return (
            <div className="checkout-page">
                <h2>Order Placed</h2>
                <p>Thanks, {name}! Your order has been placed successfully!</p>
                <p>Order Number: {orderNumber}</p>
            </div>
        );
    }

    return (
        <div className="checkout-page">
        <h2>CHECKOUT</h2>
        <form onSubmit={handleSubmit}>
            <label>Full Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Address:</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label>City:</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />

            <button type="submit">Place Order</button>
        </form>
        </div>
    );
}

export default Checkout;