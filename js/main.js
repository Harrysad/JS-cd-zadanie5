function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a = 0, b = 1, next;
        for (let i = 2; i <= n; i++) {
            next = a + b;
            a = b;
            b = next;
        }
        return b;
    }
}


let n;
n = prompt("Podaj nr. elementu, którego chcesz poznać wartość w ciągu Fibonaccim")
let result = fibonacci(n);
console.log(n + " element ciągu Fibonacciego to: " + result);
