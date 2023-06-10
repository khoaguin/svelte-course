<!-- JavaScript part -->
<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { tick, onMount } from 'svelte';
	import { slide, blur } from 'svelte/transition';

	let todoList;
	let showList = true;

	let todos = null;
	let error = null;
	let isLoading = false;
	let isAdding = false;
	let disabledItems = [];

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

	async function handleAddTodo(event) {
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

	async function handleRemoveTodo(event) {
		const id = event.detail.id;
		// handling the time when we are removing the item so that
		// the user can't fetch another POST request during that time
		if (disabledItems.includes(id)) return;
		disabledItems = [...disabledItems, id];
		await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'DELETE'
		}).then((response) => {
			if (response.ok) {
				// keep items with id different than the one in event.detail.id
				todos = todos.filter((todo) => todo.id != event.detail.id);
			} else {
				alert("An error has occurred. Can't delete the todo");
			}
		});
		disabledItems = disabledItems.filter((itemId) => itemId != id);
	}

	async function handleToggleTodo(event) {
		const id = event.detail.id;
		// handling the time when we are toggling the item so that
		// the user can't fetch another POST request during that time
		if (disabledItems.includes(id)) return;
		disabledItems = [...disabledItems, id]; // push the item
		await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
			method: 'PATCH',
			body: JSON.stringify({
				// title: event.detail.title,
				completed: event.detail.value
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		}).then(async (response) => {
			if (response.ok) {
				const updatedTodo = await response.json();
				todos = todos.map((todo) => {
					if (todo.id == id) {
						return updatedTodo;
					}
					return { ...todo };
				});
			} else {
				alert("An error has occurred. Can't delete the todo");
			}
		});
		disabledItems = disabledItems.filter((itemId) => itemId != id);
	}
</script>

<!-- HTML part -->
<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide List
</label>
{#if showList}
	<div
		in:slide={{ duration: 700 }}
		out:blur={{ amount: 10, duration: 700 }}
		style:max-width="400px"
		on:introstart={() => console.log('introstart')}
		on:introend={() => console.log('introend')}
		on:outrostart={() => console.log('outrostart')}
		on:outroend={() => console.log('outroend')}
	>
		<TodoList
			{todos}
			{error}
			{isLoading}
			disableAdding={isAdding}
			bind:this={todoList}
			on:addtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
			let:handleToggleTodo
			let:todo
			let:index
		>
			<svelte:fragment slot="title">{index + 1} - {todo.title}</svelte:fragment>
		</TodoList>
	</div>
{/if}

<!-- CSS part -->
<style>
</style>
