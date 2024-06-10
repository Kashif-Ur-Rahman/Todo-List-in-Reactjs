
// Part-01

React JS: 
Raect JS is a library of JS for creating/ rendering(حوالہ کرنا ) UI.

JSX(JavaScript Extension Syntax):
JSX lets us to write HTML directly inside JS.

Why use JSX instead of js?
jsx as a file extension is that a tool doesn't have to go through all your files: it can just look for those with the . jsx extension and rewrite them to be plain . js , that's all. Makes things easier for the computer

Setup the Local Environment: 
Two ways to write/create React project
1) Create-React-App 
npm Create-React-App
2) vite
npm run dev

Components in React:
Components are re-usable & independent piece of code.

Why use components React?
Every React. js component acts separately, so you can change one section of the app without needing to update everything. 

The Rules of JSX:
1. Return a single root element.
To return multiple elements from a component, wrap them with a single parent tag.
For example, you can use a <div>.

2. Close all the tags.
JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

React fragment:
 Fragments(ٹکڑا) let you group a list of children without adding extra nodes to the DOM.
 Like:  <> </>


// Part-02..

 Props are the information that you pass to a JSX tag. 
 For example: className, src, alt, width, and height are some of the props you can pass to an <img>.

React components use props to communicate with each other.

React map() Methods:
The .map() method allows you to run a function on each item in the array, returning a new array as the result. 
In React, map() can be used to generate lists.( نقشہ() طریقہ آپ کو صف میں موجود ہر آئٹم پر ایک فنکشن چلانے کی اجازت دیتا ہے، جس کے نتیجے میں ایک نئی صف واپس آتی ہے۔ React میں، map() کو فہرستیں بنانے کے لیے استعمال کیا جا سکتا ہے۔)

Conditionals in React:
Adding elements on the basis of some  condition.. (کسی شرط کی بنیاد پر عناصر کو شامل کرنا)
Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
 then (?) render name + ' ✔', otherwise (:);


uuid: It generate the unique id for us...
