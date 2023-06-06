//
// Imports
//

import { InputType } from "./InputType.js";

//
// Exports
//

export interface ElementAttributes
{
	/** Specifies a shortcut key to activate/focus an element. */
	accesskey? : string; 

	/** Specifies one or more class names for the element. */
	class? : string;

	/** Alias for "class". */
	className? : string;

	/** Specifies whether the content of an element is editable. */
	contenteditable? : "true" | "false" | boolean;

	/** Specifies the text direction of the element's contents. */
	dir? : "ltr" | "rtl" | "auto";

	/** When present, the element is not yet, or is no longer, relevant and should not be displayed. */
	hidden? : string | boolean;

	/** Specifies a unique ID for the element. */
	id? : string;

	/** Specifies the language of the element's content. */
	lang? : string;

	/** Specifies whether the element is to have its spelling and grammar checked. */
	spellcheck? : string;

	/** Specifies inline styles for the element. */
	style? : string;

	/** Specifies the tabbing order of the element. */
	tabindex? : string;

	/** Specifies extra information about an element. */
	title? : string;

	/** Specifies whether the content of the element should be translated or not. */
	translate? : string;

	[attribute : string] : string | number | boolean | undefined | null;
}

export interface AElementAttributes extends ElementAttributes
{
	/** Specifies that the target will be downloaded when a user clicks on the link. */
	download? : string;

	/** Specifies the URL of the page that the link goes to. */
	href? : string;

	/** Specifies the language of the linked document. */
	hreflang? : string;

	/** Specifies what media/device the linked document is optimised for. */
	media? : string;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string;

	/** Specifies the target for where to open the linked document. */
	target? : string;
}

export interface AreaElementAttributes extends ElementAttributes
{
	/** Specifies alternate text for the area. Required if the "href" attribute is present. */
	alt? : string;

	/** Specifies the coordinates of the area. */
	coords? : string;

	/** Specifies the URL of the page that the link goes to. */
	href? : string;

	/** Specifies the language of the linked document. */
	hreflang? : string;

	/** Specifies what media/device the linked document is optimised for. */
	media? : string;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string;

	/** Specifies the shape of the area. */
	shape? : string;

	/** Specifies the target for where to open the linked document. */
	target? : string;
}

export interface AudioElementAttributes extends ElementAttributes
{
	/** When present, the audio will start playing as soon as it can do so. */
	autoplay? : string | boolean;

	/** When present, controls for the audio will be displayed. */
	controls? : string | boolean;

	/** When present, the audio will loop endlessly. */
	loop? : string | boolean;

	/** When present, the audio will be muted by default. */
	muted? : string | boolean;

	/** Specifies if and how this audio should be loaded when the page loads. */
	preload? : string;

	/** The URL of the audio file. */
	src? : string;
}

export interface BaseElementAttributes extends ElementAttributes
{
	/** Specifies the base URL for all relative URLs on the page. */
	href? : string;

	/** Specifies the default target for all links and forms on the page. */
	target? : string;
}

export interface BlockquoteElementAttributes extends ElementAttributes
{
	/** Specifies a URL to a document that explains the quote. */
	cite? : string;
}

export interface ButtonElementAttributes extends ElementAttributes
{
	/** When present, the button should automatically get focus on page load. */
	autofocus? : string | boolean;

	/** When present, the button will be disabled. */
	disabled? : string | boolean;

	/** Specifies the "id" of the form that this button belongs to. */
	form? : string;
	
	/** Specifies where to send the form-data when a form is submitted. Only for "submit" type buttons. */
	formaction? : string;

	/** Specifies the name of the button. */
	name? : string;

	/** Specifies the type of button this is. */
	type? : "button" | "reset" | "submit";

	/** The value of the button. */
	value? : string;
}

export interface CanvasElementAttributes extends ElementAttributes
{
	/** Specifies the height of the canvas. */
	height? : string;

	/** Specifies the width of the canvas. */
	width? : string;
}

export interface ColElementAttributes extends ElementAttributes
{
	/** Specifies the number of columns to span. */
	span? : string;
}

export interface ColgroupElementAttributes extends ElementAttributes
{
	/** Specifies the number of columns to span. */
	span? : string;
}

export interface DelElementAttributes extends ElementAttributes
{
	/** Specifies a URL to a document that explains the deletion. */
	cite? : string;

	/** Specifies the date and time when the text was deleted. */
	datetime? : string;
}

export interface DetailsElementAttributes extends ElementAttributes
{
	/** When present, the details will be opened by default. */
	open? : string | boolean;
}

export interface EmbedElementAttributes extends ElementAttributes
{
	/** Specifies the height of the embed. */
	height? : string;

	/** The URL of the embed. */
	src? : string;

