console.log("Intro to DOM")

/* 
	? Document Object Model (DOM)
	* a structure of our HTML file in an object format
	* contains all of elements (html, body, head, h1's, div's, and so on)
	* contains all of element attributes (href, class, id, aria, and so on)
	* and all whitespace and text within

	* link to DOM tree:
	https://en.wikipedia.org/wiki/Document_Object_Model#/media/File:DOM-model.svg
*/

// DOM object in a nutshell
console.log(document)

// ? How do we access elements within DOM?

// ? getElementsByTagName() [HTML Collection]

let introH1 = document.getElementsByTagName("h1")
console.log(introH1) // Array-like object
console.log(introH1[0])

console.log(document.body)

// ? getElementById() 

let footer = document.getElementById("footer")
// If you have issues with console.log in browser, switch to console.dir
console.dir(footer)

// ? Element attribute changes

footer.style.color = "red"

// ? getElementsByClassName()

let listItems = document.getElementsByClassName("list-items")
console.log(listItems)

/* 
	? Fast challenge
	* iterate over those list items (there may be a catch here)
	* go thru the properties and see how you may be able to access the text
	* if the text includes the word 'milk', change its color to rebeccapurple
*/

// listItems.forEach(item => console.log(item)) // TypeError .forEach not a fx
// this is because HTMLCollections look like arrays but are not arrays

for (item of listItems) {
	if (item.textContent.includes("milk")) {
		console.log(item.textContent, item.textContent.includes("milk"))
		// item.style.color = "rebeccapurple"
		item.classList.add("target")
	}
}
// TODO: challenge to check if a substring exists within a string

// ? .textContent is a property which holds text between opening and closing tag




