import React, {useState} from 'react';

function OnChange(){

    const [name, setName] = useState('Guest');
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function quantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name : {name}</p>

            <input value={quantity} onChange={quantityChange} type='number'/>
            <p>Quantity : {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}/>
            <p>Coment : {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Master Card">Master Card</option>
            </select>
            <p>Payment : {payment}</p>

            <label>
                <input type="radio" value="Pickup"
                    checked={shipping ==="Pickup"}
                    onChange={handleShippingChange}
                />
                Pick up :
            </label>
            <label>
            <input type="radio" value="Delivery"
                    checked={shipping ==="Delivery"}
                    onChange={handleShippingChange}
                />
                Delivery:
            </label>
            <p>Shipping :{shipping}</p>
        </div>
    );
}

export default OnChange;