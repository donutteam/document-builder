//
// Imports
//

import { DocumentElement } from "../classes/DocumentElement.js";

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
	DocumentElement |
	string | number | boolean | bigint;