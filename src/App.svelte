<!-- JavaScript part -->
<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { tick, onMount } from 'svelte';

	let todoList;
	let showList = true;

	let todos = null;
	let error = null;
	let isLoading = false;
	let isAdding = false;

	onMount(() => {
		loadTodos();
	});

	async function loadTodos() {
		isLoading = true;
		await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(async (response) => {
			if (response.ok) {
				todos = await response.json();
			} else {
				error = 'An error has occurred';
			}
		});
		isLoading = false;
	}

	async function handleAddToDo(event) {
		event.preventDefault();
		isAdding = true;
		await fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			body: JSON.stringify({
				title: event.detail.title,
				completed: false
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}).then(async (response) => {
			if (response.ok) {
				const todo = await response.json();
				console.log(todo);
				todos = [...todos, { ...todo, id: uuid() }];
				todoList.clearInput();
			} else {
				alert("An error has occurred. Can't add the todo");
			}
		});
		isAdding = false;
		await tick();
		todoList.focusInput();
	}

	function handleRemoveTodo(event) {
		// keep items with id different than the one in event.detail.id
		todos = todos.filter((t) => t.id != event.detail.id);
	}

	function handleToggleToDo(event) {
		todos = todos.map((todo) => {
			if (todo.id == event.detail.id) {
				return { ...todo, completed: event.detail.value };
			}
			return { ...todo };
		});
	}
</script>

<!-- HTML part -->
<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide List
</label>
{#if showList}
	<div style:max-width="400px">
		<TodoList
			{todos}
			{error}
			{isLoading}
			disableAdding={isAdding}
			bind:this={todoList}
			on:addtodo={handleAddToDo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleToDo}
		/>
	</div>
{/if}

<!-- CSS part -->
<style>
</style>
