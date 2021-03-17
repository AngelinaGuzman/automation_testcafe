import { Selector } from 'testcafe'
import {logOut} from '../pages/LogOut'

export class InventoryPage extends logOut{

    constructor() {
        super()

        this.inventoryItems = Selector('.inventory_list').find('.inventory_item')
    }

    getInventoryButton(listItem) {
        return `.inventory_item:nth-child(${listItem}) button`
    }

    getInventoryItem(listItem) {
        return {
            img: Selector(`.inventory_item:nth-child(${listItem}) img`),
            title: Selector(`.inventory_item:nth-child(${listItem}) .inventory_item_name`),
            description: Selector(`.inventory_item:nth-child(${listItem}) .inventory_item_desc`),
            price: Selector(`.inventory_item:nth-child(${listItem}) .inventory_item_price`)
        }
    }
}