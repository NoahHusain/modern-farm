export const harvestPlants = (plantsArray) => {
    for (const plant of plantsArray) {
        const outputArray= []

            // iterate through the array and if the plant is corn, divide the output by 2 and then push it to the new array.
            if (plant.type === "Corn") {
                for (let j = 0; j < plant.output / 2; j++) {
                    outputArray.push(plant)
                }
            }

            // if the plant is not corn just push it to the array
            else {
                outputArray.push(plant) 
            }
    }
    return plantsArray
}