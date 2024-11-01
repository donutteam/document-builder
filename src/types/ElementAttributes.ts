//
// Imports
//

import { z } from "zod";

import { InputTypeSchema } from "./InputType.js";

//
// Types
//

export const ElementAttributesSchema = z
	.object(
		{
			accesskey: z.string().nullish(),
			class: z.string().nullish(),
			contenteditable: z.union([ z.literal("true"), z.literal("false"), z.boolean() ]).nullish(),
			dir: z.enum([ "ltr", "rtl", "auto" ]).nullish(),

			// TODO: this type is actually wrong but I don't wish to make a breaking change right now
			// 	Should be an enum of "", "hidden" and "until-found"
			hidden: z.union([ z.string(), z.boolean() ]).nullish(),

			id: z.string().nullish(),
			lang: z.string().nullish(),
			spellcheck: z.string().nullish(),
			style: z.string().nullish(),
			tabindex: z.string().nullish(),
			title: z.string().nullish(),
			translate: z.string().nullish(),
		})
	.catchall(z.union(
		[
			z.string(),
			z.number(),
			z.boolean(),
			z.undefined(),
			z.null(),
		]));

export type ElementAttributes = z.infer<typeof ElementAttributesSchema>;

export const AElementAttributesSchema = ElementAttributesSchema.extend(
	{
		download: z.string().nullish(),
		href: z.string().nullish(),
		hreflang: z.string().nullish(),
		media: z.string().nullish(),
		rel: z.string().nullish(),
		target: z.string().nullish(),
	});

export type AElementAttributes = z.infer<typeof AElementAttributesSchema>;

export const AreaElementAttributesSchema = ElementAttributesSchema.extend(
	{
		alt: z.string().nullish(),
		coords: z.string().nullish(),
		href: z.string().nullish(),
		hreflang: z.string().nullish(),
		media: z.string().nullish(),
		rel: z.string().nullish(),
		shape: z.string().nullish(),
		target: z.string().nullish(),
	});

export type AreaElementAttributes = z.infer<typeof AreaElementAttributesSchema>;

export const AudioElementAttributesSchema = ElementAttributesSchema.extend(
	{
		autoplay: z.union([ z.string(), z.boolean() ]).nullish(),
		controls: z.union([ z.string(), z.boolean() ]).nullish(),
		loop: z.union([ z.string(), z.boolean() ]).nullish(),
		muted: z.union([ z.string(), z.boolean() ]).nullish(),
		preload: z.string().nullish(),
		src: z.string().nullish(),
	});

export type AudioElementAttributes = z.infer<typeof AudioElementAttributesSchema>;

export const BaseElementAttributesSchema = ElementAttributesSchema.extend(
	{
		href: z.string().nullish(),
		target: z.string().nullish(),
	});

export type BaseElementAttributes = z.infer<typeof BaseElementAttributesSchema>;

export const BlockquoteElementAttributesSchema = ElementAttributesSchema.extend(
	{
		cite: z.string().nullish(),
	});

export type BlockquoteElementAttributes = z.infer<typeof BlockquoteElementAttributesSchema>;

export const ButtonElementAttributesSchema = ElementAttributesSchema.extend(
	{
		autofocus: z.union([ z.string(), z.boolean() ]).nullish(),
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		form: z.string().nullish(),
		formaction: z.string().nullish(),
		name: z.string().nullish(),
		type: z.enum([ "button", "reset", "submit" ]).nullish(),
		value: z.string().nullish(),
	});

export type ButtonElementAttributes = z.infer<typeof ButtonElementAttributesSchema>;

export const CanvasElementAttributesSchema = ElementAttributesSchema.extend(
	{
		height: z.string().nullish(),
		width: z.string().nullish(),
	});

export type CanvasElementAttributes = z.infer<typeof CanvasElementAttributesSchema>;

export const ColElementAttributesSchema = ElementAttributesSchema.extend(
	{
		span: z.string().nullish(),
	});

export type ColElementAttributes = z.infer<typeof ColElementAttributesSchema>;

export const ColgroupElementAttributesSchema = ElementAttributesSchema.extend(
	{
		span: z.string().nullish(),
	});

