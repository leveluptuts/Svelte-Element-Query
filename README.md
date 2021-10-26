# Svelte Element Queries

## @leveluptuts/svelte-element-query

## Demo

[Demo](https://svelte.dev/repl/af6afbadd33a496cb6c441a41a88c1cc?version=3.42.1)

### Why Element / Container Queries

https://css-tricks.com/a-cornucopia-of-container-queries/

### Usage

```svelte

<script>
	import { container } from '@leveluptuts/svelte-element-query'
</script>

<div class="contain" use:container={{small: 0, medium: 200, large: 500}}>
	<h1>Hello</h1>
</div>

<style>
	.contain {
		border: dashed 5px var(--borderColor, #333);
	}

	:global(.medium) {
		--borderColor: red;
	}

	:global(.large) {
		--borderColor: blue;
	}
</style>

```

Show as resizeable:

```svelte

<script>
	import { container } from '@leveluptuts/svelte-element-query'
</script>

<div class="contain resizable" use:container={{small: 0, medium: 200, large: 500}}>
    <h1>Hello</h1>
</div>

<style>
	.resizable {
		resize: both;
		overflow: scroll;
		border: 1px solid black;
	}

	.contain {
		border: dashed 5px var(--borderColor, #333);
	}

	:global(.medium) {
		--borderColor: red;
	}

	:global(.large) {
		--borderColor: blue;
	}
</style>

```

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski

Thank you!
