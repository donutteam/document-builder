//
// Imports
//

import { z } from "zod";

//
// Types
//

export const TagNameSchema = z.enum(
	[
		"a", "abbr", "address", "area", "article", "aside", "audio",
		"b", "base", "bdi", "bdo", "blockquote", "body", "br", "button",
		"canvas", "caption", "cite", "code", "col", "colgroup",
		"data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt",
		"em", "embed",
		"fieldset", "figcaption", "figure", "footer", "form",
		"h1", "head", "header", "hr", "html",
		"i", "iframe", "img", "input", "ins",
		"kbd",
		"label", "legend", "li", "link",
		"main", "map", "mark", "meta", "meter",
		"nav", "noscript",
		"object", "ol", "optgroup", "option", "output",
		"p", "param", "picture", "pre", "progress",
		"q",
		"rp", "rt", "ruby",
		"s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg",
		"table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track",
		"u", "ul",
		"var", "video",
		"wbr",
	]);
	
export type TagName = z.infer<typeof TagNameSchema>;