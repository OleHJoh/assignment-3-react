//Imports components needed for this component to work
import { useState } from "react"
import { addTranslation } from "../api/translate"
import TranslateDisplay from "../components/Translate/TranslateDisplay"
import TranslateForm from "../components/Translate/TranslateForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const Translate = () => {

    //Initiate objects from components and context
    const [ sentence , setSentence ] = useState(null)
    const [ letterArray, setLetterArray ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState(null)
    const { user, setUser } = useUser()

    //Handle translate function activated when this page gets data from child
    //It filter out special characters, and spaces to send the sentence off to be rendered as sign letters
    const handleTranslate = async (sentenceToTranslate) => {
        const specialRemoval = sentenceToTranslate.replace(/[^a-zA-Z ]/g, '')
        const spaceRemoval = specialRemoval.replaceAll(' ', '')
        setSentence(spaceRemoval)
        setLetterArray(spaceRemoval.split(""))

        const [ error, updatedUser] = await addTranslation(user, specialRemoval)

        if(error !== null){
            setErrorMessage(error)
            return
        }
        
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    //Uses map to send a single letter to be rendered in the view from letterArray
    let signTranslate = letterArray.map((letter, index) => {
        return <TranslateDisplay key={ index + '-' + letter } letter={ letter } />
    })

    return (
        <>
            <h1>Translate</h1>
            <section id="translate-from">
                <TranslateForm onFinish={handleTranslate} />
                { sentence && <p>Sentence to translate { sentence } </p>}
            </section>
            <section id="translate-display">
                { sentence && signTranslate }
            </section>
            { errorMessage && <span>{ errorMessage }</span>}
        </>
    )
}
export default withAuth(Translate)