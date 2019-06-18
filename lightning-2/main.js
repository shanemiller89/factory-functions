function createPet(name, breed) {
    return {
        pet_name: name,
        pet_breed: breed
    }
}

let BowWowKennels = [];

let kailey = createPet("Kailey", "Lasso");
let foxy = createPet("Foxy", "Golden/Chow");
let nishka = createPet("Nishka", "Husky");

BowWowKennels.push(kailey, foxy, nishka)

console.log(BowWowKennels);
