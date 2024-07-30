document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('main-content');

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(city => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${city.img}" alt="${city.city}">
                    <div class="card-content">
                        <h3>${city.city}</h3>
                        <p>${city.desc}</p>
                        <p>Precio base: $${city.price}</p>
                        <button onclick="selectCity(${city.id})">Seleccionar</button>
                    </div>
                `;
                mainContent.appendChild(card);
            });
        });
});

function selectCity(cityId) {
    localStorage.setItem('selectedCity', cityId);
    window.location.href = 'detail.html';
}
