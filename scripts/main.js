function initDivs(n) {
    const container = document.querySelector('div');

    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');

        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
}

initDivs(16*16);