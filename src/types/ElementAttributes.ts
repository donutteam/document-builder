//
// Imports
//

import { InputType } from "./InputType.js";

//
// Exports
//

export type ElementAttributes =
{
	/** Specifies a shortcut key to activate/focus an element. */
	accesskey? : string | null; 

	/** Specifies one or more class names for the element. */
	class? : string | null;

	/** Alias for "class". */
	className? : string | null;

	/** Specifies whether the content of an element is editable. */
	contenteditable? : "true" | "false" | boolean | null;

	/** Specifies the text direction of the element's contents. */
	dir? : "ltr" | "rtl" | "auto" | null;

	/** When present, the element is not yet, or is no longer, relevant and should not be displayed. */
	hidden? : string | boolean | null;

	/** Specifies a unique ID for the element. */
	id? : string | null;

	/** Specifies the language of the element's content. */
	lang? : string | null;

	/** Specifies whether the element is to have its spelling and grammar checked. */
	spellcheck? : string | null;

	/** Specifies inline styles for the element. */
	style? : string | null;

	/** Specifies the tabbing order of the element. */
	tabindex? : string | null;

	/** Specifies extra information about an element. */
	title? : string | null;

	/** Specifies whether the content of the element should be translated or not. */
	translate? : string | null;

	[attribute : string] : string | number | boolean | undefined | null | null;
}

export type AElementAttributes = ElementAttributes &
{
	/** Specifies that the target will be downloaded when a user clicks on the link. */
	download? : string | null;

	/** Specifies the URL of the page that the link goes to. */
	href? : string | null;

	/** Specifies the language of the linked document. */
	hreflang? : string | null;

	/** Specifies what media/device the linked document is optimised for. */
	media? : string | null;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string | null;

	/** Specifies the target for where to open the linked document. */
	target? : string | null;
}

export type AreaElementAttributes = ElementAttributes &
{
	/** Specifies alternate text for the area. Required if the "href" attribute is present. */
	alt? : string | null;

	/** Specifies the coordinates of the area. */
	coords? : string | null;

	/** Specifies the URL of the page that the link goes to. */
	href? : string | null;

	/** Specifies the language of the linked document. */
	hreflang? : string | null;

	/** Specifies what media/device the linked document is optimised for. */
	media? : string | null;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string | null;

	/** Specifies the shape of the area. */
	shape? : string | null;

	/** Specifies the target for where to open the linked document. */
	target? : string | null;
}

export type AudioElementAttributes = ElementAttributes &
{
	/** When present, the audio will start playing as soon as it can do so. */
	autoplay? : string | boolean | null;

	/** When present, controls for the audio will be displayed. */
	controls? : string | boolean | null;

	/** When present, the audio will loop endlessly. */
	loop? : string | boolean | null;

	/** When present, the audio will be muted by default. */
	muted? : string | boolean | null;

	/** Specifies if and how this audio should be loaded when the page loads. */
	preload? : string | null;

	/** The URL of the audio file. */
	src? : string | null;
}

export type BaseElementAttributes = ElementAttributes &
{
	/** Specifies the base URL for all relative URLs on the page. */
	href? : string | null;

	/** Specifies the default target for all links and forms on the page. */
	target? : string | null;
}

export type BlockquoteElementAttributes = ElementAttributes &
{
	/** Specifies a URL to a document that explains the quote. */
	cite? : string | null;
}

export type ButtonElementAttributes = ElementAttributes &
{
	/** When present, the button should automatically get focus on page load. */
	autofocus? : string | boolean | null;

	/** When present, the button will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies the "id" of the form that this button belongs to. */
	form? : string | null;
	
	/** Specifies where to send the form-data when a form is submitted. Only for "submit" type buttons. */
	formaction? : string | null;

	/** Specifies the name of the button. */
	name? : string | null;

	/** Specifies the type of button this is. */
	type? : "button" | "reset" | "submit" | null;

	/** The value of the button. */
	value? : string | null;
}

