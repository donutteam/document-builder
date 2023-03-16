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

export interface RawChild
{
	rawMarkup : string;
}

export type Child = 
	CallbackChild |
	Child[] | 
	RawChild |
	DocumentElement |
	string | number | boolean | bigint;