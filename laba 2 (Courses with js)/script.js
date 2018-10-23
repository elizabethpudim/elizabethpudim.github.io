function showTooltip() {
    	document.getElementById("tooltiptext").style.visibility = "visible"; 
	}
function start(){
		setTimeout(showTooltip,5000);
	}
function hideTooltip() {
    	document.getElementById("tooltiptext").style.visibility = "hidden"; 
	}