export type CanvasElementAttributes = ElementAttributes &
{
	/** Specifies the height of the canvas. */
	height? : string | null;

	/** Specifies the width of the canvas. */
	width? : string | null;
}

export type ColElementAttributes = ElementAttributes &
{
	/** Specifies the number of columns to span. */
	span? : string | null;
}

export type ColgroupElementAttributes = ElementAttributes &
{
	/** Specifies the number of columns to span. */
	span? : string | null;
}

export type DelElementAttributes = ElementAttributes &
{
	/** Specifies a URL to a document that explains the deletion. */
	cite? : string | null;

	/** Specifies the date and time when the text was deleted. */
	datetime? : string | null;
}

export type DetailsElementAttributes = ElementAttributes &
{
	/** When present, the details will be opened by default. */
	open? : string | boolean | null;
}

export type EmbedElementAttributes = ElementAttributes &
{
	/** Specifies the height of the embed. */
	height? : string | null;

	/** The URL of the embed. */
	src? : string | null;

	/** The MIME type for the embed. */
	type? : string | null;

	/** Specifies the width of the embed. */
	width? : string | null;
}

export type FieldsetElementAttributes = ElementAttributes &
{
	/** When present, the field set will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies the "id" of the form that this field set belongs to. */
	form? : string | null;

	/** Specifies the name of the field set. */
	name? : string | null;
}

export type FormElementAttributes = ElementAttributes &
{
	/** Specifies the character encodings that are to be used for the form submission. */
	"accept-charset"? : string | null;

	/** Specifies where to send the form's data when it is submitted. */
	action? : string | null;

	/** Specifies whether the form should have autocomplete. */
	autocomplete? : "on" | "off" | null;

	/** 
	 * Specifies how the form-data should be encoded when submitting it to the server.
	 * 
	 * Only for POST forms.
	 */
	enctype? : string | null;

	/** Specifies the HTTP method to use when submitting form data. */
	method? : "GET" | "POST" | "dialog" | null;

	/** Specifies the name of the form. */
	name? : string | null;

	/** When present, the form will not be validated before submission. */
	novalidate? : string | boolean | null;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string | null;

	/** Specifies the target for where to open the result of submitting the form. */
	target? : string | null;
}

export type IframeElementAttributes = ElementAttributes &
{
	/** Specifies the height of the iframe. */
	height? : string | null;

	/** Specifies the name of the iframe. */
	name? : string | null;

	/** Used to enable extra restrictions for the content of the iframe. */
	sandbox? : string | null;

	/** The URL of the iframe. */
	src? : string | null;

	/** Specifies the HTML content of the page to show in the iframe. */
	srcdoc? : string | null;

	/** Specifies the width of the iframe. */
	width? : string | null;
}

export type ImgElementAttributes = ElementAttributes &
{
	/** Specifies alternate text for when the image fails to display. */
	alt? : string | null;

	/** Specifies the height of the image. */
	height? : string | null;

	/** 
	 * When present, the image will be considered part of a server-side image map.
	 * 
	 * When clicking on such an image, the click coordinates are sent to the server in the query string.
	 */
	ismap? : string | boolean | null;

	/** Specifies the size of the linked resource. */
	sizes? : string | null;

	/** The URL of the image. */
	src? : string | null;

	/** Specifies the URL of the image to use in different situations. */
	srcset? : string | null;

	/** Specifies the "name" or "id" of a map element to use. */
	usemap? : string | null;
	
	/** Specifies the width of the image. */
	width? : string | null;
}

