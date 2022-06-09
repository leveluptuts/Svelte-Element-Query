// Changes css class based on the container's size.
export const container = (
	node,
	sizes = {
		'sec-small': 0,
		'sec-medium': 200,
		'sec-large': 400,
	}
) => {
	const ro = new ResizeObserver(() => {
		const nodeSize = node.getBoundingClientRect().width
		let activeClass = ''
		for (const property in sizes) {
			if (nodeSize > sizes[property]) activeClass = property
			node.classList.remove(property)
		}
		if (activeClass) node.classList.add(activeClass)
	})
	ro.observe(node)
	return {
		destroy() {
			ro.disconnect()
		},
	}
}