	/** The MIME type for the embed. */
	type? : string;

	/** Specifies the width of the embed. */
	width? : string;
}

export interface FieldsetElementAttributes extends ElementAttributes
{
	/** When present, the field set will be disabled. */
	disabled? : string | boolean;

	/** Specifies the "id" of the form that this field set belongs to. */
	form? : string;

	/** Specifies the name of the field set. */
	name? : string;
}

export interface FormElementAttributes extends ElementAttributes
{
	/** Specifies the character encodings that are to be used for the form submission. */
	"accept-charset"? : string;

	/** Specifies where to send the form's data when it is submitted. */
	action? : string;

	/** Specifies whether the form should have autocomplete. */
	autocomplete? : "on" | "off";

	/** 
	 * Specifies how the form-data should be encoded when submitting it to the server.
	 * 
	 * Only for POST forms.
	 */
	enctype? : string;

	/** Specifies the HTTP method to use when submitting form data. */
	method? : "GET" | "POST" | "dialog";

	/** Specifies the name of the form. */
	name? : string;

	/** When present, the form will not be validated before submission. */
	novalidate? : string | boolean;

	/** Specifies the relationship between the current document and the linked document. */
	rel? : string;

	/** Specifies the target for where to open the result of submitting the form. */
	target? : string;
}

export interface IframeElementAttributes extends ElementAttributes
{
	/** Specifies the height of the iframe. */
	height? : string;

	/** Specifies the name of the iframe. */
	name? : string;

	/** Used to enable extra restrictions for the content of the iframe. */
	sandbox? : string;

	/** The URL of the iframe. */
	src? : string;

	/** Specifies the HTML content of the page to show in the iframe. */
	srcdoc? : string;

	/** Specifies the width of the iframe. */
	width? : string;
}

export interface ImgElementAttributes extends ElementAttributes
{
	/** Specifies alternate text for when the image fails to display. */
	alt? : string;

	/** Specifies the height of the image. */
	height? : string;

	/** 
	 * When present, the image will be considered part of a server-side image map.
	 * 
	 * When clicking on such an image, the click coordinates are sent to the server in the query string.
	 */
	ismap? : string | boolean;

	/** Specifies the size of the linked resource. */
	sizes? : string;

	/** The URL of the image. */
	src? : string;

	/** Specifies the URL of the image to use in different situations. */
	srcset? : string;

	/** Specifies the "name" or "id" of a map element to use. */
	usemap? : string;
	
	/** Specifies the width of the image. */
	width? : string;
}

export interface InputElementAttributes extends ElementAttributes
{
	/** The types of files that the server accepts. Only for "file" inputs. */
	accept? : string;

	/** Specify alternate text for when the image fails to display. Only for "image" inputs. */
	alt? : string;

	/** 
	 * Specifies whether this input should have autocomplete.
	 * 
	 * Only for "text", "tel", "email", "password", "range", "color" and date picker inputs.
	 */
	autocomplete? : "on" | "off";

	/** Specifies that the input should automatically get focus on page load. */
	autofocus? : string | boolean;

	/** Specifies that the input should be checked on page load. Only for "checkbox" and "radio" inputs. */
	checked? : string | boolean;

	/** Specifies that the text direction will be submitted. */
	dirname? : string;

	/** When present, the field set will be disabled. */
	disabled? : string | boolean;

	/** Specifies the "id" of the form that this input belongs to. */
	form? : string;
	
	/** Specifies where to send the form-data when a form is submitted. Only for "submit" inputs. */
	formaction? : string;

	/** Specifies the height of the image. Only for "image" inputs. */
	height? : string;

	/** Specifies the name of a datalist element that contains pre-defined options for this input. */
	list? : string;

	/** Specifies the maximum value of this input. Only for "date" and "number" inputs. */
	max? : string;

	/** Specifies the maximum length of this input. Only for "text", "email" and "password" inputs. */
	maxlength? : string;

	/** Specifies the minimum value of this input. Only for "date" and "number" inputs. */
	min? : string;

	/** Specifies the minimum length of this put. Only for "text", "email" and "password" inputs. */
	minlength? : string;

	/** When present, multiple files can be uploaded for "file" inputs. */
	multiple? : string | boolean;

	/** Specifies the name of the input. */
	name? : string;

	/** 
	 * Specifies a regular expression that the input's value will be checked against. 
	 * 
	 * Only for "text", "date", "search", "url", "tel", "email" and "password" inputs.
	 */
	pattern? : string;

	/** Specifies a placeholder for the input's value. */
	placeholder? : string;

	/** When present, the input is read only. */
	readonly? : string | boolean;

	/** When present, the input must be filled to submit the form. */
	required? : string | boolean;

	/** Specifies the width of the input in characters. */
	size? : string;

