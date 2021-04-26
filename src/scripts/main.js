import {createPlan} from './plan.js'
import {usePlants, addPlant} from './field.js'
import {plantSeeds} from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan()

const createSeeds = plantSeeds(yearlyPlan)

const harvestSeeds = harvestPlants(createSeeds)

const catalogList = catalog(harvestSeeds)

document.getElementById('crops').innerHTML = catalogList