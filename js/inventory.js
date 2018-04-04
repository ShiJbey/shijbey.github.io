// Enumeration of element types for the
var ElementEnum = Object.freeze ({
    "NONE": 0,
    "FIRE": 1,
    "EARTH": 2,
    "WATER": 3,
    "WIND": 4,
    "DIVINE": 5,
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

// Array of all the items that are supported in the game
var Items = [
    {
        "name": "Iron Ingot",
        "description": "Ordinary ingot smelted from Iron Ore.",
        "tags": ["iron", "ingot"],
        "element": ["none"]
    },
    {
        "name": "Earth Ingot",
        "description": "Ingot smelted from Earth Ore.",
        "tags": ["earth", "ingot"],
        "element": ["Earth"]
    },
    {
        "name": "Fire Ingot",
        "description": "Ingot smelted from Fire Ore.",
        "tags": ["fire", "ingot"],
        "element": ["Fire"]
    },
    {
        "name": "Wind Ingot",
        "description": "Ingot smelted from Wind Ore.",
        "tags": ["wind", "ingot"],
        "element": ["Wind"]
    },
    {
        "name": "Water Ingot",
        "description": "Ingot smelted from Water Ore.",
        "tags": ["water", "ingot"],
        "element": ["Water"]
    },
    {
        "name": "Iron Ore",
        "description": "Ordinary Iron Ore.",
        "tags": ["iron", "ore"],
        "element": ["none"]
    },
    {
        "name": "Earth Ore",
        "description": "Doesn't all ore come from the earth?",
        "tags": ["earth", "ore"],
        "element": ["Earth"]
    },
    {
        "name": "Fire Ore",
        "description": "This ore burns with the heat of 10 forges.",
        "tags": ["fire", "ore"],
        "element": ["Fire"]
    },
    {
        "name": "Wind Ore",
        "description": "So light. Hard to beleive its ore",
        "tags": ["wind", "ore"],
        "element": ["Wind"]
    },
    {
        "name": "Water Ore",
        "description": "Ore that reflects light light the ocean.",
        "tags": ["water", "ore"],
        "element": ["Water"]
    }
];


function GetElemmentVectValue(item) {
    var combinedElemVectValue = 0;
    for (var i = 0; i < item.element.length; i++) {
        var elementVal = ElementEnum.GetElementNumber(item.element[i]);
        combinedElemVectValue += Math.pow(2, elementVal);
    }
    return combinedElemVectValue;
}

function GetElementVect(item) {
    return GetElemmentVectValue(item).toString(2);
}

function getCssClass(item) {
    // lower case the name and replace the spaces with '-'
    var name = item.name
    return name.split(' ').join('-');
}

function getItemName(itemCssClass) {
    var itemName  = itemCssClass.replace('inventory-item ', '');
    itemName = itemName.split('-').join(' ');
    return itemName;
}

function getItem(itemName) {
    for (var i = 0; i < Items.length; i++) {
        if (itemName == Items[i].name) {
            return Items[i];
        }
    }
}

function getItemID(itemName) {
    for (var i = 0; i < Items.length; i++) {
        if (itemName == Items[i].name) {
            return i;
        }
    }
    return -1;
}

function smeltOre() {
    // Get all children in the smelt inventory
    var itemForSmelt = $('#smelt-items.inventory-table .inventory-row .inventory-item');
    if (itemForSmelt.length < 2)
        return;
    // Get the item stars for each of the items
    var oreStats = [];
    for (var i = 0; i < itemForSmelt.length; i++) {
        var itemName = getItemName(itemForSmelt[i].className);
        oreStats.push(getItem(itemName))
    }
    //
    var smeltedIngotID = 0;
    for (var i = 0; i < oreStats.length; i++) {
        smeltedIngotID += getItemID(oreStats[i].name)
    }
    smeltedIngotID = smeltedIngotID % 5;
    // Add new item to the inventory (NEED TO ADD HYBRID TYPES)
    playerInventory.addItem(smeltedIngotID, 1);
    console.log("Created: " + Items[smeltedIngotID].name);
    // Remove items from the inventory
    for (var i = 0; i < oreStats.length; i++) {
        playerInventory.removeItem(getItemID(oreStats[i].name), 1);
    }
    playerInventory.render('player-inventory');
    // Clear the slots in the smelt inventory
    var cells = $("#smelt-items.inventory-table  .inventory-cell"); 
    //console.log(cells.length);
    for (var i = 0; i < cells.length; i++) {
        while(cells[i].firstChild) {
            cells[i].removeChild(cells[i].firstChild);
        }
    }

}

class Inventory {

    constructor(capacity = Infinity) {
        this.items = [];
        this.capacity = capacity;
    }

    addItem(id, quantity) {
        if (this.items.length >= this.capacity) {
            return;
        }
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === id) {
                this.items[i].quantity += quantity;
                return;
            }
        }
        this.items.push({'id': id, 'quantity': quantity});
    }

    removeItem(id, quantity) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                this.items[i].quantity -= quantity;
                if (this.items[i].quantity <= 0) {
                    this.items.splice(i, 1);
                }
            }
        }
    }

    hasItem(id, quantity) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id == id) {
                return  this.items[i].quantity >= quantity;
            }
        }
        return false;
    }

    resize(capacity) {
        this.capacity = capacity
    }

    render(inventoryId, columns = 8, maxRows = 3) {
        // Resize the inventory
        var targetRows = Math.ceil(this.length / 8);
        if (targetRows > maxRows) {
            targetRows = maxRows;
        }
        var inventoryTag = "#" + inventoryId + ".inventory-table"
        $(inventoryTag).addRemoveItems(targetRows);
        inventoryTag += ' .inventory-row'
        $(inventoryTag).addRemoveItems(columns);
        refreshSortableInventoryList();

        
        
        var cells = $("#" + inventoryId + ".inventory-table" + " .inventory-cell"); 
        //console.log(cells.length);
        for (var i = 0; i < cells.length; i++) {
            while(cells[i].firstChild) {
                cells[i].removeChild(cells[i].firstChild);
            }
        }
        // Loop though the elements in the player inventory
        for (var i = 0; i < cells.length; i++) {
            var div = document.createElement("div");
            if (i < this.items.length) {
                div.setAttribute('class', 'inventory-item ' + getCssClass(Items[this.items[i].id]));
                div.setAttribute('data-item-type', Items[this.items[i].id].tags.join(" "));
            } else {
                div.setAttribute('class', 'inventory-item-sortable-placeholder');
            }
            cells[i].appendChild(div);
        }
    }
}

var playerInventory = new Inventory();
var smeltingInventory = new Inventory(2);
var forgeInventory = new Inventory(3);

playerInventory.addItem(0, 1);
playerInventory.addItem(1, 1);
playerInventory.addItem(2, 1);
playerInventory.addItem(3, 1);
playerInventory.addItem(4, 1);
playerInventory.addItem(5, 20);
playerInventory.addItem(6, 20);
playerInventory.addItem(7, 20);
playerInventory.addItem(8, 20);
playerInventory.addItem(9, 20);
playerInventory.render('player-inventory');
