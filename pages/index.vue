<template>
  <div class="w-full h-full flex justify-center">
    <div class="flex w-full justify-center items-center mt-1 ">
        <div class="w-full h-20">
          <Carousel
        class="relative  max-w-sm border"
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class="h-10 flex justify-center items-center">
          <CarouselItem v-for="(_, index) in 20" :key="index" class=" max-sm:basis-1/4 md:basis-1/2 lg:basis-1/3">
            <div class="">
              <Card class="">
                <CardContent class="flex justify-center border items-center">
                  <span class=" font-semibold ">{{ index  +1 + "asdadsasdas"}}</span>
               
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
       
      </Carousel>

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>