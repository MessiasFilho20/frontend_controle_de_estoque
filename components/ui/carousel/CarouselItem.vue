<script setup lang="ts">
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'
import { cn } from '@/lib/utils'

const props = defineProps<WithClassAsProps>()

const { orientation } = useCarousel()
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn(
      'w-full shrink-0 grow-0 basis-full',
      orientation === 'horizontal' ? 'pl-2' : 'pt-4',
      props.class,
    )"
  >
    <slot />
  </div>
</template>