	/** The URL of the image. Only for "image" inputs. */
	src? : string;

	/** Specifies the legal number intervals for the input. */
	step? : string;

	/** Specifies the type of input this is. */
	type? : InputType;

	/** The initial value of the input. */
	value? : string;
	
	/** Specifies the width of the image. Only for "image" inputs. */
	width? : string;
}

export interface InsElementAttributes extends ElementAttributes
{
	/** Specifies a URL to a document that explains the insertion. */
	cite? : string;

	/** Specifies the date and time when the text was inserted. */
	datetime? : string;
}

export interface LabelElementAttributes extends ElementAttributes
{
	/** Specifies which form element(s) the label is bound to. */
	label? : string;
}

export interface LIElementAttributes extends ElementAttributes
{
	/** 
	 * Specifies the value of the list item in an ordered list.
	 * 
	 * The next list items will increment from this value.
	 */
	value? : string;
}

export interface LinkElementAttributes extends ElementAttributes
{
	/** Specifies the URL of an external resource. */
	href? : string;

	/** Specifies the language of the linked resource. */
	hreflang? : string;

	/** Specifies what media/device the linked resource is optimised for. */
	media? : string;

	/** Specifies the relationship between the current document and the linked resource. */
	rel? : string;

	/** Specifies the size of an icon. Only when "rel" is set to "icon". */
	sizes? : string;

	/** The MIME type for the linked resource. */
	type? : string;
}

export interface MapElementAttributes extends ElementAttributes
{
	/** Specifies the name of the map. */
	name? : string;
}

export interface MetaElementAttributes extends ElementAttributes
{
	/** Specifies the character encoding used in the document. */
	charset? : string;

	/** Gives the value associated with the "http-equiv" or "name" attribute. */
	content? : string;

	/** Provides an HTTP header for the information/value of the content attribute. */
	"http-equiv"? : string;

	/** Specifies the name of meta property. */
	name? : string;
}

export interface MeterElementAttributes extends ElementAttributes
{
	/** Specifies the "id" of the form that this meter belongs to. */
	form? : string;

	/**
	 * Specifies the range where the meter's value is considered to be high.
	 * 
	 * Must be greater than the "low" and less than the "max".
	 */
	high? : string;

	/**
	 * Specifies the range where the meter's value is considered to be low.
	 * 
	 * Must be greater than the "min" and less than the "high".
	 */
	low? : string;

	/** Specifies the maximum value of this meter. */
	max? : string;

	/** Specifies the minimum value of this meter. */
	min? : string;

	/** Specifies the most optimal value for the meter. */
	optimum? : string;

	/** Specifies the current value of the meter. */
	value? : string;
}

export interface ObjectElementAttributes extends ElementAttributes
{
	/** Specifies the URL of the resource to be used by the object. */
	data? : string;

	/** Specifies the "id" of the form that this object belongs to. */
	form? : string;

	/** Specifies the height of the object. */
	height? : string;

	/** Specifies the name of the object. */
	name? : string;

	/** The MIME type for the object. */
	type? : string;

	/** Specifies the "name" or "id" of a map element to use. */
	usemap? : string;
	
	/** Specifies the width of the object. */
	width? : string;
}

export interface OLElementAttributes extends ElementAttributes
{
	/** When preent, the list will be number in reverse order. */
	reversed? : string | boolean;

	/** Specifies the start value of the list. */
	start? : string;
}

export interface OptgroupElementAttributes extends ElementAttributes
{
	/** When present, the option group will be disabled. */
	disabled? : string;

	/** Specifies a label for the option group. */
	label? : string;
}

export interface OptionElementAttributes extends ElementAttributes
{
	/** When present, the option will be disabled. */
	disabled? : string | boolean;

	/** Specifies a label for the option. */
	label? : string;

	/** When present, this option will be selected by default. */
	selected? : string | boolean;

	/** The value of the option. */
	value? : string;
}

export interface OutputElementAttributes extends ElementAttributes
{
	/** Specifies which form element(s) the output is bound to. */
	label? : string;

	/** Specifies the "id" of the form that this output belongs to. */
	form? : string;

	/** Specifies the name of the output. */
	name? : string;
}

export interface ParamElementAttributes extends ElementAttributes
{
	/** Specifies the name of the param. */
	name? : string;

	/** Specifies the value of the paramter. */
	value? : string;
}

export interface ProgressElementAttributes extends ElementAttributes
{
	/** Specifies how much work the task requires in total. */
	max? : string;

	/** Specifies how much of the task has been completed. */
	value? : string;
}

export interface QElementAttributes extends ElementAttributes
{
	/** Specifies a URL to a document that explains the quote. */
	cite? : string;
}

