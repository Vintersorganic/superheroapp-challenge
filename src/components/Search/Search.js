import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Form, FormControl, Button} from 'react-bootstrap'

const Search = ( { handleSearch }) => {
    const [search, setSearch] = useState('')
    const history = useHistory()
    
    const searchSuperHeroes = (e) => {
        e.preventDefault()
        handleSearch(search)
        history.push('/heroes')
    }

    return (
        <Form  className="d-flex" onSubmit={searchSuperHeroes}> 
           <FormControl 
                placeholder="Buscar"
                className="mr-2" 
                aria-label="search"
                onChange={ ({ target }) => setSearch(target.value)}
            />
            <Button type="submit" variant='outline-light'>Buscar</Button>
        </Form>
    )
}

export default Search
