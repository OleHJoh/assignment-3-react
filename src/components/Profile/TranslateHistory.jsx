import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const TranslationHistory = ({ translations }) => {

    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={translation}/>
        )

    return (
        <section>
            <h4>Your translation history</h4>

            { translationList.length === 0 && <p>You don't have any registered translations.</p>}

            <ul>
                {translationList}
            </ul>
        </section>
    )
}
export default TranslationHistory