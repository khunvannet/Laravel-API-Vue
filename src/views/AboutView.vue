<template>
  <div class="about">
    <div class="flex items-center justify-center mt-10">
      <h1 class="text-3xl font-bold text-gray-500">About<span class="text-green-500">Us</span></h1>
    </div>

    <div class="mt-10 flex flex-wrap justify-center">
      <!-- Use v-for to iterate over each person in the array -->
      <div class="w-full sm:w-1/3 p-4" v-for="person in persons" :key="person.id">
        <div class="bg-gray-300 rounded-lg shadow-md p-6 flex flex-col items-center">
          <!-- Display the person's image with smaller size -->
          <img :src="person.image" :alt="person.name + ' Image'" class="w-20 h-20 mb-4 rounded-lg mx-auto">
          <!-- Display the person's name -->
          <h2 class="text-xl font-semibold mb-4">{{ person.name }}</h2>
          <!-- Display the person's description -->
          <p>{{ person.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  components: {},
  data() {
    return {
      persons: [
        {
          id: '1',
          name: "Khun Vannet",
          image: require("../assets/logo.png"), // Use require to import image from assets
          description: "Web Developer - I learned at Setec!"
        },
        {
          id: '2',
          name: "Meng Soklay",
          image: require("../assets/logo.png"),
          description: "Web Developer - I learned at Setec!"
        },
        {
          id: '3',
          name: "Rithy Devit",
          image: require("../assets/logo.png"),
          description: "Full Stack Developer - I learned at Setec!"
        }
      ]
    };
  },
  methods: {},
};
</script>

<style></style>
