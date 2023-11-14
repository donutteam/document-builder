//
// Imports
//

import { DocumentElement } from "../classes/DocumentElement.js";

//
// Exports
//

export interface RawChild
{
	rawMarkup : string;
}

export type Child =
	Child[] | 
	RawChild |
	DocumentElement |
	string | number | boolean | bigint |
	null;