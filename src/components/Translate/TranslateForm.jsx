//import component used to make this component work
import { useForm } from "react-hook-form"

//Configuration for whats allowed to be the valid input
const translateConfig = {
    required: true,
    minLength: 3,
    maxLength: 40
}

const TranslateForm = ({onFinish}) => {

    //Gets the functions from useForm component
    const { register, handleSubmit, formState: {errors}} = useForm()

    //onSubmitHandler activated by submitting the form
    const onSubmit = ({translateText}) => {
        onFinish(translateText)
    }

    //Error message listener
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

    //Returns the component to be rendered in the view
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