import {columnsVisibleFun} from './gridCompOther';
/*
 * 将固定列放入gridCompColumnFixedArr
 */
const re_initGridCompFixedColumn = function(){
	var oThis = this;
	var w = 0;
	$.each(this.gridCompColumnArr,function(i){
		if(this.options.fixed == true){
			oThis.gridCompColumnFixedArr.push(this);
		}
	});
	$.each(this.gridCompColumnFixedArr,function(i){
		for(var i = oThis.gridCompColumnArr.length;i >-1;i-- ){
			if(oThis.gridCompColumnArr[i] == this){
				oThis.gridCompColumnArr.splice(i,1);
				break;
			}
		}
	});
};

const fixed_columnsVisibleFun = function(){
	// 扩展方法
	var oThis = this,
		fixW = 0;
	$.each(this.gridCompColumnFixedArr,function(){
		if(this.options.visible){
			fixW += parseInt(this.options.width);
			this.firstColumn = oThis.firstColumn;
			oThis.firstColumn = false;
		}
	});
	this.fixedRealWidth = fixW;
};

const re_createHeaderTableFixed = function(){
	return this.createHeaderTable('fixed');
};

const re_createContentTableFixed = function(){
	return this.createContentTable('fixed');
}
const re_createContentOneRowFixed = function(rowObj){
	return this.createContentOneRow(rowObj,'fixed')
}
const re_widthChangeGridFunFixed = function(halfWholeWidth){
	// 固定区域宽度不大于整体宽度的一半
	if(this.fixedRealWidth > halfWholeWidth){
		this.fixedWidth = halfWholeWidth;
	}else{
		this.fixedWidth = this.fixedRealWidth;
	}
}
export{
    re_initGridCompFixedColumn,
    fixed_columnsVisibleFun,
    re_createHeaderTableFixed,
    re_createContentTableFixed,
    re_createContentOneRowFixed,
    re_widthChangeGridFunFixed
}
