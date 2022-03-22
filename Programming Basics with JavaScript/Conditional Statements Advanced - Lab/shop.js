function coffeshop(input) {
    let produkt = input[0];
    let grad = input[1];
    let broika = Number(input[2]);
    let sum = 0.0;
    if (grad === 'Sofia') {
        switch (produkt) {
            case 'coffee': sum = broika * 0.50; break;
            case 'water': sum = broika * 0.80; break;
            case 'beer': sum = broika * 1.20; break;
            case 'sweets': sum = broika * 1.45; break;
            case 'peanuts': sum = broika * 1.60; break;
        }
    } else if (grad === 'Plovdiv') {
        switch (produkt) {
            case 'coffee': sum = broika * 0.40; break;
            case 'water': sum = broika * 0.70; break;
            case 'beer': sum = broika * 1.15; break;
            case 'sweets': sum = broika * 1.30; break;
            case 'peanuts': sum = broika * 1.50; break;
        }
    } else if (grad === "Varna") {
        switch (produkt) {
            case 'coffee': sum = broika * 0.45; break;
            case 'water': sum = broika * 0.70; break;
            case 'beer': sum = broika * 1.10; break;
            case 'sweets': sum = broika * 1.35; break;
            case 'peanuts': sum = broika * 1.55; break;
        }
        
    }
    console.log(sum);
}
coffeshop(["sweets","Sofia",2.23])