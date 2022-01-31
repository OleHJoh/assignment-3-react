//Import component needed for this component
import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const TranslationHistory = ({ translations }) => {

    //Uses map to render out translationList's items, and send them to render
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={translation}/>
        )

    //Returns the component to be rendered in the view
    return (
        <section>
            <h4>Your translation history</h4>

            { translationList.length === 0 && <p>You don't have any registered translations.</p>}

            <ul id="translationHistory">
                {translationList}
            </ul>
        </section>
    )
}
export default TranslationHistory