let emojis

const loadEmojis = async () => {
	const data = await fetch('./emojis.json')
	const json = await data.json()
	emojis = json
}

loadEmojis()

const state = {
	mode: false,
	data: ""
}

const oninput = e => {
	console.log(e)
	if (!emojis)
		return

	if (e.data == " ") {
		state.mode = false
		state.data = ""
		return
	}

	if (e.data == ":") {
		state.mode = true
		state.data = ""
		return
	}

	if (e.data == null)

	if (state.mode) {
		state.data += e.data
	}

	if (state.mode)
		console.log(e.data, state)
}

window.addEventListener("load", () => {
	document.body.addEventListener("input", oninput)
})
