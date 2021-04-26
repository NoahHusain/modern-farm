import {createPlan} from './plan.js'
import {usePlants, addPlant} from './field.js'
import {plantSeeds} from './tractor.js'
import { harvestPlants } from './harvester.js'

createPlan()

const yearlyPlan = createPlan()

// const test = plantSeeds(yearlyPlan)

// const test1 = harvestPlants(test)

// console.log(test1)