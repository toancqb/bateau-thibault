export const imagePathHelper = (imagePath) => {
    return require(`../assets/images/${imagePath}.png`)
}

export const iconPathHelper = (iconPath) => {
    return require(`../assets/icons/${iconPath}.png`)
}

export const dataPathHelper = (dataPath) => {
    return `../assets/data/${dataPath}`
}