export interface ScriptElementAttributes extends ElementAttributes
{
	/** 
	 * When present, the script is downloaded in parallel to parsing the page, and executed as soon as it is available (before parsing completes).
	 * 
	 * Only for external scripts.
	 */
	async? : string | boolean;

	/** Specifies the character encoding used in the script. */
	charset? : string;

	/** When present, the script will be executed when the page has finished parsing. */
	defer? : string | boolean;

	/** The URL of the script. */
	src? : string;

	/** The MIME type for the script. */
	type? : string;
}

export interface SelectElementAttributes extends ElementAttributes
{
	/** Specifies that the select should automatically get focus on page load. */
	autofocus? : string | boolean;

	/** When present, the select will be disabled. */
	disabled? : string | boolean;

	/** Specifies the "id" of the form that this select belongs to. */
	form? : string;

	/** When present, multiple options can be selected. */
	multiple? : string | boolean;

	/** Specifies the name of the select. */
	name? : string;

	/** When present, the user must choose an option to submit the form. */
	required? : string | boolean;

	/** Specifies the number of visible options. */
	size? : string;
}

export interface SourceElementAttributes extends ElementAttributes
{
	/** Specifies what media/device the linked media is optimised for. */
	media? : string;

	/** Specifies the size the linked media. */
	sizes? : string;

	/** The URL of the linked media. */
	src? : string;

	/** Specifies the URL of the media to use in different situations. */
	srcset? : string;

	/** The MIME type for the media. */
	type? : string;
}

export interface StyleElementAttributes extends ElementAttributes
{
	/** Specifies what media/device the stylesheet is optimised for. */
	media? : string;

	/** The MIME type for the stylesheet. */
	type? : string;
}

export interface TDElementAttributes extends ElementAttributes
{
	/** Specifies the number of columns the data cell should span. */
	colspan? : string;

	/** Specifies the "id" of one or more header cells that this data cell is related to. */
	headers? : string;

	/** Specifies the number of rows the data cell should span. */
	rowspan? : string;
}

export interface TextareaElementAttributes extends ElementAttributes
{
	/** Specifies that the text area should automatically get focus on page load. */
	autofocus? : string | boolean;

	/** Specifies the visible width of the text area. */
	cols? : string;

	/** Specifies that the text direction will be submitted. */
	dirname? : string;

	/** When present, the text area will be disabled. */
	disabled? : string | boolean;

	/** Specifies the "id" of the form that this textarea belongs to. */
	form? : string;

	/** Specifies the maximum length of text area. */
	maxlength? : string;

	/** Specifies the name of the text area. */
	name? : string;

	/** When present, the text area is read only. */
	readonly? : string | boolean;

	/** When present, the input text area must be filled to submit the form. */
	required? : string | boolean;

	/** Specifies the visible number of lines in the text area. */
	rows? : string;

	/** Specifies how the text in the text are should be wrapped when the form is submitted. */
	wrap? : string;
}

export interface THElementAttributes extends ElementAttributes
{
	/** Specifies the number of columns the header cell should span. */
	colspan? : string;

	/** Specifies the "id" of one or more header cells that this header cell is related to. */
	headers? : string;

	/** Specifies the number of rows the header cell should span. */
	rowspan? : string;

	/** Specifies whether the header cell is for a column, row, or group of columns and rows. */
	scope? : string;
}

export interface TimeElementAttributes extends ElementAttributes
{
	/** Specifies the date and/or time of the element. */
	datetime? : string;
}

export interface TrackElementAttributes extends ElementAttributes
{
	/** When present, this track will be the default if the user's preferences do not indicate that another track would be more appropriate. */
	default? : string | boolean;

	/** Specifies what kind of text track this element is. */
	kind? : string;

	/** Specifies a label for this text track. */
	label? : string;

	/** The URL of the text track. */
	src? : string;

	/** Specifies the language of the text track title. Required when "kind" is "subtitles". */
	srclang? : string;
}

export interface VideoElementAttributes extends ElementAttributes
{
	/** When present, the video will start playing as soon as it can do so. */
	autoplay? : string | boolean;

	/** When present, controls for the video will be displayed. */
	controls? : string | boolean;

	/** Specifies the height of the video. */
	height? : string;

	/** When present, the video will loop endlessly. */
	loop? : string | boolean;

	/** When present, the video's audio will be muted by default. */
	muted? : string | boolean;

	/**
	 * Specifies an image to be shown while the video is downloading, or until the user hits play. 
	 * 
	 * If omitted, the first frame of the video will be used instead.
	 */
	poster? : string;

	/** Specifies if and how this video should be loaded when the page loads. */
	preload? : string;

	/** The URL of the video file. */
	src? : string;
	
	/** Specifies the width of the video. */
	width? : string;
}