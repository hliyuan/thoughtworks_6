const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {

	var allItemsArray = loadAllItems();
	var ItemsLists = [];

	for (var i = 0; i < inputs.length; i++) {
		for (var j = 0; j < allItemsArray.length; j++) {
			if (inputs[i]==allItemsArray[j].barcode) {
				var isExist = false;
				for (var k = 0; k < ItemsLists.length; k++) {
					if(inputs[i]==ItemsLists[k].barcode){
						ItemsLists[k].number++;
						ItemsLists[k].totalprice += ItemsLists[k].price;
						isExist = true;
						break;
					}
				}
				if (!isExist) {
					ItemsLists.push(new Item(allItemsArray[j].barcode,allItemsArray[j].name,1,allItemsArray[j].unit,allItemsArray[j].price,allItemsArray[j].price));
				}
				
				break;
			}
		}
	}
	
	var printText = '***<没钱赚商店>购物清单***\n';
	var total = 0.00;
	for (var i = 0; i < ItemsLists.length; i++) {
		printText += "名称："+ItemsLists[i].name+"，数量："+ItemsLists[i].number+
			ItemsLists[i].unit+"，单价："+ItemsLists[i].price.toFixed(2)+"(元)，小计："+
			ItemsLists[i].totalprice.toFixed(2)+"(元)\n";
			total += ItemsLists[i].totalprice;
	}
	//'名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +

    printText += '----------------------\n' +
    '总计：'+total.toFixed(2)+'(元)\n'+"**********************"; 
    return printText;
};
function Item(barcode,name,number,unit,price,totalprice){
	this.barcode = barcode;
	this.name = name;
	this.number = number;
	this.unit = unit;
	this.price = price;
	this.totalprice = totalprice;
}