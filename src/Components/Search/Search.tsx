import React, {ChangeEvent, MouseEventHandler, useState} from 'react'

export const Search = (props:any) => {

    const [searchValue,setSearchValue] = useState('')

    const callSearchFunction = (e: any) => {
        e.preventDefault()
        props.search(searchValue)
        setSearchValue('')
    }

    const handleSearchInputChanges = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <form className='search'>
            <input type="text"
                   value={searchValue}
                   onChange={handleSearchInputChanges}
            />
            <input onClick={callSearchFunction} type="submit" value='SEARCH'/>
        </form>
    )
}