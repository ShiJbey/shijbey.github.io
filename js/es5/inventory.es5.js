"use strict";

// This file contains the stats on every item as
// well as functions related to retreiving or
// transforming item information
// WARNING: When adding new items to this file,
//          Remember to add the supported entry
//          to the items.css file so they appear
//          in the inventory

var Items = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
    "name": "Lava Ingot",
    "description": "Ingot smelted from Fire and Earth Ore",
    "tags": ["lava", "ingot"],
    "element": ["fire", "earth"],
    "type": ["ingot"],
    "stats": {
        "attack": 0,
        "defense": 0,
        "speed": 0,
        "luck": 0,
        "weight": 1
    }
}, {
    "name": "Wave Ingot",
    "description": "Ingot smelted from Water and Wind Ore.",
    "tags": ["wave", "ingot"],
    "element": ["water", "wind"],
    "type": ["ingot"],
    "stats": {
        "attack": 0,
        "defense": 0,
        "speed": 0,
        "luck": 0,
        "weight": 1
    }
}, {
    "name": "Sand Ingot",
    "description": "Ingot smelted from Earth and Wind Ore.",
    "tags": ["sand", "ingot"],
    "element": ["wind", "earth"],
    "type": ["ingot"],
    "stats": {
        "attack": 0,
        "defense": 0,
        "speed": 0,
        "luck": 0,
        "weight": 1
    }
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];

/**
 * Enumeration of all the supported element types
 */
