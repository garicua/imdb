import filmsAPI from './../films.json'
import { API_URL, API_KEY } from "../../constants";

export default {
    actions: {
        async fetchFilms(ctx, filmName){
            const res = await fetch(
                `${API_URL}/?s=${filmName}&type=movie&r=json&apikey=${API_KEY}`)
            const films = await res.json();
            ctx.commit('updateFilms', films.Search)
        }
    },
    mutations: {
        updateFilms(state, films) {
          state.films = films
        },
    },
    state: {
        films: filmsAPI,
    },
    getters: {
        allFilms(state){
            return state.films
        }
    }
}
