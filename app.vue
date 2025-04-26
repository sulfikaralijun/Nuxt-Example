<template>
  <div>
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-xl font-bold">My Nuxt App</h1>
        <nav>
          <ul class="flex space-x-4">
            <li><NuxtLink to="/" class="hover:text-blue-300">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:text-blue-300">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-300">Contact</NuxtLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 text-white p-4 mt-8">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 My Nuxt App. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>