<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
const name = ref('')

const input_content = ref('')
const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})

watch(todos, (newVal) => {
	localStorage.setItem('todos', JSON.stringify(newVal))
}, {
	deep: true
})

const addTodo = () => {
	if (input_content.value.trim() === '' || input_category.value === null) {
		return
	}

	todos.value.push({
		content: input_content.value,
		category: input_category.value,
		done: false,
		editable: false,
		createdAt: new Date().getTime()
	})
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})
</script>

<template>
	<main class="space-y-4 p-6">
		
		<section class="flex justify-center w-full">
			<h2 class="title">
				What's up, User_001
			</h2>
		</section>

		<section class="space-y-2">
			<h3>CREATE A TODO</h3>

			<form id="new-todo-form" @submit.prevent="addTodo" class="space-y-4">
				<input type="text" name="content" id="content" placeholder="Enter Todo" class="w-full px-2" v-model="input_content" />
				<input type="submit" value="Add todo" class=" border rounded-lg cursor-pointer w-full"/>
			</form>
		</section>

		<section class="py-5 todo-list">
			<h3>TODO LIST</h3>
			<div class="list h-96 overflow-y-scroll" id="todo-list">

				<div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`">
					<label>
						<input type="checkbox" v-model="todo.done" />
					</label>

					<div class="todo-content">
						<input type="text" v-model="todo.content" />
					</div>

					<div class="actions">
						<button class="delete" @click="removeTodo(todo)">Delete</button>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>
