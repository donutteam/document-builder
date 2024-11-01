//
// Imports
//

import { DocumentElement } from "../classes/DocumentElement.js";

//
// Types
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