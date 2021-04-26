import { addPlant, usePlants } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createSoybean } from "./seeds/soybean.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"

export const plantSeeds = (yearlyPlanting) => {
    
    for (const plan of yearlyPlanting) {
        for (let j = 0; j < plan.length; j++) {
            if (plan[j] === "Asparagus") {
                addPlant(createAsparagus());
            }
            else if (plan[j] === 'Corn') {
                addPlant(createCorn());
            }
            else if (plan[j] === 'Potato') {
                addPlant(createPotato());
            }
            else if (plan[j] === 'Soybean') {
                addPlant(createSoybean());
            }
            else if (plan[j] === 'Sunflower') {
                addPlant(createSunflower());
            }
            else if (plan[j] === 'Wheat') {
                addPlant(createWheat());
            }
        }
    }
    return usePlants()
}