<script setup>
import { ref, onMounted, computed, watch } from 'vue'

const todos = ref([])
//const name = ref('')

const input_content = ref('')
//const input_category = ref(null)

const todos_asc = computed(() => todos.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

/*watch(name, (newVal) => {
	localStorage.setItem('name', newVal)
})*/

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
		//category: input_category.value,
		//done: false,
		//editable: false,
		//createdAt: new Date().getTime()
	})
}

const removeTodo = (todo) => {
	todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
	//name.value = localStorage.getItem('name') || ''
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

let data= false;

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

onMounted(async () => {
	todos.value = JSON.parse(localStorage.getItem('todos')) || []
	
  // Load external SMTP.js script
  try {
    await loadScript('https://smtpjs.com/v3/smtp.js');
    console.log('SMTP.js script loaded successfully');
  } catch (error) {
    console.error('Error loading SMTP.js script:', error);
  }
});
  


const sendEmail = async () => {
  try {
    const emailResponse = await Email.send({
      Host: "smtp.elasticemail.com",
      Username: "mailtoarunabha1234.e@gmail.com",
      Password: "ps1628drp",
      To: 'arunabha.com@outlook.com',
      From: "mailtoarunabha1234.e@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body"
    });

    alert(emailResponse); // Display the email response in an alert

    // You can also handle the response further as needed
    console.log('Email sent:', emailResponse);
  } catch (error) {
    // Handle errors
    console.error('Error sending email:', error);
  }
};

</script>

<template>
	<main class="font-Montserrat p-6  rounded-lg ">
		
		<div class="">
			<section class=" ">
				<h1 class="font-bold text-3xl">TODO-LIST</h1>
				<p class="w-1/3 text-sm mb-3 mt-2">"Streamline your tasks effortlessly with our user-friendly Todos feature. Easily add, edit, and complete tasks, making organization a breeze. Simplify your life and boost productivity today!"</p>
				<div class="w-full mt-10 h-[1px] bg-black"></div>
				<div class="flex gap-3">
					<div class="w-1/3">
						<h2 class="mt-3 text-center font-semibold w-1/3">Todo</h2>
						<form id="new-todo-form" @submit.prevent="addTodo" class="mt-3 space-x-3 flex-col">
							<input type="submit" value="+" class="bg-Dark text-Whitish rounded-lg cursor-pointer w-fit px-2"/>
							<input type="text" name="content" id="content" placeholder="Enter Todo" class="px-3 py-1.5 text-Dark w-1/2 rounded bg-very_light" v-model="input_content" />
						</form>
					</div>
					<div class="w-1/3">
						<h2 class="mt-3 text-center font-semibold w-1/3">Done</h2>
						<div v-for="todo in todos_asc" class="mt-2 px-3 py-1.5 flex gap-4 w-fit rounded-lg items-center bg-very_light " :class="`todo-item ${todo.done && 'done'}`">
						<label>
							<input type="checkbox" class=" rounded-full ml-1" v-model="todo.done" @click="data===true"/>
						</label>
	
						<div class=" ">
							
							<textarea class="hover:h-max" :class="` flex-wrap overflow-hidden mr-8 h-5 hover:resize max-h-full bg-very_light w-full items-center ${todo.done && 'line-through'}`" v-model="todo.content" />
							<input type="button" value="sendMail" class="cursor-pointer" @click="sendEmail"/>
						</div>
	
						<div class="flex items-center">
							<button class="delete" @click="removeTodo(todo)"><Icon name="material-symbols:delete-rounded" class="text-red-700"/></button>
							
						</div>
					</div>
					</div>
					<div class="w-1/3 ">
						<h2 class="mt-3 mb-3 text-center font-semibold w-1/3">Reminder</h2>
						<button @click="sendEmail" class="mt-2 px-10 py-1.5 flex gap-4 w-fit rounded-lg items-center bg-very_light cursor-pointer hover:bg-Dark hover:text-very_light">SEND MAIL</button>
					</div>

				</div>
			</section>
		</div>

		
		<section class=" mt-2">
			
			<div class=" max-h-[50vh] mt-3 overflow-y-scroll container-snap pr-2 gap-3 space-y-2  flex-1 " id="todo-list">
				<div class="space-y-3">
					
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
