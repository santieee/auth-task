import authResponse from '@/response/users.json'
import _ from 'lodash'
import {router} from '@/router/router.js'

const actions = {
    authRequest: ({commit, dispatch}, data) => {       
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                let person = _.find(authResponse, person => person.login == data.login)
                if (person) {
                    if(person.password == data.password){
                        dispatch('setProfile', person)  
                        commit('setAlert', {time:3, message:'Hello!'})    
                        router.push({name: 'profile'})
                        resolve()
                    }else{
                        reject('Password incorrect!')
                    }
                }else{
                    reject('User not found :(')
                }             
            }, Math.random()*3500)
        })
    },
    logoutRequest: ({commit, dispatch}) => {   
        return new Promise((resolve) => {
            setTimeout(()=>{
                dispatch('unsetProfile')
                commit('setAlert', {time:3, message:'Goodbye!'})     
                router.push({name: 'auth'})     
                resolve()
            }, Math.random()*500)
        })
    }
}

const mutations = {
 
}

export default {
    actions,
    mutations,
}