var ElementEnum = Object.freeze({
    "FIRE": 0,
    "EARTH": 1,
    "WATER": 2,
    "WIND": 3,
    "DIVINE": 4,
    GetElementName: function GetElementName(elementNum) {
        for (elementName in ElementEnum) {
            if (ElementEnum[elementName] == elementNum) {
                return elementName;
            }
        }
        return "";
    },
    GetElementNumber: function GetElementNumber(elementName) {
        return undefined[elementName.toUpperCase()];
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
    var name = item.name;
    return name.split(' ').join('-');
}

/**
 * Given the classname of an HTML object, returns the name of
 * the item that is associated with that CSS class
 * @param {string} itemCssClass
 * @return {string}
 */
function getItemName(itemCssClass) {
    var itemName = itemCssClass.replace('inventory-item ', '');
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
        if (itemName == Items[i].name.toLowerCase()) {
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
    return "<p>" + item.name + "</p><p>" + item.description + "</p><p>Quantity: " + itemQuantity;
}
"use strict";

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
    var oreHtmlObjects = $('#smelt-items.inventory-table .inventory-row .inventory-item');
    if (oreHtmlObjects.length < 2) {
        console.log("2 ore are needed to smelt an ingot.");
        return;
    }

    // Retrieve the items stats from the Item's array
    var oreItemEntries = [];
    for (var i = 0; i < oreHtmlObjects.length; i++) {
        var itemName = getItemName(oreHtmlObjects[i].className);
        oreItemEntries.push(getItem(itemName));
    }

    // Get a combined list of all the element being used
    var desiredElements = [];
    for (var i = 0; i < oreItemEntries.length; i++) {
        desiredElements = desiredElements.concat(oreItemEntries[i].element);
    }

    //console.log("These are the elements we are looking for:");
    //console.log(desiredElements);
    // Remove duplicate element values
    desiredElements = removeDuplicates(desiredElements);
    //console.log("These are the elements we are looking for (no dubplicates):");
    //console.log(desiredElements);

    // Index of the item that most closely matches the desired elements 
    var currentMatch = -1;
    // Numer of common elements with the current match
    var currentMatchStrength = 0;

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
                currentMatchStrength = numMatchingElements;
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

    // Remove used items from the inventory
    for (var i = 0; i < oreItemEntries.length; i++) {
        playerInventory.removeItem(getItemID(oreItemEntries[i].name), 1);
    }

    // Clear the slots in the smelt inventory
    var cells = $("#smelt-items.inventory-table  .inventory-cell");
    for (var i = 0; i < cells.length; i++) {
        while (cells[i].firstChild) {
            cells[i].removeChild(cells[i].firstChild);
        }
    }

    playerInventory.addItemByName("Earth Ingot", 20);
}

/**
 * Constructs and returns a new array with out duplicate
 * values found in the given array
 * @param {any[]} arr
 * @return {any[]}
 */
function removeDuplicates(arr) {
    var unique_array = [];
    for (var i = 0; i < arr.length; i++) {
        if (unique_array.indexOf(arr[i]) == -1) {
            unique_array.push(arr[i]);
        }
    }
    return unique_array;
}

/**
 * Returns the intersection between two arrays
 * 
 * @param {any[]} arr1 
 * @param {any[]} arr2 
 */
function intersection(arr1, arr2) {
    return arr1.filter(function (n) {
        return arr2.indexOf(n) !== -1;
    });
}
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This script contains the class definition for
// the Inventory class which manages all the items
// that are available for the player to use when crafting

var Inventory = function () {
    function Inventory() {
        var capacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Infinity;

        _classCallCheck(this, Inventory);

        this.items = [];
        this.capacity = capacity;
    }

    _createClass(Inventory, [{
        key: 'addItemByName',
        value: function addItemByName(itemName, quantity) {
            var itemId = getItemID(itemName);
            this.addItem(itemId, quantity);
        }
    }, {
        key: 'removeItemByName',
        value: function removeItemByName(itemName, quantity) {
            var itemId = getItemID(itemName);
            this.removeItem(itemId, quantity);
        }
    }, {
        key: 'hasItemByName',
        value: function hasItemByName(itemName, quantity) {
            var itemId = getItemID(itemName);
            this.hasItem(itemId, quantity);
        }
    }, {
        key: 'getQuantity',
        value: function getQuantity(itemName) {
            var itemId = getItemID(itemName);
            var item = this.getItem(itemName);
            if (item != null) {
                return item.quantity;
            } else {
                return 0;
            }
        }
    }, {
        key: 'getItem',
        value: function getItem(itemName) {
            var itemId = getItemID(itemName);
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id === itemId) {
                    return this.items[i];
                }
            }
            return null;
        }
    }, {
        key: 'addItem',
        value: function addItem(id, quantity) {
            if (this.items.length >= this.capacity) {
                return;
            }
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id === id) {
                    this.items[i].quantity += quantity;
                    return;
                }
            }
            this.items.push({ 'id': id, 'quantity': quantity });
        }
    }, {
        key: 'removeItem',
        value: function removeItem(id, quantity) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == id) {
                    this.items[i].quantity -= quantity;
                    if (this.items[i].quantity <= 0) {
                        this.items.splice(i, 1);
                    }
                }
            }
        }
    }, {
        key: 'hasItem',
        value: function hasItem(id, quantity) {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].id == id) {
                    return this.items[i].quantity >= quantity;
                }
            }
            return false;
        }
    }, {
        key: 'resize',
        value: function resize(capacity) {
            this.capacity = capacity;
        }
    }, {
        key: 'render',
        value: function render(inventoryId) {
            var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
            var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

            // Resize the inventory
            /*
            var targetRows = Math.ceil(this.length / 8);
            if (targetRows > maxRows) {
                targetRows = maxRows;
            }
            var inventoryTag = "#" + inventoryId + ".inventory-table"
            $(inventoryTag).addRemoveItems(targetRows);
            inventoryTag += ' .inventory-row'
            $(inventoryTag).addRemoveItems(columns);
            refreshSortableInventoryList();
            */

            var cells = $("#" + inventoryId + ".inventory-table" + " .inventory-cell");
            for (var i = 0; i < cells.length; i++) {
                while (cells[i].firstChild) {
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
    }]);

    return Inventory;
}();

// Creates and instantiaates the player's
// inventory with the basic items


var playerInventory = new Inventory();
playerInventory.addItemByName("Iron Ore", 20);
playerInventory.addItemByName("Fire Ore", 20);
playerInventory.addItemByName("Water Ore", 20);
playerInventory.addItemByName("Wind Ore", 20);
playerInventory.addItemByName("Earth Ore", 20);
playerInventory.addItemByName("Iron Ingot", 20);
playerInventory.addItemByName("Earth Ingot", 20);
playerInventory.addItemByName("Fire Ingot", 20);
playerInventory.addItemByName("Wind Ingot", 20);
playerInventory.addItemByName("Water Ingot", 20);

