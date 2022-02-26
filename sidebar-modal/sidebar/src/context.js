import React, {useContext} from "react"

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [isSideBarOpen , setIsSideBarOpen]=React.useState(false);
    const [isModalOpen , setIsModalOpen]=React.useState(false);
    function openSideBar(){
        setIsSideBarOpen(true);
    }
    function closeSideBar(){
        setIsSideBarOpen(false);
    }
    function openModal(){
        setIsModalOpen(true);
    }
    function closeModal(){
        setIsModalOpen(false);
    }
    return(
        <AppProvider value={{
            isModalOpen,
            isSideBarOpen,
            openModal,
            openSideBar,
            closeModal,
            closeSideBar
        }
        }>{children}</AppProvider>
    )
}
//custom hooks
export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider}