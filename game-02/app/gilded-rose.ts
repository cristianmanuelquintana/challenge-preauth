export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
                this.items[i].sellIn = this.items[i].sellIn - 1; 
            }
            
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                if (this.items[i].quality > 0) {
                    if (this.items[i].name == 'Conjured'){
                        if(this.items[i].sellIn >= 0 ){
                            this.items[i].quality = this.items[i].quality - 2
                        }else{
                            this.items[i].quality = this.items[i].quality >= 4 ? this.items[i].quality - 4 : 0
                        }
                    }else{
                        if(this.items[i].sellIn >= 0 ){
                            this.items[i].quality = this.items[i].quality - 1
                        }else{
                            this.items[i].quality = this.items[i].quality >= 2 ? this.items[i].quality - 2 : 0
                        }
                    }           
                }
            } else {
                switch (this.items[i].name ){
                    case 'Aged Brie':
                        this.items[i].quality = this.items[i].quality < 50 ? this.items[i].quality + 1 : this.items[i].quality 
                        break;
                    case 'Backstage passes to a TAFKAL80ETC concert':
                        if (this.items[i].quality < 50 ){
                            if (this.items[i].sellIn <= 0){
                                this.items[i].quality = 0
                            }else if (this.items[i].sellIn <= 5){
                                this.items[i].quality = this.items[i].quality < 48 ? this.items[i].quality + 3 : 50
                            }else if(this.items[i].sellIn <= 10){
                                this.items[i].quality = this.items[i].quality < 49 ? this.items[i].quality + 2 : 50
                            }else{
                                this.items[i].quality = this.items[i].quality + 1 
                            }
                        }
                        break;
                }
            }
        }

        return this.items;
    }
}
