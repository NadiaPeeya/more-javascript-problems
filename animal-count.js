function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    if (miles <= 10) {
        const count = miles * 10;
        return count;
    }

    else if (miles <= 20) {
        const first10 = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const seconDenseAnimals = restMiles * animalDensityFirst10Miles;
        const totalAnimals = firstDenseAnimals + seconDenseAnimals;
        return totalAnimals;
    }
    else {
        const first10 = 10 * animalDensityFirst10Miles;
        const seconDenseAnimals = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
    }
}
const animal = animalCount(8);
console.log(animal);