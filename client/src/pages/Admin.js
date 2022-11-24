import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import ProductList from "../components/Admin/ProductList";
import { ADD_PRODUCT } from "../utils/mutations";
import Auth from '../utils/auth';
const Admin = () => {
    const [formState, setFormState] = useState({ name: '', description: '', price: '', quantity: '', category:'' });
    const [addProduct, { error }] = useMutation(ADD_PRODUCT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log({name: formState.name, description: formState.description, price: parseFloat(formState.price), quantity: parseInt(formState.quantity), category: formState.category});
        try {
            const addNewP = await addProduct({
                variables: { name: formState.name, description: formState.description, price: parseFloat(formState.price), quantity: parseInt(formState.quantity), category: formState.category  },
                
            });

            return addNewP;
            
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container">
            welcome to admin
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        placeholder="name"
                        name="name"
                        type="text"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="description"
                        name="description"
                        type="text"
                        on onChange={handleChange}
                    />
                    {/* <input
                        placeholder="image"
                        name="image"
                        type="text"
                        on onChange={handleChange}
                    /> */}
                    <input
                        placeholder="price"
                        name="price"
                        type="text"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="quantity"
                        name="quantity"
                        type="text"
                        on onChange={handleChange}
                    />
                    <input
                        placeholder="category"
                        name="category"
                        type="text"
                        on onChange={handleChange}
                    />
                    <button type="submit">submit</button>
                </form>
            </div>

            <div>
                <ProductList />
            </div>
        </div>

    );
};

export default Admin;