export type ColgroupElementAttributes = z.infer<typeof ColgroupElementAttributesSchema>;

export const DelElementAttributesSchema = ElementAttributesSchema.extend(
	{
		cite: z.string().nullish(),
		datetime: z.string().nullish(),
	});

export type DelElementAttributes = z.infer<typeof DelElementAttributesSchema>;

export const DetailsElementAttributesSchema = ElementAttributesSchema.extend(
	{
		open: z.union([ z.string(), z.boolean() ]).nullish(),
	});

export type DetailsElementAttributes = z.infer<typeof DetailsElementAttributesSchema>;

export const EmbedElementAttributesSchema = ElementAttributesSchema.extend(
	{
		height: z.string().nullish(),
		src: z.string().nullish(),
		type: z.string().nullish(),
		width: z.string().nullish(),
	});

export type EmbedElementAttributes = z.infer<typeof EmbedElementAttributesSchema>;

export const FieldsetElementAttributesSchema = ElementAttributesSchema.extend(
	{
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		form: z.string().nullish(),
		name: z.string().nullish(),
	});

export type FieldsetElementAttributes = z.infer<typeof FieldsetElementAttributesSchema>;

export const FormElementAttributesSchema = ElementAttributesSchema.extend(
	{
		"accept-charset": z.string().nullish(),
		action: z.string().nullish(),
		autocomplete: z.enum([ "on", "off" ]).nullish(),
		enctype: z.string().nullish(),
		method: z.enum([ "GET", "POST", "dialog" ]).nullish(),
		name: z.string().nullish(),
		novalidate: z.union([ z.string(), z.boolean() ]).nullish(),
		rel: z.string().nullish(),
		target: z.string().nullish(),
	});

export type FormElementAttributes = z.infer<typeof FormElementAttributesSchema>;

export const IframeElementAttributesSchema = ElementAttributesSchema.extend(
	{
		height: z.string().nullish(),
		name: z.string().nullish(),
		sandbox: z.string().nullish(),
		src: z.string().nullish(),
		srcdoc: z.string().nullish(),
		width: z.string().nullish(),
	});

export type IframeElementAttributes = z.infer<typeof IframeElementAttributesSchema>;

export const ImgElementAttributesSchema = ElementAttributesSchema.extend(
	{
		alt: z.string().nullish(),
		height: z.string().nullish(),
		ismap: z.union([ z.string(), z.boolean() ]).nullish(),
		sizes: z.string().nullish(),
		src: z.string().nullish(),
		srcset: z.string().nullish(),
		usemap: z.string().nullish(),
		width: z.string().nullish(),
	});

export type ImgElementAttributes = z.infer<typeof ImgElementAttributesSchema>;

export const InputElementAttributesSchema = ElementAttributesSchema.extend(
	{
		accept: z.string().nullish(),
		alt: z.string().nullish(),
		autocomplete: z.enum([ "on", "off" ]).nullish(),
		autofocus: z.union([ z.string(), z.boolean() ]).nullish(),
		checked: z.union([ z.string(), z.boolean() ]).nullish(),
		dirname: z.string().nullish(),
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		form: z.string().nullish(),
		formaction: z.string().nullish(),
		height: z.string().nullish(),
		list: z.string().nullish(),
		max: z.string().nullish(),
		maxlength: z.string().nullish(),
		min: z.string().nullish(),
		minlength: z.string().nullish(),
		multiple: z.union([ z.string(), z.boolean() ]).nullish(),
		name: z.string().nullish(),
		pattern: z.string().nullish(),
		placeholder: z.string().nullish(),
		readonly: z.union([ z.string(), z.boolean() ]).nullish(),
		required: z.union([ z.string(), z.boolean() ]).nullish(),
		size: z.string().nullish(),
		src: z.string().nullish(),
		step: z.string().nullish(),
		type: InputTypeSchema.nullish(),
		value: z.string().nullish(),
		width: z.string().nullish(),
	});

export type InputElementAttributes = z.infer<typeof InputElementAttributesSchema>;

export const InsElementAttributesSchema = ElementAttributesSchema.extend(
	{
		cite: z.string().nullish(),
		datetime: z.string().nullish(),
	});