playerInventory.render('player-inventory');
"use strict";
// Code borrowed from: Eric Eastwood
// @: https://codepen.io/MadLittleMods/pen/vmhLF

jQuery.fn.extend({
    addRemoveItems: function addRemoveItems(targetCount) {
        return this.each(function () {
            var $children = $(this).children();
            var rowCountDifference = targetCount - $children.length;
            //console.log('row count diff: ' + rowCountDifference);

            if (rowCountDifference > 0) {
                // Add items
                for (var i = 0; i < rowCountDifference; i++) {
                    //console.log($rows.first());
                    $children.last().clone().appendTo(this);
                }
            } else if (rowCountDifference < 0) {
                // remove items
                $children.slice(rowCountDifference).remove();
            }
        });
    },
    // Modified and Updated by MLM
    // Origin: Davy8 (http://stackoverflow.com/a/5212193/796832)
    parentToAnimate: function parentToAnimate(newParent, duration) {
        duration = duration || 'slow';

        var $element = $(this);
        //console.log($element);
        if ($element.length > 0) {

            newParent = $(newParent); // Allow passing in either a JQuery object or selector
            var oldOffset = $element.offset();
            $(this).appendTo(newParent);
            var newOffset = $element.offset();

            var temp = $element.clone().appendTo('body');

            temp.css({
                'position': 'absolute',
                'left': oldOffset.left,
                'top': oldOffset.top,
                'zIndex': 1000
            });

            $element.hide();

            temp.animate({
                'top': newOffset.top,
                'left': newOffset.left
            }, duration, function () {
                $element.show();
                temp.remove();
            });

            //console.log("parentTo Animate done");
        }
    }
});

$('#row-count').on('input propertychange change', function () {
    var targetRowCount = $(this).val();
    //console.log('target count: ' + targetRowCount);
    $('label[for="' + $(this).attr('id') + '"]').html(targetRowCount);

    $('#personal-inventory.inventory-table').addRemoveItems(targetRowCount);

    refreshSortableInventoryList();
}).trigger('change');

$('#column-count').on('input propertychange change', function () {
    var targetColumnCount = $(this).val();
    //console.log('target count: ' + targetColumnCount);
    $('label[for="' + $(this).attr('id') + '"]').html(targetColumnCount);

    $('#personal-inventory.inventory-table .inventory-row').addRemoveItems(targetColumnCount);

    refreshSortableInventoryList();
}).trigger('change');

// Sorting, dragging, dropping, etc

