walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
    var v = textNode.nodeValue;
    var hobbyAsIdentity = ["Televisioner", "Movier", "Sportser", "Booker", "Musicer", "Drawer", "Fooder", "Exerciser", "Shopper", "Relaxer", "Crafter", "Dancer", "Theatreer", "Drinker", "Genealogier", "Knitter", "Websurfer", "Trainspotter"];
    var thisHobby = hobbyAsIdenty[Math.floor(Math.random()*hobbyAsIdenty.length)];
    v = v.replace(/\bGamer\b/g, thisHobby);
    v = v.replace(/\bgamer\b/g, thisHobby.toLowerCase());
    textNode.nodeValue = v;
}


