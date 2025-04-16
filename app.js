let nombreProducto = "Celular"
let precioUnitario = 500000
let unidades = prompt("¿Cuantas unidades de " + nombreProducto + " desea comprar?")
unidades = Number(unidades)
let precioFinal = precioUnitario * unidades

alert(`Resumen final de la compra:
    Producto: ${nombreProducto} 
    Precio Unitario: $${precioUnitario} 
    Unidades: ${unidades} 
    Precio final: $${precioFinal}`)