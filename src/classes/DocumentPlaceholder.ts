//
// Imports
//

import { Child } from "./../types/Child.js";

//
// Class
//

/** A class representing a placeholder in a document. */
export class DocumentPlaceholder
{
	/** The name of this placeholder. */
	name : string;

	/** The default contents of this placeholder if nothing replaces it. */
	defaultContents : Child;

	/**
	 * Constructs a new DocumentPlaceholder.
	 * 
	 * @param name The name of this placeholder.
	 * @param defaultContents The default contents of this placeholder if nothing replaces it. Optional.
	 * @author Loren Goodwin
	 */
	constructor(name : string, defaultContents : Child)
	{
		this.name = name;

		if (defaultContents != null)
		{
			if (!Array.isArray(defaultContents))
			{
				defaultContents = [ defaultContents ];
			}

			this.defaultContents = defaultContents;
		}
	}
}