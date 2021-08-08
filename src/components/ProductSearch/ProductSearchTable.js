import NavbarSearch from "../NavbarSearch"
import NavbarMenu from "../NavbarMenu"
import ShopList from "../ShopList"
import { useState } from "react"


export default function ProductSearchTable() {
    const [searchText, setSearchText] = useState('')

    return (
        <>
            <NavbarSearch searchText={searchText} onSearchTextChange={text => setSearchText(text)} />
            <NavbarMenu />
            <ShopList searchText={searchText} />
        </>
    )
}