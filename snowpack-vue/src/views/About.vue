<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator"

@Options({
  name: "Home"
})
export default class Home extends Vue {
  @Prop(String) readonly title: string | undefined
}
</script>

<template>
  <div :class="title">
    <h1>{{ title[0].toUpperCase() + title.slice(1, title.length) }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. In iaculis nunc sed
      augue lacus. Sit amet est placerat in egestas erat imperdiet sed. Et
      pharetra pharetra massa massa ultricies mi. Nibh sed pulvinar proin
      gravida. Ornare massa eget egestas purus viverra accumsan in. Euismod nisi
      porta lorem mollis aliquam ut porttitor leo. Augue lacus viverra vitae
      congue eu consequat. Habitant morbi tristique senectus et netus et.
      Euismod in pellentesque massa placerat duis ultricies lacus sed. Auctor
      neque vitae tempus quam. Elementum facilisis leo vel fringilla est
      ullamcorper eget.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin: 5rem 2rem;
}
</style>
