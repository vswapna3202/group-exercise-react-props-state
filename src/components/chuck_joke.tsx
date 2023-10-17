interface ChuckJokeProps {
    id : number;
    joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id, joke}) => ( 
    <p>        
        {/*Id:{id} <br />*/}
        {joke}            
    </p>
);


export default ChuckJoke;
