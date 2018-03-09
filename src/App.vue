<template>
  <div :is="section['template']" :section="section"></div>
</template>

<script>

  import BookCover from './component/BookContext/Cover'
  import BookFlyleaf from './component/BookContext/Flyleaf'
  import BookImprint from './component/BookContext/Imprint'
  import BookEditors from './component/BookContext/Editors'
  import BookConsultant from './component/BookContext/Consultant'
  import BookWriting from './component/BookContext/Writing'
  import BookCollege from './component/BookContext/College'
  import BookPreface from './component/BookContext/Preface'
  import BookMainPoint from './component/BookContext/MainPoint'
  import BookSection from './component/BookContext/Section'
  import BookLearning from './component/BookContext/Learning'
  import BookMagazine from './component/BookMagazine'

  export default {
    name: 'book-section',
    props: ['section'],
    components: {
      'imed-cover': BookCover,
      'imed-flyleaf': BookFlyleaf,
      'imed-editors': BookEditors,
      'imed-consultant': BookConsultant,
      'imed-writting': BookWriting,
      'imed-college': BookCollege,
      'imed-preface': BookPreface,
      'imed-foreword': BookPreface,
      'imed-main-point': BookMainPoint,
      'imed-index': BookSection,
      'vue-pull-refresh': VuePullRefresh,
      'imed-learning': BookLearning,
      'imed-magazine': BookMagazine,
      'imed-imprint': BookImprint
    }
  }
  // todo imed-writting 服务端拼写错误
</script>
