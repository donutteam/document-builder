//
// Imports
//

import { DocumentElement } from "../classes/DocumentElement.js";

//
// Exports
//

export interface CallbackChild
{
	(context : unknown) : Child | Child[];
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
	string | number | boolean | bigint |
	null;