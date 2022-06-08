const assert = require("assert")

let p1 = require("../models/Saul")

let productos = new p1();

describe('Este se usa para obtener todos los Productos...', function(){
    it('Obtener todos los productos...', function(){
        for(let i = 0; i <= productos.produc.length; i++){
            console.log(productos.produc[i])
        }

        assert.deepEqual(productos.produc, [{id: 1, nombre: "HotDog", Precio: 15},{id: 2, nombre: "Hamburguesa", Precio: 35},{id: 3, nombre: "CocaCola", Precio: 15},{id: 4, nombre: "Papas", Precio: 20},{id: 5, nombre: "Combo", Precio: 120}])
    })
})


describe('Agregar nuevos productos', function(){
    it('Aqui agregamos un nuevo producto', function(){
        productos.produc.push({
            id: 6,
            nombre: "Sabritas",
            Precio: 10
        })
        for(let i = 0; i <= productos.produc.length; i++){
            console.log(productos.produc[i])
        }

        assert.deepEqual(productos.produc, [{id: 1, nombre: "HotDog", Precio: 15},{id: 2, nombre: "Hamburguesa", Precio: 35},{id: 3, nombre: "CocaCola", Precio: 15},{id: 4, nombre: "Papas", Precio: 20},{id: 5, nombre: "Combo", Precio: 120},{id: 6, nombre: "Sabritas", Precio: 10}])
    })
})

describe('Actualizar un Producto', function(){
    it('Aqui actualizamos un producto', function(){
        productos.produc.forEach((producto) => {
            if(producto.id == 1){
                producto.nombre = 'HotChetos';
                producto.Precio = 21;
            }
            console.log(producto);
        })
        assert.deepEqual(productos.produc, [{id: 1, nombre: "HotChetos", Precio: 21},{id: 2, nombre: "Hamburguesa", Precio: 35},{id: 3, nombre: "CocaCola", Precio: 15},{id: 4, nombre: "Papas", Precio: 20},{id: 5, nombre: "Combo", Precio: 120},{id: 6, nombre: "Sabritas", Precio: 10}])

    })
})

describe('Borrar Producto', function(){
    it('Aqui borramos el producto', function(){
        productos.produc.forEach((producto, index) => {
            if(producto.id == 2){
                productos.produc.splice(index,1)
            }
            console.log(producto);
        })

        assert.deepEqual(productos.produc, [{id: 1, nombre: "HotChetos", Precio: 21},{id: 3, nombre: "CocaCola", Precio: 15},{id: 4, nombre: "Papas", Precio: 20},{id: 5, nombre: "Combo", Precio: 120},{id: 6, nombre: "Sabritas", Precio: 10}])

    })
})