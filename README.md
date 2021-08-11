# Svelte Element Queries

## @leveluptuts/svelte-element-query

## Demo

[Demo](https://svelte.dev/repl/6868af406d2947bf838ad415b823883d?version=3.42.1)

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

## Sponsors

### Level Up Tutorials

https://www.leveluptutorials.com

Cutting-edge, focused & high quality video tutorials for web developers and designers
Syntax

Learn Svelte!

### https://syntax.fm/

A Tasty Treats Podcast for Web Developers. Ft Wes Bos & Scott Tolinski
