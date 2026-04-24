import "./ProductForm.css"

export const ProductForm =(datosForm, manejarCambio, manejarEnvio, manejarImagen) => {
    return (
        <form className="flex-column" onSubmit={manejarEnvio}>
            <h3>Agregar nuevo producto</h3>
            <label>
                Nombre del producto:
                <input type="text" name="name" placeholder="Ej: Parrila eléctrica" value={datosForm.name} onChange={manejarCambio}/>
            </label>
            <label>
                Precio $:
                <input type="number" name="price" placeholder="Ej:25000.75" value={datosForm.price} onChange={manejarCambio}/>
            </label>
            <label>
                Stock:
                <input type="number" name="stock" placeholder="Ej:10" value={datosForm.stock} onChange={manejarCambio}/>
            </label>
            <label>
                Subir imágen:
                <input type="file" name="image" placeholder="Ej: https://..." onChange={manejarImagen}/>
            </label>
            <button type="submit">➕</button>
        </form>
    )
}