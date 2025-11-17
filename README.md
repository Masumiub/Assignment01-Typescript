# 🎯 Interview Questions - Blog Task


# What are some differences between interfaces and types in TypeScript?

TypeScript-এ interface এবং type alias – দুটোই object এর structure বা shape বর্ণনা করতে ব্যবহার করা হয়। কিন্তু দুটির মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

1. Interface - শুধুমাত্র object shape/structure বর্ণনায় বেশি ব্যবহার হয়.

- Interfaces সাধারণত object, class, অথবা function এর shape declare করতে ব্যবহৃত হয়।
- Class implements করে interface ব্যবহার করতে পারে।


2. Type - আরও flexible, প্রায় সবকিছু represent করতে পারে.

- type দিয়ে শুধু object নয়, union, intersection, tuple, primitive alias— সব তৈরি করা যায়।


3. Interface - extend করা যায় (inheritance খুব সহজ)
```
interface A {
  name: string;
}

interface B extends A {
  age: number;
}
```

4. Type — extend করা যায়, কিন্তু syntax আলাদা

type A = { name: string };
type B = A & { age: number };


# What is the use of the keyof keyword in TypeScript? Provide an example.

The keyof keyword in TypeScript is used to create a union type of all keys of an object type. এটা মূলত object-এর সবগুলো key কে একটি union type আকারে বের করে আনে।

## keyof ব্যবহার করলে:
1. Object এর key গুলোকে type হিসেবে পাওয়া যায়
2. Dynamic ভাবে key access করা যায়
3. Function-এ safer access করা যায় (wrong key দিলে TypeScript error দিবে)

## Example:
interface User {
  name: string;
  age: number;
  email: string;
}

function getValue<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user: User = {
  name: "Masum",
  age: 26,
  email: "masum@example.com"
};

console.log(getValue(user, "name"));  
console.log(getValue(user, "email"));

keyof T নিশ্চিত করে যে function–এ শুধুমাত্র valid key-ই ব্যবহার করা যাবে।

## keyof with type
type Product = {
  title: string;
  price: number;
  inStock: boolean;
};

type ProductKeys = keyof Product;


# Explain the difference between any, unknown, and never types in TypeScript.

1. any — No Type Checking
এটি TypeScript-কে বলে: “এই ভ্যারিয়েবল নিয়ে আমি কোন টাইপ চেক চাই না।”


1. যেকোনো মান assign করা যায়
2. যেকোনো অপারেশন করা যায়
3. ভুল হলেও TypeScript error দেবে না
4. সবচেয়ে unsafe type

## Example:
let data: any = "Hello";
data = 10;
data = true;

data.toFixed();      
data.toUpperCase(); 



2. unknown — Type Not Known Yet (but safe)
Meaning: “আমি জানি না ভ্যারিয়েবলটি কি টাইপ হবে, কিন্তু তুমি ব্যবহার করার আগে type check করো।”

1. যেকোনো মান assign করা যায়
2. কিন্তু সরাসরি ব্যবহার করা যায় না
3. ব্যবহার করতে চাইলে type guard ব্যবহার করতে হয়
4. much safer than any

## Example
let input: unknown = "Hello";
input = 42;

// Direct use is not allowed
// input.toUpperCase();

// Allowed only after type checking
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
