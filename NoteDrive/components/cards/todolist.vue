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
	if (input_content.value.trim() === '') {
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

let data= false;

</script>

<template>
	<main class="font-Montserrat p-6 bg-lightish rounded-lg ">
		
		<div class="space-y-4">
			<section class="flex justify-center w-full">
				<h2 class="title font-Montserrat text-lg">
					What's up, User_001
				</h2>
			</section>
	
			<section class="space-y-2 ">
				<h3>CREATE A TODO</h3>
	
				<form id="new-todo-form" @submit.prevent="addTodo" class="space-y-4">
					<input type="text" name="content" id="content" placeholder="Enter Todo" class="text-Dark w-full px-2 rounded bg-very_light" v-model="input_content" />
					<input type="submit" value="Add todo" class="bg-Dark text-Whitish rounded-lg cursor-pointer w-full"/>
				</form>
			</section>
		</div>

		<div class="w-full mt-6 h-[1px] bg-black"></div>
		<section class=" mt-2">
			<h3>TODO LIST</h3>
			<div class=" max-h-[65vh] overflow-y-scroll container-snap pr-2 gap-3 space-y-2  flex-1 " id="todo-list">
				<div class="space-y-3">
					<div v-for="todo in todos_asc" class=" px-3 py-1.5 flex gap-4  items-center bg-very_light " :class="`todo-item ${todo.done && 'done'}`">
						<label>
							<input type="checkbox" class=" rounded-full ml-1" v-model="todo.done" @click="data===true"/>
						</label>
	
						<div class=" ">
							
							<textarea class="hover:h-max" :class="` flex-wrap overflow-hidden mr-8 h-5 hover:resize max-h-full bg-very_light w-full items-center ${todo.done && 'line-through'}`" v-model="todo.content" />
						</div>
	
						<div class="flex items-center">
							<button class="delete" @click="removeTodo(todo)"><Icon name="material-symbols:delete-rounded" class="text-red-700"/></button>
							
						</div>
					</div>
				</div>

			</div>
		</section>

	</main>
</template>


<style>

.custom-textarea {
  resize: none; /* Disable default resizable grip */
}

.custom-textarea::after {
 
  transform: rotate(45deg);
 /* Ensure the grip doesn't interfere with textarea interaction */
}


 .container-snap::-webkit-scrollbar {
  display: none;
}


 .container-snap {
  -ms-overflow-style: none; /* IE and Edge*/ 
  scrollbar-width: none; /* Firefox */
} 

.line-through {
  text-decoration: line-through;
}

</style>
