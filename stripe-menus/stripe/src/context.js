import React, { useContext } from "react"
import sublinks from './data'

export const AppContext=React.createContext();

export default function AppProvider({children}){
    const [isSideBarOpen , setIsSideBarOpen]=React.useState(false)
    const [isModalOpen , setIsModalOpen]=React.useState(false)
    const [page,setPage]=React.useState({page:'' , links:[]})
    const [location , setLocation]=React.useState({})
    function openSideBar(){
        setIsSideBarOpen(true)
    }
    function closeSideBar(){
        setIsSideBarOpen(false)
    }
    function openModal(text,coordinates){
        const page=sublinks.find((link) => link.page===text)
        setPage(page)
        setLocation(coordinates)
        setIsModalOpen(true)
    }
    function closeModal(){
        setIsModalOpen(false)

    }
    return (
        <AppContext.Provider value={{
            openSideBar,
            closeSideBar,
            closeModal,
            openModal,
            isModalOpen,
            isSideBarOpen,
            page,
            location

        }}>
            {children}
            </AppContext.Provider>
    )
}
export const useGlobalContext=()=>{
    return useContext(AppContext);
}