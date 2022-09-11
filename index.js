function findMatching(drivers, soughtDriverName){
    return drivers.filter(driver => driver.toLowerCase() === soughtDriverName.toLowerCase())
}

function fuzzyMatch(drivers, soughtDriverName){
    return drivers.filter(driver => driver.startsWith(soughtDriverName))
}

function matchName(drivers, soughtDriverName){
    return drivers.filter(driver => driver.name === soughtDriverName)
}
