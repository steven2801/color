const mode = () => {
    const container = document.querySelector('.container');
    const bright = document.querySelector('.bright');
    const dark = document.querySelector('.dark');

    bright.addEventListener('click', () => {
        container.classList.remove('dark-active');
        bright.classList.toggle('block');
        dark.classList.toggle('none');
    });

    dark.addEventListener('click', () => {
        container.classList.remove('dark-active');
        container.classList.toggle('dark-active');
        bright.classList.toggle('block');
        dark.classList.toggle('none');
    });

};

mode();