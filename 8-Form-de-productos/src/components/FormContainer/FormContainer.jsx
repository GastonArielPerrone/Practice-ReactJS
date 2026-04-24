import React from "react";
import { ProductForm } from "../ProductForm/ProductForm";
import "./FormContainer.css";

export const FormContainer =() => {
    const [datosForm, setDatosForm] = React.useState({
        name: "",
        price: "",
        stock: "",
        image: ""
    });

    const [imagen, setImagen] = React.useState(null);

    const manejarImagen =(e) => {
        const file = e.target.files[0];
        setImagen(file);
    }

    const manejarCambio =(e) => {
        const { name, value } = e.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarEnvio = async (e) => {
        e.preventDefault();
        console.log(datosForm);
        if (!imagen) {
            console.log("No se ha seleccionado una imagen.");
            return;
        }

    const API_KEY = "c030e5919fe6ede1d9f9c0ecf4777275";
    const formData = new FormData();
    formData.append("image", imagen);

    try {
        console.log("Subiendo imagen a Imgbb...");
        const respuestaImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${API_KEY}`, {
            method: 'POST',
            body: formData
        });
        const datosImgbb = await respuestaImgbb.json();
        if (datosImgbb.success) {
            console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        const productoCompleto = {
        ...datosForm,
        urlImagen: datosImgbb.data.url
        };

        console.log('Enviando los siguientes datos COMPLETOS a la API:',
        productoCompleto);

        } else {
            console.error("Error al subir la imagen a Imgbb:", datosImgbb);
        }
    } catch (error) {
        console.error("Error en la solicitud a Imgbb:", error);
    }
    };

    return (
        <ProductForm 
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarImagen={manejarImagen}
        />
    )
}