const colors = document.querySelectorAll('.color');
const selectCode = document.getElementById('selectedColorInput');
const colorBox = document.getElementById('colorBox');
const copyHexBtn = document.getElementById('copyHexBtn');
const AddcustomColorBtn = document.getElementById('AddcustomColorBtn');
const Palette = document.querySelector('.Palette');
const customHexInput = document.getElementById('customHexInput');




colors.forEach(color => {
    color.addEventListener('click', (e) => {
        const hexCode = e.target.getAttribute("data-hex");
        selectCode.textContent = hexCode;
        colorBox.style.backgroundColor = hexCode

    })
});

copyHexBtn.addEventListener('click', () => {
    const hexCode = selectCode.textContent;
    navigator.clipboard.writeText(hexCode).then(() => {
        alert('Hex code copied to clipoard')
    })
        .catch(error => {
            alert('Error copying hex code')
        });
})

AddcustomColorBtn.addEventListener('click', () => {
    const customHexCode = customHexInput.value.trim();
    if (/^#[0-9A-F]{6}$/i.test(customHexCode)) {
        const newColor = document.createElement('div');
        newColor.classList.add('color');
        newColor.style.backgroundColor = customHexCode;
        newColor.setAttribute('data-hex', customHexCode);
        Palette.appendChild(newColor);
        newColor.addEventListener('click', () => {
            selectCode.textContent = customHexCode;
            colorBox.style.backgroundColor = customHexCode;
        })
    }

    else {
        alert('please Enter valid HexCode')
    }

});