export type InputElementAttributes = ElementAttributes &
{
	/** The types of files that the server accepts. Only for "file" inputs. */
	accept? : string | null;

	/** Specify alternate text for when the image fails to display. Only for "image" inputs. */
	alt? : string | null;

	/** 
	 * Specifies whether this input should have autocomplete.
	 * 
	 * Only for "text", "tel", "email", "password", "range", "color" and date picker inputs.
	 */
	autocomplete? : "on" | "off" | null;

	/** Specifies that the input should automatically get focus on page load. */
	autofocus? : string | boolean | null;

	/** Specifies that the input should be checked on page load. Only for "checkbox" and "radio" inputs. */
	checked? : string | boolean | null;

	/** Specifies that the text direction will be submitted. */
	dirname? : string | null;

	/** When present, the field set will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies the "id" of the form that this input belongs to. */
	form? : string | null;
	
	/** Specifies where to send the form-data when a form is submitted. Only for "submit" inputs. */
	formaction? : string | null;

	/** Specifies the height of the image. Only for "image" inputs. */
	height? : string | null;

	/** Specifies the name of a datalist element that contains pre-defined options for this input. */
	list? : string | null;

	/** Specifies the maximum value of this input. Only for "date" and "number" inputs. */
	max? : string | null;

	/** Specifies the maximum length of this input. Only for "text", "email" and "password" inputs. */
	maxlength? : string | null;

	/** Specifies the minimum value of this input. Only for "date" and "number" inputs. */
	min? : string | null;

	/** Specifies the minimum length of this put. Only for "text", "email" and "password" inputs. */
	minlength? : string | null;

	/** When present, multiple files can be uploaded for "file" inputs. */
	multiple? : string | boolean | null;

	/** Specifies the name of the input. */
	name? : string | null;

	/** 
	 * Specifies a regular expression that the input's value will be checked against. 
	 * 
	 * Only for "text", "date", "search", "url", "tel", "email" and "password" inputs.
	 */
	pattern? : string | null;

	/** Specifies a placeholder for the input's value. */
	placeholder? : string | null;

	/** When present, the input is read only. */
	readonly? : string | boolean | null;

	/** When present, the input must be filled to submit the form. */
	required? : string | boolean | null;

	/** Specifies the width of the input in characters. */
	size? : string | null;

	/** The URL of the image. Only for "image" inputs. */
	src? : string | null;

	/** Specifies the legal number intervals for the input. */
	step? : string | null;

	/** Specifies the type of input this is. */
	type? : InputType | null;

	/** The initial value of the input. */
	value? : string | null;
	
	/** Specifies the width of the image. Only for "image" inputs. */
	width? : string | null;
}

export type InsElementAttributes = ElementAttributes &
{
	/** Specifies a URL to a document that explains the insertion. */
	cite? : string | null;

	/** Specifies the date and time when the text was inserted. */
	datetime? : string | null;
}

export type LabelElementAttributes = ElementAttributes &
{
	/** Specifies which form element(s) the label is bound to. */
	label? : string | null;
}

export type LIElementAttributes = ElementAttributes &
{
	/** 
	 * Specifies the value of the list item in an ordered list.
	 * 
	 * The next list items will increment from this value.
	 */
	value? : string | null;
}

export type LinkElementAttributes = ElementAttributes &
{
	/** Specifies the URL of an external resource. */
	href? : string | null;

	/** Specifies the language of the linked resource. */
	hreflang? : string | null;

	/** Specifies what media/device the linked resource is optimised for. */
	media? : string | null;

	/** Specifies the relationship between the current document and the linked resource. */
	rel? : string | null;

	/** Specifies the size of an icon. Only when "rel" is set to "icon". */
	sizes? : string | null;

	/** The MIME type for the linked resource. */
	type? : string | null;
}

export type MapElementAttributes = ElementAttributes &
{
	/** Specifies the name of the map. */
	name? : string | null;
}

export type MetaElementAttributes = ElementAttributes &
{
	/** Specifies the character encoding used in the document. */
	charset? : string | null;

	/** Gives the value associated with the "http-equiv" or "name" attribute. */
	content? : string | null;

	/** Provides an HTTP header for the information/value of the content attribute. */
	"http-equiv"? : string | null;

	/** Specifies the name of meta property. */
	name? : string | null;
}

