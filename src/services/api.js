import axios from 'axios';

function getUser(username) {
   return axios.get(`https://api.github.com/users/${username}`)
    .then(({ data }) => {
       return data
    });
}

function getPopulars(lang) {
    return axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`)
    .then(({data})=>{
        return data.items.map(item => {
            return {
                name:item.name,
                url: item.html_url,
                avatar: item.owner.avatar_url,
                stars: item.stargazers_count
            }
        })
    });
}

export default {
    getUser,getPopulars
}