//
// Imports
//

import assert from "node:assert";

import { DE } from "./../../lib/index.js";

//
// Tests
//

describe("Rendering tests", async function()
{
	it("should render a doc type when the tag name is html", async function() 
	{
		const template = new DE("html");

		const html = template.renderToString();

		assert.strictEqual(html, "<!DOCTYPE html><html></html>");
	});

	it("should support children", async function() 
	{
		const template = new DE("html", null,
			[
				new DE("head", null),
				new DE("body", null,
					[
						new DE("div"),
						new DE("span"),
						"A String",
					]),
			]);

		const html = template.renderToString();

		assert.strictEqual(html, "<!DOCTYPE html><html><head></head><body><div></div><span></span>A String</body></html>");
	});

	it("should support objects for attributes", async function()
	{
		const element = new DE("div",
			{
				class: "my-cool-class",
				"data-test": "Test Value",
			});

		const html = element.renderToString();

		assert.strictEqual(html, `<div class="my-cool-class" data-test="Test Value"></div>`);
	});

	it("should support a string as a shorthand for a class attribute", async function()
	{
		
		const element = new DE("div", "my-cool-class");

		const html = element.renderToString();

		assert.strictEqual(html, `<div class="my-cool-class"></div>`);
	});

	it("should not render children for or close void tags such as img", async function()
	{
		const src = "https://via.placeholder.com/128x128";
		const alt = "A placholder image!";

		const element = new DE("img",
			{
				src,
				alt,
			},
			[
				new DE("div", null, "A child that should not be rendered!"),
			]);

		const html = element.renderToString();

		assert.strictEqual(html, `<img src="${ src }" alt="${ alt }" />`);
	});

	it("should ignore null attributes", async function()
	{
		const element = new DE("div",
			{
				class: null,
			});

		const html = element.renderToString();

		assert.strictEqual(html, "<div></div>");
	});
});