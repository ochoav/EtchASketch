function initDivs(n) {
    const container = document.querySelector('div');

    for (let i = 0; i < n; i++) {
        const div = document.createElement('div');
        //div.style = 'width: 50px; height: 50px; text-align: center;'
        //For visual purposes during testing
        div.textContent = 'a';
        container.appendChild(div);
    }
}

initDivs(16*16);