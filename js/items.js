// This file contains the stats on every item as
// well as functions related to retreiving or
// transforming item information
// WARNING: When adding new items to this file,
//          Remember to add the supported entry
//          to the items.css file so they appear
//          in the inventory

var Items = [
    {
        "name": "Iron Ingot",
        "description": "Ordinary ingot smelted from Iron Ore.",
        "tags": ["iron", "ingot"],
        "element": [],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Earth Ingot",
        "description": "Ingot smelted from Earth Ore.",
        "tags": ["earth", "ingot"],
        "element": ["earth"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Fire Ingot",
        "description": "Ingot smelted from Fire Ore.",
        "tags": ["fire", "ingot"],
        "element": ["fire"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Wind Ingot",
        "description": "Ingot smelted from Wind Ore.",
        "tags": ["wind", "ingot"],
        "element": ["wind"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Water Ingot",
        "description": "Ingot smelted from Water Ore.",
        "tags": ["water", "ingot"],
        "element": ["water"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Char Ingot",
        "description": "Ingot smelted from Fire and Water Ore",
        "tags": ["char", "ingot"],
        "element": ["fire", "water"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Blaze Ingot",
        "description": "Ingot smelted from Fire and Wind Ore",
        "tags": ["blaze", "ingot"],
        "element": ["fire", "wind"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Lava Ingot",
        "description": "Ingot smelted from Fire and Earth Ore",
        "tags": ["lava", "ingot"],
        "element": ["fire","earth"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Wave Ingot",
        "description": "Ingot smelted from Water and Wind Ore.",
        "tags": ["wave", "ingot"],
        "element": ["water","wind"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Sand Ingot",
        "description": "Ingot smelted from Earth and Wind Ore.",
        "tags": ["sand", "ingot"],
        "element": ["wind","earth"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Mud Ingot",
        "description": "Ingot smelted from Water amd Earth Ore.",
        "tags": ["water", "ingot"],
        "element": ["water", "earth"],
        "type": ["ingot"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Iron Ore",
        "description": "Ordinary Iron Ore.",
        "tags": ["iron", "ore"],
        "element": [],
        "type": ["ore"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Earth Ore",
        "description": "Doesn't all ore come from the earth?",
        "tags": ["earth", "ore"],
        "element": ["earth"],
        "type": ["ore"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Fire Ore",
        "description": "This ore burns with the heat of 10 forges.",
        "tags": ["fire", "ore"],
        "element": ["fire"],
        "type": ["ore"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Wind Ore",
        "description": "So light. Hard to beleive its ore",
        "tags": ["wind", "ore"],
        "element": ["wind"],
        "type": ["ore"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    },
    {
        "name": "Water Ore",
        "description": "Ore that reflects light light the ocean.",
        "tags": ["water", "ore"],
        "element": ["water"],
        "type": ["ore"],
        "stats": {
            "attack": 0,
            "defense": 0,
            "speed": 0,
            "luck": 0,
            "weight": 1
        }
    }
];


/**
 * Enumeration of all the supported element types
 */
var ElementEnum = Object.freeze ({
    "FIRE": 0,
    "EARTH": 1,
    "WATER": 2,
    "WIND": 3,
    "DIVINE": 4,
    GetElementName: (elementNum) => {
        for (elementName in ElementEnum) {
            if (ElementEnum[elementName] == elementNum) {
                return elementName;
            }
        }
        return "";
    },
    GetElementNumber: (elementName) => {
        return this[elementName.toUpperCase()];
    }
});


/**
 * Returns the base10 value of the Binary representation
 * of the array of elements for an item where each {0,1}
 * is a binary variable for the associated element type
 * 
 * @param {any} item
 * @return {number}
 */
function GetElemmentVectValue(item) {
    var combinedElemVectValue = 0;
    for (var i = 0; i < item.element.length; i++) {
        var elementVal = ElementEnum.GetElementNumber(item.element[i]);
        combinedElemVectValue += Math.pow(2, elementVal);
    }
    return combinedElemVectValue;
}

/**
 * Returns the binary string representation of the item's
 * array of element types
 * @return  {string}
 */
function GetElementVect(item) {
    return GetElemmentVectValue(item).toString(2);
}

/**
 * Using the name of the item, returns the hyphenated name
 * that should correspond to a class in the css file
 * @param {any} item
 * @return {string} 
 */
function getCssClass(item) {
    var name = item.name
    return name.split(' ').join('-');
}

/**
 * Given the classname of an HTML object, returns the name of
 * the item that is associated with that CSS class
 * @param {string} itemCssClass
 * @return {string}
 */
function getItemName(itemCssClass) {
    var itemName  = itemCssClass.replace('inventory-item ', '');
    itemName = itemName.split('-').join(' ');
    return itemName;
}

/**
 * Given the name of an item, returns its definition from the
 * array of all the items in the game
 * @param {string} itemName
 * @return {any}
 */
function getItem(itemName) {
    itemName = itemName.toLowerCase();
    for (var i = 0; i < Items.length; i++) {
        if (itemName == Items[i].name.toLowerCase()) {
            return Items[i];
        }
    }
    return null;
}

/**
 * Given the name of an item, its numerical ID for the
 * inventory (postion within Items array)
 * @param {string} itemName
 * @return {number}
 */
function getItemID(itemName) {
    itemName = itemName.toLowerCase();
    for (var i = 0; i < Items.length; i++) {
        if (itemName== Items[i].name.toLowerCase()) {
            return i;
        }
    }
    return -1;
}

/**
 * Given an item, returns the html used to display
 * the stats in the tooltip
 * @param {any} item
 * @return {string}
 */
function statsToHtml(item, inventory) {
    var itemQuantity = inventory.getQuantity(item.name);
    return `<p>${item.name}</p><p>${item.description}</p><p>Quantity: ${itemQuantity}`;
}