<template>
  <div class="privacy" @click.stop="toggle" :class="{ collapsed: collapsed }">
    <Comment
      
      comment="Privacy"
    >
      <Collapsed/>
    </Comment>
    <CommentBlock
     
    />
  </div>
</template>

<script lang="ts">
  import { track } from '../util';

  import Comment from './_comment.vue';
  import CommentBlock from './_comment_block.vue';
  import Collapsed from './_collapsed.vue';

  const openOnStart = window.location.hash === "#legal";

  export default {
    data() {
      return {
        collapsed: false,
        privacy: `
This website uses Google Analytics and cookies to record user activities.
        `,
      };
    },
    methods: {
      toggle() {
      //  this.collapsed = !this.collapsed;
        track((this.collapsed ? 'Close' : 'Open') + 'Legal', 'none');
      },
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
    components: {
      Comment,
      CommentBlock,
      Collapsed,
    },
  };
</script>
