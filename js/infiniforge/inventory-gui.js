"use strict";
// Code borrowed from: Eric Eastwood
// @: https://codepen.io/MadLittleMods/pen/vmhLF

jQuery.fn.extend({
    addRemoveItems: function(targetCount) {
        return this.each(function() {
            var $children = $(this).children();
            var rowCountDifference = targetCount - $children.length;
            //console.log('row count diff: ' + rowCountDifference);

            if(rowCountDifference > 0)
            {
                // Add items
                for(var i = 0; i < rowCountDifference; i++)
                {
                    //console.log($rows.first());
                    $children.last().clone().appendTo(this);
                }
            }
            else if(rowCountDifference < 0)
            {
                // remove items
                $children.slice(rowCountDifference).remove();
            }
        });
    },
    // Modified and Updated by MLM
    // Origin: Davy8 (http://stackoverflow.com/a/5212193/796832)
    parentToAnimate: function(newParent, duration) {
        duration = duration || 'slow';

        var $element = $(this);
        //console.log($element);
        if($element.length > 0)
        {

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
            }, duration, function() {
                $element.show();
                temp.remove();
            });

            //console.log("parentTo Animate done");
        }
    }
});

// Sorting, dragging, dropping, etc
function refreshSortableInventoryList()
{
    var clone, before, parent;
    $('.inventory-cell').sortable({
        connectWith: '.inventory-cell',
        placeholder: 'inventory-item-sortable-placeholder',
        helper: "clone",
        start: function (event, ui) {

            var itemName = getItemName($(ui.item).attr('class'))
            console.log("Item name is: " + itemName);
            var previousInventoryID = $(ui.item).closest('.inventory-table').attr('id');
            var amountInInventory = 0;

            switch(previousInventoryID) {
                case 'player-inventory':
                    amountInInventory = playerInventory.getQuantity(itemName);
                    break;
                case 'smelt-items':
                    amountInInventory = smeltItems.getQuantity(itemName);
                    break;
                case 'forge-items':
                    amountInInventory = forgeItems.getQuantity(itemName);
                    break;
            }

            clone = $(ui.item).clone();
            before = $(ui.item).prev();
            parent = $(ui.item).parent();

            console.log("Amount in inventory: " + amountInInventory);
            if (amountInInventory > 1) {
                console.log("There are more than one in the inventory");
                // $(ui.item).show() gives the impression that the item is
                // still in the old cell while being dragged
                $(ui.item).show();
            } else {
                console.log("Last One");
            }
        },
        receive: function( event, ui ) {

            var attrWhitelist = $(this).closest('.inventory-table').attr('data-item-filter-whitelist');
            var attrBlackList = $(this).closest('.inventory-table').attr('data-item-filter-blacklist');
            var itemFilterWhitelistArray = attrWhitelist ? attrWhitelist.split(/\s+/) : [];
            var itemFilterBlacklistArray = attrBlackList ? attrBlackList.split(/\s+/) : [];
            //console.log(itemFilterWhitelistArray);
            //console.log(itemFilterBlacklistArray);

            var attrTypeList = $(ui.item).attr('data-item-type');
            var itemTypeListArray = attrTypeList ? attrTypeList.split(/\s+/) : [];
            //console.log(itemTypeListArray);

            var canMoveIntoSlot = verifyWithWhiteBlackLists(itemTypeListArray, itemFilterWhitelistArray, itemFilterBlacklistArray)

            // Check the ID of the table to see what inventory to send it to
            var destinationInventoryID = $(this).closest('.inventory-table').attr('id');
            var previousInventoryID = $(ui.sender).closest('.inventory-table').attr('id');

            if(!canMoveIntoSlot && destinationInventoryID != previousInventoryID)
            {
                console.log("Can't move to this slot");
                //$(ui.sender).sortable('cancel');
                $(ui.item).parentToAnimate($(ui.sender), 2000);
            }
            else
            {


                // Get the name of the item being moved
                var itemName = $(ui.item).attr('class').split(' ')[1].replace('-',' ');
                console.log(`Moving ${itemName} from ${previousInventoryID} to ${destinationInventoryID}.`);

                // Get the class of the object in the destination position
                /*
                var existingObject = "";
                console.log($(this).children());
                if ($(this).children().length == 1){
                    existingObject = $(this).children()[0].attr('class');
                }
                console.log(`The object in the current position is: ${existingObject}`);
                */

                var amountInInventory = 0;
                // Remove the item from the previous Inventory
                // and add it to the destination
                if (destinationInventoryID != previousInventoryID) {
                    switch(previousInventoryID) {
                        case 'player-inventory':
                            playerInventory.removeItemByName(itemName, 1);
                            amountInInventory = playerInventory.getQuantity(itemName);
                            break;
                        case 'smelt-items':
                            smeltItems.removeItemByName(itemName, 1);
                            amountInInventory = smeltItems.getQuantity(itemName);
                            break;
                        case 'forge-items':
                            forgeItems.removeItemByName(itemName, 1);
                            amountInInventory = forgeItems.getQuantity(itemName);
                            break;
                    }

                    switch(destinationInventoryID) {
                        case 'player-inventory':
                            playerInventory.addItemByName(itemName, 1);
                            break;
                        case 'smelt-items':
                            smeltItems.addItemByName(itemName, 1);
                            break;
                        case 'forge-items':
                            forgeItems.addItemByName(itemName, 1);
                            break;
                    }
                }

                if (amountInInventory > 0) {
                    // Place the clone in the old inventory
                    if ($(ui.sender).children().length == 0) {
                        if (before.length)
                            before.after(clone);
                        else
                            parent.prepend(clone);
                    }
                }


                // Swap places of items if dragging on top of another
                // Add the items in this list to the list the new item was from
                $(this).children().not(ui.item).parentToAnimate($(ui.sender), 200);


                //refreshSortableInventoryList();
                updateAndRenderInventories();

                // $(this) is the cell the item is being moved into
                // $(ui.sender) is the list the item came from
                // Don't forget the move swap items as well

                // $(this).attr('data-slot-position-x');
                // $(this).attr('data-slot-position-y');
                // $(ui.sender).attr('data-slot-position-x');
                // $(ui.sender).attr('data-slot-position-y');
                //console.log("Moving to: (" + $(this).attr('data-slot-position-x') + ", " + $(this).attr('data-slot-position-y') + ") - From: (" + $(ui.sender).attr('data-slot-position-x') + ", " + $(ui.sender).attr('data-slot-position-y') + ")");
            }
        }
    }).each(function() {
        // Setup some nice attributes for everything
        // Makes it easier to update the backend
        $(this).attr('data-slot-position-x', $(this).prevAll('.inventory-cell').length);
        $(this).attr('data-slot-position-y', $(this).closest('.inventory-row').prevAll('.inventory-row').length);
    }).disableSelection();
}

