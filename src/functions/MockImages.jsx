const getMockImagePath = (productCategory) => {
    switch (productCategory) {
        case 'Laptopy i komputery':
            return "/src/assets/test_laptop.webp";
        case 'Smartfony i smartwatche':
            return "/src/assets/test_phone.webp";
        case 'Podzespoły komputerowe':
            return "/src/assets/test_hardware.webp";
    }
}

export default getMockImagePath;