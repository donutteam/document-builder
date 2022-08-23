//
// Imports
//

import htmlEntities from "html-entities";

import { DocumentPlaceholder } from "./DocumentPlaceholder.js";

//
// Class
//

/**
 * @typedef {"a"|"abbr"|"address"|"area"|"article"|"aside"|"audio"|"b"|"base"|"bdi"|"bdo"|"blockquote"|"body"|"br"|"button"|"canvas"|"caption"|"cite"|"code"|"col"|"colgroup"|"data"|"datalist"|"dd"|"del"|"details"|"dfn"|"dialog"|"div"|"dl"|"dt"|"em"|"embed"|"fieldset"|"figcaption"|"figure"|"footer"|"form"|"h1"|"head"|"header"|"hr"|"html"|"i"|"iframe"|"img"|"input"|"ins"|"kbd"|"label"|"legend"|"li"|"link"|"main"|"map"|"mark"|"meta"|"meter"|"nav"|"noscript"|"object"|"ol"|"optgroup"|"option"|"output"|"p"|"param"|"picture"|"pre"|"progress"|"q"|"rp"|"rt"|"ruby"|"s"|"samp"|"script"|"section"|"select"|"small"|"source"|"span"|"strong"|"style"|"sub"|"summary"|"sup"|"svg"|"table"|"tbody"|"td"|"template"|"textarea"|"tfoot"|"th"|"thead"|"time"|"title"|"tr"|"track"|"u"|"ul"|"var"|"video"|"wbr"} TagName
 */

/**
 * @callback CallbackChild
 * @param {Object} context Contextual information for the callback.
 * @returns {Child|Array<Child>}
 */

/**
 * @typedef {DocumentElement|DocumentPlaceholder|String|CallbackChild} Child
 */

/**
 * @typedef {Object.<String, Child>} PlaceholderReplacements
 */

/**
 * A class that creates an object hierarchy that can be rendered to HTML.
 */
export class DocumentElement
{
	/**
	 * An object containing lists of boolean-like attributes for specific element types.
	 * 
	 * These attributes should NOT be included AT ALL when their values are NOT truthy.
	 * 
	 * @type {Object}
	 */

	static booleanAttributes =
	{
		form:
		[
			"novalidate",
		],

		input:
		[
			"readonly",
			"disabled",
			"multiple",
			"required",
			"autofocus",
			"autocomplete",
		],

		option:
		[
			"disabled",
			"selected",
		],
	};

	/**
	 * A list of all void tag names that cannot have children.
	 * 
	 * @type {Array<String>}
	 */
	static voidTagNames =
		[
			"area",
			"base",
			"br",
			"col",
			"embed",
			"hr",
			"img",
			"input",
			"link",
			"meta",
			"param",
			"source",
			"track",
			"wbr",
		];

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
	 * @type {Array<DocumentElement|String>}
	 */
	children = null;

	/**
	 * Constructs a new DocumentElement.
	 * 
	 * @param {TagName} tagName This component's tag name.
	 * @param {Object|Array<String>|String} [attributes] This components attributes. Use a string or an array of strings as a shorthand for a class attribute.
	 * @param {Array<Child>|Child} [children] An array of children.
	 */
	constructor(tagName, attributes, children)
	{
		this.tagName = tagName;

		if (attributes != null)
		{
			if (Array.isArray(attributes))
			{
				attributes = attributes.filter((attribute) => attribute != null);

				this.attributes =
				{
					class: attributes.join(" "),
				};
			}
			else if (typeof(attributes) == "string")
			{
				this.attributes =
				{
					class: attributes,
				};
			}
			else
			{
				this.attributes = attributes;
			}
		}

		if (children != null)
		{
			this.children = Array.isArray(children) ? children : [ children ];
		}
	}

