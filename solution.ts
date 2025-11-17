type InputValueType = string | number | boolean;

function formatValue (value: InputValueType): InputValueType{
    if (typeof value === 'string'){
        return value.toUpperCase();
    }
    else if(typeof value === 'number'){
        return value * 10;
    }
    else if (typeof value === 'boolean'){
        return !value;
    }
    return value;
}



type InputTypePro2 = string | Array<any>;

function getLength (inputValue: InputTypePro2): number {
    return inputValue.length;
}

interface PersonType {
    name: string;
    age: number;
    getDetails(): string;
}

class Person implements PersonType{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

     getDetails(): string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
     }
     
}



type BookType = {
    title: string;
    rating: number;
}

type BooksArrayType = BookType[];

function filterByRating(items: BooksArrayType): BooksArrayType{
    return items.filter(item => item.rating >= 4);
}

// const books: BooksArrayType = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));



type UserType = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

type UsersArrayType = UserType[];

function filterActiveUsers(Users : UsersArrayType): UsersArrayType{
    return Users.filter(User => User.isActive === true)
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));



interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(inputBook : Book ): string{
    return `Title: ${inputBook.title}, Author: ${inputBook.author}, Published: ${inputBook.publishedYear}, Available: ${inputBook.isAvailable ? "Yes" : "No"}`
}

// const myBook: Book = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: true,
// };

//console.log(printBookDetails(myBook));



function getUniqueValues(array1: number[], array2: number[]): number[]{
    const result: number[] = [];

    const combinedArray = [...array1, ...array2];

    for(let i=0; i<combinedArray.length; i++){
        const currentValue = combinedArray[i];

        let isDuplicate = false;

        for(let j=0; j<result.length; j++){
            if(result[j] === currentValue){
                isDuplicate = true;
                break;
            }
        }

        if(!isDuplicate){
            result.push(currentValue);
        }
    }


    return result;
}

// const array1 = [1, 2, 3, 4, 5, 5, 6, 7];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));



type ProductType = {
    name: string;
    price: number;
    quantity : number;
    discount?: number;
}

type ProductArrayType = ProductType[];

function calculateTotalPrice(products: ProductArrayType): number{
    return products.reduce((total, product)=> {
        const mainPrice = product.price * product.quantity;

        if(product.discount){
            const discountAmount = mainPrice * (product.discount / 100);
            return total + (mainPrice - discountAmount);
        }

        return total + mainPrice;
    },0)
}

// const products: ProductArrayType = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//     { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));

