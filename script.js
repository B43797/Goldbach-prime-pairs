function isPrime(n) {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function findGoldbach() {
    const input = document.getElementById("inputNumber").value.trim();
    const result = document.getElementById("result");
    const num = BigInt(input);

    if (num <= 4n || num % 2n !== 0n) {
        result.textContent = "Please enter an even number greater than 4.";
        return;
    }

    result.textContent = "Searching, please wait...";

    setTimeout(() => {
        const max = num / 2n;
        for (let i = 3n; i <= max; i += 2n) {
            const j = num - i;
            if (isPrime(Number(i)) && isPrime(Number(j))) {
                result.textContent = `${num} = ${i} + ${j}`;
                return;
            }
        }
        result.textContent = `No decomposition found for ${num}.`;
    }, 10);
}