export type MeterElementAttributes = ElementAttributes &
{
	/** Specifies the "id" of the form that this meter belongs to. */
	form? : string | null;

	/**
	 * Specifies the range where the meter's value is considered to be high.
	 * 
	 * Must be greater than the "low" and less than the "max".
	 */
	high? : string | null;

	/**
	 * Specifies the range where the meter's value is considered to be low.
	 * 
	 * Must be greater than the "min" and less than the "high".
	 */
	low? : string | null;

	/** Specifies the maximum value of this meter. */
	max? : string | null;

	/** Specifies the minimum value of this meter. */
	min? : string | null;

	/** Specifies the most optimal value for the meter. */
	optimum? : string | null;

	/** Specifies the current value of the meter. */
	value? : string | null;
}

export type ObjectElementAttributes = ElementAttributes &
{
	/** Specifies the URL of the resource to be used by the object. */
	data? : string | null;

	/** Specifies the "id" of the form that this object belongs to. */
	form? : string | null;

	/** Specifies the height of the object. */
	height? : string | null;

	/** Specifies the name of the object. */
	name? : string | null;

	/** The MIME type for the object. */
	type? : string | null;

	/** Specifies the "name" or "id" of a map element to use. */
	usemap? : string | null;
	
	/** Specifies the width of the object. */
	width? : string | null;
}

export type OLElementAttributes = ElementAttributes &
{
	/** When preent, the list will be number in reverse order. */
	reversed? : string | boolean | null;

	/** Specifies the start value of the list. */
	start? : string | null;
}

export type OptgroupElementAttributes = ElementAttributes &
{
	/** When present, the option group will be disabled. */
	disabled? : string | null;

	/** Specifies a label for the option group. */
	label? : string | null;
}

export type OptionElementAttributes = ElementAttributes &
{
	/** When present, the option will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies a label for the option. */
	label? : string | null;

	/** When present, this option will be selected by default. */
	selected? : string | boolean | null;

	/** The value of the option. */
	value? : string | null;
}

export type OutputElementAttributes = ElementAttributes &
{
	/** Specifies which form element(s) the output is bound to. */
	label? : string | null;

	/** Specifies the "id" of the form that this output belongs to. */
	form? : string | null;

	/** Specifies the name of the output. */
	name? : string | null;
}

export type ParamElementAttributes = ElementAttributes &
{
	/** Specifies the name of the param. */
	name? : string | null;

	/** Specifies the value of the paramter. */
	value? : string | null;
}

export type ProgressElementAttributes = ElementAttributes &
{
	/** Specifies how much work the task requires in total. */
	max? : string | null;

	/** Specifies how much of the task has been completed. */
	value? : string | null;
}

export type QElementAttributes = ElementAttributes &
{
	/** Specifies a URL to a document that explains the quote. */
	cite? : string | null;
}

export type ScriptElementAttributes = ElementAttributes &
{
	/** 
	 * When present, the script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes).
	 * 
	 * Only for external scripts.
	 */
	async? : string | boolean | null;

	/** Specifies the character encoding used in the script. */
	charset? : string | null;

	/** When present, the script will be executed when the page has finished parsing. */
	defer? : string | boolean | null;

	/** The URL of the script. */
	src? : string | null;

	/** The MIME type for the script. */
	type? : string | null;
}

export type SelectElementAttributes = ElementAttributes &
{
	/** Specifies that the select should automatically get focus on page load. */
	autofocus? : string | boolean | null;

	/** When present, the select will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies the "id" of the form that this select belongs to. */
	form? : string | null;

	/** When present, multiple options can be selected. */
	multiple? : string | boolean | null;

	/** Specifies the name of the select. */
	name? : string | null;

	/** When present, the user must choose an option to submit the form. */
	required? : string | boolean | null;

	/** Specifies the number of visible options. */
	size? : string | null;
}

