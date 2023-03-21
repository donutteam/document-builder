//
// Imports
//

import { DocumentElement } from "./DocumentElement.js";

//
// Class
//

export class UnsafeDocumentElement extends DocumentElement
{
	encode(rawString: string): string 
	{
		return rawString;
	}
}