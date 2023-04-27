let nome, cognome, colore, password;
nome = prompt ("Scrivi nome");
cognome = prompt ("Scrivi cognome");
colore = prompt ("Scrivi colore");
password = nome + cognome + colore + 21;
document.getElementById('password').innerHTML = password;
console.log(
    `${password}`
)