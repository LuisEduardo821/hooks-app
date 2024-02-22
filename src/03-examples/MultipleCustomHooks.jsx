import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";



export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, hasError, isLoading } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const { quote, author } = !!data && data[0];
    return (
        <>
            <h2>Breaking Bad Quotes</h2>
            <hr />

            {
                isLoading
                    ? <LoadingQuote />
                    : <Quote author={author} quote={quote} />
            }
            <button className='btn btn-primary'
                onClick={() => increment()}>
                Next Qoute
            </button>


        </>
    )
}
