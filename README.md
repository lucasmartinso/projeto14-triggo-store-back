# <p align = "center">🍩 Trigo Store 🥞</p>

<p align="center">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgaFJuMsQ2m3s5b8Bv64p_SO1Lgkgaf2bFQ&s" width="500" height="500" object-fit="cover"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-lucasmartinso-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/lucasmartinso/projeto14-triggo-store-back?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

This is a backend application to control the data flow of online bakery created with non-relational database MongoDB, in which it works with product selection and their respective purchase, as in an e-commerce, but without integration with payment methods.
***

## :computer:	 Tecnolgy and Concepts 

- Node.js
- JavaScript
- MongoDB

***

## :rocket: Routes

### 👥 Users 

```yml
POST /sign-up
    - Route to create a count
    - headers: {}
    - body:{
        "email": "lorem@domain.com",
        "password": "********",
}
```
    
```yml 
POST /sign-in
    - Route to make login and acess the aplication
    - headers: {}
    - body: {
       "email": "lorem@domain.com",
        "password": "********",
    }
```

```yml 
DELETE /logout (autentify)
    - Route to delete user token 
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

### 🍞 Products  

```yml 
GET /products
    - Route to get all avaliable products
    - headers: {}
    - body: {}
```

```yml 
GET /buy (autentify)
    - Route to get of total value of the shop
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
POST /products
    - Route to add product into the menu
    - headers: {}
    - body: {}
```

```yml 
POST /main
    - Route to get products to add into the bag
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
POST /bag
    - Route to add ptoduct into the bag
    - headers: {}
    - body: {}
```

```yml 
POST /finish
    - Route to finish the shop 
    - headers: {}
    - body: {}
```

```yml 
DELETE /product (autentify)
    - Route to delete product of the bag shop
    - params: id(number)
    - body: {}
```

## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/lucasmartinso/my-website.git
```

After, inside the folder, run the comand to install the dependencies.

```
npm install
```
Config the .env, .env.test and .env.development based on .env.example

To run the tests 
```
npm run test
```

To finish the process, to init the server
```
npm start or npm run dev
```

:stop_sign: Don't forget to repeat the sequence above with [repository](https://github.com/PaulaWiltiner/projeto14-triggo-front) that contains the interface of aplication, to test the project per complet.
