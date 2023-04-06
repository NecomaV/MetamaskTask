import { count } from 'console';
import {ChangeEvent, FC,useState} from 'react';

interface Props {
    name: string;
    age: number;
    email: string;
}

export const Person: FC<Props> = ({name, age, email}) => {

    const [country, setCountry] = useState<string>('') 

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }

  return (
    
    <div>
      <h1> {name} </h1>
      <h1> {age} </h1>
      <h1> {email} </h1>

      <input placeholder='Input your country' onChange={handleChange} />

      {country}

    </div>
  );
}
