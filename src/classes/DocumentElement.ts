//
// Imports
//

import { encodeHTML } from "entities";

import { DocumentPlaceholder } from "./DocumentPlaceholder.js";

import { Child } from "../types/Child.js";
import { DocumentPlaceholderReplacements } from "../types/DocumentPlaceholderReplacements.js";
import { TagName } from "../types/TagName.js";

//
// Exports
//

/** A class that creates an object hierarchy that can be rendered to HTML. */
export class DocumentElement
{
	/**
	 * An object containing lists of boolean-like attributes for specific element types.
	 * 
	 * These attributes should NOT be included AT ALL when their values are NOT truthy.
	 */
	static booleanAttributes =
		{
			__global:
			[
				"autofocus",
				"inert",
			],

			audio:
			[
				"autoplay",
				"controls",
				"disableremoteplayback",
				"loop",
				"muted",
			],

			button:
			[
				"disabled",
			],

			details:
			[
				"open",
			],

			dialog:
			[
				"open",
			],

			fieldset:
			[
				"disabled",
			],

			form:
			[
				"novalidate",
			],

			img:
			[
				"ismap",
			],

			input:
			[
				"checked",
				"disabled",
				"multiple",
				"readonly",
				"required",
			],

			link:
			[
				"disabled",
			],

			ol:
			[
				"reversed",
			],

			optgroup:
			[
				"disabled",
			],

			option:
			[
				"disabled",
				"selected",
			],

			script:
			[
				"async",
				"defer",
				"nomodule",
			],

			select:
			[
				"disabled",
				"multiple",
				"required",
			],

			textarea:
			[
				"disabled",
				"readonly",
				"required",
			],

			track:
			[
				"default",
			],

			ul:
			[
				"compact", // Deprecated
			],

			video:
			[
				"autoplay",
				"autopictureinpicture",
				"controls",
				"disablepictureinpicture",
				"disableremoteplayback",
				"loop",
				"muted",
				"playsinline",
			],
		};

	/** A list of all void tag names that cannot have children. */
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

	/** This component's tag name. */
	tagName : TagName;

	/** This components attributes. */
	attributes : object;

	/** A single child or an array of child. */
	children : Child[] = null;

	/**
	 * Constructs a new DocumentElement.
	 * 
	 * @param tagName This component's tag name.
	 * @param attributes This components attributes. Use a string or an array of strings as a shorthand for a class attribute. Optional.
	 * @param children An array of children. Optional.
	 */
	constructor(tagName : TagName, attributes? : object | string | string[], children? : Child)
	{
		this.tagName = tagName;

		if (attributes != null)
		{
			if (Array.isArray(attributes))
			{
				const cssClasses = attributes.filter((attribute) => attribute != null);

				this.attributes =
				{
					class: cssClasses.join(" "),
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
	 * @param context An object containing any dynamic values that might be relevant to rendering this component.
	 * @param placeholderReplacements An object containing placeholder replacements.
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async render(context? : object, placeholderReplacements? : DocumentPlaceholderReplacements) : Promise<string>
	{
		if (this.tagName == null)
		{
			return await this.#renderChildren(this.children, context, placeholderReplacements);
		}

		let html = "";

		if (this.tagName == "html")
		{
			html += "<!DOCTYPE html>";
		}

		html += `<${ this.tagName }`;

		if (this.attributes != null)
		{
			const booleanAttributes =
			[
				...DocumentElement.booleanAttributes["__global"],

				...(DocumentElement.booleanAttributes[this.tagName] ?? []),
			];

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

				const isBooleanAttribute = booleanAttributes.indexOf(attributeName) != -1;

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
						.map((child) => encodeHTML(child.toString()))
						.join("");
				}

				html += ` ${ attributeName }`;

				if (!isBooleanAttribute)
				{
					html += `="${ attributeValue }"`;
				}
			}
		}


		// Don't close or render any children for void tags
		if (DocumentElement.voidTagNames.indexOf(this.tagName) != -1)
		{
			html += ` />`;

			return html;
		}
		else
		{
			html += `>`;
		}

		if (this.children != null)
		{
			html += await this.#renderChildren(this.children, context, placeholderReplacements);
		}

		html += `</${ this.tagName }>`;

		return html;
	}

	/**
	 * Renders an array of children.
	 * 
	 * @param children An array of children.
	 * @param context Contextual information for rendering the children.
	 * @param placeholderReplacements An object containing placeholder replacements.
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async #renderChildren(children : Child[], context? : object, placeholderReplacements? : DocumentPlaceholderReplacements) : Promise<string>
	{
		let html = "";

		for (const child of children)
		{
			html += await this.#renderChild(child, context, placeholderReplacements);
		}

		return html;
	}

	/**
	 * Renders a child.
	 * 
	 * @param child A child.
	 * @param context Contextual information for rendering the child.
	 * @param placeholderReplacements An object containing placeholder replacements.
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async #renderChild(child : Child, context? : object, placeholderReplacements? : DocumentPlaceholderReplacements) : Promise<string>
	{
		if (child == null || child == undefined)
		{
			return "";
		}
		else if(typeof(child) == "string")
		{
			return child;
		}
		else if (typeof(child) == "bigint" || typeof(child) == "boolean" || typeof(child) == "number")
		{
			return child.toString();
		}
		else if(typeof(child) == "function")
		{
			return await this.#renderChild(child(context), context, placeholderReplacements);
		}
		else if (child instanceof DocumentElement)
		{
			return await child.render(context, placeholderReplacements);
		}
		else if(child instanceof DocumentPlaceholder)
		{
			const placeholderReplacement = placeholderReplacements[child.name] ?? child.defaultContents;

			if (placeholderReplacement == null || placeholderReplacement == undefined)
			{
				return "";
			}

			return Array.isArray(placeholderReplacement) 
				? await this.#renderChildren(placeholderReplacement, context, placeholderReplacements) 
				: await this.#renderChild(placeholderReplacement, context, placeholderReplacements);
		}
		else if(Array.isArray(child))
		{
			return await this.#renderChildren(child, context, placeholderReplacements);
		}
		else
		{
			console.warn("[DocumentElement] Invalid child:", child);
		}
	}
}