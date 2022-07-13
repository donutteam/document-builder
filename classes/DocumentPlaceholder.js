//
// Imports
//

/**
 * @typedef {import("./DocumentElement").Child} Child
 */

//
// Class
//

/**
 * A class representing a placeholder in a document.
 */
export class DocumentPlaceholder
{
	/**
	 * The name of this placeholder.
	 * 
	 * @type {String}
	 */
	name;

	/**
	 * The default contents of this placeholder if nothing replaces it.
	 * 
	 * @type {Child|Array<Child>}
	 */
	defaultContents;

	/**
	 * Constructs a new DocumentPlaceholder.
	 * 
	 * @param {String} name The name of this placeholder.
	 * @param {Child|Array<Child>} [defaultContents] The default contents of this placeholder if nothing replaces it. Optional.
	 * @author Loren Goodwin
	 */
	constructor(name, defaultContents)
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