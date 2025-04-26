<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <p class="mb-6">Feel free to reach out to us using the form below:</p>
    <form class="max-w-md">
      <div class="mb-4">
        <label for="name" class="block mb-2">Name</label>
        <input type="text" id="name" class="w-full p-2 border rounded"/>
      </div>
      <div class="mb-4">
        <label for="email" class="block mb-2">Email</label>
        <input type="email" id="email" class="w-full p-2 border rounded"/>
      </div>
      <div class="mb-4">
        <label for="message" class="block mb-2">Message</label>
        <textarea id="message" rows="4" class="w-full p-2 border rounded"></textarea>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
    </form>
  </div>
</template>