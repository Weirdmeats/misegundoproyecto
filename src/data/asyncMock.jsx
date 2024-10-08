export const products = [
    {
        id: 1,
        name: "iPhone 1",
        category: "Celulares",
        price: "$ 199",
        description: "Primer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 2,
        name: "iPhone 2",
        category: "Celulares",
        price: "$ 199",
        description: "Segundo celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 3,
        name: "iPhone 3",
        category: "Celulares",
        price: "$ 199",
        description: "Tercer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 4,
        name: "iPhone 4",
        category: "Celulares",
        price: "$ 199",
        description: "Tercer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 5,
        name: "iPhone 5",
        category: "Celulares",
        price: "$ 199",
        description: "Tercer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 6,
        name: "iPhone 5",
        category: "Celulares",
        price: "$ 199",
        description: "Tercer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    },
    {
        id: 7,
        name: "iPhone 7",
        category: "Celulares",
        price: "$ 199",
        description: "Tercer celular de la compañia iPhone",
        stock: 10,
        img: "https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/ADDOVQHKZVO5DKB7N3JK2QLCLI.jpg"

    }
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() => {
            res(products);
        }
        , 2000);
    
    })
}