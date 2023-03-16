//
// Imports
//

import { encodeHTML } from "entities";

import { Child } from "../types/Child.js";
import 
{ 
	ElementAttributes,
	AElementAttributes, 
	AreaElementAttributes,
	AudioElementAttributes,
	BaseElementAttributes,
	BlockquoteElementAttributes,
	ButtonElementAttributes,
	CanvasElementAttributes,
	ColElementAttributes,
	ColgroupElementAttributes,
	DelElementAttributes,
	DetailsElementAttributes,
	EmbedElementAttributes,
	FieldsetElementAttributes,
	FormElementAttributes,
	IframeElementAttributes,
	ImgElementAttributes,
	InputElementAttributes,
	InsElementAttributes,
	LabelElementAttributes,
	LIElementAttributes,
	LinkElementAttributes,
	MapElementAttributes,
	MetaElementAttributes,
	MeterElementAttributes,
	ObjectElementAttributes,
	OLElementAttributes,
	OptgroupElementAttributes,
	OptionElementAttributes,
	OutputElementAttributes,
	ParamElementAttributes,
	ProgressElementAttributes,
	QElementAttributes,
	ScriptElementAttributes,
	SelectElementAttributes,
	SourceElementAttributes,
	StyleElementAttributes,
	TDElementAttributes,
	TextareaElementAttributes,
	THElementAttributes,
	TimeElementAttributes,
	TrackElementAttributes,
	VideoElementAttributes, 
} from "../types/ElementAttributes.js";
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

	/** This component's attributes. */
	attributes : ElementAttributes;

	/** A single child or an array of child. */
	children : Child[] = null;

	constructor(tagName : "a", attributes? : AElementAttributes, children? : Child);
	constructor(tagName : "area", attributes? : AreaElementAttributes, children? : Child);
	constructor(tagName : "audio", attributes? : AudioElementAttributes, children? : Child);
	constructor(tagName : "base", attributes? : BaseElementAttributes, children? : Child);
	constructor(tagName : "blockquote", attributes? : BlockquoteElementAttributes, children? : Child);
	constructor(tagName : "button", attributes? : ButtonElementAttributes, children? : Child);
	constructor(tagName : "canvas", attributes? : CanvasElementAttributes, children? : Child);
	constructor(tagName : "col", attributes? : ColElementAttributes, children? : Child);
	constructor(tagName : "colgroup", attributes? : ColgroupElementAttributes, children? : Child);
	constructor(tagName : "del", attributes? : DelElementAttributes, children? : Child);
	constructor(tagName : "details", attributes? : DetailsElementAttributes, children? : Child);
	constructor(tagName : "embed", attributes? : EmbedElementAttributes, children? : Child);
	constructor(tagName : "fieldset", attributes? : FieldsetElementAttributes, children? : Child);
	constructor(tagName : "form", attributes? : FormElementAttributes, children? : Child);
	constructor(tagName : "iframe", attributes? : IframeElementAttributes, children? : Child);
	constructor(tagName : "img", attributes? : ImgElementAttributes, children? : Child);
	constructor(tagName : "input", attributes? : InputElementAttributes, children? : Child);
	constructor(tagName : "ins", attributes? : InsElementAttributes, children? : Child);
	constructor(tagName : "label", attributes? : LabelElementAttributes, children? : Child);
	constructor(tagName : "li", attributes? : LIElementAttributes, children? : Child);
	constructor(tagName : "link", attributes? : LinkElementAttributes, children? : Child);
	constructor(tagName : "map", attributes? : MapElementAttributes, children? : Child);
	constructor(tagName : "meta", attributes? : MetaElementAttributes, children? : Child);
	constructor(tagName : "meter", attributes? : MeterElementAttributes, children? : Child);
	constructor(tagName : "object", attributes? : ObjectElementAttributes, children? : Child);
	constructor(tagName : "ol", attributes? : OLElementAttributes, children? : Child);
	constructor(tagName : "optgroup", attributes? : OptgroupElementAttributes, children? : Child);
	constructor(tagName : "option", attributes? : OptionElementAttributes, children? : Child);
	constructor(tagName : "output", attributes? : OutputElementAttributes, children? : Child);
	constructor(tagName : "param", attributes? : ParamElementAttributes, children? : Child);
	constructor(tagName : "progress", attributes? : ProgressElementAttributes, children? : Child);
	constructor(tagName : "q", attributes? : QElementAttributes, children? : Child);
	constructor(tagName : "script", attributes? : ScriptElementAttributes, children? : Child);
	constructor(tagName : "select", attributes? : SelectElementAttributes, children? : Child);
	constructor(tagName : "source", attributes? : SourceElementAttributes, children? : Child);
	constructor(tagName : "style", attributes? : StyleElementAttributes, children? : Child);
	constructor(tagName : "td", attributes? : TDElementAttributes, children? : Child);
	constructor(tagName : "textarea", attributes? : TextareaElementAttributes, children? : Child);
	constructor(tagName : "th", attributes? : THElementAttributes, children? : Child);
	constructor(tagName : "time", attributes? : TimeElementAttributes, children? : Child);
	constructor(tagName : "track", attributes? : TrackElementAttributes, children? : Child);
	constructor(tagName : "video", attributes? : VideoElementAttributes, children? : Child);
	constructor(tagName : TagName | string, attributes? : ElementAttributes | string | string[], children? : Child);

	/**
	 * Constructs a new DocumentElement.
	 * 
	 * @param tagName This component's tag name.
	 * @param attributes This components attributes. Use a string or an array of strings as a shorthand for a class attribute. Optional.
	 * @param children An array of children. Optional.
	 */
	constructor(tagName : TagName | string, attributes? : ElementAttributes | string, children? : Child)
	{
		this.tagName = tagName as TagName;

		if (attributes != null)
		{
			if (typeof(attributes) == "string")
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
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async render(context? : object) : Promise<string>
	{
		if (this.tagName == null)
		{
			return await this.#renderChildren(this.children, context);
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
			html += await this.#renderChildren(this.children, context);
		}

		html += `</${ this.tagName }>`;

		return html;
	}

	/**
	 * Renders an array of children.
	 * 
	 * @param children An array of children.
	 * @param context Contextual information for rendering the children.
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async #renderChildren(children : Child[], context? : object) : Promise<string>
	{
		let html = "";

		for (const child of children)
		{
			html += await this.#renderChild(child, context);
		}

		return html;
	}

	/**
	 * Renders a child.
	 * 
	 * @param child A child.
	 * @param context Contextual information for rendering the child.
	 * @returns The rendered HTML string.
	 * @author Loren Goodwin
	 */
	async #renderChild(child : Child, context? : object) : Promise<string>
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
			return await this.#renderChild(child(context), context);
		}
		else if (child instanceof DocumentElement)
		{
			return await child.render(context);
		}
		else if(Array.isArray(child))
		{
			return await this.#renderChildren(child, context);
		}
		else
		{
			console.warn("[DocumentElement] Invalid child:", child);
		}
	}
}