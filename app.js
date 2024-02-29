
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('homeBtn').addEventListener('click', () => {
        document.getElementById('home').classList.remove('hidden');
        document.getElementById('categoria').classList.add('hidden');
    });

    document.getElementById('categoriaBtn').addEventListener('click', () => {
        document.getElementById('home').classList.add('hidden');
        document.getElementById('categoria').classList.remove('hidden');
        caricaProdotti();
    });
});

function caricaProdotti() {
    const prodottiContainer = document.getElementById('prodotti');
    prodottiContainer.innerHTML = ''; // Pulisci i prodotti esistenti
    
    // Esempio di prodotti
    const prodotti = [
        { nome: 'Bottiglia d\'acqua', colore: '#0000FF', dimensione: '500ml' },
        { nome: 'T-shirt sostenibile', colore: '#008000', dimensione: 'M' }
    ];

    prodotti.forEach(prodotto => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${prodotto.nome}</strong> - Colore: <span style="background-color:${prodotto.colore}; width: 20px; height: 20px; display: inline-block; border: 1px solid #000;"></span>, Dimensione: ${prodotto.dimensione}`;
        prodottiContainer.appendChild(div);
    });
}
