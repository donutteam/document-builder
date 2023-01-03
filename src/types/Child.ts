//
// Imports
//

import { DocumentElement } from "../classes/DocumentElement.js";
import { DocumentPlaceholder } from "../classes/DocumentPlaceholder.js";

//
// Exports
//

export interface CallbackChild
{
	(context : object) : Child | Child[];
}

export type Child = 
	CallbackChild |
	Child[] | 
	DocumentElement | DocumentPlaceholder |
	string | number | boolean | BigInt;