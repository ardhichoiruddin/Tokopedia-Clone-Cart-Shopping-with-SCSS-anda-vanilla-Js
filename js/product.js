
// Cart 

var displayProduct = document.getElementById('displayProduct');
var cartList = document.getElementById('cartList');
var classCount = document.querySelector('.nav-cart__inner');
var totalPrice = document.getElementById('totalPrice');


var product =[
    {
        id : 1,
        gambar : 'https://www.noto.design/wp-content/uploads/18-06-14_Heritage_Render_Header-1-1100x619.jpg',
        nama : '[Special Price] elzatta Sarimbit Zevana',
        harga : 156000,
        asal : 'Kota Yogyakarta',
        cart : false,
        qty : 1,
        total : 0
    },
    {
        id : 2,
        gambar : 'https://cf.shopee.co.id/file/ed15d2ff87a8baecbc9a4dfa7f0de87f',
        nama : 'OLEVS Jam Tangan Wanita Anti Air Tali Kulit Kuarsa',
        harga : 157320,
        asal : 'DKI Jakarta',
        cart : false,
        qty : 1,
        total : 0
    },
    {
        id : 3,
        gambar : 'https://cf.shopee.co.id/file/cc84c85ba6b04f31e5215f65f1947c18',
        nama : 'Jam Tangan Pria Rolex Detik Bawah Automatic Matic',
        harga : 219999,
        asal : 'DKI Jakarta',
        cart : false,
        qty : 1,
        total : 0
    },
    {
        id : 4,
        gambar : 'https://cf.shopee.co.id/file/81ca4f39cf6547ae1fc802de7a12aa70',
        nama : 'Jam Tangan Gelang LED SKMEI Original Wristband Tahan Air',
        harga : 119999,
        asal : 'DKI Jakarta',
        cart : false,
        qty : 1,
        total : 0
    },
    {
        id : 5,
        gambar : 'https://cf.shopee.co.id/file/ba1ade37d2ac1a2f5832ad53b6c06707',
        nama : 'Reebok RD-ELE-G9 Original Jam Tangan Unisex Tali ',
        harga : 574200,
        asal : 'DKI Jakarta',
        cart : false,
        qty : 1,
        total : 0
    },

]

var saveCart = [];

function countcart(){
    // var dataCount = classCount.setAttribute('data-count', saveCart.length+1);

    if(saveCart.length == 0){
        var dataCount = classCount.setAttribute('data-count', 0);
    }else{
        var dataCount = classCount.setAttribute('data-count', saveCart.length);
    }
}

function total(){

    var total = 0;

    for (let index = 0; index < product.length; index++) {
        
        if (product[index].cart) {
            total += product[index].total;
            
        }
        
    }

    return total;

}


// Menambah Cart
function addCart(id){


    for (let index = 0; index < product.length; index++) {
        
        if(product[index].id != id || product[index].cart == true){

        }
        else{

            product[index].cart = true;
            saveCart.push(product[index].id);

            cartList.innerHTML += `

                    <li>
                        <div class="box-cart">
                            <div class="box-cart__img">
                                <img src="${product[index].gambar}" alt="">
                            </div>
                            <div class="box-cart__title">
                                <h4>${product[index].nama}</h4>
                                <p>Rp. ${numberWithCommas(product[index].harga)}</p>
                            </div>
                            <div class="box-cart__count">
                                <div class="d-flex">
                                    <button type="button" class="reduceBtn" onclick="reduceAmount(${product[index].id})">-</button>
                                    <input type="text" value="${product[index].qty}">
                                    <button type="button" class="addBtn" onclick="addAmount(${product[index].id})">+</button>
                                </div>
                                <div class="delete-chart"><button type="button" onclick="removeCart(${product[index].id})">Hapus</button></div>
                            </div>
                        </div>
                    </li>
            `;

            product[index].total = product[index].qty * product[index].harga;



        }

        totalPrice.innerHTML = `${numberWithCommas(total())}`;
        
    }

    countcart();

}


function removeCart(id){

    for (let index = 0; index < product.length; index++) {
        
        if(product[index].id == id){

            product[index].cart = false;
            product[index].total = false;
            product[index].qty = 1;

            for (let index3 = 0; index3 < saveCart.length; index3++) {
                
                if(product[index].id == saveCart[index3]){

                    console.log("hapus")

                    saveCart.splice(index3, 1);

                }else{

                }
                
            }
            updateCart();
        }
        else{
            updateCart();
        }

       
        
    }

}


function addAmount(id){

    for (let index = 0; index < product.length; index++) {
        
        if(product[index].id == id){

            if(product[index].qty > 0){

                product[index].qty = product[index].qty + 1;
                updateCart();

            }

        }
        
    }

}


function reduceAmount(id){

    for (let index = 0; index < product.length; index++) {
        
        if(product[index].id == id){

            if(product[index].qty > 1){

                product[index].qty = product[index].qty - 1;
                updateCart();

            }

        }
        
    }

}

// Update Cart
function updateCart(){

    cartList.innerHTML = '';

    for (let index = 0; index < saveCart.length; index++) {
        
        var position = saveCart[index];

        for (let index3 = 0; index3 < product.length; index3++) {
            
            if(position == product[index3].id){

                cartList.innerHTML += `

                    <li>
                        <div class="box-cart">
                            <div class="box-cart__img">
                                <img src="${product[index3].gambar}" alt="">
                            </div>
                            <div class="box-cart__title">
                                <h4>${product[index3].nama}</h4>
                                <p>Rp. ${numberWithCommas(product[index3].harga)}</p>
                            </div>
                            <div class="box-cart__count">
                                <div class="d-flex">
                                    <button type="button" class="reduceBtn" onclick="reduceAmount(${product[index3].id})">-</button>
                                    <input type="text" value="${product[index3].qty}">
                                    <button type="button" class="addBtn" onclick="addAmount(${product[index3].id})">+</button>
                                </div>
                                <div class="delete-chart"><button onclick="removeCart(${product[index3].id})">Hapus</button></div>
                            </div>
                        </div>
                    </li>
                `;

                product[index3].total = product[index3].qty * product[index3].harga;

            }

            else{

            }
            
        }

        totalPrice.innerHTML = `${numberWithCommas(total())}`;   
        
        
        
    }

    countcart();

    if(total() == 0){
        totalPrice.innerHTML = `${total()}`;
    }
    


}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




// Render Product

(()=>{

    for (let index = 0; index < product.length; index++) {
    
        displayProduct.innerHTML += `
    
            <li>
    
                <div class="display-product__inner--box">
                    <img class="img-product" src="${product[index].gambar}" alt="">
                    <div class="body-product">
                        <h3 class="title-product">${product[index].nama}</h3>
                        <p class="price-product">Rp. ${numberWithCommas(product[index].harga)}</p>
                        <p class="address-product">${product[index].asal}</p>
    
                        <button class="add-to-cart" onclick="addCart(${product[index].id})"><img src="img/cart-icon2.svg" alt=""> Tambahkan</button>
                    </div>
                </div>
            
            
            </li>
        
        `
        
    }

})()