export type InsElementAttributes = z.infer<typeof InsElementAttributesSchema>;

export const LabelElementAttributesSchema = ElementAttributesSchema.extend(
	{
		label: z.string().nullish(),
	});

export type LabelElementAttributes = z.infer<typeof LabelElementAttributesSchema>;

export const LIElementAttributesSchema = ElementAttributesSchema.extend(
	{
		value: z.string().nullish(),
	});

export type LIElementAttributes = z.infer<typeof LIElementAttributesSchema>;

export const LinkElementAttributesSchema = ElementAttributesSchema.extend(
	{
		href: z.string().nullish(),
		hreflang: z.string().nullish(),
		media: z.string().nullish(),
		rel: z.string().nullish(),
		sizes: z.string().nullish(),
		type: z.string().nullish(),
	});

export type LinkElementAttributes = z.infer<typeof LinkElementAttributesSchema>;

export const MapElementAttributesSchema = ElementAttributesSchema.extend(
	{
		name: z.string().nullish(),
	});

export type MapElementAttributes = z.infer<typeof MapElementAttributesSchema>;

export const MetaElementAttributesSchema = ElementAttributesSchema.extend(
	{
		charset: z.string().nullish(),
		content: z.string().nullish(),
		"http-equiv": z.string().nullish(),
		name: z.string().nullish(),
	});

export type MetaElementAttributes = z.infer<typeof MetaElementAttributesSchema>;

export const MeterElementAttributesSchema = ElementAttributesSchema.extend(
	{
		form: z.string().nullish(),
		high: z.string().nullish(),
		low: z.string().nullish(),
		max: z.string().nullish(),
		min: z.string().nullish(),
		optimum: z.string().nullish(),
		value: z.string().nullish(),
	});

export type MeterElementAttributes = z.infer<typeof MeterElementAttributesSchema>;

export const ObjectElementAttributesSchema = ElementAttributesSchema.extend(
	{
		data: z.string().nullish(),
		form: z.string().nullish(),
		height: z.string().nullish(),
		name: z.string().nullish(),
		type: z.string().nullish(),
		usemap: z.string().nullish(),
		width: z.string().nullish(),
	});

export type ObjectElementAttributes = z.infer<typeof ObjectElementAttributesSchema>;

export const OLElementAttributesSchema = ElementAttributesSchema.extend(
	{
		reversed: z.union([ z.string(), z.boolean() ]).nullish(),
		start: z.string().nullish(),
	});

export type OLElementAttributes = z.infer<typeof OLElementAttributesSchema>;

export const OptgroupElementAttributesSchema = ElementAttributesSchema.extend(
	{
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		label: z.string().nullish(),
	});

export type OptgroupElementAttributes = z.infer<typeof OptgroupElementAttributesSchema>;

export const OptionElementAttributesSchema = ElementAttributesSchema.extend(
	{
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		label: z.string().nullish(),
		selected: z.union([ z.string(), z.boolean() ]).nullish(),
		value: z.string().nullish(),
	});

export type OptionElementAttributes = z.infer<typeof OptionElementAttributesSchema>;

export const OutputElementAttributesSchema = ElementAttributesSchema.extend(
	{
		label: z.string().nullish(),
		form: z.string().nullish(),
		name: z.string().nullish(),
	});

export type OutputElementAttributes = z.infer<typeof OutputElementAttributesSchema>;

export const ParamElementAttributesSchema = ElementAttributesSchema.extend(
	{
		name: z.string().nullish(),
		value: z.string().nullish(),
	});

export type ParamElementAttributes = z.infer<typeof ParamElementAttributesSchema>;

export const ProgressElementAttributesSchema = ElementAttributesSchema.extend(
	{
		max: z.string().nullish(),
		value: z.string().nullish(),
	});

export type ProgressElementAttributes = z.infer<typeof ProgressElementAttributesSchema>;

export const QElementAttributesSchema = ElementAttributesSchema.extend(
	{
		cite: z.string().nullish(),
	});

export type QElementAttributes = z.infer<typeof QElementAttributesSchema>;