export type SourceElementAttributes = ElementAttributes &
{
	/** Specifies what media/device the linked media is optimised for. */
	media? : string | null;

	/** Specifies the size the linked media. */
	sizes? : string | null;

	/** The URL of the linked media. */
	src? : string | null;

	/** Specifies the URL of the media to use in different situations. */
	srcset? : string | null;

	/** The MIME type for the media. */
	type? : string | null;
}

export type StyleElementAttributes = ElementAttributes &
{
	/** Specifies what media/device the stylesheet is optimised for. */
	media? : string | null;

	/** The MIME type for the stylesheet. */
	type? : string | null;
}

export type TDElementAttributes = ElementAttributes &
{
	/** Specifies the number of columns the data cell should span. */
	colspan? : string | null;

	/** Specifies the "id" of one or more header cells that this data cell is related to. */
	headers? : string | null;

	/** Specifies the number of rows the data cell should span. */
	rowspan? : string | null;
}

export type TextareaElementAttributes = ElementAttributes &
{
	/** Specifies that the text area should automatically get focus on page load. */
	autofocus? : string | boolean | null;

	/** Specifies the visible width of the text area. */
	cols? : string | null;

	/** Specifies that the text direction will be submitted. */
	dirname? : string | null;

	/** When present, the text area will be disabled. */
	disabled? : string | boolean | null;

	/** Specifies the "id" of the form that this textarea belongs to. */
	form? : string | null;

	/** Specifies the maximum length of text area. */
	maxlength? : string | null;

	/** Specifies the name of the text area. */
	name? : string | null;

	/** When present, the text area is read only. */
	readonly? : string | boolean | null;

	/** When present, the input text area must be filled to submit the form. */
	required? : string | boolean | null;

	/** Specifies the visible number of lines in the text area. */
	rows? : string | null;

	/** Specifies how the text in the text are should be wrapped when the form is submitted. */
	wrap? : string | null;
}

export type THElementAttributes = ElementAttributes &
{
	/** Specifies the number of columns the header cell should span. */
	colspan? : string | null;

	/** Specifies the "id" of one or more header cells that this header cell is related to. */
	headers? : string | null;

	/** Specifies the number of rows the header cell should span. */
	rowspan? : string | null;

	/** Specifies whether the header cell is for a column, row, or group of columns and rows. */
	scope? : string | null;
}

export type TimeElementAttributes = ElementAttributes &
{
	/** Specifies the date and/or time of the element. */
	datetime? : string | null;
}

export type TrackElementAttributes = ElementAttributes &
{
	/** When present, this track will be the default if the user's preferences do not indicate that another track would be more appropriate. */
	default? : string | boolean | null;

	/** Specifies what kind of text track this element is. */
	kind? : string | null;

	/** Specifies a label for this text track. */
	label? : string | null;

	/** The URL of the text track. */
	src? : string | null;

	/** Specifies the language of the text track title. Required when "kind" is "subtitles". */
	srclang? : string | null;
}

export type VideoElementAttributes = ElementAttributes &
{
	/** When present, the video will start playing as soon as it can do so. */
	autoplay? : string | boolean | null;

	/** When present, controls for the video will be displayed. */
	controls? : string | boolean | null;

	/** Specifies the height of the video. */
	height? : string | null;

	/** When present, the video will loop endlessly. */
	loop? : string | boolean | null;

	/** When present, the video's audio will be muted by default. */
	muted? : string | boolean | null;

	/**
	 * Specifies an image to be shown while the video is downloading, or until the user hits play. 
	 * 
	 * If omitted, the first frame of the video will be used instead.
	 */
	poster? : string | null;

	/** Specifies if and how this video should be loaded when the page loads. */
	preload? : string | null;

	/** The URL of the video file. */
	src? : string | null;
	
	/** Specifies the width of the video. */
	width? : string | null;
}