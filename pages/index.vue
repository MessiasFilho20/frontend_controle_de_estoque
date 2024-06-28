<template>
  <div class="w-full h-full flex justify-center">
    <div class="flex w-full justify-center items-center mt-1 ">
        <div class="w-full h-20">
          <Carousel
        class="relative  max-w-sm border h-full "
        :opts="{
          align: 'start',
        }"
      >
        <CarouselContent class=" flex  items-center">
          <CarouselItem v-for="(_, index) in 20" :key="index" class=" max-sm:basis-1/4 md:basis-1/2 lg:basis-1/3">
            <div class="">
              <Card class="">
                <CardContent class="flex  border items-center">
                  <span class=" font-semibold ">{{ index  +1 + ""}}</span>
               
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
     
          
          <CarouselPrevious class="" />
          <CarouselNext />

      

        
      </Carousel>

        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>