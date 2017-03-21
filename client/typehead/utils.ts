import {usersData} from '../data/users'
import {COUNT_SHOW_USERS} from '../constants/core'

const matchedUsers = (username: string) =>   {
    return username.length != 0  ?  usersData.filter(user=>{ 
            return user.username.toLowerCase().includes(username.toLowerCase())        
        }).slice(0, COUNT_SHOW_USERS) : []
}
export {matchedUsers}
     