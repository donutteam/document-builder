//
// Imports
//

import { DocumentElement } from "./DocumentElement.js";

//
// Class
//

export class UnsafeDocumentElement extends DocumentElement
{
	encode(rawString: string)
	{
		return rawString;
	}
}