<script>
	import TodoList from './lib/TodoList.svelte';
	import { v4 as uuid } from 'uuid';
	import { tick } from 'svelte';

	let todoList;
	let showList = true;

	let todos = [
		{
			id: uuid(),
			title: 'Todo 1',
			completed: false
		},
		{
			id: uuid(),
			title: 'Todo 2',
			completed: true
		},
		{
			id: uuid(),
			title: 'Todo 3',
			completed: true
		},
		{
			id: uuid(),
			title:
				'A long long long long long long long long long long long long long long long long long long todo',
			completed: false
		}
	];

	$: console.log(todos);

	async function handleAddToDo(event) {
		event.preventDefault();
		todos = [
			...todos,
			{
				id: uuid(),
				title: event.detail.title,
				completed: false
			}
		];
		await tick();

		todoList.clearInput();
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

<label>
	<input type="checkbox" bind:checked={showList} />
	Show/Hide List
</label>
{#if showList}
	<TodoList
		{todos}
		bind:this={todoList}
		on:addtodo={handleAddToDo}
		on:removetodo={handleRemoveTodo}
		on:toggletodo={handleToggleToDo}
	/>
{/if}

<style>
</style>
