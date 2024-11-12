//
// Imports
//

import { DocumentElement } from "./DocumentElement.js";

//
// Class
//

export class UnsafeDocumentElement extends DocumentElement
{
	override encode(rawString: string)
	{
		return rawString;
	}
}