export const ScriptElementAttributesSchema = ElementAttributesSchema.extend(
	{
		async: z.union([ z.string(), z.boolean() ]).nullish(),
		charset: z.string().nullish(),
		defer: z.union([ z.string(), z.boolean() ]).nullish(),
		src: z.string().nullish(),
		type: z.string().nullish(),
	});

export type ScriptElementAttributes = z.infer<typeof ScriptElementAttributesSchema>;

export const SelectElementAttributesSchema = ElementAttributesSchema.extend(
	{
		autofocus: z.union([ z.string(), z.boolean() ]).nullish(),
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		form: z.string().nullish(),
		multiple: z.union([ z.string(), z.boolean() ]).nullish(),
		name: z.string().nullish(),
		required: z.union([ z.string(), z.boolean() ]).nullish(),
		size: z.string().nullish(),
	});

export type SelectElementAttributes = z.infer<typeof SelectElementAttributesSchema>;

export const SourceElementAttributesSchema = ElementAttributesSchema.extend(
	{
		media: z.string().nullish(),
		sizes: z.string().nullish(),
		src: z.string().nullish(),
		srcset: z.string().nullish(),
		type: z.string().nullish(),
	});

export type SourceElementAttributes = z.infer<typeof SourceElementAttributesSchema>;

export const StyleElementAttributesSchema = ElementAttributesSchema.extend(
	{
		media: z.string().nullish(),
		type: z.string().nullish(),
	});

export type StyleElementAttributes = z.infer<typeof StyleElementAttributesSchema>;

export const TDElementAttributesSchema = ElementAttributesSchema.extend(
	{
		colspan: z.string().nullish(),
		headers: z.string().nullish(),
		rowspan: z.string().nullish(),
	});

export type TDElementAttributes = z.infer<typeof TDElementAttributesSchema>;

export const TextareaElementAttributesSchema = ElementAttributesSchema.extend(
	{
		autofocus: z.union([ z.string(), z.boolean() ]).nullish(),
		cols: z.string().nullish(),
		dirname: z.string().nullish(),
		disabled: z.union([ z.string(), z.boolean() ]).nullish(),
		form: z.string().nullish(),
		maxlength: z.string().nullish(),
		name: z.string().nullish(),
		readonly: z.union([ z.string(), z.boolean() ]).nullish(),
		required: z.union([ z.string(), z.boolean() ]).nullish(),
		rows: z.string().nullish(),
		wrap: z.string().nullish(),
	});

export type TextareaElementAttributes = z.infer<typeof TextareaElementAttributesSchema>;

export const THElementAttributesSchema = ElementAttributesSchema.extend(
	{
		colspan: z.string().nullish(),
		headers: z.string().nullish(),
		rowspan: z.string().nullish(),
		scope: z.string().nullish(),
	});

export type THElementAttributes = z.infer<typeof THElementAttributesSchema>;

export const TimeElementAttributesSchema = ElementAttributesSchema.extend(
	{
		datetime: z.string().nullish(),
	});

export type TimeElementAttributes = z.infer<typeof TimeElementAttributesSchema>;

export const TrackElementAttributesSchema = ElementAttributesSchema.extend(
	{
		default: z.union([ z.string(), z.boolean() ]).nullish(),
		kind: z.string().nullish(),
		label: z.string().nullish(),
		src: z.string().nullish(),
		srclang: z.string().nullish(),
	});

export type TrackElementAttributes = z.infer<typeof TrackElementAttributesSchema>;

export const VideoElementAttributesSchema = ElementAttributesSchema.extend(
	{
		autoplay: z.union([ z.string(), z.boolean() ]).nullish(),
		controls: z.union([ z.string(), z.boolean() ]).nullish(),
		height: z.string().nullish(),
		loop: z.union([ z.string(), z.boolean() ]).nullish(),
		muted: z.union([ z.string(), z.boolean() ]).nullish(),
		poster: z.string().nullish(),
		preload: z.string().nullish(),
		src: z.string().nullish(),
		width: z.string().nullish(),
	});

export type VideoElementAttributes = z.infer<typeof VideoElementAttributesSchema>;