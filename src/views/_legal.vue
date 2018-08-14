<template>
  <div class="legal" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      
      :comment="`(c) ${year}  Yogeshwar`"
    >
      <Collapsed/>
    </Comment>
    <CommentBlock
      
      :comment="`(c) ${year}\n\nYogeshwar \nsoulputs@gmail.com`"
    />
  </div>
</template>

<script lang="ts">
  import { track } from "../util";

  import Comment from "./_comment.vue";
  import CommentBlock from "./_comment_block.vue";
  import Collapsed from "./_collapsed.vue";

  const openOnStart = window.location.hash === "#legal";

  export default {
    data() {
      return {
        collapsed: false
      };
    },
    mounted() {
      if (openOnStart) {
        setTimeout(() => {
          window.scrollTo({ top: this.$el.offsetTop });
        }, 1750);
      }
    },
    methods: {
      toggle() {
        //this.collapsed = !this.collapsed;
        track((this.collapsed ? "Close" : "Open") + "Legal", "none");
      }
    },
    computed: {
      year() {
        return new Date().getFullYear();
      }
    },
    components: {
      Comment,
      CommentBlock,
      Collapsed
    }
  };
</script>