function verifyWithWhiteBlackLists(itemList, whiteList, blackList)
{
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
    if(whiteList.length == 0 && blackList.length == 0)
        return true;



    // Check if the itemList has an item in the blackList
    var inBlackList = false;
    $.each(blackList, function(index, value) {
        var itemBlack = value;
        var itemBlackAndArray = itemBlack.split(/\+/);
        console.log(itemBlackAndArray);

        var andedResult = true;
        for(var i = 0; i < itemBlackAndArray.length; i++)
        {
            if(blackList.length > 0 && $.inArray(itemBlackAndArray[i], itemList) !== -1)
            {
                andedResult = andedResult && true;
            }
            else
            {
                andedResult = andedResult && false;
            }
        }

        if(andedResult)
            inBlackList = true;
    });

    inBlackList = blackList.length > 0 ? inBlackList : false;


    // Check if the itemList has an item in the whiteList
    var inWhiteList = false;
    $.each(whiteList, function(index, value) {
        var itemWhite = value;
        var itemWhiteAndArray = itemWhite.split(/\+/);
        //console.log(itemWhiteAndArray);

        var andedResult = true;
        for(var i = 0; i < itemWhiteAndArray.length; i++)
        {
            if(whiteList.length > 0 && $.inArray(itemWhiteAndArray[i], itemList) !== -1)
            {
                andedResult = andedResult && true;
            }
            else
            {
                andedResult = andedResult && false;
            }
        }
        //console.log("andedResult: " + andedResult);

        if(andedResult)
            inWhiteList = true;

    });

    inWhiteList = whiteList.length > 0 ? inWhiteList : false;


    console.log("inWhite: " + inWhiteList + " - inBlack: " + inBlackList);

    if((whiteList.length == 0 || inWhiteList) && !inBlackList)
        return true;

    return false;
}
