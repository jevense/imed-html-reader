import Section from './App.vue';

export default Section;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('imed-section', Section);
}
