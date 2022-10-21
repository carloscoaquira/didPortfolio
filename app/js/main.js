const btnHeader = document.querySelector('#btnBrand');
btnHeader.addEventListener('click', () =>{
    btnHeader.classList.toggle('active');
    document.querySelector('#headerWrapper').classList.toggle('open');
});