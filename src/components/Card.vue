<template>
  <v-container class="theme--light container--height">
    <v-row>
      <template v-if="allFilms">
        <v-col v-for="(film, index) in allFilms" :key="index"
               xl="2" lg="3" md="4" sm="6" cols="12"
        >
          <v-card :href="`${BASE_URL}/title/${film.imdbID}`" class="card">
            <img :src="film.Poster"
                 :alt="film.Title"
                 class="card__img"
                 @error="$event.target.src=logo"
            >
            <v-card-title class="card__title">{{ film.Title }}</v-card-title>
            <v-card-text class="card-text">
              <v-rating
                  :value="Math.random() * 2 + 3"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
              />
              <div>
                {{ $t('gallery.year') }}
                {{ film.Year }}
              </div>
              <div>
                {{ $t('gallery.imdbId') }}
                {{ film.imdbID }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
      <v-col v-else class="error text-md-center">{{ $t('gallery.noMovieFound') }}</v-col>
    </v-row>
  </v-container>

</template>

<script>
import {BASE_URL} from "../constants";
import logo from './../assets/logo.svg';

export default {
  name: "Card",
  data() {
    return {
      BASE_URL,
      logo,
    }
  },
  props: {
    allFilms: [Array]
  },
}
</script>

<style scoped>
.theme--light {
  background: #fff;
}

.container--height {
  min-height: 100vh;
}

.card__img {
  width: 100%;
  max-height: 370px;
}

.card {
  min-height: 550px;
}
.card__title {
  word-break: normal;
}

.card-text {
  position: absolute;
  bottom: 0;
}
</style>
