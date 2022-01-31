import { useForm } from "react-hook-form"

const translateConfig = {
    required: true,
    minLength: 3,
    maxLength: 40
}

const TranslateForm = ({onFinish}) => {

    const { register, handleSubmit, formState: {errors}} = useForm()

    const onSubmit = ({translateText}) => {
        onFinish(translateText)
    }

    const errorMessage = (() => {
        if(!errors.translateText){
            return null
        }
        if(errors.translateText.type === 'required'){
            return <span>A sentence is required</span>
        }
        if(errors.translateText.type === 'minLength'){
            return <span>The sentence is to short (min. 3)</span>
        }
        if(errors.translateText.type === 'maxLength'){
            return <span>The sentence has a max on 40 characters</span>
        }
      })()

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <fieldset>
                <label htmlFor="translateText">Translate text</label>
                <input
                type="text"
                placeholder="Hello World"
                { ...register('translateText', translateConfig) }
                />
                { errorMessage }
            </fieldset>
            <button type="submit">Translate</button>
        </form>
    )
}
export default TranslateForm