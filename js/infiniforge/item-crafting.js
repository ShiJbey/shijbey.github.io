// This file defines all the functions used when
// crafting items such as ore and ingots within
// the game

/**
 * Combines two items of type ore and adds one item of type
 * ingot to the player's inventory
 */
function smeltOre() {

    //console.log(Items[0].type);

    // Get all children in the smelt inventory
    //var oreHtmlObjects = $('#smelt-items.inventory-table .inventory-row .inventory-item');

    if (smeltItems.getTotalQuantity() < 2){
        console.log("2 ore are needed to smelt an ingot.");
        return;
    }

    // Retrieve the items stats from the Item's array
    var oreItemEntries = [];
    for (var i = 0; i < smeltItems.items.length; i++) {
        oreItemEntries.push(Items[smeltItems.items[i].id]);
    }

    //console.log(oreItemEntries);

    // Get a combined list of all the element being used
    var desiredElements = [];
    for (var i = 0; i < oreItemEntries.length; i++) {
        desiredElements = desiredElements.concat(oreItemEntries[i].element);
    }

    //console.log("These are the elements we are looking for:");
    //console.log(desiredElements);

    // Remove duplicate element values
    //desiredElements = removeDuplicates(desiredElements);
    //console.log("These are the elements we are looking for (no dubplicates):");
    //console.log(desiredElements);

    // Index of the item that most closely matches the desired elements
    var currentMatch = -1;
    // Numer of common elements with the current match
    var currentMatchStrength = -1;

    // Look for an ingot with the list of elements that most
    // closely resembles that of the ore given
    for (var i = 0; i < Items.length; i++) {
        // We only care about ingots
        if (Items[i].type.includes("ingot")) {
            //console.log("Checking the: " + Items[i].name);
            //console.log("It has:");
            //console.log(Items[i].element);
            var matchingElements = intersection(desiredElements, Items[i].element);
            //console.log("Similar elements were:");
            //console.log(matchingElements);
            var numMatchingElements = matchingElements.length;
            //console.log("There were " + numMatchingElements + " matches");
            if (numMatchingElements > currentMatchStrength) {
                currentMatch = i;
                currentMatchStrength = GetElemmentVectValue(Items[i]);
            }
        }
    }

    // Return early if no proper ingot has been found
    if (currentMatch == -1) {
        console.log("No suitable ore found");
        return;
    }

    // Add new item to the inventory (NEED TO ADD HYBRID TYPES)
    playerInventory.addItem(currentMatch, 1);
    console.log("Created: " + Items[currentMatch].name);

    // Remove used items from the SeltItem inventory
    smeltItems.clear();

    updateAndRenderInventories();
    smeltItems.render();
}

/**
 * Constructs and returns a new array with out duplicate
 * values found in the given array
 * @param {any[]} arr
 * @return {any[]}
 */
function removeDuplicates(arr){
    let unique_array = []
    for(let i = 0;i < arr.length; i++){
        if(unique_array.indexOf(arr[i]) == -1){
            unique_array.push(arr[i])
        }
    }
    return unique_array
}

/**
 * Returns the intersection between two arrays
 *
 * @param {any[]} arr1
 * @param {any[]} arr2
 */
function intersection(arr1, arr2) {
    return arr1.filter((n) => {
        return arr2.indexOf(n) !== -1;
    });
}

