function Journey(input) {
    let budjet = Number(input[0]);
    let season = input[1];

    if (budjet <= 100 && season === "winter") {
        budjet = budjet * 0.70
        console.log(`Somewhere in Bulgaria
        Hotel - ${budjet.toFixed(2)}`);
    }else if (budjet <= 100 && season === "summer") {
        budjet = budjet * 0.30
        console.log(`Somewhere in Bulgaria
        Camp - ${budjet.toFixed(2)}`);
    }if (budjet <= 1000 && budjet > 100 && season === "winter") {
        budjet = budjet * 0.80
        console.log(`Somewhere in Balkans
        Hotel - ${budjet.toFixed(2)}`);
    }else if (budjet <= 1000 && budjet > 100 && season === "summer") {
        budjet = budjet * 0.40
        console.log(`Somewhere in Balkans
        Camp - ${budjet.toFixed(2)}`);
    }if (budjet > 1000) {
        budjet = budjet * 0.90
        console.log(`Somewhere in Europe
        Hotel - ${budjet.toFixed(2)}`);
    }
}
Journey(["312", "summer"])