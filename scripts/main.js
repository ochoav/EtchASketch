function initDivs(n) {
    clearExistingDivs();

    const container = document.querySelector('div');

    for (let i = 0; i < n*n; i++) {
        const div = document.createElement('div');

        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }

    container.style =  ` grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}), 1fr);`
}

function clearExistingDivs() {
    const gridDivs = document.querySelectorAll('.grid-container div');

    if (gridDivs) {
        const container = document.querySelector('div');
        gridDivs.forEach((div) => {
            container.removeChild(div);
        });
    }
}

function setUpClearBtn() {
    const clear = document.getElementById('clear');

    clear.addEventListener('click', (e) => {
        let n = prompt('How many rows and columns for your new grid?');
        if (!(Number)(n) || (Number)(n) > 100) {
            alert('That is not a valid number! Keep it at 100 or less...');
            return;
        }
        initDivs(n);
    });
}

initDivs(16);
setUpClearBtn();