refreshSortableInventoryList();
function refreshSortableInventoryList() {
    $('.inventory-cell').sortable({
        connectWith: '.inventory-cell',
        placeholder: 'inventory-item-sortable-placeholder',
        receive: function receive(event, ui) {

            //console.log(ui.item);

            var attrWhitelist = $(this).closest('.inventory-table').attr('data-item-filter-whitelist');
            var attrBlackList = $(this).closest('.inventory-table').attr('data-item-filter-blacklist');
            var itemFilterWhitelistArray = attrWhitelist ? attrWhitelist.split(/\s+/) : [];
            var itemFilterBlacklistArray = attrBlackList ? attrBlackList.split(/\s+/) : [];
            //console.log(itemFilterWhitelistArray);
            //console.log(itemFilterBlacklistArray);  

            var attrTypeList = $(ui.item).attr('data-item-type');
            var itemTypeListArray = attrTypeList ? attrTypeList.split(/\s+/) : [];
            //console.log(itemTypeListArray);

            var canMoveIntoSlot = verifyWithWhiteBlackLists(itemTypeListArray, itemFilterWhitelistArray, itemFilterBlacklistArray);

            if (!canMoveIntoSlot) {
                console.log("Can't move to this slot");
                //$(ui.sender).sortable('cancel');
                $(ui.item).parentToAnimate($(ui.sender), 200);
            } else {

                // Swap places of items if dragging on top of another
                // Add the items in this list to the list the new item was from
                $(this).children().not(ui.item).parentToAnimate($(ui.sender), 200);
                $(this).find(".tooltip").remove();
                // Check the quantity in the players inventory to see if we leave
                // some items in the inventory
                var itemName = getItemName($(ui.item).attr('class'));
                //console.log("Item name is: " + itemName);
                var amountInInventory = playerInventory.getQuantity(itemName);
                //console.log("Amount in inventory: " + amountInInventory);
                if (amountInInventory > 1) {
                    //console.log("There are more than one in the inventory");
                    var item_copy = ui.item.clone();
                    //$(this).children().not(item_copy).parentToAnimate($(ui.sender), 200);

                    //$(ui.item).parentToAnimate($(ui.sender), 200); 
                } else {}
                    //$(this).children().not(ui.item).parentToAnimate($(ui.sender), 200);


                    // $(this) is the list the item is being moved into
                    // $(ui.sender) is the list the item came from
                    // Don't forget the move swap items as well

                    // $(this).attr('data-slot-position-x');
                    // $(this).attr('data-slot-position-y');
                    // $(ui.sender).attr('data-slot-position-x');
                    // $(ui.sender).attr('data-slot-position-y');
                    //console.log("Moving to: (" + $(this).attr('data-slot-position-x') + ", " + $(this).attr('data-slot-position-y') + ") - From: (" + $(ui.sender).attr('data-slot-position-x') + ", " + $(ui.sender).attr('data-slot-position-y') + ")");
            }
        }
    }).each(function () {
        // Setup some nice attributes for everything
        // Makes it easier to update the backend
        $(this).attr('data-slot-position-x', $(this).prevAll('.inventory-cell').length);
        $(this).attr('data-slot-position-y', $(this).closest('.inventory-row').prevAll('.inventory-row').length);
    }).disableSelection();
}

function verifyWithWhiteBlackLists(itemList, whiteList, blackList) {
    // itemList should contain tags
    // whiteList and blackList can contain tags and tag queries

    // If we have a matching tags to some tag query in the whiteList but not in the blackList, then return true
    // Else return false


    //console.group("Lists");
    //console.log(itemList);
    //console.log(whiteList);
    //console.log(blackList);
    //console.groupEnd();

    // If white and black lists are empty, return true
    // Save the calculations, no filtering
    if (whiteList.length == 0 && blackList.length == 0) return true;

    // Check if the itemList has an item in the blackList
    var inBlackList = false;
    $.each(blackList, function (index, value) {
        var itemBlack = value;
        var itemBlackAndArray = itemBlack.split(/\+/);
        console.log(itemBlackAndArray);

        var andedResult = true;
        for (var i = 0; i < itemBlackAndArray.length; i++) {
            if (blackList.length > 0 && $.inArray(itemBlackAndArray[i], itemList) !== -1) {
                andedResult = andedResult && true;
            } else {
                andedResult = andedResult && false;
            }
        }

        if (andedResult) inBlackList = true;
    });

    inBlackList = blackList.length > 0 ? inBlackList : false;

    // Check if the itemList has an item in the whiteList
    var inWhiteList = false;
    $.each(whiteList, function (index, value) {
        var itemWhite = value;
        var itemWhiteAndArray = itemWhite.split(/\+/);
        //console.log(itemWhiteAndArray);

        var andedResult = true;
        for (var i = 0; i < itemWhiteAndArray.length; i++) {
            if (whiteList.length > 0 && $.inArray(itemWhiteAndArray[i], itemList) !== -1) {
                andedResult = andedResult && true;
            } else {
                andedResult = andedResult && false;
            }
        }
        //console.log("andedResult: " + andedResult);

        if (andedResult) inWhiteList = true;
    });

    inWhiteList = whiteList.length > 0 ? inWhiteList : false;

    console.log("inWhite: " + inWhiteList + " - inBlack: " + inBlackList);

    if ((whiteList.length == 0 || inWhiteList) && !inBlackList) return true;

    return false;
}
