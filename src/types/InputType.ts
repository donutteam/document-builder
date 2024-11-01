//
// Imports
//

import { z } from "zod";

//
// Types
//

export const InputTypeSchema = z.enum(
	[
		"button",
		"checkbox",
		"color",
		"date",
		"datetime-local",
		"email",
		"file",
		"hidden",
		"image",
		"month",
		"number",
		"password",
		"radio",
		"range",
		"reset",
		"search",
		"submit",
		"tel",
		"text",
		"time",
		"url",
		"week",
	]);

export type InputType = z.infer<typeof InputTypeSchema>;