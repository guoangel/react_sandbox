import React from 'react'
import useFetch from '../hooks/useFetch'

function CusteomHookTest() {
    const { data, loading } = useFetch(
        'https://api.github.com/search/users?q=brad',
        {}
      )
    
      if (loading) {
        return <h3>Loading...</h3>
      }
    
      return (
        <div>
          {data.items.map((post) => (
            <h3 key={post.id}>{post.login}</h3>
          ))}
        </div>
      )
}

export default CusteomHookTest
