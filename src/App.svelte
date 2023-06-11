<!-- JavaScript part -->
<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { tick, onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import spin from './lib/transitions/spin';
	import fade from './lib/transitions/fade';

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
				todos = [{ ...todo, id: uuid() }, ...todos];
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
	<div transition:spin={{ spin: 1, duration: 800 }} style:max-width="800px">
		<!-- <div transition:fade={{ duration: 1000 }} style:max-width="800px"> -->
		<TodoList
			{todos}
			{error}
			{isLoading}
			disableAdding={isAdding}
			scrollOnAdd="top"
			bind:this={todoList}
			on:addtodo={handleAddTodo}
			on:removetodo={handleRemoveTodo}
			on:toggletodo={handleToggleTodo}
			let:todo
			let:index
		>
			<svelte:fragment slot="title">{index + 1} - {todo.title}</svelte:fragment>
		</TodoList>
	</div>

	{#if todos}
		<p transition:fade={{ duration: 1000 }}>
			Number of todos: {#key todos.length}
				<span style:display="inline-block" in:fly|local={{ y: -10 }}>{todos.length}</span>
			{/key}
		</p>
	{/if}
{/if}

<!-- CSS part -->
<style>
</style>
