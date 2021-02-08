import axios from '../../Axios/Axios'
import * as types from './constants'
import { Dispatch } from "redux";

const key = 'OdWyHZ3RqxydM1wJUqJuVJ4PC5b7MWCqFzOqRind'
export const SearchAstroid = (id: string) => (dispatch: Dispatch) => {
  axios.get(`${id}?api_key=${key}`)
  .then (res => {
    console.log(res.data)
    dispatch({type: types.SET_ASTROID, payload: res.data })
  })
  .catch(err => {
    alert('Something Went Wrong')
  })
}

export const StartRandomSearch = () => (dispatch: Dispatch) => {
  axios.get(`browse?api_key=${key}`)
  .then(res => {
    const randomAstroidId = res.data.near_earth_objects[Math.floor(Math.random() * res.data.near_earth_objects.length)].id
    axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${randomAstroidId}?api_key=${key}`)
    .then(res => {
      dispatch({type: types.SET_ASTROID, payload: res.data})
    })
  })
  .catch(err => {
    console.log(err)
  })
}