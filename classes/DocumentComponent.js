//
// Imports
//

import { DocumentPlaceholder } from "./DocumentPlaceholder.js";

//
// Class
//

/**
 * @typedef {"a"|"abbr"|"address"|"area"|"article"|"aside"|"audio"|"b"|"base"|"bdi"|"bdo"|"blockquote"|"body"|"br"|"button"|"canvas"|"caption"|"cite"|"code"|"col"|"colgroup"|"data"|"datalist"|"dd"|"del"|"details"|"dfn"|"dialog"|"div"|"dl"|"dt"|"em"|"embed"|"fieldset"|"figcaption"|"figure"|"footer"|"form"|"h1"|"head"|"header"|"hr"|"html"|"i"|"iframe"|"img"|"input"|"ins"|"kbd"|"label"|"legend"|"li"|"link"|"main"|"map"|"mark"|"meta"|"meter"|"nav"|"noscript"|"object"|"ol"|"optgroup"|"option"|"output"|"p"|"param"|"picture"|"pre"|"progress"|"q"|"rp"|"rt"|"ruby"|"s"|"samp"|"script"|"section"|"select"|"small"|"source"|"span"|"strong"|"style"|"sub"|"summary"|"sup"|"svg"|"table"|"tbody"|"td"|"template"|"textarea"|"tfoot"|"th"|"thead"|"time"|"title"|"tr"|"track"|"u"|"ul"|"var"|"video"|"wbr"} TagName
 */

/**
 * @typedef {DocumentComponent|DocumentPlaceholder|String} Child
 */

/**
 * @typedef {Object.<DocumentComponent>} Replacements
 */

/**
 * A class that creates a render-able component.
 */
export class DocumentComponent
{
	/**
	 * This component's tag name.
	 * 
	 * @type {TagName}
	 */
	tagName;

	/**
	 * This components attributes.
	 * 
	 * @type {Object}
	 */
	attributes;

	/**
	 * An array of child document components, strings and/or block placeholders.
	 * 
	 * @type {Array<DocumentComponent|String>}
	 */
	children = null;

	/**
	 * Constructs a new DocumentComponent;
	 * 
	 * @param {TagName} tagName This component's tag name.
	 * @param {Object} [attributes] This components attributes.
	 * @param {Array<Child>|Child} [children] An array of child document components, strings and/or placeholders.
	 * @author Loren Goodwin
	 */
	constructor(tagName, attributes, children)
	{
		this.tagName = tagName;

		this.attributes = attributes;

		if (children != null)
		{
			this.children = Array.isArray(children) ? children : [ children ];
		}
	}

	/**
	 * Renders this component to an HTML string.
	 * 
	 * @param {Replacements} replacements An object containing placeholder replacements.
	 * @returns {String} An HTML string.
	 * @author Loren Goodwin
	 */
	render(replacements)
	{
		let html = "";

		if (this.tagName == "html")
		{
			html += "<!DOCTYPE html>";
		}

		html += `<${ this.tagName }`;

		if (this.attributes != null)
		{
			for (const [ name, value ] of Object.entries(this.attributes))
			{
				html += ` ${ name }="${ value }"`;
			}
		}

		html += `>`;

		if (this.children != null)
		{
			html += this.renderChildren(this.children, replacements);
		}

		html += `</${ this.tagName }>`;

		return html;
	}

	/**
	 * Renders an array of children components.
	 * 
	 * @param {Array<Child>} children An array of children components.
	 * @param {Replacements} [replacements] An object containing placeholder replacements.
	 * @author Loren Goodwin
	 */
	renderChildren(children, replacements = {})
	{
		let html = "";

		for (const child of children)
		{
			html += this.renderChild(child, replacements);
		}

		return html;
	}

	/**
	 * Renders a child component.
	 * 
	 * @param {Child} child
	 * @param {Replacements} [replacements] An object containing placeholder replacements.
	 * @author Loren Goodwin
	 */
	renderChild(child, replacements = {})
	{
		let html = "";

		if (child instanceof DocumentComponent)
		{
			html += child.render(replacements);
		}
		else if(child instanceof DocumentPlaceholder)
		{
			const replacement = replacements[child.name];

			if (replacement != null)
			{
				html += this.renderChildren(replacement);
			}
		}
		else if(typeof(child) == "string")
		{
			html += child;
		}
		else
		{
			console.error("[DocumentComponent] Invalid child:", child);

			throw new Error("[DocumentComponent] Invalid child:", child);
		}

		return html;
	}
}

const template = new DocumentComponent("html", null,
	[
		new DocumentComponent("head", null, new DocumentPlaceholder("HEAD")),
		new DocumentComponent("body", null, new DocumentPlaceholder("BODY")),
	]);

const html = template.render(
	{
		"HEAD":
		[
			new DocumentComponent("meta", { charset: "utf-8" }),

			new DocumentComponent("title", null, "This is a test."),
		],
		"BODY":
		[
			
		],
	});

console.log(html);