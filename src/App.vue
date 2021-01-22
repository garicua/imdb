<template>
  <v-app class="theme--dark">
    <AppBar>
      <v-autocomplete
          v-model="autocomplete"
          :items="itemList"
          dense
          filled
          hide-details
          @input.native="handleChange"
          hide-no-data
          clearable
          :label="$t('gallery.searchPlaceholder')"
      />
    </AppBar>
    <v-main class="mt-16">
      <Card :all-films="allFilms"/>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Card from './components/Card'
import AppBar from './components/AppBar'
import _ from 'lodash'

export default {
  name: "App",
  data() {
    return {
      searchValue: '',
      autocomplete: '',
    }
  },
  components: {
    Card,
    AppBar,
  },
  computed: {
    ...mapGetters(['allFilms']),
    itemList(){
      if (this.allFilms) {
        return this.allFilms.map(item => item.Title);
      }
      return [];
    }
  },
  methods: {
    ...mapActions(['fetchFilms']),
    init() {
      if ( this.searchValue && this.searchValue.length > 2) {
        this.fetchFilms(`${this.searchValue}`);
      }
    },
    handleChange(e) {
      if (e) {
        this.searchValue = e.target.value;
      }
    },
  },
  watch: {
    searchValue() {
      this.debouncedGetFilms();
    },
    autocomplete() {
      if (this.autocomplete) {
        this.searchValue = this.autocomplete
      }
    }
  },
  created() {
    this.debouncedGetFilms = _.debounce(this.init, 500);
  },
}
</script>

