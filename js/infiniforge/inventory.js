// This script contains the class definition for
// the Inventory class which manages all the items
// that are available for the player to use when crafting

class Inventory {

    constructor(ID, capacity = Infinity) {
        this.items = [];
        this.capacity = capacity;
        this.ID = ID;
    }

    addItemByName(itemName, quantity) {
        var itemId = getItemID(itemName);
        this.addItem(itemId, quantity);
    }

    removeItemByName(itemName, quantity) {
        var itemId = getItemID(itemName);
        this.removeItem(itemId, quantity);
    }

    hasItemByName(itemName, quantity) {
        var itemId = getItemID(itemName);
        this.hasItem(itemId, quantity);
    }

    getQuantity(itemName) {
        var itemId = getItemID(itemName);
        var item = this.getItem(itemName);
        if (item != null) {
            return item.quantity;
        } else {
            return 0;
        }
    }

    getTotalQuantity() {
        var total = 0;
        for (var i = 0; i < this.items.length; i++) {
            total += this.items[i].quantity;
        }
        return total;
    }

    getItem(itemName) {
        var itemId = getItemID(itemName);
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === itemId) {
                return this.items[i];
            }
        }
        return null;
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

    clear() {
        this.items = [];
    }

    resize(capacity) {
        this.capacity = capacity
    }

    render() {
        var cells = $("#" + this.ID + ".inventory-table" + " .inventory-cell");

        // Clears all the existing DOM elements from
        // inventory table wiht the id 'inventoryID
        for (var i = 0; i < cells.length; i++) {
            while(cells[i].firstChild) {
                cells[i].removeChild(cells[i].firstChild);
            }
        }

        // Loop though the elements in the player inventory
        // Adds
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

var playerInventory = new Inventory('player-inventory');
playerInventory.addItemByName("Iron Ore", 20);
playerInventory.addItemByName("Fire Ore", 20);
playerInventory.addItemByName("Water Ore", 20);
playerInventory.addItemByName("Wind Ore", 20);
playerInventory.addItemByName("Earth Ore", 20);

var smeltItems = new Inventory('smelt-items', 2);


var forgeItems = new Inventory('forge-items', 2);


function updateAndRenderInventories() {
    playerInventory.render();
    //smeltItems.render();
    //forgeItems.render();
    refreshSortableInventoryList();
}

updateAndRenderInventories();
