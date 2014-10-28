var hobbyAsIdentity = ["Televisioner", "Movier", "Sportser", "Booker", "Musicer", "Drawer", "Fooder", "Exerciser", "Shopper", "Relaxer", "Crafter", "Dancer", "Theaterer", "Drinker", "Knitter", "Websurfer", "Trainspotter"];
var thisHobby = hobbyAsIdentity[Math.floor(Math.random()*hobbyAsIdentity.length)];

walk(document.body, thisHobby);

function walk(node, thisHobby) 
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
				walk(child, thisHobby);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node, thisHobby);
            }
			break;
	}
}

function handleText(textNode, thisHobby) {
    var v = textNode.nodeValue;
    if (v.length > 5) {
        v = v.replace(/Gamer/g, thisHobby);
        v = v.replace(/gamer/g, thisHobby.toLowerCase());
        textNode.nodeValue = v;
    }
}


