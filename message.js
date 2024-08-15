const message = () => {
    const name = "Karib";
    const age = 20;
    return name + ' is ' + age + ' years old.';
};

export default message; // Default Export
export const greeting = 'Hello!'; // Named Export
export function sayHello(name) {
    return `Hello, ${name}!`;
}