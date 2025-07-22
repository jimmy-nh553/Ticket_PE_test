import { Item } from "../../admin/interfaces/item.interface";

export interface PrizeInfoAdmin {
    no: string,
    itemNo: string,
    itemName: string,
    imageUrl: string,
    itemPrice: number,
    profitPercentage: number,
    totalIncProfit: number,
    ticketPrice: number,
    ticketsTotal: number,
    ticketsProgress: number,    
    isFinished: boolean,
    winnerName: string,
    winnerDoc: string,
    startDateTime: Date,
    finishDateTime?: Date,

    // obj
    itemObj: Item,
}