let flag = false;
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.ctrlKey && evt.altKey) {
		if(flag) {
			while(document.getElementsByClassName("chromeputty").length > 0) {
				let linkNode = document.getElementsByClassName("chromeputty")[0];
                let textNode = document.createTextNode(linkNode.innerHTML);
                let parentOfLink = linkNode.parentNode;
				parentOfLink.replaceChild(textNode, linkNode);
			}
		}
		else {
			document.body.innerHTML = document.body.innerHTML.replace( /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/gi, "<a style='background-color: #e2b0b0;' class='chromeputty' href='ssh://$1.$2.$3.$4' target='_blank'>$1.$2.$3.$4</a>");
		}
		flag = !flag;
    }
};