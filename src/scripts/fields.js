const plantsInField = []

export const addPlant = (seedObject) => {
    plantsInField.push(seedObject)
}

// export const usePlants = () => {
//     return plantsInField
// }

const barley = {
    type: 'Barley',
    height: 320,
    output: 5
}

addPlant(barley)

// usePlants(usedPlant)


console.log(plantsInField)

// console.log(usedPlant)