<template>
    <!-- THIS IS THE MAIN BODY -->
    <div class="h-full ">

        <!-- THSI IS THE NAVBAR -->
        <uppernav/>

        <!-- THIS IS THE BODY PART -->
        <div class="w-full h-fit">

            <!-- HEADING -->

            <div class="p-3 space-y-3">
                <h1 class="text-center text-7xl mt-3 font-Playfair">Efficiency Elevated</h1>
                <p class="text-center p-5 text-lg font-Nanum">Unleash creativity, enhance productivity. Elevate tasks, notes, and diaries seamlessly. Discover the fusion of organization and inspiration, transforming ordinary routines into extraordinary achievements. Welcome to a new realm of efficiency</p>
                <div class=" flex justify-center mb-12 ">
                    <NuxtLink to="/main" class="hover:bg-dark_main_color border rounded-lg px-6 text-2xl bg-main_heading_background text-dark_main_color hover:text-white py-1.5">GET STARTED</NuxtLink>
                    <slot/>
                </div>
                
            </div>

            <!-- CARD PART -->
            <div class="p-3">
                <div class="flex space-x-24 bg-dark_sub_background mt-8 sm:max-md:space-x-12">
                    <div class="py-7 px-4 w-1/3 space-y-12 min-[320px]:max-md:w-fit ">
                        <h1 class="text-left  text-dark_main_color text-8xl font-Berkshire w-full ">Crafting Success</h1>
                        <p class="text-left text-lg font-Nanum">Embark on an enchanting journey with NoteDrive. Effortlessly take notes, manage dynamic to-do lists, and craft personalized diaries. Fueling your organized creativity, powered by ChatGPT, it's the magic touch you need.</p>
                    </div>
                    <div class=" w-3/4 py-6 flex space-x-16 overflow-x-scroll container-snap" >
                        <smol_card v-for="feature in featureCards" :heading="feature.heading" :para="feature.body"/>
                    </div>
                </div>
            </div>

            <!-- VIDEO 1 -->
            <div class="w-full p-72 h-full bg-sub_background hover:animate-pulse text-center text-3xl text-white">
                    PLASE IMAGINE A VIDEO OR GIF HERE THIS WILL BE ADDED ONCE THE ACTUAL SITE IS DONE
                </div>

            <!-- IN TEXT -->
            <div class="w-full h-fit bg-dark_sub_background">
                <p class="text-center text-dark_main_color text-xl p-11 font-Berkshire w-full">Embrace the future of organization and creativity – join us on this exciting journey of enhanced productivity and inspiration!</p>
            </div>
                
            <!-- VIDEO 2 -->
            <div class="p-3">
                <div class="w-full p-36 h-full  text-center text-3xl hover:animate-pulse text-white">
                    PLASE IMAGINE A GIF HERE THIS WILL BE ADDED ONCE THE ACTUAL SITE IS DONE
                </div>
            </div>
            


        </div>

        <!-- FOOTER -->
        <foot/>

    </div>

</template>

<script lang="ts" setup>

import card_details from '/components/cards/card_details.vue'
import smol_card from '/components/cards/smol_card.vue'
import uppernav from '/components/navbar/uppernav.vue'
import foot from '/components/footer/foot.vue'


// Import the package
const featureCards: {
    heading: string,
    body: string,
}[] = [
        {
            heading: 'Unleash Your Creativity',
            body: `Jot down your thoughts effortlessly with our intuitive note-taking feature. From important ideas to random sparks of genius, our platform ensures your ideas are captured and organized flawlessly. Whether it's a project outline or a midnight brainwave, your notes are safe and accessible whenever inspiration strikes`,
             },
        {
            heading: 'Your Productivity Companion',
            body: `Stay on top of your tasks like never before. Our dynamic todo list empowers you to set goals, prioritize tasks, and conquer your to-dos with ease. From big projects to daily chores, our platform adapts to your rhythm. Say goodbye to forgotten tasks and hello to a more organized, accomplished you`,
            
        },
        {
            heading: 'Never Miss a Beat',
            body: `Imagine having a reliable assistant who remembers everything for you. Our website delivers timely email reminders, ensuring you're always where you need to be. Birthdays, meetings, deadlines – just set it and forget it. Stay on track effortlessly as we nudge you towards success, one reminder at a time.`,
                },
        {
            heading: 'Talk, Explore, Create',
            body: `Dive into engaging discussions with our integrated ChatGPT API. From brainstorming ideas to discussing your favorite topics, have a virtual conversation that sparks creativity. Uncover new perspectives, refine your thoughts, and fuel your imagination – all with the power of AI-driven dialogue.`,
                   },
        {
            heading: 'Seamless Weather, Perfect Timing',
            body: `Plan your day with precision using real-time weather and time updates. Our Weather API keeps you prepared for any forecast, while our Time API ensures you're never late for a moment. From outdoor adventures to indoor endeavors, optimize every second with the confidence of knowing what lies ahead.`,
            
        }
    ]

</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
/* .container-snap::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
/* .container-snap {
  -ms-overflow-style: none; /* IE and Edge 
  scrollbar-width: none; /* Firefox 
} 
*/

</style>



<script setup  >
</script>