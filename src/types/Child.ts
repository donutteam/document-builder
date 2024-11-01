//
// Imports
//

import { z } from "zod";

import { DocumentElement } from "../classes/DocumentElement.js";

//
// Types
//

export const RawChildSchema = z.object(
	{
		rawMarkup: z.string(),
	});

export type RawChild = z.infer<typeof RawChildSchema>;

export const ChildSchema: z.ZodType<Child> = z.lazy(() => z.union(
	[
		z.array(ChildSchema),
		RawChildSchema,
		z.instanceof(DocumentElement),
		z.string(),
		z.number(),
		z.boolean(),
		z.bigint(),
		z.null(),
	]));

// Note: Because the Child schema is recursive, it's not possible to infer from the schema
export type Child = Child[] | z.infer<typeof RawChildSchema> | DocumentElement | string | number | boolean | bigint | null;