type InputValueType = string | number | boolean;

function formatValue(value: InputValueType): InputValueType {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return !value;
    }
    return value;
}



type InputTypePro2 = string | any[];

function getLength(inputValue: InputTypePro2): number {
    if (typeof inputValue === "string") {
        return inputValue.length;
    }

    if (Array.isArray(inputValue)) {
        return inputValue.length;
    }

    return 0;
}




interface PersonType {
    name: string;
    age: number;
    getDetails(): string;
}

class Person implements PersonType {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}




type BookType = {
    title: string;
    rating: number;
}

type BooksArrayType = BookType[];

function filterByRating(items: BooksArrayType): BooksArrayType {
    return items.filter(item => item.rating >= 4);
}





type UserType = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

type UsersArrayType = UserType[];

function filterActiveUsers(Users: UsersArrayType): UsersArrayType {
    return Users.filter(User => User.isActive === true)
}





interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean
}

function printBookDetails(inputBook: Book): string {
    console.log(
        `Title: ${inputBook.title}, Author: ${inputBook.author}, Published: ${inputBook.publishedYear}, Available: ${inputBook.isAvailable ? "Yes" : "No"}`
    );
    return `Title: ${inputBook.title}, Author: ${inputBook.author}, Published: ${inputBook.publishedYear}, Available: ${inputBook.isAvailable ? "Yes" : "No"}`
}






function getUniqueValues<T extends number | string>(array1: T[], array2: T[]): T[] {
    const result: T[] = [];
    const seen: { [key: string]: boolean } = {};

    const combinedArray = [...array1, ...array2];

    for (let i = 0; i < combinedArray.length; i++) {
        const value = combinedArray[i];
        const key = typeof value + value; 

        if (!seen[key]) {
            seen[key] = true;
            result.push(value);
        }
    }

    return result;
}




type ProductType = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

type ProductArrayType = ProductType[];

function calculateTotalPrice(products: ProductArrayType): number {
    return products.reduce((total, product) => {
        const mainPrice = product.price * product.quantity;

        if (product.discount) {
            const discountAmount = mainPrice * (product.discount / 100);
            return total + (mainPrice - discountAmount);
        }

        return total + mainPrice;
    }, 0)
}



