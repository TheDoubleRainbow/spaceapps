<template>
  <div class="container">
    <nearest />
    <upcoming />
  </div>
</template>

<script>
import upcoming from '@/components/upcoming'
import nearest from '@/components/nearest'

export default {
  name: 'home',
  components: {
    nearest,
    upcoming
  }
}
</script>
