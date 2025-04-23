let nombreProducto = "Celular"
let precioUnitario = 500000
let unidades = prompt("¿Cuantas unidades de " + nombreProducto + " desea comprar?")
unidades = Number(unidades)
let precioFinal = precioUnitario * unidades
const descuento = precioFinal * 0.1
const precioDescuento = precioFinal - descuento

if (unidades != 1){
    alert(`Vas a comprar ${unidades} ${nombreProducto}es`)
}else{
    alert(`Vas a comprar ${unidades} ${nombreProducto}`)
    }

if (unidades >=5){
    alert("Se te aplicará 10% de descuento. Pagarás " + precioDescuento + " en vez de " + precioFinal)
    }



alert(`Resumen final de la compra:
    Producto: ${nombreProducto} 
    Precio Unitario: $${precioUnitario} 
    Unidades: ${unidades} 
    Precio final: $${precioFinal}`)