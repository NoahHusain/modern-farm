export const catalog = (harvestedFood) => {
    let harvest = ''

    for (const food of harvestedFood) {
        harvest += `<div class="harvest">${food.type}</div>`
    }
    return harvest
}

