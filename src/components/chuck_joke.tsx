interface ChuckJokeProps {
    id : number;
    joke: string;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({id, joke}) => ( 
    <p>
        <ul>
        {/*Id:{id} <br />*/}
            <li>{joke}</li>
        </ul>    
    </p>
);


export default ChuckJoke;
