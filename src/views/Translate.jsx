import { useEffect, useState } from "react"
import TranslateDisplay from "../components/Translate/TranslateDisplay"
import TranslateForm from "../components/Translate/TranslateForm"
import withAuth from "../hoc/withAuth"

const Translate = () => {

    const [ sentence , setSentence] = useState(null)
    const [ letterArray, setLetterArray] = useState([])

    const handleTranslate = (sentenceToTranslate) => {
        const specialRemoval = sentenceToTranslate.replace(/[^a-zA-Z0-9 ]/g, '')
        const spaceRemoval = specialRemoval.replaceAll(' ', '')
        setSentence(spaceRemoval)
        sentenceSplit(spaceRemoval)
    }

    const sentenceSplit = (data) => {
        setLetterArray(data.split(""))
    }

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
            <section>
                { sentence && signTranslate }
            </section>
        </>
    )
}
export default withAuth(Translate)