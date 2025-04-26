import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making API requests
import PhoneVerification from "../../components/CheckoutForm/PhoneVerification/PhoneVerification";
import CheckOutOrder from "../../components/CheckoutForm/CheckoutOrder/CheckoutOrder";
import "./Checkout.css";
const mongoose = require('mongoose');

const Checkout = (props) => {
  const [userInfo, setUserInfo] = useState(null); // Handle user info state
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  // State for the delivery address form
  const [addressData, setAddressData] = useState({
    address: "",
    city: "",
    state: "",
    locality: "",
    streetName: "",
    flatNumber: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const cart = { // Dummy cart data, replace with your actual cart data
    cartData: {
      totalQuantity: 1,
      cartTotal: 100,
      items: [{ _id: new mongoose.Types.ObjectId(), productId: "P1", name: "Product 1", image: "image.jpg", price: 100, quantity: 1 }]
    }
  };

  const taxes = (cart.cartData.cartTotal * 5) / 100;
  const shipping = 0;
  const totalPay = cart.cartData.cartTotal + shipping + taxes;

  useEffect(() => {
    if (cart.cartData.totalQuantity === 0) {
      props.history.push("/"); // Redirect if cart is empty
    }
  }, [cart.cartData.totalQuantity, props.history]);

  // Handle user login (only phone number verification)
  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", { phone });
      setUserInfo(response.data); // Store the user info in the state
      console.log(response.data); // Log the response to verify
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Handle user registration (register with phone number only)
  const handleRegister = async () => {
    try {
      const response = await axios.post("/api/users/register", {
        phone,
      });
      setUserInfo(response.data); // Store the user info in the state
      console.log(response.data); // Log the response to verify
      setIsRegistered(true);
    } catch (error) {
      console.error("Registration failed", error);
    }
  };

  // Update address data on form change
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle order submission
  const handleOrder = async () => {
    if (!userInfo) {
      console.log("User info is missing");
      return; // Early exit if user is not logged in
    }
    if (cart.cartData.items.length === 0) {
      console.log("Cart is empty");
      return; // Early exit if cart is empty
    }

    try {
  
      const orderData = {
        id: userInfo._id, // Make sure userInfo contains _id
        orderItems: cart.cartData.items.map((item) => {
          if (mongoose.Types.ObjectId.isValid(item._id)) {
            return {
              _id: new mongoose.Types.ObjectId(item._id),  // Create ObjectId only if valid
              product: item.productId,
              name: item.name,
              image: item.image,
              price: item.price,
              quantity: item.quantity,
            };
          } else {
            console.error(`Invalid _id: ${item._id}`);  
            return null
          }
        }).filter(item => item !== null), // Remove invalid items from the array
        customerAddress: {
          address: addressData.address,
          city: addressData.city,
          state: addressData.state,
          locality: addressData.locality,
          streetName: addressData.streetName,
          flatNumber: addressData.flatNumber,
          postalCode: addressData.postalCode,
          country: addressData.country,
          phone: addressData.phone,
        },
        cartTotal: cart.cartData.cartTotal,
        taxes,
        shippingPrice: shipping,
        totalPrice: totalPay,
        isPaid: true, // Assuming payment is done
      };

      console.log("This is the orderData:", orderData); // Check if orderData is correct

      console.log("this is obejct:",orderData.orderItems)

      const response = await axios.post("http://localhost:3001/api/orders", orderData);
      console.log("Order placed successfully", response.data);
    } catch (error) {
      console.error("Error placing order", error);
    }
  };

  return (
    <div className="checkout-wrapper wrapper">
      <div className="checkout">
        {/* User Login / Registration Form */}
        {!userInfo ? (
          <div>
            <h3>{isRegistered ? "Login" : "Register"}</h3>
            <form>
              {isRegistered ? (
                <>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button type="button" onClick={handleLogin}>
                    Login
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <button type="button" onClick={handleRegister}>
                    Register
                  </button>
                </>
              )}
            </form>
            <button onClick={() => setIsRegistered(!isRegistered)}>
              {isRegistered ? "Go to Register" : "Go to Login"}
            </button>
          </div>
        ) : (
          <PhoneVerification /> // Show verification step after login
        )}

        {/* Delivery Address Form */}
        {userInfo && (
          <div className="delivery-address-form">
            <h3>Delivery Address</h3>
            <form>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={addressData.address}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="city"
                placeholder="Enter City"
                value={addressData.city}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="state"
                placeholder="Enter State"
                value={addressData.state}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="locality"
                placeholder="Enter Locality"
                value={addressData.locality}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="streetName"
                placeholder="Enter Street Name"
                value={addressData.streetName}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="flatNumber"
                placeholder="Enter Flat Number"
                value={addressData.flatNumber}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Enter Postal Code"
                value={addressData.postalCode}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="country"
                placeholder="Enter Country"
                value={addressData.country}
                onChange={handleAddressChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter Phone Number"
                value={addressData.phone}
                onChange={handleAddressChange}
              />
            </form>
          </div>
        )}

        {/* Submit Order Button */}
        <div className="submit-order-button">
          <button onClick={handleOrder}>Submit Order</button>
        </div>
      </div>

      {/* Checkout Order Summary */}
      <CheckOutOrder />
    </div>
  );
};

export default Checkout;