	/**
	 * Renders this element to an HTML string.
	 * 
	 * @param {Object} context An object containing any dynamic values that might be relevant to rendering this component.
	 * @param {PlaceholderReplacements} placeholderReplacements An object containing placeholder replacements.
	 * @returns {String} An HTML string.
	 * @author Loren Goodwin
	 */
	async render(context = {}, placeholderReplacements = {})
	{
		if (this.tagName == null)
		{
			return await this.#renderChildren(context, placeholderReplacements, this.children);
		}

		let html = "";

		if (this.tagName == "html")
		{
			html += "<!DOCTYPE html>";
		}

		html += `<${ this.tagName }`;

		if (this.attributes != null)
		{
			const booleanAttributes = DocumentElement.booleanAttributes[this.tagName] ?? [];

			for (let [ attributeName, attributeValue ] of Object.entries(this.attributes))
			{
				attributeName = attributeName.toLowerCase();

				// Support React style className attributes
				if (attributeName == "className")
				{
					attributeName = "class";
				}

				if (attributeValue == null)
				{
					continue;
				}

				const isBooleanAttribute = booleanAttributes.indexOf(attributeName) != 1;

				if (!attributeValue && isBooleanAttribute)
				{
					continue;
				}

				if (Array.isArray(attributeValue))
				{
					attributeValue = attributeValue.join(" ");
				}

				if (attributeValue instanceof DocumentPlaceholder)
				{
					/**
					 * @type {Array<Child>}
					 */
					let children = placeholderReplacements[attributeValue.name] ?? attributeValue.defaultContents;

					if (!Array.isArray(children))
					{
						children = [ children ];
					}

					attributeValue = children
						.map((child) => htmlEntities.encode(child.toString()))
						.join("");
				}

				html += ` ${ attributeName }="${ attributeValue }"`;
			}
		}

		html += `>`;

		// Don't close or render any children for void tags
		if (DocumentElement.voidTagNames.indexOf(this.tagName) != -1)
		{
			return html;
		}

		if (this.children != null)
		{
			html += await this.#renderChildren(context, placeholderReplacements, this.children);
		}

		html += `</${ this.tagName }>`;

		return html;
	}

	/**
	 * Renders an array of children.
	 * 
	 * @param {Object} context Contextual information for rendering the children.
	 * @param {PlaceholderReplacements} placeholderReplacements An object containing placeholder replacements.
	 * @param {Array<Child>} children An array of children.
	 * @author Loren Goodwin
	 */
	async #renderChildren(context = {}, placeholderReplacements = {}, children)
	{
		let html = "";

		for (const child of children)
		{
			html += await this.#renderChild(context, placeholderReplacements, child);
		}

		return html;
	}

	/**
	 * Renders a child.
	 * 
	 * @param {Object} context Contextual information for rendering the child.
	 * @param {PlaceholderReplacements} placeholderReplacements An object containing placeholder replacements.
	 * @param {Child} child A child.
	 * @author Loren Goodwin
	 */
	async #renderChild(context = {}, placeholderReplacements = {}, child)
	{
		let html = "";

		if (child == null)
		{
			return html;
		}
		else if(typeof(child) == "string")
		{
			html += child;
		}
		else if (typeof(child) == "bigint" || typeof(child) == "boolean" || typeof(child) == "number")
		{
			html += child.toString();
		}
		else if(typeof(child) == "function")
		{
			html += await this.#renderChild(context, placeholderReplacements, child(context));
		}
		else if (child instanceof DocumentElement)
		{
			html += await child.render(context, placeholderReplacements);
		}
		else if(child instanceof DocumentPlaceholder)
		{
			const placeholderReplacement = placeholderReplacements[child.name] ?? child.defaultContents;

			if (placeholderReplacement != null)
			{
				html += Array.isArray(placeholderReplacement) 
					? await this.#renderChildren(context, placeholderReplacements, placeholderReplacement) 
					: await this.#renderChild(context, placeholderReplacements, placeholderReplacement);
			}
		}
		else if(Array.isArray(child))
		{
			html += await this.#renderChildren(context, placeholderReplacements, child);
		}
		else
		{
			console.warn("[DocumentElement] Invalid child:", child);
		}

		return html;
	}
}